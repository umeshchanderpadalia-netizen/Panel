import {
  useEffect,
  useState,
} from "react";

import { AppContext } from "./context";

import tripsData from "../data/trips";
import driversData from "../data/drivers";

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
    useState(driversData);

  // Notifications
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  // Save Trips
  useEffect(() => {

    localStorage.setItem(
      "cab-trips",
      JSON.stringify(trips)
    );

  }, [trips]);

  // Add Notification
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

    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        trips,
        setTrips,

        drivers,
        setDrivers,

        notifications,
        addNotification,
      }}
    >

      {children}

    </AppContext.Provider>
  );
}