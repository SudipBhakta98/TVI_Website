import React, { useState } from "react";
import axios from "axios";
import SEO from "../components/SEO";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
  FaLinkedinIn,
  FaWhatsapp,
  FaShieldHalved,
  FaUsers,
  FaLeaf,
  FaGear,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import {
  contactHero,
  contactDetails,
  socialLinks,
  trustBadges,
} from "../assets/contactAssets.js";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.success) {
        setStatus({
          loading: false,
          success:
            "Your message has been sent successfully! A confirmation email has been dispatched to your inbox.",
          error: null,
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(
          response.data?.message || "Failed to send message. Please try again.",
        );
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong while dispatching your request.";

      setStatus({
        loading: false,
        success: null,
        error: errorMessage,
      });
    }
  };

  return (
    <><SEO
  title="Contact Us | Technovision Industries"
  description="Get in touch with Technovision Industries for custom sheet metal manufacturing quotes, facility tours, and OEM partnership inquiries."
  path="/contact"
/>
    <div
      id="contact"
      className="w-full bg-[#F8FAFC] font-sans text-slate-800 overflow-x-hidden min-h-screen"
    >
      {/* Animation Styles */}
      <style>{`
        @keyframes fastZoomOut {
          from {
            transform: scale(1.25);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-out-fast {
          animation: fastZoomOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }

        .animate-scale-up {
          animation: scaleUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>

      {/* ================= 1. HERO COVER SECTION ================= */}
      <section className="relative w-full min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden bg-[#F8FAFC]">
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none overflow-hidden">
          {/* Desktop Angled Clip Path Layer with Zoom Animation */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative hidden lg:block animate-zoom-out-fast origin-center"
            style={{
              backgroundImage: `url('${contactHero.bgImage}')`,
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>

          {/* Mobile Background Fallback with Zoom Animation */}
          <div
            className="absolute top-0 right-0 w-full sm:w-2/5 h-full bg-cover bg-right bg-no-repeat opacity-20 lg:hidden animate-zoom-out-fast origin-center"
            style={{ backgroundImage: `url(${contactHero.bgImage})` }}
          />
        </div>

        <div className="relative z-10 max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-12 py-12">
          <div className="max-w-xl">
            {/* Animated Kicker */}
            <div className="flex items-center gap-2 mb-3 animate-fade-in-up delay-100">
              <span className="w-6 h-[2px] bg-[#65A30D]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#65A30D]">
                {contactHero.kicker}
              </span>
            </div>

            {/* Animated Title */}
            <h1 className="text-[#1E293B] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.15] whitespace-pre-line animate-fade-in-up delay-200">
              {contactHero.title}
            </h1>

            {/* Animated Subtitle */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mt-4 max-w-md animate-fade-in-up delay-300">
              {contactHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12 pb-16 space-y-10">
        {/* ================= 2. QUICK INFO CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8 relative z-20">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100/80 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-lime-200 animate-fade-in-up delay-100 group">
            <div className="w-12 h-12 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#65A30D] group-hover:text-white transition-all duration-300">
              <FaLocationDot className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#65A30D] block mb-1">
                {contactDetails.address.title}
              </span>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">
                {contactDetails.address.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < contactDetails.address.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100/80 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-lime-200 animate-fade-in-up delay-200 group">
            <div className="w-12 h-12 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#65A30D] group-hover:text-white transition-all duration-300">
              <FaPhone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#65A30D] block mb-1">
                {contactDetails.phone.title}
              </span>
              <p className="text-slate-700 text-xs font-bold leading-relaxed">
                {contactDetails.phone.numbers.map((num, i) => (
                  <React.Fragment key={i}>
                    {num}
                    {i < contactDetails.phone.numbers.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100/80 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-lime-200 animate-fade-in-up delay-300 group">
            <div className="w-12 h-12 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#65A30D] group-hover:text-white transition-all duration-300">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#65A30D] block mb-1">
                {contactDetails.email.title}
              </span>
              {contactDetails.email.addresses.map((email, i) => (
                <a
                  key={i}
                  href={`mailto:${email}`}
                  className="text-slate-700 hover:text-[#65A30D] text-xs font-bold leading-relaxed block transition-colors break-all"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100/80 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-lime-200 animate-fade-in-up delay-400 group">
            <div className="w-12 h-12 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#65A30D] group-hover:text-white transition-all duration-300">
              <FaGlobe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#65A30D] block mb-1">
                {contactDetails.website.title}
              </span>
              <a
                href={contactDetails.website.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:text-[#65A30D] text-xs font-bold leading-relaxed transition-colors break-all"
              >
                {contactDetails.website.displayUrl}
              </a>
            </div>
          </div>
        </div>

        {/* ================= 3. FORM & MAP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Container */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between animate-scale-up delay-200 transition-all duration-300 hover:shadow-md">
            <div>
              <h2 className="text-[#1E293B] font-black text-lg tracking-wider uppercase mb-6">
                SEND US A MESSAGE
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Global Tech Ltd"
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Manufacturing RFP / General Inquiry"
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md px-4 py-3 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Detail your component specs or questions here..."
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-md p-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#65A30D] focus:bg-white focus:ring-2 focus:ring-lime-100 transition-all duration-200 resize-none"
                  />
                </div>

                {status.success && (
                  <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md text-xs font-semibold animate-fade-in">
                    {status.success}
                  </div>
                )}
                {status.error && (
                  <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-md text-xs font-semibold animate-fade-in">
                    {status.error}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-lime-600 disabled:bg-slate-400 text-white text-xs font-black tracking-wider uppercase px-6 py-3 rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                  >
                    <span>
                      {status.loading ? "PROCESSING..." : "SEND MESSAGE"}
                    </span>
                    <FaPaperPlane className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* "WHERE WE ARE" Map Embed + Social Action Buttons */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between overflow-hidden animate-scale-up delay-300 transition-all duration-300 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-[#1E293B] font-black text-lg tracking-wider uppercase">
                  WHERE WE ARE
                </h2>
                <a
                  href={contactDetails.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#65A30D] hover:text-red-600 uppercase tracking-wide transition-colors group"
                >
                  <span>Open In Maps</span>
                  <FaArrowUpRightFromSquare className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
              <div className="w-10 h-[2px] bg-[#65A30D] mb-4" />

              <div className="w-full h-[220px] sm:h-[240px] rounded-lg overflow-hidden border border-slate-200 relative my-3 group">
                <iframe
                  src={contactDetails.address.embedMapUrl}
                  className="w-full h-full border-0 absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Technovision Industries Location Map"
                />
              </div>

              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-3">
                Proudly based in Haragadde, Jigani, serving clients across the
                globe with precision, quality, and innovation.
              </p>

              {/* Direct WhatsApp & LinkedIn Integration Block */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  INSTANT CONNECT CHANNELS
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-md font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006297] text-white py-2.5 px-4 rounded-md font-bold text-xs uppercase tracking-wide transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>

        {/* ================= 4. TRUST BADGES ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 animate-fade-in delay-400">
          <div className="flex items-center gap-3 justify-center pt-4 sm:pt-0 group cursor-default">
            <FaGear className="w-6 h-6 text-[#65A30D] group-hover:rotate-45 transition-transform duration-500 ease-out" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {trustBadges[0]}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center pt-4 sm:pt-0 group cursor-default">
            <FaShieldHalved className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {trustBadges[1]}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center pt-4 sm:pt-0 group cursor-default">
            <FaUsers className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {trustBadges[2]}
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center pt-4 sm:pt-0 group cursor-default">
            <FaLeaf className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              {trustBadges[3]}
            </span>
          </div>
        </div>
      </div>
    </div></>
  );
}
