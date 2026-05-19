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

  // Fetch Trips
  const fetchTrips =
    async () => {

      try {

        setLoading(true);

        setError("");

        const data =
          await getTrips();

        // Future Backend Validation
        const formattedTrips =
          data.map((trip) => ({

            id: trip.id,

            customer:
              trip.customer || "",

            phone:
              trip.phone || "",

            pickup:
              trip.pickup || "",

            drop:
              trip.drop || "",

            rideDate:
              trip.rideDate || "",

            bookingType:
              trip.bookingType ||
              "One Way",

            driver:
              trip.driver || "",

            vehicle:
              trip.vehicle || "",

            vendor:
              trip.vendor || "",

            fare:
              trip.fare || "",

            paymentStatus:
              trip.paymentStatus ||
              "Pending",

            status:
              trip.status ||
              "Pending",

            color:
              trip.color ||
              "text-yellow-400 bg-yellow-500/20",
          }));

        setTrips(
          formattedTrips
        );

      } catch {

        setError(
          "Unable to load booking operations."
        );

      } finally {

        // Smooth Loading Effect
        setTimeout(() => {

          setLoading(false);

        }, 400);
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
    retry:
      fetchTrips,
  };
}

export default useTrips;