import { X } from "lucide-react";
import { motion } from "framer-motion";

const cardClass =
"rounded-3xl border border-white/10 bg-white/[0.03] p-6";

function BookingDetailsDrawer({

trip,
closeDrawer,

}){

if(!trip)
return null;

return(

<div className="fixed inset-0 z-[250] bg-black/80 flex justify-end">

<motion.div

initial={{
x:100
}}

animate={{
x:0
}}

className="w-full max-w-2xl h-screen overflow-y-auto bg-[#090909] border-l border-white/10 p-8"
>

<div className="flex items-center justify-between mb-8">

<div>

<p className="text-yellow-400 uppercase text-xs tracking-[0.3em]">

Booking Details

</p>

<h2 className="text-4xl font-bold text-white mt-3">

{trip.customer}

</h2>

</div>

<button
onClick={closeDrawer}
className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center"
>

<X
size={18}
className="text-white"
/>

</button>

</div>


<div className="space-y-5">

<div className={cardClass}>

<h3 className="text-white font-bold mb-5">

Booking Information

</h3>

<div className="space-y-3">

<p className="text-zinc-400">

Booking ID :

<span className="ml-3 text-white">

{trip.id}

</span>

</p>

<p className="text-zinc-400">

Trip Type :

<span className="ml-3 text-white">

{trip.tripType}

</span>

</p>

<p className="text-zinc-400">

Vehicle :

<span className="ml-3 text-white">

{trip.vehicle}

</span>

</p>

<p className="text-zinc-400">

Days :

<span className="ml-3 text-white">

{trip.days || 1}

</span>

</p>

</div>

</div>


<div className={cardClass}>

<h3 className="text-white font-bold mb-5">

Route Information

</h3>

<div className="space-y-3">

<p className="text-white">

{trip.pickup}

</p>

<p className="text-zinc-500">

↓

</p>

<p className="text-white">

{trip.drop}

</p>

<p className="text-cyan-400 mt-4">

Distance : {trip.finalKms} KM

</p>

</div>

</div>


<div className={cardClass}>

<h3 className="text-white font-bold mb-5">

Customer Details

</h3>

<div className="space-y-3">

<p className="text-zinc-400">

Customer :

<span className="ml-3 text-white">

{trip.customer}

</span>

</p>

<p className="text-zinc-400">

Phone :

<span className="ml-3 text-white">

{trip.phone}

</span>

</p>

</div>

</div>


<div className={cardClass}>

<h3 className="text-white font-bold mb-5">

Financial Summary

</h3>

<div className="grid grid-cols-2 gap-4">

<div>

<p className="text-zinc-500">

Total

</p>

<h2 className="text-emerald-400 text-2xl font-bold">

₹{trip.total}

</h2>

</div>

<div>

<p className="text-zinc-500">

Expense

</p>

<h2 className="text-red-400 text-2xl font-bold">

₹{trip.totalExpenses}

</h2>

</div>

<div>

<p className="text-zinc-500">

After TDS

</p>

<h2 className="text-yellow-400 text-2xl font-bold">

₹{trip.afterTds}

</h2>

</div>

<div>

<p className="text-zinc-500">

Balance

</p>

<h2 className="text-cyan-400 text-2xl font-bold">

₹{trip.balance}

</h2>

</div>

</div>

</div>


<div className={cardClass}>

<h3 className="text-white font-bold mb-5">

Status

</h3>

<p className="text-emerald-400">

{trip.tripStatus}

</p>

</div>

</div>

</motion.div>

</div>

);

}

export default BookingDetailsDrawer;