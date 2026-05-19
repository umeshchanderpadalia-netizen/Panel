import {
  useEffect,
  useState,
} from "react";

function AnimatedCounter({
  value,
  duration = 1600,
}) {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const cleanValue =
      value
        .toString()
        .replace(
          /[^0-9]/g,
          ""
        );

    const end =
      parseInt(cleanValue);

    if (isNaN(end)) return;

    const startTime =
      performance.now();

    const animate =
      (currentTime) => {

        const progress =
          Math.min(
            (
              currentTime -
              startTime
            ) / duration,
            1
          );

        // Ease Out Cubic
        const easeOut =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        const current =
          Math.floor(
            easeOut * end
          );

        setCount(current);

        if (
          progress < 1
        ) {

          requestAnimationFrame(
            animate
          );

        } else {

          setCount(end);
        }
      };

    requestAnimationFrame(
      animate
    );

  }, [value, duration]);

  // Format
  const formattedValue =
    value
      .toString()
      .includes("₹")
      ? `₹${count.toLocaleString()}`
      : count.toLocaleString();

  return (
    <span className="tracking-tight tabular-nums">

      {formattedValue}

    </span>
  );
}

export default AnimatedCounter;