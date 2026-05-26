import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import CityAutocomplete from "./CityAutocomplete";
import tripTypes from "../data/tripTypes";

import {
gstOptions,
tdsOptions,
} from "../data/gstOptions";

import calculateBookingTotals from "../utils/calculateBookingTotals";

const inputClass =
"w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white";

const selectClass =
`${inputClass} [&>option]:bg-[#0a0a0a]`;

const sectionClass =
"rounded-3xl border border-white/10 bg-white/[0.03] p-7";

function AddBookingModal({

closeModal,
addTrip,

}){

const [formData,setFormData]=
useState({

id:`TRIP-${Date.now()}`,

customer:"",
phone:"",

tripType:"One Way",

days:"1",

vehicle:"Sedan",

pickup:"",
drop:"",

baseAmount:"",
vendorRate:"",
paidAmount:"",

gst:0.05,
tds:0.02,

tripStatus:"Pending",

});

const handleChange=(e)=>{

const{
name,
value
}=e.target;

setFormData(

prev=>({

...prev,
[name]:value

})

);

};

const handleLocationChange=
(field,value)=>{

setFormData(

prev=>({

...prev,
[field]:value

})

);

};

const distance=
useMemo(()=>{

if(
!formData.pickup||
!formData.drop
)
return 0;

return Math.floor(
Math.random()*300
)+50;

},[
formData.pickup,
formData.drop
]);


const totals=
useMemo(

()=>calculateBookingTotals(
formData
),

[
formData
]

);


const handleSubmit=(e)=>{

e.preventDefault();

addTrip({

...formData,

finalKms:
distance,

...totals,

date:
new Date()
.toLocaleDateString(),

});

closeModal();

};

return(

<div className="fixed inset-0 z-[200] overflow-y-auto bg-black/90 p-8">

<div className="flex justify-center">

<motion.div

initial={{
opacity:0,
scale:.95
}}

animate={{
opacity:1,
scale:1
}}

className="w-full max-w-6xl rounded-[35px] border border-white/10 bg-[#0a0a0a] p-8"
>

<h1 className="text-4xl font-bold text-white mb-8">

Create Booking

</h1>

<form
onSubmit={handleSubmit}
className="space-y-8"
>


<div className={sectionClass}>

<h3 className="mb-5 text-white text-xl">

Customer Details

</h3>

<div className="grid md:grid-cols-2 gap-5">

<input
name="customer"
placeholder="Customer Name"
value={formData.customer}
onChange={handleChange}
className={inputClass}
/>

<input
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
className={inputClass}
/>

</div>

</div>


<div className={sectionClass}>

<h3 className="mb-5 text-white text-xl">

Booking Details

</h3>

<div className="grid md:grid-cols-4 gap-5">

<input
value={formData.id}
readOnly
className={inputClass}
/>

<select
name="tripType"
value={formData.tripType}
onChange={handleChange}
className={selectClass}
>

{
tripTypes.map(
trip=>(

<option
key={trip}
value={trip}
>

{trip}

</option>

)
)
}

</select>

<input
name="days"
placeholder="Days"
value={formData.days}
onChange={handleChange}
className={inputClass}
/>

<select
name="vehicle"
value={formData.vehicle}
onChange={handleChange}
className={selectClass}
>

<option>Sedan</option>
<option>SUV</option>
<option>Innova</option>
<option>Crysta</option>

</select>

</div>

</div>



<div className={sectionClass}>

<h3 className="mb-5 text-white text-xl">

Route

</h3>

<div className="grid md:grid-cols-2 gap-5">

<CityAutocomplete
label="Pickup"
value={formData.pickup}
onChange={(value)=>
handleLocationChange(
"pickup",
value
)}
/>

<CityAutocomplete
label="Destination"
value={formData.drop}
onChange={(value)=>
handleLocationChange(
"drop",
value
)}
/>

</div>

<div className="mt-5">

<input
readOnly
value={`${distance} KM`}
className={inputClass}
/>

</div>

</div>



<div className={sectionClass}>

<h3 className="mb-5 text-white text-xl">

Financial

</h3>

<div className="grid md:grid-cols-5 gap-5">

<input
name="baseAmount"
placeholder="Amount"
value={formData.baseAmount}
onChange={handleChange}
className={inputClass}
/>

<input
name="vendorRate"
placeholder="Other Expense"
value={formData.vendorRate}
onChange={handleChange}
className={inputClass}
/>

<input
name="paidAmount"
placeholder="Paid Amount"
value={formData.paidAmount}
onChange={handleChange}
className={inputClass}
/>

<select
name="gst"
value={formData.gst}
onChange={handleChange}
className={selectClass}
>

{
gstOptions.map(
(item)=>(

<option
key={item.label}
value={item.value}
>

GST {item.label}

</option>

)
)
}

</select>


<select
name="tds"
value={formData.tds}
onChange={handleChange}
className={selectClass}
>

{
tdsOptions.map(
(item)=>(

<option
key={item.label}
value={item.value}
>

TDS {item.label}

</option>

)
)
}

</select>

</div>

</div>



<div className={sectionClass}>

<h3 className="mb-5 text-white text-xl">

Financial Summary

</h3>

<div className="grid md:grid-cols-7 gap-4">

<div className={inputClass}>
Amount ₹{formData.baseAmount||0}
</div>

<div className={inputClass}>
After GST ₹{totals.afterGst}
</div>

<div className={inputClass}>
After TDS ₹{totals.afterTds}
</div>

<div className={inputClass}>
Other Expense ₹{totals.totalExpenses}
</div>

<div className={inputClass}>
Total ₹{totals.total}
</div>

<div className={inputClass}>
Paid ₹{formData.paidAmount||0}
</div>

<div className={inputClass}>
Left Amount ₹{totals.balance}
</div>

</div>

</div>


<div className="flex gap-4">

<button
type="button"
onClick={closeModal}
className="flex-1 rounded-2xl border border-white/10 py-4 text-white"
>

Cancel

</button>

<button
type="submit"
className="flex-1 rounded-2xl bg-yellow-400 py-4 font-bold text-black"
>

Create Booking

</button>

</div>

</form>

</motion.div>

</div>

</div>

);

}

export default AddBookingModal;