import { useNavigate } from "react-router-dom";
import { features } from "../../../utils/constants.js";

// const features = [
//   {
//     id: 1,
//     name: "Networking",
//     description:
//       "Connect with business leaders, investors, and global chapters.",
//     icon: new URL("../../assets/features/engagement.svg", import.meta.url),
//   },
//   {
//     id: 2,
//     name: "Collaboration",
//     description: "Partner with industries, government bodies, and innovators.",
//     icon: new URL("../../assets/features/autonomy.svg", import.meta.url),
//   },
//   {
//     id: 3,
//     name: "Access",
//     description:
//       "Get support to expand your products and services into new markets.",
//     icon: new URL("../../assets/features/free.svg", import.meta.url),
//   },
//   {
//     id: 4,
//     name: "Innovation ",
//     description: "Opportunities in AI, Cybersecurity, AgriTech, and more.",
//     icon: new URL("../../assets/features/earn.svg", import.meta.url),
//   },
// ];

function Features() {
  const navigate = useNavigate();
  return (
    <section className="m-auto px-4 sm:px-8 md:px-16 xl:px-24 pt-14 sm:pt-20 md:pt-32 pb-16 md:pb-24 max-w-[90rem]">
      <div className="gap-y-16 md:gap-y-24 grid lg:grid-cols-2">
        {/* Left Section: Info & CTA */}
        <div className="w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%]">
          <h3 className="mb-4 font-bold text-[2rem]/[2.5rem] text-[#b27f49] sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
            BITO
          </h3>
          <p className="mb-6 xl:text-lg text-gray-700 tracking-tight">
            BITO (Bihar International Trade Organization) gives you
            exclusive access to a thriving network of entrepreneurs, businesses,
            policymakers, and global partners — all working together to elevate
            Bihar's industrial ecosystem.
          </p>

          <button
            onClick={() => navigate("/signin")}
            className="bg-[#b27f49] hover:bg-[#a3703f] px-8 py-4 rounded-2xl text-white xl:text-lg tracking-tight transition-all duration-200"
          >
            Become a Member
          </button>
        </div>

        {/* Right Section: Features */}
        <ul className="justify-items-center sm:justify-items-start gap-x-8 gap-y-12 md:gap-y-20 grid sm:grid-cols-2 sm:grid-rows-2">
          {features.map((feature) => (
            <li
              className="w-[80%] xl:w-5/6 text-center sm:text-start tracking-tight"
              key={feature.id}
            >
              <img
                src={feature.icon}
                alt={feature.name}
                className="mb-6 w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto sm:mx-0"
              />
              <h4 className="mb-2 font-bold text-xl text-[#b27f49]">
                {feature.name}
              </h4>
              <p className="text-gray-700 xl:text-lg">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
