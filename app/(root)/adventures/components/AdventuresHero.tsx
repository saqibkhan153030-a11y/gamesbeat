"use client";


export default function AdventuresHero() {
  return (
    <section
      className="
        relative
        w-full
        h-[32vh]

        flex
        items-center

        px-6 sm:px-10 md:px-16 lg:px-24

        bg-no-repeat
        bg-cover

        bg-[url('/adventures-mobile.png')]
        md:bg-[url('/adventures.png')]

        bg-bottom
      "
    >
      {/* ✅ BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ CONTENT (Above Overlay) */}
      <div className="relative z-10 max-w-lg mb-10  lg:pl-9 md:mb-20">
        <h1
          className="
            text-3xl sm:text-5xl md:text-6xl lg:text-[42px]
            text-white
          "
          style={{
            fontFamily: "'Bangers', cursive",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Adventures
        </h1>
      </div>
    </section>
  );
}
