function MetricCard({

title,
value,
color="text-white"

}){

return(

<div className="rounded-3xl border border-white/10 p-6">

<p className="text-zinc-500">

{title}

</p>

<h2 className={`mt-4 text-3xl font-bold ${color}`}>

{value}

</h2>

</div>

);

}

export default MetricCard;