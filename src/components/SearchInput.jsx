import { Search } from "lucide-react";

function SearchInput({

value,
onChange,
placeholder="Search"

}){

return(

<div className="relative">

<Search
size={18}
className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
/>

<input
type="text"
value={value}
placeholder={placeholder}
onChange={(e)=>
onChange(
e.target.value
)
}
className="w-full rounded-2xl border border-white/10 bg-black/30 py-4 pl-14 pr-5 text-white outline-none"
/>

</div>

);

}

export default SearchInput;