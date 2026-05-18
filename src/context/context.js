import {
  createContext,
} from "react";

export const AppContext =
  createContext({
    trips: [],

    setTrips: () => {},

    drivers: [],

    setDrivers: () => {},

    notifications: [],

    addNotification: () => {},
  });