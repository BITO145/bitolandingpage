import { RxCaretRight } from "react-icons/rx";
// Static UI: remove navigation logic
function AppStatistics() {
  return (
    <section className="bg-[#F4F1E1] py-8 sm:py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#b27f49] mb-4">
          Meet Our Visionary Leader
        </h2>
        <div className="w-20 h-1 bg-[#b27f49] mx-auto rounded-full"></div>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/chirag_paswan.png" // Make sure this image is in public/assets/
            alt="BITO Industries Association Team"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex-1 flex flex-col justify-center text-center sm:text-left ml-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#b27f49] mb-2 sm:mb-4">
            Shri Chirag Paswan
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#b27f49] font-semibold mb-4 sm:mb-6">
            Chief Patron
          </p>
          <p className="text-[#2C3E50] text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
            Dear All,
            <br />
            <br />
            I extend a warm welcome to you on behalf of Bihar International
            Trade Organization (BITO), a platform committed to advancing
            economic prosperity and cultural heritage in Bihar. At BITO, our
            mission revolves around shaping an "Atma Nirbhar Bihar" and
            fostering positive change through collaborative efforts.
            <br />
            <br />
            Empowering Innovation with BITO Startup
          </p>

          {/* CTA Section */}
          <div className="mt-6">
            <button
              onClick={() => window.location.href = "https://www.bitoindustriesassociation.com"}
              className="inline-flex items-center text-white bg-[#b27f49] py-2 px-4 rounded-lg hover:bg-[#9a6d39] transition duration-300"
            >
              <span className="mr-2">Learn More</span>
              <RxCaretRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppStatistics;
