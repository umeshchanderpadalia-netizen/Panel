import {
useEffect,
useState,
} from "react";

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

const[

dashboardStats,

setDashboardStats

]=useState({

totalBookings:0,

totalRevenue:0,

pendingAmount:0,

totalProfit:0,

});

const{

trips,

addTrip,

notifications,

}=useApp();


// FETCH DASHBOARD STATS

useEffect(()=>{

fetchDashboardStats();

},[]);


const fetchDashboardStats=
async()=>{

try{

const response=
await fetch(

"http://localhost:5000/api/dashboard/stats"

);

const data=
await response.json();

setDashboardStats(
data
);

}catch(error){

console.log(error);

}

};


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

{/* STATS */}

<section className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Total Bookings

</p>

<h2 className="text-3xl font-bold text-white mt-4">

{
dashboardStats.totalBookings
}

</h2>

</div>


<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Revenue

</p>

<h2 className="text-3xl font-bold text-emerald-400 mt-4">

₹{
dashboardStats.totalRevenue
}

</h2>

</div>


<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Pending Amount

</p>

<h2 className="text-3xl font-bold text-red-400 mt-4">

₹{
dashboardStats.pendingAmount
}

</h2>

</div>


<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

Profit

</p>

<h2 className="text-3xl font-bold text-cyan-400 mt-4">

₹{
dashboardStats.totalProfit
}

</h2>

</div>

</section>


{/* CHART */}

<RevenueChart
trips={trips}
/>


{/* BOOKINGS */}

<TripsTable
trips={trips}
/>

</div>

</MainLayout>

);

}

export default Dashboard;