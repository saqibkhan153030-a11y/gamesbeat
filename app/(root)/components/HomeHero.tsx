"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function HomeHero() {
  const images = [
    "/home-hero1.png",
    "/home-hero2.jpg",
    "/home-hero3.jpg", // ❌ this one should NOT be clickable
    "/home-hero4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
    }, 8000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => {
          const ImageContent = (
            <div className="relative w-full">
              <img
                src={img}
                alt={`hero-${index}`}
                className="
                w-full
                h-[50vh]        /* 🔹 Mobile */
                md:h-[50vh]     /* 🔹 iPad */
                lg:h-[74vh]     /* 🔹 Desktop */
                object-fill
              "
              
              />

              {/* TEXT ONLY ON IMAGE 3 */}
              {index === 2 && (
                <div className="absolute inset-0 flex flex-col justify-center items-center mb-60 text-center text-white px-4 pointer-events-none">
                  <h1
                    className="text-4xl md:text-7xl mb-4"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Play New Games
                  </h1>
                  <h3
                    className="text-3xl md:text-6xl"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Every Week
                  </h3>
                </div>
              )}
            </div>
          );

          // ✅ Image 3 → NO LINK
          if (index === 2) {
            return (
              <div key={index} className="min-w-full">
                {ImageContent}
              </div>
            );
          }

          // ✅ Other images → clickable
          return (
            <Link key={index} href="/login" className="min-w-full block">
              {ImageContent}
            </Link>
          );
        })}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
        className="absolute left-7 top-1/2 -translate-y-1/2 text-white/70 z-20 hover:text-white"
      >
        <FaChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() =>
          setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))
        }
        className="absolute right-7 top-1/2 -translate-y-1/2 text-white/70 z-20 hover:text-white"
      >
        <FaChevronRight size={22} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white z-30" />
    </section>
  );
}
