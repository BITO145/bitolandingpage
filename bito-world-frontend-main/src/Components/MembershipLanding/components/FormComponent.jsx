import {
  Mail,
  User,
  Phone,
  Building,
  Briefcase,
  Globe,
  MapPin,
  Target,
  FileText,
} from "lucide-react";
import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;

const FormComponent = ({ index }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    designation: "",
    purpose: "",
    additionalInfo: "",
  });
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const sectionTitles = {
    0: ["Industrial Growth", "industrial"],
    1: ["Healthcare & Education", "healthcare"],
    2: ["Startup Incubation", "startup"],
    3: ["Green Growth", "green"],
    4: ["Transform Through Technology", "technology"],
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const submissionData = {
      ...formData,
      section: sectionTitles[index][1],
      formType: sectionTitles[index][1],
    };
    try {
      const response = await axios.post(
        `${BACKEND_URL}/forms`,
        submissionData
      );
      setMessage("Registration successful!");
      toast.success("Registration successful!");
      console.log("User registered:", response.data);
      setFormData({
        formType: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        city: "",
        designation: "",
        purpose: "",
        additionalInfo: "",
      });
    } catch (error) {
      setMessage("Registration failed: " + error.response?.data?.message);
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        city: "",
        designation: "",
        purpose: "",
        additionalInfo: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    if (name === "phone") {
      processedValue = value;
      if (processedValue.length > 10) {
        processedValue = processedValue.slice(0, 10);
      }
    }
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="w-full bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6 z-50 border border-gray-300">
      {/* Left Column - Video */}
      <div className="w-full flex justify-center items-center">
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/yd-ZRsjyyRU"
          title="गुरमीत चौधरी से ख़ास बातचीत | बिहार से बॉलीवुड तक का सफर | @gurmeetchoudhary9347"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Right Column - Register Form */}
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#b27f49] mb-4">
          Register Your {sectionTitles[index][0]}
        </h2>
        <form onSubmit={onsubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-700"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.name
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.email
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-semibold text-slate-700"
            >
              Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                required
                placeholder="Enter your phone number"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.phone
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="text-sm font-semibold text-slate-700"
            >
              Company
            </label>
            <div className="relative">
              <Building
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Enter your company name"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.company
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.company && (
              <p className="text-sm text-red-600">{errors.company}</p>
            )}
          </div>

          {/* Designation */}
          <div className="space-y-2">
            <label
              htmlFor="designation"
              className="text-sm font-semibold text-slate-700"
            >
              Designation
            </label>
            <div className="relative">
              <Briefcase
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="designation"
                name="designation"
                type="text"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="Enter your designation"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.designation
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.designation && (
              <p className="text-sm text-red-600">{errors.designation}</p>
            )}
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label
              htmlFor="country"
              className="text-sm font-semibold text-slate-700"
            >
              Country
            </label>
            <div className="relative">
              <Globe
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Enter your country"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.country
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.country && (
              <p className="text-sm text-red-600">{errors.country}</p>
            )}
          </div>

          {/* City} */}
          <div className="space-y-2">
            <label
              htmlFor="city"
              className="text-sm font-semibold text-slate-700"
            >
              City
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Enter your city"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.city
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.city && (
              <p className="text-sm text-red-600">{errors.city}</p>
            )}
          </div>

          {/* Purpose */}
          <div className="space-y-2">
            <label
              htmlFor="purpose"
              className="text-sm font-semibold text-slate-700"
            >
              Purpose
            </label>
            <div className="relative">
              <Target
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <input
                id="purpose"
                name="purpose"
                type="text"
                value={formData.purpose}
                onChange={handleChange}
                required
                placeholder="Enter your purpose"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl ${
                  errors.purpose
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.purpose && (
              <p className="text-sm text-red-600">{errors.purpose}</p>
            )}
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <label
              htmlFor="additionalInfo"
              className="text-sm font-semibold text-slate-700"
            >
              Additional Information
            </label>
            <div className="relative">
              <FileText
                className="absolute left-3 top-4 text-slate-400"
                size={20}
              />
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                placeholder="Enter any additional information"
                className={`w-full pl-10 pr-3 py-3 border-2 rounded-xl resize-none ${
                  errors.additionalInfo
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-orange-500"
                }`}
              />
            </div>
            {errors.additionalInfo && (
              <p className="text-sm text-red-600">{errors.additionalInfo}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#b27f49] text-white py-2 px-4 rounded-xl"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
