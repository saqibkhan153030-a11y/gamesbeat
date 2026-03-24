"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const games = [
  { name: "Ben10 Escape Route", image: "/newgame1.jpg" },
  { name: "Frozen Rush", image: "/newgame2.jpg" },
  { name: "Speed Gotham City", image: "/newgame3.jpg" },
  { name: "Mr. Bean Matching Pais", image: "/newgame4.jpg" },
  { name: "You can be anything", image: "/newgame5.jpg" },
  { name: "X-Wing Fighter", image: "/newgame6.jpg" },
];

export default function NewGames() {
  const router = useRouter();

  return (
    <section className="relative px-4 sm:px-6 md:px-10 py-11.5  lg:h-145">
      {/* ================= BACKGROUND ================= */}

      {/* ✅ MOBILE BACKGROUND (ADD YOUR MOBILE IMAGE HERE) */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat block lg:hidden"
        style={{ backgroundImage: "url('/newgamebg-mobile.png')" }}
        /* 🔥 CHANGE THIS IMAGE WHEN YOU PROVIDE MOBILE VERSION */
      />

      {/* ✅ DESKTOP BACKGROUND (YOUR EXISTING IMAGE) */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat hidden lg:block"
        style={{ backgroundImage: "url('/newgamebg.png')" }}
      />

      {/* CONTENT */}
      <div className="relative    z-10">
        {/* HEADER */}

        <div
          className="
           mb-13
             
           px-4
           sm:px-6
           md:px-18
           flex
           flex-col
           items-center
           gap-4
           lg:flex-row
           lg:items-center
           lg:justify-between
         "
        >
          <h1
            className="
              text-2xl
      sm:text-3xl
      md:text-[38px]
      lg:text-[40px]
      font-bold
              text-white
              text-center
              lg:text-left
              -ml-2
            "
            style={{ fontFamily: "'Bangers', cursive" }}
          >
            NEW GAMES
          </h1>

          <button
            onClick={() => router.push("/ranking")}
            className="
               bg-black/30
              text-white
              px-3          /* ✅ CHANGED: bigger button */
              py-0.5             /* ✅ CHANGED */
              rounded-xl
              transition
              duration-300
              hover:text-[#14bfd1]
              flex
              items-center
              gap-2
              lg:mr-26

            "
          >
            <span className="text-3xl">&raquo;</span>
            <span className="text-lg font-bold">See all</span>{" "}
            {/* ✅ CHANGED */}
          </button>
        </div>

        {/* CARDS */}
        <div
          className="
          
            grid
            grid-cols-2
            md:grid-cols-3
            lg:flex
            lg:flex-row
            gap-6              /* ✅ CHANGED: more spacing */
            place-items-center
            lg:justify-center
          "
        >
          {games.map((game, index) => (
            <div
              key={index}
              onClick={() => router.push("/login")}
              className="
              mt-3
            
                h-60              
                w-44             
                sm:h-64          
                sm:w-48
                md:h-66       
                md:w-50
                group
                relative
                cursor-pointer
                rounded-xl
                bg-[#e6f4f5]
                shadow-lg
              
                transition-transform
                duration-500
                lg:hover:scale-120
                z-20
                 hover:z-50  
                 border border-white/10
              "
            >
              {/* HOVER OVERLAY */}
              <div
                className="
                absolute inset-0  
            rounded-xl        

                  opacity-0
                  lg:group-hover:opacity-100
                  transition
                  duration-300
                  z-10
                  flex
                  items-center
                  justify-center
                  bg-[#14bfd1]/40
                  
                "
              >
                <span
                  className="text-white font-bold text-base md:text-2xl" /* ✅ CHANGED */
                  style={{ fontFamily: "'Bangers', cursive" }}
                >
                  Play Now
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative h-40 w-full mt-7.5 px-4.5">
                {" "}
                {/* ✅ CHANGED */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="text-center mt-3 relative z-20">
                <h2 className="text-black text-sm md:text-sm ">
                  {" "}
                  {/* ✅ CHANGED */}
                  {game.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white z-30" />
    </section>
  );
}
