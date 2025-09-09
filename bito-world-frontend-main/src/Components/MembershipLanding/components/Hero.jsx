function Hero() {
  return (
    <section className="pt-24 md:pt-28 sm:pb-8 md:pb-16">
      <div className="flex flex-nowrap justify-between md:gap-x-24 lg:gap-x-14 flex-col md:flex-row">
        {/* Left Text Section */}
        <div className="max-w-[50rem]">
          <h1 className="mb-8 font-bold text-3xl sm:text-4xl md:text-5xl/[3.5rem] lg:text-6xl/[4rem] xl:text-7xl/[5rem] tracking-tight text-black">
            Unlock Opportunities with{" "}
            <span className="text-[#b27f49]">BITO</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            The BITO is dedicated to building a
            strong industrial ecosystem through collaboration, innovation, and
            sustainability. As a member, you join a powerful network driving
            growth, supporting startups, and enabling digital and green
            transformation.
            <br />
            <br />
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Unlock new opportunities — connect, grow, and lead with BITO.
          </p>
        </div>

        {/* Right Figure / Badge */}
        <figure>
          <div className="lg:flex justify-center items-center hidden xl:mr-8 rounded-full w-52 h-52 outline outline-1 outline-[#b27f49] bg-white overflow-hidden">
            <div className="flex justify-center items-center rounded-full w-44 h-44 bg-[#b27f49]">
              <img
                src="/LOGOWHITE.png" // Absolute path from public folder
                alt="BITO Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
