import {
createContext,
useEffect,
useMemo,
useState,
} from "react";

export const AppContext =
createContext();

export function AppProvider({
children
}){

const [trips,setTrips]=
useState([]);

const [notifications,setNotifications]=
useState([]);

const [loading,setLoading]=
useState(false);


// FETCH BOOKINGS

const fetchBookings =
async()=>{

try{

setLoading(true);

const token =
localStorage.getItem(
"cab-token"
);

const response =
await fetch(

"http://localhost:5000/api/bookings",

{

headers:{

Authorization:
token,

},

}

);

const data =
await response.json();


// IMPORTANT FIX

setTrips(
data.bookings || []
);

}catch(error){

console.log(
"Fetch Error:",
error
);

}

finally{

setLoading(false);

}

};


// INITIAL LOAD

useEffect(()=>{

fetchBookings();

},[]);


// NOTIFICATION

const addNotification=(

message,
type="success"

)=>{

const item={

id:Date.now(),
message,
type,

};

setNotifications(

prev=>[
item,
...prev
]

);

setTimeout(()=>{

setNotifications(

prev=>

prev.filter(

n=>

n.id!==item.id

)

);

},3000);

};


// CREATE

const addTrip =
async(newTrip)=>{

try{

const token =
localStorage.getItem(
"cab-token"
);

const response =
await fetch(

"http://localhost:5000/api/bookings",

{

method:"POST",

headers:{

"Content-Type":
"application/json",

Authorization:
token,

},

body:
JSON.stringify(
newTrip
)

}

);

const data =
await response.json();

setTrips(

prev=>

[

data.booking,
...prev

]

);

addNotification(
"Booking created"
);

}catch(error){

console.log(error);

}

};


// UPDATE

const updateTrip =
async(updatedTrip)=>{

try{

const token =
localStorage.getItem(
"cab-token"
);

const response =
await fetch(

`http://localhost:5000/api/bookings/${updatedTrip._id}`,

{

method:"PUT",

headers:{

"Content-Type":
"application/json",

Authorization:
token,

},

body:
JSON.stringify(
updatedTrip
)

}

);

const data =
await response.json();

setTrips(

prev=>

prev.map(

trip=>

trip._id===
data.booking._id

?

data.booking

:

trip

)

);

addNotification(
"Booking updated"
);

}catch(error){

console.log(error);

}

};


// DELETE

const deleteTrip =
async(id)=>{

try{

const token =
localStorage.getItem(
"cab-token"
);

await fetch(

`http://localhost:5000/api/bookings/${id}`,

{

method:
"DELETE",

headers:{

Authorization:
token,

},

}

);

setTrips(

prev=>

prev.filter(

trip=>

trip._id!==id

)

);

addNotification(
"Booking deleted",
"warning"
);

}catch(error){

console.log(error);

}

};


const value =
useMemo(

()=>({

trips,

loading,

notifications,

addTrip,

updateTrip,

deleteTrip,

})

,

[

trips,
loading,
notifications

]

);

return(

<AppContext.Provider
value={value}
>

{children}

</AppContext.Provider>

);

}