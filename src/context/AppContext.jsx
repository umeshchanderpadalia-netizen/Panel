import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { AppContext } from "./context";

import tripsData from "../data/trips";
import driversData from "../data/drivers";

export function AppProvider({
  children,
}) {

  // =========================
  // Trips
  // =========================
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

  // =========================
  // Drivers
  // =========================
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

  // =========================
  // Notifications
  // =========================
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  // =========================
  // Live Dashboard Stats
  // =========================
  const dashboardStats =
    useMemo(() => {

      const completedTrips =
        trips.filter(
          (trip) =>
            trip.status ===
            "Completed"
        ).length;

      const ongoingTrips =
        trips.filter(
          (trip) =>
            trip.status ===
            "Ongoing"
        ).length;

      const cancelledTrips =
        trips.filter(
          (trip) =>
            trip.status ===
            "Cancelled"
        ).length;

      const onlineDrivers =
        drivers.filter(
          (driver) =>
            driver.status ===
            "Online"
        ).length;

      const totalRevenue =
        completedTrips * 850;

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

  // =========================
  // Persist Trips
  // =========================
  useEffect(() => {

    localStorage.setItem(
      "cab-trips",
      JSON.stringify(trips)
    );

  }, [trips]);

  // =========================
  // Persist Drivers
  // =========================
  useEffect(() => {

    localStorage.setItem(
      "cab-drivers",
      JSON.stringify(drivers)
    );

  }, [drivers]);

  // =========================
  // Add Notification
  // =========================
  const addNotification = (
    message,
    type = "success"
  ) => {

    const newNotification = {
      id: Date.now(),
      message,
      type,
    };

    setNotifications((prev) => [
      newNotification,
      ...prev,
    ]);

    setTimeout(() => {

      setNotifications((prev) =>
        prev.filter(
          (item) =>
            item.id !==
            newNotification.id
        )
      );

    }, 3500);
  };

  // =========================
  // Add Trip
  // =========================
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

  // =========================
  // Delete Trip
  // =========================
  const deleteTrip = (
    tripId
  ) => {

    setTrips((prev) =>
      prev.filter(
        (trip) =>
          trip.id !== tripId
      )
    );

    addNotification(
      "Booking deleted"
    );
  };

  // =========================
  // Update Trip
  // =========================
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

  return (
    <AppContext.Provider
      value={{
        // Trips
        trips,
        setTrips,
        addTrip,
        deleteTrip,
        updateTrip,

        // Drivers
        drivers,
        setDrivers,

        // Notifications
        notifications,
        addNotification,

        // Analytics
        dashboardStats,
      }}
    >

      <div className="relative z-10 animate-[fadeIn_0.45s_ease]">

        {children}

      </div>

    </AppContext.Provider>
  );
}