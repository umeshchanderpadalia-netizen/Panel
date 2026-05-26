import {
useMemo,
useState,
} from "react";

import {
Eye,
Pencil,
Trash2,
Search,
} from "lucide-react";

import useApp from "../hooks/useApp";

import BookingDetailsDrawer from "./BookingDetailsDrawer";
import EditTripModal from "./EditTripModal";

function TripsTable({

trips

}){

const{

deleteTrip,
updateTrip,

}=useApp();

const[
search,
setSearch
]=useState("");

const[
selectedTrip,
setSelectedTrip
]=useState(null);

const[
showDrawer,
setShowDrawer
]=useState(false);

const[
showEditModal,
setShowEditModal
]=useState(false);

const filteredTrips=
useMemo(()=>{

return trips.filter(

(trip)=>{

const query=
search.toLowerCase();

return(

trip.customer
?.toLowerCase()
.includes(query)

||

trip.pickup
?.toLowerCase()
.includes(query)

||

trip.drop
?.toLowerCase()
.includes(query)

||

trip.id
?.toLowerCase()
.includes(query)

);

}

);

},[search,trips]);

return(

<>

<div className="rounded-[35px] border border-white/10 overflow-hidden">

<div className="p-6 border-b border-white/10">

<div className="relative">

<Search
size={18}
className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
/>

<input
value={search}
onChange={(e)=>
setSearch(
e.target.value
)
}
placeholder="Search booking..."
className="w-full rounded-2xl bg-black/30 border border-white/10 pl-14 py-4 text-white"
/>

</div>

</div>

<div className="overflow-x-auto">

<table className="w-full">

<thead>

<tr className="border-b border-white/10">

{

[
"ID",
"Customer",
"Route",
"Car",
"KM",
"Amount",
"Balance",
"Status",
"Actions",

].map(

(item)=>(

<th
key={item}
className="px-6 py-5 text-left text-xs uppercase text-zinc-500"
>

{item}

</th>

)

)

}

</tr>

</thead>

<tbody>

{

filteredTrips.map(

(trip)=>(

<tr
key={trip.id}
className="border-b border-white/5"
>

<td className="px-6 py-5 text-white">

{trip.id}

</td>

<td className="px-6 py-5 text-white">

{trip.customer}

</td>

<td className="px-6 py-5 text-white">

{trip.pickup}

<p className="text-zinc-500 text-xs">

↓ {trip.drop}

</p>

</td>

<td className="px-6 py-5 text-white">

{trip.vehicle}

</td>

<td className="px-6 py-5 text-cyan-400">

{trip.finalKms} KM

</td>

<td className="px-6 py-5 text-emerald-400">

₹{trip.total}

</td>

<td className="px-6 py-5 text-yellow-400">

₹{trip.balance}

</td>

<td className="px-6 py-5 text-white">

{trip.tripStatus}

</td>

<td className="px-6 py-5">

<div className="flex gap-2">

<button
onClick={()=>{

setSelectedTrip(
trip
);

setShowDrawer(
true
);

}}
>

<Eye
size={18}
/>

</button>

<button
onClick={()=>{

setSelectedTrip(
trip
);

setShowEditModal(
true
);

}}
>

<Pencil
size={18}
/>

</button>

<button
onClick={()=>
deleteTrip(
trip.id
)
}
>

<Trash2
size={18}
className="text-red-400"
/>

</button>

</div>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</div>

{

showDrawer&&(

<BookingDetailsDrawer

trip={selectedTrip}

closeDrawer={()=>

setShowDrawer(
false
)

}

/>

)

}

{

showEditModal&&(

<EditTripModal

selectedTrip={selectedTrip}

updateTrip={updateTrip}

closeModal={()=>

setShowEditModal(
false
)

}

/>

)

}

</>

);

}

export default TripsTable;