import Testimonial from "./Testimonial";

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

function Testimonials() {
  return (
    <section className="m-auto py-12 sm:py-16 xl:py-24 max-w-[90rem]">
      <h2 className="px-4 sm:px-8 md:px-16 xl:px-24 pb-12 sm:pb-14 md:pb-16 font-bold text-[2rem]/[2.5rem] text-primary-500 sm:text-4xl md:text-5xl xl:text-[3.5rem]/[4rem] tracking-tight">
        Listen to what our{" "}
        <span className="underline underline-offset-2 decoration-8 decoration-accent-500">
          satisfied
        </span>{" "}
        <br className="sm:block hidden" />
        members have to say
      </h2>

      <div className="relative">
        <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent sm:w-32 xl:w-64 h-full" />
        <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-white to-transparent sm:w-32 xl:w-64 h-full" />

        {/* TESTIMONIAL ROW 1 */}
        <div className="bg-white mb-4 lg:mb-6 whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>

        {/* TESTIMONIAL ROW 2 */}
        <div className="bg-white whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
