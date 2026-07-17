"use client";

import { motion } from "framer-motion";

export default function Home() {

  return (

    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">


      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 md:px-14 py-5 md:py-8">

        <h1 className="text-xl md:text-2xl tracking-[0.3em] md:tracking-[0.5em] text-[#d4af37]">
          LUXE
        </h1>


        <div className="hidden md:flex gap-12 text-sm tracking-widest text-gray-300">

          <span>
            HOME
          </span>

         <a href="/menu">
  MENU
</a>

          <span>
            STORY
          </span>

          <span>
            CONTACT
          </span>

        </div>


<button
className="
border border-[#d4af37]
text-[#d4af37]
px-5 md:px-8
py-2 md:py-3
rounded-full
text-[10px] md:text-xs
tracking-widest
hover:bg-[#d4af37]
hover:text-black
transition
"
>
          RESERVE
        </button>


      </nav>



      {/* HERO */}

<section className="min-h-screen flex flex-col md:flex-row justify-center relative px-5 md:px-14 pt-32 md:pt-0">


        {/* TEXT */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1.8,
            ease:"easeOut"
          }}

          className="
relative
z-20
w-full
md:w-[55%]
text-center
md:text-left
"

        >


          <p className="text-[#d4af37] tracking-[0.7em] text-xs mb-10">

            FINE DINING RESTAURANT

          </p>



          <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.85]">

            The
            <br/>

            Culinary
            <br/>

            Experience

          </h2>



          <p className="mt-10 text-gray-400 text-base md:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed">

            A world of refined flavors,
            handcrafted dishes and unforgettable moments.

          </p>



          <button

            className="
            mt-12
            bg-[#d4af37]
            text-black
            px-8 md:px-12
            py-3 md:py-4
            rounded-full
            tracking-widest
            text-sm
            hover:scale-105
            transition
            "

          >
            BOOK A TABLE

          </button>



        </motion.div>




        {/* IMAGE */}

        <motion.div

          initial={{
            opacity:0,
            scale:1.08
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:2.5,
            ease:"easeOut"
          }}

className="
relative
md:absolute
right-0
top-0
w-full
md:w-[60%]
h-[50vh]
md:h-screen
mt-10
md:mt-0
"
        >


          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#080808]
            via-transparent
            to-transparent
            z-10
            "
          />


          <div
            className="
            absolute
            inset-0
            bg-black/20
            z-10
            "
          />


<div className="relative w-full h-full">

  <img

   src="/images/hero.jpeg"
    className="
    w-full
    h-full
    object-cover
    "

  />


  <div
    className="
    absolute
    inset-0
    bg-gradient-to-l
    from-[#080808]/20
    via-[#080808]/50
    to-[#080808]
    "
  />


  <div
    className="
    absolute
    inset-0
    bg-[#c9a227]/10
    mix-blend-overlay
    "
  />

</div>


        </motion.div>



      </section>

{/* Signature Dishes */}

<section className="bg-[#080808] py-24 md:py-32 px-5 md:px-14">


  <div className="text-center mb-20">


    <p className="text-[#d4af37] tracking-[0.6em] text-xs mb-6">
      OUR SIGNATURE
    </p>


    <h2 className="text-4xl md:text-6xl font-serif">
      Crafted With Passion
    </h2>


  </div>




  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">



    {/* Dish 1 */}

    <div className="group">


      <div className="overflow-hidden h-[450px]">

        <img

         src="/images/dish1.jpeg"
          className="
          w-full
          h-80 md:h-[450px]
          object-cover
          group-hover:scale-110
          transition
          duration-700
          "

        />

      </div>



      <div className="mt-8">


        <h3 className="text-3xl font-serif">
          Truffle Pasta
        </h3>


        <p className="text-gray-400 mt-3">
          Handmade pasta with black truffle
          and parmesan.
        </p>


        <p className="text-[#d4af37] mt-5">
          $45
        </p>


      </div>


    </div>






    {/* Dish 2 */}

    <div className="group">


      <div className="overflow-hidden h-[450px]">

        <img

          src="/images/dish2.jpeg"

          className="
          w-full
          h-80 md:h-[450px]
          object-cover
          group-hover:scale-110
          transition
          duration-700
          "

        />

      </div>



      <div className="mt-8">


        <h3 className="text-3xl font-serif">
          Premium Steak
        </h3>


        <p className="text-gray-400 mt-3">
          Aged beef with signature herbs.
        </p>


        <p className="text-[#d4af37] mt-5">
          $70
        </p>


      </div>


    </div>






    {/* Dish 3 */}

    <div className="group">


      <div className="overflow-hidden h-[450px]">

        <img

          src="/images/dish3.jpeg"

          className="
          w-full
          h-80 md:h-[450px]
          object-cover
          group-hover:scale-110
          transition
          duration-700
          "

        />

      </div>



      <div className="mt-8">


        <h3 className="text-3xl font-serif">
          Signature Dessert
        </h3>


        <p className="text-gray-400 mt-3">
          A sweet final experience.
        </p>


        <p className="text-[#d4af37] mt-5">
          $25
        </p>


      </div>


    </div>



  </div>


</section>
{/* About Restaurant */}

<section className="bg-[#0b0b0b] py-24 md:py-32 px-5 md:px-14">

  <div className="grid md:grid-cols-2 gap-16 items-center">


    {/* Image */}

    <div className="relative">

      <img

        src="/images/about.jpeg"

        className="
        w-full
       h-96 md:h-[600px]
        object-cover
        "

      />


      <div
        className="
        absolute
        -bottom-8
        -right-8
        border
        border-[#d4af37]
        w-40
        h-40
        flex
        items-center
        justify-center
        bg-[#080808]
        "
      >

        <p className="text-[#d4af37] text-center text-sm tracking-widest">
          SINCE
          <br/>
          2015
        </p>


      </div>


    </div>




    {/* Text */}


    <div>


      <p className="text-[#d4af37] tracking-[0.5em] text-sm mb-6">
        OUR STORY
      </p>


      <h2 className="text-4xl md:text-6xl font-serif leading-tight">

        More Than
        <br/>
        Just Food

      </h2>


      <p className="text-gray-400 mt-8 text-lg leading-relaxed">

        We believe every dish tells a story.
        Our chefs combine traditional techniques
        with modern creativity to create an unforgettable
        dining experience.

      </p>



      <p className="text-gray-400 mt-5 text-lg leading-relaxed">

        From the finest ingredients to the smallest
        details, every moment is crafted with passion.

      </p>



      {/* Stats */}

      <div className="flex-wrap justify-center md:justify-start gap-8 md:gap-12 mt-12">


        <div>

          <h3 className="text-4xl text-[#d4af37]">
            10+
          </h3>

          <p className="text-gray-400">
            Years
          </p>

        </div>



        <div>

          <h3 className="text-4xl text-[#d4af37]">
            50+
          </h3>

          <p className="text-gray-400">
            Dishes
          </p>

        </div>



        <div>

          <h3 className="text-4xl text-[#d4af37]">
            5K+
          </h3>

          <p className="text-gray-400">
            Guests
          </p>

        </div>


      </div>



    </div>


  </div>


</section>
{/* Gallery */}

<section className="bg-[#080808] py-24 md:py-32 px-5 md:px-14">


  <div className="text-center mb-20">


    <p className="text-[#d4af37] tracking-[0.5em] text-sm mb-6">
      OUR ATMOSPHERE
    </p>


    <h2 className="text-4xl md:text-6xl font-serif">
      Restaurant Gallery
    </h2>


  </div>



  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


    <img
     src="/images/gallery1.jpeg"

      className="
      h-72 md:h-[500px]
      w-full
      object-cover
      "
    />


    <img
      src="/images/gallery2.jpeg"

      className="
      h-72 md:h-[500px]
      w-full
      object-cover
      "
    />


    <img
      src="/images/gallery3.jpeg"

      className="
     h-72 md:h-[500px]
      w-full
      object-cover
      "
    />


  </div>


</section>
{/* Reservation */}

<section className="bg-[#080808] py-24 md:py-32 px-5 md:px-14 relative">


  <div className="absolute inset-0 bg-[#d4af37]/5"></div>


  <div className="relative z-10 max-w-4xl mx-auto text-center">


    <p className="text-[#d4af37] tracking-[0.6em] text-sm mb-6">
      RESERVATION
    </p>


    <h2 className="text-4xl md:text-6xl font-serif mb-8">
      Your Table Awaits
    </h2>


    <p className="text-gray-400 text-lg mb-12">
      Reserve your place and enjoy an unforgettable
      dining experience.
    </p>




    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


      <input

        placeholder="Your Name"

        className="
        bg-transparent
        border
        border-gray-700
        px-6
        py-4
        rounded-full
        outline-none
        focus:border-[#d4af37]
        "

      />


      <input

        placeholder="Date"

        type="date"

        className="
        bg-transparent
        border
        border-gray-700
        px-6
        py-4
        rounded-full
        outline-none
        focus:border-[#d4af37]
        "

      />



      <input

        placeholder="Guests"

        className="
        bg-transparent
        border
        border-gray-700
        px-6
        py-4
        rounded-full
        outline-none
        focus:border-[#d4af37]
        "

      />


    </div>




    <button

      className="
      mt-10
      bg-[#d4af37]
      text-black
      px-14
      py-4
      rounded-full
      tracking-widest
      hover:scale-105
      transition
      "

    >

      RESERVE NOW

    </button>



  </div>


</section>
    </main>

  );
}