const features = [
  {
    id: 1,
    name: "Networking",
    description:
      "Connect with business leaders, investors, and global chapters.",
    icon: new URL("../assets/features/engagement.svg", import.meta.url),
  },
  {
    id: 2,
    name: "Collaboration",
    description: "Partner with industries, government bodies, and innovators.",
    icon: new URL("../assets/features/autonomy.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Access",
    description:
      "Get support to expand your products and services into new markets.",
    icon: new URL("../assets/features/free.svg", import.meta.url),
  },
  {
    id: 4,
    name: "Innovation ",
    description: "Opportunities in AI, Cybersecurity, AgriTech, and more.",
    icon: new URL("../assets/features/earn.svg", import.meta.url),
  },
];
const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: new URL("../assets/socials/facebook.svg", import.meta.url),
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: new URL("../assets/socials/twitter.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Instagram",
    logo: new URL("../assets/socials/instagram.svg", import.meta.url),
  },
];

const footerCols = [
  {
    id: 1,
    heading: "About",
    links: ["How it works", "Company", "Help & support"],
  },

  {
    id: 4,
    heading: "Support",
    links: [
      { label: "Shipping Policy", path: "/shipping-policy" },
      { label: "Cookies policy", path: "/cookie-policy" },
      { label: "Privacy policy", path: "/privacy-policy" },
    ],
  },
];

const testimonials = [
  {
    program: "Platinum",
    description:
      "Being part of BITO means being part of Bihar’s growth and transformation. It’s about honoring our roots, and shaping a future. I’m grateful to contribute to this meaningful journey.",
    image: new URL("../assets/testimonials/t1.jpg", import.meta.url),
    name: "Farooque",
    title: "Customer Success Manager, Dubai",
  },
  {
    program: "Diamond",
    description:
      "BITO is more than an organization—it’s a movement. By empowering entrepreneurs, fostering innovation, and honoring Bihar’s rich heritage, it’s building bridges between our past and our global future. I’m proud to be part of this journey toward a more united and prosperous Bihar.",
    image: new URL("../assets/testimonials/t2.jpg", import.meta.url),
    name: "Upendra",
    // title: "Product lead at EducationWave",
  },
  {
    program: "Silver",
    description:
      "As an education leader, I admire BITO’s focus on experiential learning through trade exposure, internships, and global forums. These initiatives broaden horizons and make learning truly meaningful.",
    image: new URL("../assets/testimonials/t3.jpg", import.meta.url),
    name: "Abhilasha Singh",
    title: "Principal Shining Star International School, Abu Dhabi",
  },
  {
    program: "Gold",
    description:
      "We are expert in delivering exhibitions, interior and infrastructure services across worldwide having company presence in Patna, Dubai, Milano, Warsaw. Now just we launched in Patna Indl Area also.",
    image: new URL("../assets/testimonials/t4.jpg", import.meta.url),
    name: "Mukesh Pandey",
    title: "Managing Director",
  },
];



export { features, footerSocials , footerCols,testimonials};