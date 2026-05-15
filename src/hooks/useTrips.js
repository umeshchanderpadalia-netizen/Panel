import {
  useEffect,
  useState,
} from "react";

import {
  getTrips,
} from "../api/tripApi";

function useTrips() {

  const [trips, setTrips] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchTrips =
    async () => {

      try {

        setLoading(true);

        setError("");

        const data =
          await getTrips();

        setTrips(data);

      } catch {

        setError(
          "Failed to load trips data."
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    fetchTrips();

  }, []);

  return {
    trips,
    setTrips,
    loading,
    error,
    retry: fetchTrips,
  };
}

export default useTrips;