import FooterLogo from "../../../assets/logos/footer-logo.png";

function Hero() {
  return (
    <section
      className="
        bg-[#f5f4f2]
        -mt-[170px]
        pt-[190px]
        pb-[80px]
        overflow-hidden
      "
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            {/* HEADING */}
            <h1
              className="
                m-0
                font-bold
                text-[#090909]
                leading-[1.1]
                text-[42px]
                md:text-[52px]
              "
            >
              Unlock Opportunities with{" "}
              <span className="text-[#ad7d43]">BITO</span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-[900px]
                text-[#4b5563]
                font-medium
                leading-[1.55]
                text-[18px]
                md:text-[21px]
              "
            >
              The BITO is dedicated to building a strong industrial ecosystem
              through collaboration, innovation, and sustainability. As a
              member, you join a powerful network driving growth, supporting
              startups, and enabling digital and green transformation.
            </p>

            {/* SECOND TEXT */}
            <p
              className="
                mt-16
                mb-0
                text-[#4b5563]
                font-medium
                text-[18px]
                md:text-[21px]
              "
            >
              Unlock new opportunities — connect, grow, and lead with BITO.
            </p>

            {/* BUTTON */}
            <a
              href="https://www.bitoindustriesassociation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                mt-8
                px-6
                py-3
                bg-[#151515]
                text-white
                rounded-md
                text-[15px]
                font-medium
                transition-all
                duration-300
                hover:bg-[#ad7d43]
              "
            >
              Visit BITO Industries Association

              <span className="ml-3">→</span>
            </a>

          </div>

          {/* RIGHT LOGO */}
          <div className="flex-shrink-0">
            <img
              src={FooterLogo}
              alt="BITO logo"
              className="
                w-[180px]
                md:w-[200px]
                lg:w-[220px]
                h-auto
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;