import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      // Replace with your actual backend API endpoint URL
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: 'Your message has been sent successfully!', error: null });
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong.' });
    }
  };

  return (
    <div id="contact" className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. Hero Cover Section */}
      <div 
        className="relative w-full bg-[#041629] pt-28 pb-32 md:pt-40 md:pb-44 px-6 md:px-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031120] via-[#031120]/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-[85rem] mx-auto">
          <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#0252D6] block mb-2">
            GET IN TOUCH
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-black tracking-wide uppercase leading-tight"
          >
            CONTACT OUR TEAM
          </motion.h1>
          <div className="w-12 h-[2px] bg-[#0252D6] mt-4 mb-3" />
          <p className="text-gray-300 font-medium text-xs md:text-sm tracking-wide max-w-xl leading-relaxed normal-case">
            Partner with Technovision Industries for high-precision engineering and contract manufacturing infrastructure.
          </p>
        </div>
      </div>

      {/* Main Split Layout Container */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 -mt-12 md:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 2. Interactive API Mail Form (Left Side - White Card Container) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10"
          >
            <h2 className="text-[#1E3A8A] font-black text-lg tracking-wider uppercase mb-6">
              SEND US A MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name *</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Corporate Email *</label>
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Company Name</label>
                  <input 
                    type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="e.g. Global Tech Ltd"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Subject *</label>
                <input 
                  type="text" name="subject" required value={formData.subject} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all"
                  placeholder="Manufacturing RFP / General Inquiry"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Message / Requirements *</label>
                <textarea 
                  name="message" required rows="5" value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#0252D6] focus:bg-white text-slate-900 placeholder-slate-400 font-medium text-xs rounded-md p-3 outline-none transition-all resize-none"
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
                  className="w-full bg-[#0B57D0] hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {status.loading ? 'Processing Transmission...' : 'Transmit Message'} 
                  {!status.loading && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </button>
              </div>
            </form>
          </motion.div>

          {/* 3. Physical HQ & Network Directory (Right Side - Info Panel Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#0B57D0] block mb-1">
                  HEADQUARTERS
                </span>
                <h2 className="text-[#1E3A8A] font-black text-lg tracking-wider uppercase mb-4">
                  OFFICE &amp; FACTORY
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed normal-case">
                  SY.NO 261/3 &amp; SY 261/4 Haragadde Village,<br />
                  Jigani Hobli Taluk, Bengaluru,<br />
                  Karnataka 560105
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-md border border-slate-100 text-blue-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Communication</h4>
                    <p className="text-xs font-bold text-slate-800">info@technovisionindustries.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-md border border-slate-100 text-blue-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.022a14.99 14.99 0 01-5.905-5.905l2.022-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Commercial Desk</h4>
                    <p className="text-xs font-bold text-slate-800">+91 80 4162 9XXX</p>
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
                  {/* Custom Minimal WhatsApp Vector */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.371a9.936 9.936 0 004.777 1.217h.004c5.505 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.178-2.922-7.062A9.925 9.925 0 0012.012 2zm5.835 14.165c-.24.674-1.398 1.284-1.922 1.347-.465.056-.933.088-1.545-.119-3.602-1.222-5.926-4.9-6.105-5.141-.178-.241-1.443-1.922-1.443-3.666 0-1.744.892-2.597 1.21-2.943.268-.291.67-.424 1.097-.424.138 0 .26.007.369.012.32.015.48.034.69.539.262.633.896 2.19.973 2.346.077.157.129.339.024.549-.105.21-.157.339-.314.524-.157.185-.329.412-.47.553-.153.153-.314.32-.133.629.18.31.8 1.309 1.71 2.122 1.173 1.047 2.16 1.37 2.48 1.528.32.157.507.13.693-.085.186-.215.797-.927 1.01-1.244.214-.316.427-.264.719-.157.292.106 1.854.874 2.174 1.034.32.16.533.238.613.376.08.137.08.797-.16 1.471z"/>
                  </svg>
                  WhatsApp
                </a>

                {/* LinkedIn Directory Network Link */}
                <a 
                  href="https://linkedin.com/company/technovision-industries" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#006297] text-white py-3 px-4 rounded-md font-bold text-[11px] uppercase tracking-wide transition-colors shadow-xs"
                >
                  {/* Custom Minimal LinkedIn Vector */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4. Full-Width Structural Embedded Google Map Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden mt-12"
        >
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
            <span className="text-[10px] font-bold text-[#0A1118] uppercase tracking-wider">
              Satellite Navigation Coordinates: 12.7680596, 77.6467457
            </span>
            <a 
              href="https://maps.google.com/?q=12.768059655900453,77.64674574174775"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-black text-[#0252D6] uppercase tracking-wide hover:underline"
            >
              Open In Maps Application ↗
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
        </motion.div>

      </div>
    </div>
  );
}