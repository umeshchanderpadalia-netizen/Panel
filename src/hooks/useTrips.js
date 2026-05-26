import {
  useEffect,
} from "react";

import useApp from "./useApp";

function useTrips() {

  const {

    trips,

    setTrips,

  } = useApp();

  useEffect(() => {

    const fetchTrips =
      async () => {

        try {

          const response =
            await fetch(
              "http://localhost:5000/api/bookings"
            );

          const data =
            await response.json();

          const formattedTrips =
            data.map(
              (
                trip
              ) => ({

                ...trip,

                id:
                  trip.id ||
                  trip._id ||
                  Date.now() +
                  Math.random(),

              })
            );

          setTrips(
            formattedTrips
          );

        } catch (
          error
        ) {

          console.log(
            "Failed loading trips",
            error
          );

        }

      };

    if (
      trips.length === 0
    ) {

      fetchTrips();

    }

  }, []);

  return {

    trips,

    setTrips,

    loading:false,

    error:null,

    retry:()=>{},

  };

}

export default useTrips;