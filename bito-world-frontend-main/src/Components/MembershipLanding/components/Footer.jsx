import { useNavigate } from "react-router-dom";
import { footerSocials,footerCols } from "../../../utils/constants.js";

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
    <footer className="bg-[#F4F1E1] text-primary-500 px-4 sm:px-8 md:px-16 xl:px-24 pt-16 pb-12 max-w-[90rem] mx-auto">
      <div className="grid gap-y-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-[2fr_repeat(4,1fr)] grid-rows-3 md:grid-rows-2 xl:grid-rows-1">
        {/* Logo and Social Icons */}
        <div className="flex flex-col row-start-3 md:row-start-2 lg:row-start-1">
          <img
            src="/dark logo.png"
            alt="Yadora Logo"
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
            <p className="mb-4 font-semibold text-lg xl:text-xl text-primary-700">
              {column.heading}
            </p>
            <ul className="space-y-2">
              {column.links.map((linkObj, linkIndex) => (
                <li key={linkIndex}>
                  <button
                    onClick={() => navigate(linkObj.path)}
                    className="text-primary-500 xl:text-base hover:text-[#b27f49] transition-colors duration-150 text-left"
                  >
                    {linkObj.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t pt-6 text-sm text-center text-primary-400">
        © {new Date().getFullYear()} BITO. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
