"use client";

import { useState } from "react";


const categories = [
  "All",
  "Main Courses",
  "Sandwiches",
  "Desserts",
  "Drinks"
];


const dishes = [

  {
    name:"Truffle Pasta",
    category:"Main Courses",
    price:"$45",
    image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
  },


  {
    name:"Premium Steak",
    category:"Main Courses",
    price:"$70",
    image:"https://images.unsplash.com/photo-1544025162-d76694265947"
  },


  {
    name:"Luxury Burger",
    category:"Sandwiches",
    price:"$35",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },


  {
    name:"Chocolate Dessert",
    category:"Desserts",
    price:"$25",
    image:"https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },


  {
    name:"Signature Drink",
    category:"Drinks",
    price:"$15",
    image:"https://images.unsplash.com/photo-1544145945-f90425340c7e"
  }

];



export default function Menu(){

const [active,setActive]=useState("All");


const filtered = active==="All"
? dishes
: dishes.filter(
(item)=>item.category===active
);



return (

<main className="min-h-screen bg-[#080808] text-white py-20 px-12">
<a
href="/"
className="
text-[#d4af37]
tracking-widest
text-sm
"
>
← BACK HOME
</a>

<h1 className="text-center text-6xl font-serif mb-6">
Our Menu
</h1>


<p className="text-center text-[#d4af37] tracking-[0.5em] mb-16">
FINE CUISINE
</p>



<div className="flex justify-center gap-6 flex-wrap mb-20">


{
categories.map((cat)=>(

<button

key={cat}

onClick={()=>setActive(cat)}

className={`
px-7 py-3 rounded-full border
transition

${
active===cat
?
"bg-[#d4af37] text-black border-[#d4af37]"
:
"text-[#d4af37] border-[#d4af37]"
}

`}

>

{cat}

</button>

))
}


</div>




<div className="grid md:grid-cols-3 gap-10">


{
filtered.map((dish)=>(

<div
key={dish.name}
className="group"
>


<div className="overflow-hidden h-[350px]">

<img

src={dish.image}

className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>

</div>



<div className="mt-6">


<h2 className="text-3xl font-serif">
{dish.name}
</h2>


<p className="text-[#d4af37] mt-3">
{dish.price}
</p>


</div>


</div>

))
}


</div>



</main>

)

}
