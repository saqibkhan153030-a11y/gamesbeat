"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const games = [
  { name: "8 Ball Pool", image: "/recomendations1.jpg" },
  { name: "Cricket World Cup", image: "/recomendations2.jpg" },
  { name: "Formula Rush", image: "/recomendations3.jpg" },
  { name: "Kick the soccer ball", image: "/recomendations4.jpg" },
  { name: "Tiny Race", image: "/recomendations5.jpg" },
  { name: "Tourung Cars", image: "/recomendations6.jpg" },
];

export default function Recomendations() {
  const router = useRouter();

  return (
    <section className="relative px-4 sm:px-6 md:px-10 py-11.5  lg:h-145">
      {/* ================= BACKGROUND ================= */}

      {/* ✅ MOBILE BACKGROUND (ADD YOUR MOBILE IMAGE HERE) */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat block lg:hidden"
        style={{ backgroundImage: "url('/recomendationbg-mobile.png')" }}
        /* 🔥 CHANGE THIS IMAGE WHEN YOU PROVIDE MOBILE VERSION */
      />

      {/* ✅ DESKTOP BACKGROUND (YOUR EXISTING IMAGE) */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat hidden lg:block"
        style={{ backgroundImage: "url('/recomendationbg.png')" }}
      />


      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white z-30" />
    </section>
  );
}
