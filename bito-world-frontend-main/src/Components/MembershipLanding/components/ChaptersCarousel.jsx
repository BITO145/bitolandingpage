import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const chapters = [
  {
    id: 1,
    name: "Singapore Chapter",
    location: "Singapore",
    description:
      "Our flagship chapter working on industrial policy reform and sustainable manufacturing practices.",
    members: 450,
    image:
      "https://images.unsplash.com/photo-1565372913264-c40f5db6ee3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Sydney Chapter",
    location: "Australia",
    description:
      "Focused on connecting startups with established industries and promoting innovation.",
    members: 380,
    image:
      "https://images.unsplash.com/photo-1508610048659-a06b669e6f31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Tokyo Chapter",
    location: "Japan",
    description:
      "Specializing in technology integration and digital transformation for traditional industries.",
    members: 420,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "New York Chapter",
    location: "USA",
    description:
      "Pioneering industry-academia partnerships and deep tech investments.",
    members: 395,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "London Chapter",
    location: "UK",
    description:
      "Bridging traditional markets with cutting-edge tech startups and reforms.",
    members: 360,
    image:
      "https://images.unsplash.com/photo-1508898578281-774ac4893c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Dubai Chapter",
    location: "UAE",
    description:
      "Integrating sustainability with infrastructure and real estate innovation.",
    members: 410,
    image:
      "https://images.unsplash.com/photo-1585325701953-14e7f207d14f?auto=format&fit=crop&w=800&q=80",
  },
];

export function ChaptersCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1280) setVisibleCount(4);
    else if (window.innerWidth >= 768) setVisibleCount(2);
    else setVisibleCount(1);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const maxIndex = chapters.length - visibleCount;
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [visibleCount]);

  const goToPrevious = () => {
    const maxIndex = chapters.length - visibleCount;
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    const maxIndex = chapters.length - visibleCount;
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const slideWidth = 100 / visibleCount;

  return (
    <section className="relative w-full px-4 sm:px-10 lg:px-20 py-16 bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-[#b27f49] tracking-tight">
          Our Global Chapters
        </h2>
        <div className="flex gap-3">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-[#f4f1e1] hover:bg-[#e8e2d3] transition"
          >
            <ChevronLeft className="h-5 w-5 text-[#b27f49]" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-[#f4f1e1] hover:bg-[#e8e2d3] transition"
          >
            <ChevronRight className="h-5 w-5 text-[#b27f49]" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(chapters.length * 100) / visibleCount}%`,
            transform: `translateX(-${activeIndex * slideWidth}%)`,
          }}
        >
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              style={{ width: `${slideWidth}%` }}
              className="p-4"
            >
              <div className="bg-white border border-[#f1ebe1] shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all h-full">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={chapter.image}
                    alt={chapter.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {chapter.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1 text-[#b27f49]" />
                    <span>{chapter.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {chapter.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-medium bg-[#f4f1e1] text-[#b27f49] px-2 py-1 rounded-md">
                      👥 {chapter.members} Members
                    </span>
                    <button
                      onClick={() => navigate("/signin")}
                      className="text-sm font-semibold text-white bg-[#b27f49] px-4 py-1.5 rounded-md hover:brightness-110 transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: chapters.length - visibleCount + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#b27f49] scale-125" : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>
    </section>
  );
}
