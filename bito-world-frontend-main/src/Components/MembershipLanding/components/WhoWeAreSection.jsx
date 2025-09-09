import { CheckCircle } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#b27f49] mb-4">
            WHO WE ARE
          </h2>
          <div className="w-20 h-1 bg-[#b27f49] mx-auto rounded-full"></div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-full">
            <img
              src="/BITO Site 4.png"
              alt="BITO Industries Association Team"
              className="w-full h-full object-contain "
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#b27f49]">
              BITO
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The BITO is committed to creating an industrial
              ecosystem that encourages growth, innovation, market linkages, and
              sustainability. As an integral part of BITO, our primary aim is to
              facilitate collaboration among industries, government bodies, and
              other stakeholders to propel industrial advancement and strengthen
              presence in the global economic landscape.
            </p>

            <h4 className="text-xl font-semibold mb-4 text-[#b27f49]">
              The BITO is dedicated to fostering a thriving
              industrial environment through:
            </h4>

            <ul className="space-y-4">
              {[
                {
                  title: "Business Connect:",
                  description:
                    "Facilitating connections and partnerships among businesses, government bodies, and stakeholders.",
                },
                {
                  title: "Market and Product Access:",
                  description:
                    "Enhancing opportunities for market expansion and product accessibility.",
                },
                {
                  title: "Industry Voice:",
                  description:
                    "Representing industry interests and advocating for supportive policies.",
                },
                {
                  title: "Sustainable Growth:",
                  description:
                    "Promoting eco-friendly practices and ensuring responsible industrial development.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#b27f49] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">
                      {item.title}
                    </span>{" "}
                    <span className="text-gray-700">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-[#f9f4ee] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-[#b27f49]">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a catalyst for industrial excellence and sustainable
              development while promoting innovation and collaboration among the
              industries, government and stakeholders for a sustainable
              ecosystem.
            </p>
          </div>
          <div className="bg-[#f9f4ee] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-[#b27f49]">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Create opportunities for market expansion, bridge gaps between
              industries, government, and stakeholders, and support for
              meaningful policy changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
