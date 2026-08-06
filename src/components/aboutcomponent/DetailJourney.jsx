import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaXmark, FaCircleInfo, FaArrowLeft } from "react-icons/fa6";
import { milestones } from "../../assets/aboutAssets.js";

export default function DetailJourney({ isOpen, onClose, onOpenTrigger }) {
  // ESC key listener & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* TRIGGER HEADER */}
      <div
        onClick={onOpenTrigger}
        className="mb-6 cursor-pointer group inline-block select-none"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-[#1E293B] font-black text-xl tracking-wider uppercase group-hover:text-lime-600 transition-colors">
            OUR JOURNEY &amp; MILESTONES
          </h2>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-lime-700 bg-lime-50 px-2.5 py-1 rounded-full border border-lime-200/60 group-hover:bg-lime-600 group-hover:text-white transition-all">
            <FaCircleInfo className="w-3 h-3" />
            Click to view full page tree
          </span>
        </div>
        <div className="w-12 h-[3px] bg-[#65A30D] rounded-full mt-1 group-hover:w-20 transition-all duration-300" />
      </div>

      {/* MODAL PORTAL */}
      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-slate-50 text-slate-900 flex flex-col w-full h-full min-h-screen overflow-hidden animate-fadeIn">
            {/* Navigation Bar */}
            <div className="w-full px-6 sm:px-12 py-3 bg-white text-slate-900 flex items-center justify-between border-b border-slate-200 shadow-xs flex-shrink-0 z-20">
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 bg-red-600 hover:bg-lime-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all"
                >
                  <FaArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-lime-600 block">
                    Technovision Industries
                  </span>
                  <h3 className="text-lg sm:text-2xl font-black uppercase tracking-wide text-slate-900">
                    OUR JOURNEY &amp; MILESTONES
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-slate-500 hidden md:inline">
                  Press{" "}
                  <kbd className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px] text-slate-700">
                    ESC
                  </kbd>{" "}
                  to exit
                </span>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-slate-100 hover:bg-red-600 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close view"
                >
                  <FaXmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Timeline */}
            <div className="flex-1 w-full overflow-y-auto bg-slate-50 p-5">
              <div className="relative max-w-5xl mx-auto py-8">
                {/* Central Spine */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 z-0" />

                <div className="space-y-12 md:space-y-16 relative z-10">
                  {milestones.map((milestone, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={idx}
                        className={`relative flex flex-col md:flex-row items-start ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Dot */}
                        <div
                          className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full ${
                            milestone.bg || "bg-lime-600"
                          } border-4 border-slate-50 ring-4 ring-slate-300 z-20 shadow-md transition-transform duration-300 hover:scale-125`}
                        />

                        {/* Card Content */}
                        <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                          <div
                            className={`bg-white border border-slate-200 hover:border-lime-500/60 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${
                              isEven ? "md:mr-10" : "md:ml-10"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <span
                                className={`text-xs font-black text-white px-3 py-1 rounded-full ${
                                  milestone.bg || "bg-lime-600"
                                } shadow-sm tracking-wider`}
                              >
                                {milestone.year}
                              </span>
                              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                                Phase {idx + 1}
                              </span>
                            </div>

                            <h4 className="text-slate-900 font-extrabold text-base sm:text-lg uppercase tracking-wide">
                              {milestone.title}
                            </h4>

                            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mt-3">
                              {milestone.description}
                            </p>

                            {milestone.fullDescription && (
                              <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                                {milestone.fullDescription}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="hidden md:block md:w-1/2" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}