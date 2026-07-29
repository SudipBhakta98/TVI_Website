import React, { useState } from 'react';
import axios from 'axios';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineExternalLink, 
  HiArrowRight 
} from 'react-icons/hi';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

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
          success: 'Your message has been sent successfully! A confirmation email has been dispatched to your inbox.', 
          error: null 
        });
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(response.data?.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Something went wrong while dispatching your request.';
      
      setStatus({ 
        loading: false, 
        success: null, 
        error: errorMessage 
      });
    }
  };

  return (
    <div id="contact" className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. Hero Cover Section */}
      <div 
        className="relative w-full bg-[#12161A]  pb-32  md:pb-44 px-6 md:px-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#12161A] via-[#12161A]/85 to-transparent z-0" />
        
        <div className="relative z-10 mt-10 max-w-[85rem] mx-auto">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-lime-600 block mb-2">
            GET IN TOUCH
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-black tracking-wide uppercase leading-tight transition-all duration-500 transform translate-y-0 opacity-100">
            CONTACT WITH OUR TEAM
          </h1>
          <div className="w-16 h-[4px] bg-lime-600 mt-4 mb-3 rounded-full" />
          <p className="text-slate-300 font-medium text-xs md:text-sm tracking-wide max-w-xl leading-relaxed normal-case">
            Partner with Technovision Industries for high-precision engineering and contract manufacturing infrastructure.
          </p>
        </div>
      </div>

      {/* Main Split Layout Container */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 -mt-20 md:-mt-30 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 2. Interactive API Mail Form (Left Side - White Card Container) */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-xl border border-slate-200/80 p-6 sm:p-10 transition-all duration-500 ease-in-out">
            <h2 className="text-[#12161A] font-black text-lg tracking-wider uppercase mb-6 flex items-center gap-2">
              SEND US A MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name *</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Corporate Email *</label>
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Company Name</label>
                  <input 
                    type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="e.g. Global Tech Ltd"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Subject *</label>
                <input 
                  type="text" name="subject" required value={formData.subject} onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                  placeholder="Manufacturing RFP / General Inquiry"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Message / Requirements *</label>
                <textarea 
                  name="message" required rows="5" value={formData.message} onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#4F9B28] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all resize-none"
                  placeholder="Detail your component specs or questions here..."
                />
              </div>

              {/* Status Banner Interlays */}
              {status.success && (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md text-xs font-semibold">
                  {status.success}
                </div>
              )}
              {status.error && (
                <div className="p-3 bg-rose-50 text-rose-800 border border-rose-200 rounded-md text-xs font-semibold">
                  {status.error}
                </div>
              )}

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="w-full bg-[#12161A] hover:bg-[#3B781D] disabled:bg-slate-400 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {status.loading ? 'Processing Transmission...' : 'Transmit Message'} 
                  {!status.loading && <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>

          {/* 3. Physical HQ & Network Directory (Right Side - Info Panel Card) */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-in-out">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#3B781D] block mb-1">
                  HEADQUARTERS
                </span>
                <h2 className="text-[#12161A] font-black text-lg tracking-wider uppercase mb-4">
                  OFFICE &amp; FACTORY
                </h2>
                <div className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed normal-case">
                  <HiOutlineLocationMarker className="text-xl text-[#4F9B28] shrink-0 mt-0.5" />
                  <p>
                    SY.NO 261/3 &amp; SY 261/4 Haragadde Village,<br />
                    Jigani Hobli Taluk, Bengaluru,<br />
                    Karnataka 560105
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#F8FAFC] rounded-md border border-slate-200/60 text-[#4F9B28]">
                    <HiOutlineMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Communication</h4>
                    <p className="text-xs font-bold text-[#12161A]">narpvvl@technovisionindustries.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#F8FAFC] rounded-md border border-slate-200/60 text-[#4F9B28]">
                    <HiOutlinePhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Commercial Desk</h4>
                    <p className="text-xs font-bold text-[#12161A]">+91 9342163575</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Interops & Instant Chat Channels */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <h4 className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                DIGITAL ECOSYSTEM LINKS
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {/* WhatsApp Quick Routing Link */}
                <a 
                  href="https://wa.me/917764674574" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-md font-bold text-[11px] uppercase tracking-wide transition-colors shadow-xs"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>

                {/* LinkedIn Directory Network Link */}
                <a 
                  href="https://linkedin.com/company/technovision-industries" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006297] text-white py-3 px-4 rounded-md font-bold text-[11px] uppercase tracking-wide transition-colors shadow-xs"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4. Full-Width Structural Embedded Google Map Block */}
        <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 overflow-hidden mt-12 transition-all duration-500">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
            <span className="text-[10px] font-black text-[#12161A] uppercase tracking-wider">
              OUR CORPORATE OFFICE LOCATION
            </span>
            <a 
              href="https://maps.google.com/?q=12.768059655900453,77.64674574174775"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-black text-[#4F9B28] hover:text-[#E31B23] uppercase tracking-wide transition-colors flex items-center gap-1"
            >
              <span>Open In Maps Application</span>
              <HiOutlineExternalLink className="text-xs" />
            </a>
          </div>
          <div className="w-full h-[400px] relative bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.725907481546!2d77.6441708750736!3d12.768059687529458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ2JzA1LjAiTiA3N8KwMzgnNDguMyJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Technovision Industries Factory Map Navigation"
            />
          </div>
        </div>

      </div>
    </div>
  );
}