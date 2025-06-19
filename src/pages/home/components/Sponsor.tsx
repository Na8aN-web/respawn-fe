const Sponsor = () => {
  const sponsors = [
    "/sponsor1.png", "/sponsor2.png", "/sponsor3.png",
    "/sponsor4.png", "/sponsor5.png", "/sponsor6.png",
    "/sponsor7.png"
  ];

  return (
    <section className="flex flex-col text-white items-center gap-6 py-8 md:gap-8 md:py-12">
      <h1 className="text-xl md:text-2xl text-[#D0BFED]">Our sponsors</h1>
      <div className="relative w-full bg-[#263549] p-8 overflow-hidden">
        <div className="scroll-container flex w-max animate-scroll gap-12 px-6">
          {/* Repeat the list twice for seamless loop */}
          {[...sponsors, ...sponsors].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Sponsor ${i}`}
              className="h-8 md:h-12 object-contain min-w-[80px] md:min-w-[100px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
