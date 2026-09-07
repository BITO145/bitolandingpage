export default function TrustBar() {
  return (
<section className="bg-[#b27f4a] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-white">
            {[
              "FSSAI Certified Suppliers",
              "APEDA Registered",
              "ISO 22000 Partners",
              "Phytosanitary Compliant",
              "Halal Available",
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2">
                <span className="text-[#b27f4a]">✓</span>
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
