import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function AnimatedCounter({
  value,
  duration = 1600,
}) {

  const [count, setCount] =
    useState(0);

  const animationFrame =
    useRef(null);

  const numericValue =
    useMemo(() => {

      const cleanValue =
        value
          ?.toString()
          .replace(
            /[^0-9]/g,
            ""
          );

      return parseInt(
        cleanValue || 0,
        10
      );

    }, [value]);

  useEffect(() => {

    if (
      Number.isNaN(
        numericValue
      )
    ) {

      return;
    }

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
        const easedProgress =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        const currentValue =
          Math.floor(
            easedProgress *
              numericValue
          );

        setCount(
          currentValue
        );

        if (
          progress < 1
        ) {

          animationFrame.current =
            requestAnimationFrame(
              animate
            );

        } else {

          setCount(
            numericValue
          );
        }
      };

    animationFrame.current =
      requestAnimationFrame(
        animate
      );

    return () => {

      if (
        animationFrame.current
      ) {

        cancelAnimationFrame(
          animationFrame.current
        );
      }
    };

  }, [
    numericValue,
    duration,
  ]);

  const formattedValue =
    useMemo(() => {

      const formattedCount =
        count.toLocaleString(
          "en-IN"
        );

      if (
        value
          ?.toString()
          .includes("₹")
      ) {

        return `₹${formattedCount}`;
      }

      if (
        value
          ?.toString()
          .includes("%")
      ) {

        return `${formattedCount}%`;
      }

      if (
        value
          ?.toString()
          .includes("+")
      ) {

        return `+${formattedCount}`;
      }

      return formattedCount;

    }, [count, value]);

  return (

    <span className="tabular-nums tracking-tight">

      {formattedValue}

    </span>
  );
}

export default AnimatedCounter;