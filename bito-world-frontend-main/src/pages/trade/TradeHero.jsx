import {
  LuGlobe,
  LuUsers,
  LuLayers,
  LuTimer,
  LuCheck,
  LuArrowUpRight,
} from "react-icons/lu";

import tradapic from "../../assets/tradehero.png";

export default function TradeHero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-[#2b1a13] -mt-4-">
      
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        <img
          src={tradapic}
          alt="India global trade"
          className="h-full w-full object-cover object-center"
        />

        {/* Single clean overlay - no muddy gradients */}
        <div className="absolute inset-0 bg-[#24140f]/65" />

        {/* Natural readability shadow on left */}
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#24140f]/25 via-[#24140f]/25 to-transparent" />
      </div>

      {/* ================= SUBTLE TEXTURE ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-6 lg:px-10">
        
        {/* MAIN AREA */}

        <div className="flex flex-1 items-center">
          
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

            {/* ================= LEFT ================= */}

            <div className="max-w-[720px]">
              
              {/* SMALL LABEL */}

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#dca75b]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dca75b]">
                  Exporting India Worldwide
                </span>
              </div>


              {/* HEADING */}

              <h1 className="font-bold leading-[0.98] tracking-[-0.045em]">
                
                <span className="block text-[52px] text-white sm:text-[68px] lg:text-[76px]">
                  One Partner.
                </span>

                <span className="mt-3 block text-[52px] text-[#dca75b] sm:text-[68px] lg:text-[76px]">
                  Endless Possibilities.
                </span>

              </h1>


              {/* DESCRIPTION */}

              <p className="mt-7 max-w-[600px] text-[16px] leading-[1.8] text-white/70 lg:text-[17px]">
                Simplify your sourcing journey with one trusted export partner.
                BITO connects global buyers with verified Indian manufacturers,
                reliable logistics and seamless trade support.
              </p>


              {/* FEATURES */}

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                
                {[
                  "Verified Manufacturers",
                  "Global Logistics",
                  "Quality Assured",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/75"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#dca75b]/40">
                      <LuCheck className="h-3 w-3 text-[#dca75b]" />
                    </span>

                    {item}
                  </div>
                ))}

              </div>


              {/* CTA */}

              <div className="mt-10 flex items-center gap-6">
                
               


              </div>

            </div>


       

          </div>

        </div>


        {/* ================= BOTTOM BAR ================= */}

        <div className="flex items-center justify-between border-t border-white/10 py-6 text-sm">

          <span className="text-white/40">
            Your trusted sourcing partner from India
          </span>

          <span className="hidden text-white/40 md:block">
            Built for global trade. Rooted in India.
          </span>

        </div>

      </div>

    </section>
  );
}