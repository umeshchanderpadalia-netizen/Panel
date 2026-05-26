import { useMemo } from "react";

import cities from "../data/cities";

function CityAutocomplete({

  value,
  onChange,
  placeholder="Select city"

}) {

const filteredCities=
useMemo(()=>{

if(!value)
return cities;

return cities.filter(

(city)=>

city
.toLowerCase()
.includes(
value.toLowerCase()
)

);

},[
value
]);

return(

<div className="relative">

<input
type="text"
value={value}
placeholder={placeholder}
onChange={(e)=>
onChange(
e.target.value
)
}
className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
/>

{

value && (

<div className="absolute top-full left-0 mt-2 w-full max-h-[220px] overflow-y-auto rounded-2xl bg-[#0d0d0d] border border-white/10 z-50">

{

filteredCities
.slice(0,8)
.map(
(city)=>(
<button
key={city}
type="button"
onClick={()=>
onChange(
city
)
}
className="w-full px-5 py-3 text-left text-zinc-300 hover:bg-white/[0.05]"
>

{city}

</button>
)
)

}

</div>

)

}

</div>

);

}

export default CityAutocomplete;