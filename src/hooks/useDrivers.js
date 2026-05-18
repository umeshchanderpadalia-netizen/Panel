import {
  useEffect,
  useState,
} from "react";

import {
  getDrivers,
} from "../api/driverApi";

function useDrivers() {

  const [drivers, setDrivers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchDrivers =
    async () => {

      try {

        setLoading(true);

        setError("");

        const data =
          await getDrivers();

        setDrivers(data);

      } catch {

        setError(
          "Unable to load driver activity."
        );

      } finally {

        // Smooth Loading Transition
        setTimeout(() => {

          setLoading(false);

        }, 400);
      }
    };

  useEffect(() => {

    fetchDrivers();

  }, []);

  return {
    drivers,
    setDrivers,
    loading,
    error,
    retry:
      fetchDrivers,
  };
}

export default useDrivers;