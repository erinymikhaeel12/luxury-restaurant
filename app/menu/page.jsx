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
    image: "/images/truffle.jpeg"
  },


  {
    name:"Premium Steak",
    category:"Main Courses",
    price:"$70",
     image: "/images/steak.jpeg"
  },


  {
    name:"Luxury Burger",
    category:"Sandwiches",
    price:"$35",
    image: "/images/burger.jpeg"
  },


  {
    name:"Chocolate Dessert",
    category:"Desserts",
    price:"$25",
    image: "/images/chocolate.jpeg"
  },


  {
    name:"Signature Drink",
    category:"Drinks",
    price:"$15",
    image: "/images/drink.jpeg"
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
