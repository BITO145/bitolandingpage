import React, { useState } from "react";
import { DESTINATIONS, PACKAGING, PRODUCTS } from "./tradeData";

const INITIAL_FORM = {
  product: "",
  quantity: "",
  destination: "",
  specs: "",
  company: "",
  email: "",
  phone: "",
};

export default function LeadConfigurator() {
  const [packaging, setPackaging] = useState(["Bulk"]);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const togglePackaging = (value) => {
    setPackaging((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="configurator" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#b27f4a] font-semibold text-sm uppercase tracking-widest mb-2">
            B2B Sourcing Configurator
          </p>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#422a1d]">
            Request a Sourcing Proposal
          </h2>

          <p className="text-[#523b2f] mt-3">
            Complete the form below and receive a tailored quote within 48
            hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#0D6B4F]/30 rounded-2xl p-12 text-center shadow-sm">
            <div className="text-5xl mb-4">✅</div>

            <h3 className="text-2xl font-bold text-[#422a1d] mb-2 font-['Outfit']">
              Proposal Request Received
            </h3>

            <p className="text-[#523b2f] mb-6">
              Our trade desk will contact you within 48 hours with a tailored
              sourcing proposal.
            </p>

            <p className="text-sm text-[#523b2f]">
              For urgent requirements, reach us on{" "}
              <a
                href="https://wa.me/919999999999"
                className="text-[#25D366] font-semibold"
              >
                WhatsApp
              </a>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#dbc1a5] shadow-sm overflow-hidden"
          >
            <div className="bg-[#422a1d] px-8 py-5">
              <h3 className="text-white font-semibold font-['Outfit']">
                Sourcing Configuration
              </h3>

              <p className="text-[#e8e2d6] text-sm">
                Fields marked * are required
              </p>
            </div>

            <div className="p-8 space-y-6">
              {/* Product + Quantity */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                    Product Category *
                  </label>

                  <select
                    required
                    value={formData.product}
                    onChange={(e) =>
                      updateField("product", e.target.value)
                    }
                    className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm text-[#422a1d] bg-white focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                  >
                    <option value="">Select product...</option>

                    {PRODUCTS.map((p) => (
                      <option key={p.code} value={p.code}>
                        {p.code} — {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                    Container Volume (MOQ: 1 container) *
                  </label>

                  <select
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      updateField("quantity", e.target.value)
                    }
                    className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm text-[#422a1d] bg-white focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                  >
                    <option value="">Select volume...</option>
                    <option value="1">
                      1 × 20ft Container (~18–20 MT)
                    </option>
                    <option value="2">2 × 20ft Containers</option>
                    <option value="40ft">
                      1 × 40ft Container (~24–26 MT)
                    </option>
                    <option value="lcl">
                      LCL (Less than Container Load)
                    </option>
                    <option value="mixed">Mixed-product Load</option>
                    <option value="custom">Custom / Discuss</option>
                  </select>
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                  Destination Port / Region *
                </label>

                <select
                  required
                  value={formData.destination}
                  onChange={(e) =>
                    updateField("destination", e.target.value)
                  }
                  className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm text-[#422a1d] bg-white focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                >
                  <option value="">Select destination...</option>

                  {DESTINATIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Packaging */}
              <div>
                <label className="block text-sm font-semibold text-[#422a1d] mb-3">
                  Packaging Format
                </label>

                <div className="flex flex-wrap gap-2">
                  {PACKAGING.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePackaging(p)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        packaging.includes(p)
                          ? "bg-[#422a1d] text-white border-[#422a1d]"
                          : "bg-white text-[#523b2f] border-[#dbc1a5] hover:border-[#b27f4a] hover:text-[#b27f4a]"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                  Technical Specifications
                </label>

                <textarea
                  rows={3}
                  placeholder="Grade, moisture %, certifications required (organic, halal, kosher), labelling requirements, any specific standard (e.g. EU/UK/US import norms)..."
                  value={formData.specs}
                  onChange={(e) =>
                    updateField("specs", e.target.value)
                  }
                  className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm text-[#422a1d] bg-white focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition resize-none"
                />
              </div>

              {/* Your Details */}
              <div className="border-t border-[#f8f4ec] pt-6">
                <p className="text-xs font-semibold text-[#523b2f] uppercase tracking-widest mb-4">
                  Your Details
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                      Company *
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="ABC Imports Ltd."
                      value={formData.company}
                      onChange={(e) =>
                        updateField("company", e.target.value)
                      }
                      className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                      Email *
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="buyer@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#422a1d] mb-2">
                      WhatsApp / Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value)
                      }
                      className="w-full border border-[#dbc1a5] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#b27f4a] focus:ring-2 focus:ring-[#b27f4a]/20 transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="bg-[#FFFFFF] border-t border-[#dbc1a5] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#523b2f]">
                By submitting, you agree to our{" "}
                <span className="text-[#b27f4a] cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>

              <button
                type="submit"
                className="bg-[#b27f4a] hover:bg-[#9a6530] text-[#422a1d] font-bold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
              >
                Submit Sourcing Proposal Request →
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}