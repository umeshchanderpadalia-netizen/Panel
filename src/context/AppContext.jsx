import {
createContext,
useEffect,
useMemo,
useState,
} from "react";

import {
drivers as driversData,
} from "../data";

export const AppContext =
createContext();

export function AppProvider({

children

}){

const[
trips,
setTrips
]=useState([]);

const[
drivers,
setDrivers
]=useState(

()=>{

const savedDrivers=

localStorage.getItem(
"cab-drivers"
);

return savedDrivers

?JSON.parse(
savedDrivers
)

:driversData;

}

);

const[
notifications,
setNotifications
]=useState([]);


// Load Bookings

useEffect(()=>{

const savedTrips=

localStorage.getItem(
"cab-bookings"
);

if(savedTrips){

setTrips(

JSON.parse(
savedTrips
)

);

}

},[]);


// Save Bookings

useEffect(()=>{

localStorage.setItem(

"cab-bookings",

JSON.stringify(
trips
)

);

},[trips]);


// Save Drivers

useEffect(()=>{

localStorage.setItem(

"cab-drivers",

JSON.stringify(
drivers
)

);

},[drivers]);



const addNotification=(

message,
type="success"

)=>{

const notification={

id:Date.now(),

message,
type,

};

setNotifications(

(prev)=>[

notification,
...prev

]

);

setTimeout(()=>{

setNotifications(

(prev)=>

prev.filter(

(item)=>

item.id!==notification.id

)

);

},3000);

};



const addTrip=(newTrip)=>{

setTrips(

(prev)=>[

newTrip,
...prev

]

);

addNotification(

"Booking added successfully"

);

};



const updateTrip=(updatedTrip)=>{

setTrips(

(prev)=>

prev.map(

(trip)=>

trip.id===updatedTrip.id

?updatedTrip

:trip

)

);

addNotification(

"Booking updated"

);

};



const deleteTrip=(tripId)=>{

setTrips(

(prev)=>

prev.filter(

(trip)=>

trip.id!==tripId

)

);

addNotification(

"Booking deleted",
"warning"

);

};



const value=
useMemo(

()=>({

trips,
setTrips,

drivers,
setDrivers,

notifications,

addNotification,

addTrip,
updateTrip,
deleteTrip,

}),

[

trips,
drivers,
notifications,

]

);

return(

<AppContext.Provider
value={value}
>

<div className="relative z-10">

{children}

</div>

</AppContext.Provider>

);

}