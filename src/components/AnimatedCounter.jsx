import { useEffect, useState } from "react";

function AnimatedCounter({
  value,
  duration = 1200,
}) {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    let start = 0;

    const end = parseInt(
      value.toString().replace(
        /[^0-9]/g,
        ""
      )
    );

    if (isNaN(end)) return;

    const increment =
      end / (duration / 16);

    const timer =
      setInterval(() => {

        start += increment;

        if (start >= end) {

          setCount(end);

          clearInterval(timer);

        } else {

          setCount(
            Math.floor(start)
          );
        }

      }, 16);

    return () =>
      clearInterval(timer);

  }, [value, duration]);

  return (
    <span className="tracking-tight">

      {value.toString().includes("₹")
        ? `₹${count.toLocaleString()}`
        : count.toLocaleString()}

    </span>
  );
}

export default AnimatedCounter;