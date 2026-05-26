import { useMemo, useState } from "react";

import MainLayout from "../layout/MainLayout";

import AddBookingModal from "../components/AddBookingModal";
import TripsTable from "../components/TripsTable";
import RevenueChart from "../components/RevenueChart";
import NotificationToast from "../components/NotificationToast";
import FloatingActionButton from "../components/FloatingActionButton";

import useApp from "../hooks/useApp";

function Dashboard(){

const[
showModal,
setShowModal
]=useState(false);

const{

trips,
addTrip,
notifications,

}=useApp();

const stats=
useMemo(()=>{

const totalRevenue=

trips.reduce(

(total,trip)=>

total+

Number(
trip.total
||0
),

0

);

const totalExpense=

trips.reduce(

(total,trip)=>

total+

Number(
trip.totalExpenses
||0
),

0

);

const totalBalance=

trips.reduce(

(total,trip)=>

total+

Number(
trip.balance
||0
),

0

);

return{

bookings:
trips.length,

revenue:
totalRevenue,

expense:
totalExpense,

balance:
totalBalance,

};

},[trips]);

return(

<MainLayout>

<NotificationToast
notifications={notifications}
/>

<FloatingActionButton

label="Add Booking"

onClick={()=>
setShowModal(
true
)
}

/>

{

showModal&&(

<AddBookingModal

closeModal={()=>

setShowModal(
false
)

}

addTrip={
addTrip
}

/>

)

}

<div className="space-y-8">

<section className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Total Bookings

</p>

<h2 className="text-3xl font-bold text-white mt-4">

{stats.bookings}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Revenue

</p>

<h2 className="text-3xl font-bold text-emerald-400 mt-4">

₹{stats.revenue}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Expenses

</p>

<h2 className="text-3xl font-bold text-red-400 mt-4">

₹{stats.expense}

</h2>

</div>

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Balance

</p>

<h2 className="text-3xl font-bold text-cyan-400 mt-4">

₹{stats.balance}

</h2>

</div>

</section>

<RevenueChart
trips={trips}
/>

<TripsTable
trips={trips}
/>

</div>

</MainLayout>

);

}

export default Dashboard;