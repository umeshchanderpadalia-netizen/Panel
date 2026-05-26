import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import CityAutocomplete from "./CityAutocomplete";

import tripTypes from "../data/tripTypes";

import {
gstOptions,
tdsOptions,
} from "../data/gstOptions";

import calculateBookingTotals from "../utils/calculateBookingTotals";
import calculateDistance from "../utils/calculateDistance";

const inputClass =
"w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white";

const selectClass =
`${inputClass} [&>option]:bg-[#0a0a0a]`;

function EditTripModal({

selectedTrip,
closeModal,
updateTrip,

}){

const [formData,setFormData]=
useState({

...selectedTrip

});

const handleChange=(e)=>{

const {
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
useMemo(

()=>calculateDistance(

formData.pickup,
formData.drop

),

[
formData.pickup,
formData.drop
]

);

const totals=
useMemo(

()=>calculateBookingTotals({

...formData,

finalKms:
distance

}),

[
formData,
distance
]

);

const handleSubmit=(e)=>{

e.preventDefault();

updateTrip({

...formData,

finalKms:
distance,

...totals,

});

closeModal();

};

return(

<div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6">

<motion.div

initial={{
opacity:0,
scale:0.95
}}

animate={{
opacity:1,
scale:1
}}

className="w-full max-w-5xl rounded-[35px] border border-white/10 bg-[#0a0a0a] p-8"
>

<h2 className="text-3xl text-white font-bold mb-8">

Edit Booking

</h2>

<form
onSubmit={handleSubmit}
className="space-y-6"
>

<div className="grid md:grid-cols-2 gap-5">

<input
name="customer"
value={formData.customer||""}
onChange={handleChange}
placeholder="Customer"
className={inputClass}
/>

<input
name="phone"
value={formData.phone||""}
onChange={handleChange}
placeholder="Phone"
className={inputClass}
/>

<select
name="tripType"
value={formData.tripType||""}
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
value={formData.days||""}
onChange={handleChange}
placeholder="Days"
className={inputClass}
/>

<CityAutocomplete
label="Pickup"
value={formData.pickup||""}
onChange={(value)=>
handleLocationChange(
"pickup",
value
)}
/>

<CityAutocomplete
label="Destination"
value={formData.drop||""}
onChange={(value)=>
handleLocationChange(
"drop",
value
)}
/>

<input
name="baseAmount"
value={formData.baseAmount||""}
onChange={handleChange}
placeholder="Amount"
className={inputClass}
/>

<input
name="vendorRate"
value={formData.vendorRate||""}
onChange={handleChange}
placeholder="Expense"
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

{item.label}

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

{item.label}

</option>

)
)
}

</select>

</div>

<div className="grid grid-cols-4 gap-4">

<div className={inputClass}>
{distance} KM
</div>

<div className={inputClass}>
₹{totals.total}
</div>

<div className={inputClass}>
₹{totals.totalExpenses}
</div>

<div className={inputClass}>
₹{totals.balance}
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

Save Changes

</button>

</div>

</form>

</motion.div>

</div>

);

}

export default EditTripModal;