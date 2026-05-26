function BookingStatusBadge({

status

}){

const getColor=()=>{

switch(status){

case "Completed":

return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

case "Pending":

return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";

case "Cancelled":

return "bg-red-500/10 text-red-400 border-red-500/20";

case "Ongoing":

return "bg-blue-500/10 text-blue-400 border-blue-500/20";

default:

return "bg-zinc-500/10 text-zinc-300 border-zinc-500/20";

}

};

return(

<div
className={`inline-flex px-4 py-2 rounded-2xl border text-xs font-semibold ${getColor()}`}
>

{status}

</div>

);

}

export default BookingStatusBadge;