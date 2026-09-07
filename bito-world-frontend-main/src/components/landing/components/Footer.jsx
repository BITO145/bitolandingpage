import { useNavigate } from "react-router-dom";
import { footerSocials, footerCols } from "../../../utils/constants.js";
import Logo from "../../../assets/logos/footer-logo.png";

// const footerCols = [
//   {
//     id: 1,
//     heading: "About",
//     links: ["How it works", "Company", "Help & support"],
//   },

//   {
//     id: 4,
//     heading: "Support",
//     links: [
//       { label: "Shipping Policy", path: "/shipping-policy" },
//       { label: "Cookies policy", path: "/cookie-policy" },
//       { label: "Privacy policy", path: "/privacy-policy" },
//     ],
//   },
// ];

// const footerSocials = [
//   {
//     id: 1,
//     name: "Meta (formerly facebook)",
//     logo: new URL("../assets/socials/facebook.svg", import.meta.url),
//   },
//   {
//     id: 2,
//     name: "X (formerly twitter)",
//     logo: new URL("../assets/socials/twitter.svg", import.meta.url),
//   },
//   {
//     id: 3,
//     name: "Instagram",
//     logo: new URL("../assets/socials/instagram.svg", import.meta.url),
//   },
// ];


function Footer() {
  const navigate = useNavigate(); // ✅ Setup navigation

  return (
        <footer className="bg-[#1f1f1f] text-[#e8e2d6] pt-14 pb-8 mt-16 border-t-2 border-[#b27f49]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-16 xl:px-24">
        <div className="grid gap-y-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[2fr_repeat(4,1fr)] grid-rows-3 md:grid-rows-2 xl:grid-rows-1">
          {/* Logo and Social Icons */}
          <div className="flex flex-col row-start-3 md:row-start-2 lg:row-start-1">
            <img
              src={Logo}
              alt="BITO"
              className="mb-6 w-24 md:w-28 object-contain"
            />
            <ul className="flex gap-4">
              {footerSocials.map((logo, index) => (
                <li key={index}>
                  <a
                    href={logo.link || "#"}
                    aria-label={logo.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200 ease-in-out"
                  >
                    <img src={logo.logo} alt={logo.name} className="w-6 h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Columns */}
          {footerCols.map((column, index) => (
            <div key={index}>
              <p className="mb-4 font-semibold text-lg xl:text-xl text-[#b27f49]">
                {column.heading}
              </p>
              <ul className="space-y-2">
                {column.links.map((linkObj, linkIndex) => {
                  const label =
                    typeof linkObj === "string" ? linkObj : linkObj.label;
                  const path =
                    typeof linkObj === "string" ? "#" : linkObj.path;
                  return (
                    <li key={linkIndex}>
                      <button
                        onClick={() => navigate(linkObj.path || "#")}
                        className="text-[#e8e2d6] xl:text-base hover:text-[#b27f49] transition-colors duration-150 text-left"
                      >
                        {label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

            <div className="mt-12 border-t border-[#b27f49]/40 pt-6 text-sm text-center text-[#b27f49]">
        © {new Date().getFullYear()} BITO. All rights reserved.
      </div>
      </div>
    </footer>
  );
}

export default Footer;
