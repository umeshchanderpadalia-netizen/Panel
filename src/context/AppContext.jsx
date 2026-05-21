import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AppContext,
} from "./context";

import {
  trips as tripsData,
  drivers as driversData,
} from "../data";

export function AppProvider({
  children,
}) {

  // Trips
  const [trips, setTrips] =
    useState(() => {

      const savedTrips =
        localStorage.getItem(
          "cab-trips"
        );

      return savedTrips
        ? JSON.parse(savedTrips)
        : tripsData;
    });

  // Drivers
  const [drivers, setDrivers] =
    useState(() => {

      const savedDrivers =
        localStorage.getItem(
          "cab-drivers"
        );

      return savedDrivers
        ? JSON.parse(savedDrivers)
        : driversData;
    });

  // Notifications
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  // Dashboard Stats
  const dashboardStats =
    useMemo(() => {

      const completedTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Completed"
        ).length;

      const ongoingTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Ongoing"
        ).length;

      const cancelledTrips =
        trips.filter(
          (trip) =>
            trip.tripStatus ===
            "Cancelled"
        ).length;

      const onlineDrivers =
        drivers.filter(
          (driver) =>
            driver.availability ===
            "Online"
        ).length;

      const totalRevenue =
        trips.reduce(
          (
            total,
            trip
          ) =>
            total +
            Number(
              trip.total || 0
            ),
          0
        );

      return {

        totalTrips:
          trips.length,

        completedTrips,

        ongoingTrips,

        cancelledTrips,

        onlineDrivers,

        totalRevenue,
      };

    }, [trips, drivers]);

  // Persist Trips
  useEffect(() => {

    localStorage.setItem(
      "cab-trips",
      JSON.stringify(trips)
    );

  }, [trips]);

  // Persist Drivers
  useEffect(() => {

    localStorage.setItem(
      "cab-drivers",
      JSON.stringify(drivers)
    );

  }, [drivers]);

  // Notifications
  const addNotification = (
    message,
    type = "success"
  ) => {

    const newNotification = {

      id: Date.now(),

      message,

      type,
    };

    setNotifications(
      (prev) => [
        newNotification,
        ...prev,
      ]
    );

    setTimeout(() => {

      setNotifications(
        (prev) =>
          prev.filter(
            (item) =>
              item.id !==
              newNotification.id
          )
      );

    }, 3500);
  };

  // Add Trip
  const addTrip = (
    newTrip
  ) => {

    const tripWithId = {

      ...newTrip,

      id: Date.now(),
    };

    setTrips((prev) => [
      tripWithId,
      ...prev,
    ]);

    addNotification(
      "New booking added successfully"
    );
  };

  // Delete Trip
  const deleteTrip = (
    tripId
  ) => {

    setTrips((prev) =>
      prev.filter(
        (trip) =>
          trip.id !==
          tripId
      )
    );

    addNotification(
      "Booking deleted",
      "warning"
    );
  };

  // Update Trip
  const updateTrip = (
    updatedTrip
  ) => {

    setTrips((prev) =>
      prev.map((trip) =>
        trip.id ===
        updatedTrip.id
          ? updatedTrip
          : trip
      )
    );

    addNotification(
      "Booking updated"
    );
  };

  const value =
    useMemo(
      () => ({

        trips,
        setTrips,
        addTrip,
        deleteTrip,
        updateTrip,

        drivers,
        setDrivers,

        notifications,
        addNotification,

        dashboardStats,
      }),
      [
        trips,
        drivers,
        notifications,
        dashboardStats,
      ]
    );

  return (

    <AppContext.Provider
      value={value}
    >

      <div className="relative z-10 animate-[fadeIn_0.45s_ease]">

        {children}

      </div>

    </AppContext.Provider>
  );
}