import {
  Filter,
  Sparkles,
} from "lucide-react";

function TripFilters({
  activeFilter,
  setActiveFilter,
}) {

const filters=[

"All",

"Pending",

"Confirmed",

"Vendor Pending",

"Assigned",

"Ongoing",

"Completed",

"Cancelled",

];

return(

<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-5">

<div className="absolute top-[-80px] right-[-80px] h-[180px] w-[180px] rounded-full bg-yellow-400/10 blur-[100px]"></div>

<div className="relative z-10">

<div className="mb-5 flex items-center gap-3">

<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/10 bg-yellow-500/10 text-yellow-400">

<Filter size={18}/>

</div>

<div>

<p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

Booking Filters

</p>

<h3 className="mt-1 text-lg font-semibold text-white">

Filter Operations

</h3>

</div>

</div>

<div className="flex flex-wrap gap-3">

{filters.map(
(filter,index)=>{

const active=
activeFilter===
filter;

return(

<button
key={index}
onClick={()=>
setActiveFilter(
filter
)
}
className={`group relative overflow-hidden rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-300

${active

? "border-yellow-400 bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_25px_rgba(250,204,21,0.18)]"

: "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-yellow-500/20 hover:text-white"

}`}

>

<span className="relative z-10 flex items-center gap-2">

{active && (

<Sparkles
size={14}
/>

)}

{filter}

</span>

</button>

);

})}

</div>

</div>

</div>

);

}

export default TripFilters;