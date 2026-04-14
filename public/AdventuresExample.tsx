"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const games = [
  { name: "Air Race", image: "/top-week-game1.jpg" },
  { name: "Nave X Racer", image: "/top-week-game6.jpg" },
  { name: "Creepy Flappy", image: "/top-week-game2.jpg" },
  { name: "Cyberman V", image: "/top-week-game3.jpg" },
  { name: "Danger Cliff", image: "/top-week-game4.jpg" },
  { name: "Doodle Extra Jump", image: "/top-week-game5.jpg" },
];

export default function AdventuresExample() {
  const router = useRouter();

  return (
    <section className="relative px-4 sm:px-6 md:px-10 bg-white py-7.5 lg:h-80">
      

      {/* CONTENT */}
      <div className="relative z-10">
    

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
                border
                 border-black/15             
                w-44             
                sm:h-64          
                sm:w-48
                md:h-61        
                md:w-50
                group
                relative
                cursor-pointer
                rounded-xl
                bg-white
               
              
                transition-transform
                duration-500
                lg:hover:scale-120
                z-20
                 hover:z-50  
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

     
    </section>
  );
}



