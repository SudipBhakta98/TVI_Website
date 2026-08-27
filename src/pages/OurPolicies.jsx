import React from "react";
import {
  HiCheckCircle,
  HiShieldCheck,
  HiCog6Tooth,
  HiUserGroup,
  HiClipboardDocumentCheck,
  HiArrowRight,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

/* =========================================================
   POLICY DATA
========================================================= */

const policies = [
  {
    id: "quality",
    number: "01",
    title: "QUALITY POLICY",
    subtitle: "Quality Management & Continuous Improvement",
    icon: HiClipboardDocumentCheck,
    accent: "#4F9B28",

    intro:
      "Technovision is committed to delivering products by providing the right processes, equipment and knowledge for all stakeholders while continually improving the effectiveness of our Quality Management System.",

    points: [
      "Provide the right processes, equipment and knowledge for all stakeholders.",
      "Continually improve the effectiveness of the Quality Management System.",
      "Comply with applicable legal and other requirements.",
      "Assess and mitigate risks to reduce product errors and rejections.",
      "Identify, design, manufacture, verify and validate product and process requirements.",
      "Deliver products that fulfil customer requirements while improving productivity, cost and quality.",
    ],
  },

  {
    id: "environment-hazardous-substance",
    number: "02",
    title: "ENVIRONMENT & HAZARDOUS SUBSTANCE POLICY",
    subtitle: "Environmental Protection & Hazardous Substance Management",
    icon: HiShieldCheck,
    accent: "#4F9B28",

    intro:
      "Technovision is committed to protecting the environment by providing the right processes, equipment and knowledge for all stakeholders to prevent pollution and minimize the impact of hazardous substances.",

    points: [
      "Provide the right processes, equipment and knowledge for all stakeholders to protect the environment.",
      "Prevent pollution and minimize the impact of hazardous substances.",
      "Continually improve the effectiveness of Environment and Hazardous Substance Management.",
      "Comply with applicable legal, regulatory and other requirements.",
      "Identify environmental aspects associated with our activities.",
      "Assess and mitigate environmental risks to reduce incidents and their impact on the environment.",
      "Identify requirements related to products and processes involving hazardous substances.",
      "Ensure products and processes are designed, manufactured, verified and validated to fulfil customer requirements.",
      "Improve the overall storage, usage, handling and disposal of hazardous substances.",
    ],
  },

  {
    id: "safety",
    number: "03",
    title: "HEALTH & SAFETY POLICY",
    subtitle: "Safe Workplace & Responsible Practices",
    icon: HiShieldCheck,
    accent: "#E31B23",

    intro:
      "Technovision Industries is committed to providing a safe and healthy workplace for all employees and contractors and to maintaining safety as an overriding priority.",

    points: [
      "Provide a safe and healthy workplace for employees and contractors.",
      "Comply with governmental regulations and applicable industry best practices.",
      "Use audits to measure, share and improve health and safety programs.",
      "Hold management and supervisors accountable for safe work environments and safe work practices.",
      "Ensure personnel have the necessary knowledge to work safely.",
      "Give health and safety the same priority as productivity, environmental issues and quality control.",
      "Require employees and contractors to follow safe work procedures and report unsafe acts and safety incidents.",
      "Provide timely follow-up to safety incidents.",
      "Encourage all employees to contribute to the company's health and safety program.",
      "Support and promote the program so that safety remains the overriding priority.",
    ],
  },

  {
    id: "working-environment",
    number: "04",
    title: "WORKING ENVIRONMENT POLICY",
    subtitle: "Fair Working Conditions & Employee Welfare",
    icon: HiUserGroup,
    accent: "#4F9B28",

    intro:
      "Technovision recognizes the importance of clearly communicating working conditions and terms of employment to employees and workers, including contract workers.",

    points: [
      "Communicate working conditions and terms of employment to employees and workers.",
      "Ensure employees are entitled to wages and benefits.",
      "Maintain defined hours of work and overtime arrangements.",
      "Provide appropriate overtime compensation.",
      "Respect leave provisions for illness, maternity, vacation and holidays.",
      "Ensure working conditions comply with applicable national law.",
      "Respect collective bargaining agreements where such agreements exist.",
    ],
  },
];

/* =========================================================
   POLICY CARD
========================================================= */

function PolicyCard({ policy }) {
  const Icon = policy.icon;

  return (
    <article
      id={policy.id}
      className="
        group
        bg-white
        border border-slate-200
        rounded-xl sm:rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-lg
        transition-shadow
        duration-300
        scroll-mt-28
      "
    >
      {/* Accent */}
      <div className="h-1 w-full" style={{ backgroundColor: policy.accent }} />

      <div className="p-4 sm:p-5 lg:p-6">
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="flex items-start gap-3 sm:gap-4 mb-5">
          {/* Icon */}
          <div
            className="
              shrink-0
              w-11 h-11
              sm:w-12 sm:h-12
              rounded-lg sm:rounded-xl
              flex items-center justify-center
            "
            style={{
              backgroundColor: `${policy.accent}15`,
            }}
          >
            <Icon
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{
                color: policy.accent,
              }}
            />
          </div>

          {/* Title */}
          <div className="min-w-0 flex-1">
            <div className="mb-0.5">
              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  tracking-[0.18em]
                  sm:tracking-[0.22em]
                "
                style={{
                  color: policy.accent,
                }}
              >
                POLICY {policy.number}
              </span>
            </div>

            <h2
              className="
                text-base
                sm:text-lg
                lg:text-xl
                font-black
                tracking-tight
                text-slate-900
                leading-tight
              "
            >
              {policy.title}
            </h2>

            <p
              className="
                text-[11px]
                sm:text-xs
                font-semibold
                text-slate-500
                mt-1
                leading-5
              "
            >
              {policy.subtitle}
            </p>
          </div>
        </div>

        {/* =================================================
            INTRODUCTION
        ================================================== */}

        <div className="relative pl-3 sm:pl-4 mb-5">
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
            style={{
              backgroundColor: policy.accent,
            }}
          />

          <p
            className="
              text-xs
              sm:text-sm
              leading-6
              sm:leading-6
              text-slate-600
            "
          >
            {policy.intro}
          </p>
        </div>

        {/* =================================================
            COMMITMENT TITLE
        ================================================== */}

        <div className="flex items-center gap-2 mb-3">
          <HiCog6Tooth
            className="w-4 h-4"
            style={{
              color: policy.accent,
            }}
          />

          <h3
            className="
              text-[10px]
              sm:text-xs
              font-black
              uppercase
              tracking-[0.16em]
              text-slate-900
            "
          >
            Our Commitment
          </h3>
        </div>

        {/* =================================================
            POLICY POINTS
        ================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {policy.points.map((point, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-2.5
                p-3
                rounded-lg
                bg-slate-50
                border border-slate-100
                hover:bg-white
                hover:border-slate-200
                transition-colors
              "
            >
              <HiCheckCircle
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{
                  color: policy.accent,
                }}
              />

              <p
                className="
                  text-[11px]
                  sm:text-xs
                  leading-5
                  text-slate-600
                  font-medium
                "
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function OurPolicies() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          pt-8
          sm:pt-8
          lg:pt-8
          pb-6
          sm:pb-6
          lg:pb-6
          overflow-hidden
          bg-white
          border-b border-slate-200
        "
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "35px 35px",
            }}
          />
        </div>

        {/* Green Glow */}
        <div
          className="
            absolute
            -right-32
            -top-32
            w-64
            h-64
            sm:w-80
            sm:h-80
            rounded-full
            bg-[#4F9B28]/10
            blur-3xl
          "
        />

        {/* Red Glow */}
        <div
          className="
            absolute
            -left-32
            bottom-0
            w-56
            h-56
            sm:w-72
            sm:h-72
            rounded-full
            bg-[#E31B23]/5
            blur-3xl
          "
        />

        <div
          className="
            relative
            max-w-[90rem]
            mx-auto
            px-4
            sm:px-5
            lg:px-8
          "
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 sm:w-9 h-[2px] bg-[#4F9B28]" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-black
                  uppercase
                  tracking-[0.22em]
                  text-[#4F9B28]
                "
              >
                TECHNOVISION INDUSTRIES
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                tracking-tight
                text-slate-900
                leading-none
              "
            >
              OUR
              <span className="text-[#4F9B28]"> POLICIES</span>
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                sm:text-base
                leading-6
                sm:leading-7
                text-slate-600
              "
            >
              Our policies define the standards and commitments that guide
              Technovision Industries in quality, environmental responsibility,
              workplace safety and working conditions.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY NAVIGATION
      ====================================================== */}

      <section
        className="
          bg-white
          border-b border-slate-200
          sticky
          top-16
          z-30
        "
      >
        <div className="max-w-[90rem] mx-auto px-3 sm:px-5 lg:px-8">
          <div
            className="
              flex
              items-center
              gap-1
              sm:gap-2
              overflow-x-auto
              py-2
              scrollbar-hide
            "
          >
            {policies.map((policy) => {
              const Icon = policy.icon;

              return (
                <a
                  key={policy.id}
                  href={`#${policy.id}`}
                  className="
                    shrink-0
                    inline-flex
                    items-center
                    gap-1.5
                    sm:gap-2
                    px-2.5
                    sm:px-3.5
                    py-2
                    rounded-md
                    sm:rounded-lg
                    text-[9px]
                    sm:text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-slate-600
                    hover:text-[#4F9B28]
                    hover:bg-slate-50
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />

                  {policy.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICIES
      ====================================================== */}

      <section
        className="
          py-8
          sm:py-10
          lg:py-12
        "
      >
        <div
          className="
            max-w-[90rem]
            mx-auto
            px-4
            sm:px-5
            lg:px-8
          "
        >
          <div className="grid gap-5 sm:gap-6">
            {policies.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR COMMITMENT
      ====================================================== */}

      <section
        className="
          pb-6
          sm:pb-6
          lg:pb-6
        "
      >
        <div
          className="
            max-w-[90rem]
            mx-auto
            px-4
            sm:px-5
            lg:px-8
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              sm:rounded-2xl
              bg-[#12161A]
              px-5
              py-7
              sm:px-7
              sm:py-8
              lg:px-9
              lg:py-9
            "
          >
            {/* Green Decoration */}
            <div
              className="
                absolute
                -right-16
                -top-16
                w-48
                h-48
                rounded-full
                bg-[#4F9B28]/10
                blur-2xl
              "
            />

            {/* Red Decoration */}
            <div
              className="
                absolute
                -left-16
                -bottom-16
                w-44
                h-44
                rounded-full
                bg-[#E31B23]/10
                blur-2xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-6
              "
            >
              {/* Text */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-7 h-[2px] bg-[#4F9B28]" />

                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]
                      font-black
                      uppercase
                      tracking-[0.22em]
                      text-[#4F9B28]
                    "
                  >
                    OUR COMMITMENT
                  </span>
                </div>

                <h2
                  className="
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                    font-black
                    text-white
                    tracking-tight
                  "
                >
                  Quality. Environment. Safety. Responsibility.
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    leading-5
                    sm:leading-6
                    text-slate-400
                  "
                >
                  We encourage the involvement of our people and continuously
                  work toward maintaining and improving the standards defined by
                  our policies.
                </p>
              </div>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="
                  shrink-0
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-5
                  py-2.5
                  rounded-lg
                  bg-[#E31B23]
                  hover:bg-[#4F9B28]
                  text-white
                  text-[10px]
                  sm:text-xs
                  font-black
                  uppercase
                  tracking-wider
                  transition-all
                  shadow-lg
                "
              >
                Contact Us
                <HiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER INFORMATION
      ====================================================== */}

      <section className="pb-6 sm:pb-6">
        <div
          className="
            max-w-[90rem]
            mx-auto
            px-4
            sm:px-5
            lg:px-8
          "
        >
          <div
            className="
              border-t
              border-slate-200
              pt-4
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-2
            "
          >
            <p
              className="
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-widest
                font-bold
                text-lime-600
              "
            >
              TECHNOVISION INDUSTRIES
            </p>

            <p
              className="
                text-[9px]
                sm:text-[10px]
                uppercase
                tracking-widest
                font-bold
                text-lime-600
              "
            >
              QUALITY • ENVIRONMENT • SAFETY • WORKING ENVIRONMENT
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
