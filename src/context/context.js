import {
  createContext,
} from "react";

export const AppContext =
createContext({

  trips:[],

  setTrips:()=>{},

  addTrip:()=>{},

  updateTrip:()=>{},

  deleteTrip:()=>{},

  drivers:[],

  setDrivers:()=>{},

  notifications:[],

  addNotification:()=>{},

  dashboardStats:{

    totalTrips:0,

    completedTrips:0,

    ongoingTrips:0,

    cancelledTrips:0,

    onlineDrivers:0,

    totalRevenue:0,

  },

});