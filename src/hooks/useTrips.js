import {
  useEffect,
} from "react";

import {
  getTrips,
} from "../api/tripApi";

import useAsync from "./useAsync";

function useTrips() {

  const {
    data,
    setData,
    loading,
    error,
    execute,
  } = useAsync(
    getTrips,
    false
  );

  // Fetch Trips
  const fetchTrips =
    async () => {

      const response =
        await execute();

      if (!response)
        return;

      const formattedTrips =
        response.map(
          (trip) => ({

            id:
              trip.id,

            customer:
              trip.customer ||
              "",

            phone:
              trip.phone || "",

            pickup:
              trip.pickup || "",

            drop:
              trip.drop || "",

            rideDate:
              trip.rideDate ||
              "",

            bookingType:
              trip.bookingType ||
              "One Way",

            driver:
              trip.driver ||
              "",

            vehicle:
              trip.vehicle ||
              "",

            vendor:
              trip.vendor ||
              "",

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
          })
        );

      setData(
        formattedTrips
      );
    };

  useEffect(() => {

    fetchTrips();

  }, []);

  return {

    trips:
      data || [],

    setTrips:
      setData,

    loading,

    error,

    retry:
      fetchTrips,
  };
}

export default useTrips;