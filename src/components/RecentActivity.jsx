import {
Clock3,
MapPin,
Car,
} from "lucide-react";

function RecentActivity({

trips

}){

return(

<div className="rounded-[35px] border border-white/10 bg-white/[0.03] p-8">

<div className="mb-8">

<h2 className="text-3xl font-bold text-white">

Recent Bookings

</h2>

<p className="text-zinc-500 mt-2">

Latest booking activities

</p>

</div>

<div className="space-y-5">

{

trips
.slice(0,5)
.map((trip)=>(

<div
key={trip.id}
className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 p-5"
>

<div className="flex items-center gap-4">

<div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center">

<Car
size={20}
className="text-yellow-400"
/>

</div>

<div>

<h3 className="text-white font-semibold">

{trip.customer}

</h3>

<p className="text-zinc-500 text-sm mt-1">

{trip.pickup} → {trip.drop}

</p>

</div>

</div>

<div className="text-right">

<p className="text-emerald-400 font-bold">

₹{trip.total}

</p>

<p className="text-zinc-500 text-sm mt-1">

{trip.finalKms} KM

</p>

</div>

</div>

))

}

</div>

</div>

);

}

export default RecentActivity;