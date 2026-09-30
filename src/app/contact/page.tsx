"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Flower2, Mail, Menu, X, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  const activeSection = "contact";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };


  

  const navLinks = [
    { href: "/#home", label: "Home", id: "home" },
    { href: "/#about", label: "About Us", id: "about" },
    { href: "/#services", label: "Services", id: "services" },
    { href: "/treatments", label: "Treatments", id: "treatments" },
    { href: "/membership", label: "Membership", id: "membership" },
    { href: "/contact", label: "Contact", id: "contact" },
  ];

  return (
    <main className="w-full overflow-x-clip bg-white relative">
      {/* ── FIXED TOP BANNER + NAVBAR ── */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
        {/* News Banner */}
        <div className="bg-[#FA5D5D]/35 backdrop-blur-md text-white text-center text-[11px] md:text-[12px] tracking-wide font-medium h-[32px] md:h-[34px] flex items-center justify-center w-full border-b border-white/10 px-4">
          <span className="hidden sm:inline">Winter Special offer on Full Body Massage.{" "}</span>
          <Link href="/#services" className="underline underline-offset-2 hover:text-gray-200 mx-1 font-semibold">
            Click here to know more
          </Link>
          <span className="hidden md:inline">{" "}or call us at +91-8054698623</span>
        </div>

        {/* Navbar */}
        <div className="w-full pt-2 md:pt-3 pb-2 bg-gradient-to-b from-black/50 to-transparent">
          <nav className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center">
            {/* Logo */}
            <div className="flex-1 flex items-center gap-2 text-white">
              <Flower2 className="w-6 h-6 md:w-7 md:h-7 text-brand-red shrink-0" />
              <Link href="/"><span className="font-serif text-[22px] md:text-[26px] italic tracking-wide">Nina&apos;s Spa</span></Link>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex bg-white/15 backdrop-blur-md rounded-full p-1 items-center border border-white/20 shadow-sm gap-0.5">
              {navLinks.map(({ href, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`${
                    activeSection === id
                      ? "bg-white text-brand-red font-semibold shadow-sm"
                      : "text-white hover:bg-white/15 font-medium"
                  } px-4 lg:px-5 py-[8px] rounded-full text-[13px] lg:text-[14px] transition-all whitespace-nowrap`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex flex-1 items-center justify-end gap-3">
              <Link
                href="/contact"
                className="bg-brand-red text-white px-6 lg:px-8 py-[10px] rounded-full font-semibold text-[13px] lg:text-[14px] hover:bg-[#E54848] transition-all shadow-[0_4px_20px_rgba(250,93,93,0.45)] hover:scale-105 whitespace-nowrap"
              >
                Book a Slot
              </Link>
              <div className="hidden lg:flex flex-col items-start leading-tight">
                <span className="text-white/60 text-[9px] tracking-widest uppercase">or call us at</span>
                <span className="text-white font-bold text-[11px] tracking-wide">+91-8054698623</span>
              </div>
            </div>

            {/* Mobile: Book + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/contact"
                className="bg-brand-red text-white px-4 py-2 rounded-full font-semibold text-[12px] shadow-md whitespace-nowrap"
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-1.5 rounded-full bg-white/15 border border-white/20"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 px-4 py-4 flex flex-col gap-2">
              {navLinks.map(({ href, label, id }) => (
                <Link
                  key={id}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`${
                    activeSection === id ? "text-brand-red font-semibold" : "text-white font-medium"
                  } py-2.5 px-4 rounded-xl text-[15px] hover:bg-white/10 transition-all`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 text-white/60 text-[11px] tracking-widest uppercase">
                or call: <span className="text-white font-bold">+91-8054698623</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop" alt="Contact Us" fill className="object-cover object-[center_30%]" priority />
        </div>
        <div className="absolute inset-0 z-0 bg-black/50" />

        <div className="relative z-10 text-center px-5 flex flex-col items-center mt-10 md:mt-20">
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] text-white font-bold leading-[1.05] tracking-tight drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-white/90 text-[14px] md:text-[16px] font-medium max-w-[400px] md:max-w-[480px] leading-relaxed drop-shadow-md mt-4">
            We are here to answer your questions and help you book your next rejuvenating experience.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM & INFO ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 max-w-[1200px] mx-auto bg-white flex flex-col md:flex-row gap-12 md:gap-16">
        
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div>
            <h3 className="font-serif text-[28px] text-brand-dark mb-6">Get in Touch</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Reach out to us directly or fill out the form, and our team will get back to you shortly to confirm your booking.
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h4 className="text-brand-dark font-bold text-[16px] mb-1">Our Location</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                123 Wellness Avenue, C-Scheme,<br />
                Jaipur, Rajasthan 302001
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h4 className="text-brand-dark font-bold text-[16px] mb-1">Phone Number</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                +91-8054698623<br />
                +91-9876543210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-brand-red" />
            </div>
            <div>
              <h4 className="text-brand-dark font-bold text-[16px] mb-1">Opening Hours</h4>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                Monday - Sunday<br />
                9:00 AM - 9:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-2/3 bg-gray-50 rounded-[24px] p-6 md:p-10 border border-gray-100 shadow-sm">
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-brand-dark ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red transition-colors text-[14px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold text-brand-dark ml-1">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red transition-colors text-[14px]" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-brand-dark ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red transition-colors text-[14px]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-brand-dark ml-1">Service Required</label>
              <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red transition-colors text-[14px] bg-white appearance-none">
                <option>Select a treatment...</option>
                <option>Deep Tissue Massage</option>
                <option>Hot Stone Therapy</option>
                <option>Aromatherapy Ritual</option>
                <option>Couples Retreat</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-semibold text-brand-dark ml-1">Your Message</label>
              <textarea placeholder="Tell us about any specific requirements..." rows={4} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-red transition-colors text-[14px] resize-none"></textarea>
            </div>

            <button type="button" className="mt-2 w-full py-4 rounded-xl bg-brand-red text-white font-bold text-[15px] hover:bg-[#e54848] transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <button className="fixed right-0 bottom-6 md:top-[55%] md:-translate-y-1/2 md:bottom-auto bg-white rounded-l-full rounded-r-none p-1.5 pr-3 md:pr-4 shadow-2xl flex items-center gap-2 md:gap-2.5 hover:scale-105 transition-transform z-50 group">
        <div className="bg-[#25D366] w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform">
          <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>
        <span className="font-bold text-[11px] md:text-[12px] leading-tight text-left text-brand-dark">
          Contact<br />Now!
        </span>
      </button>

      {/* ── FOOTER ── */}
      <footer className="pt-10 md:pt-14 border-t border-gray-100 relative bg-white w-full">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 relative z-10">
          {/* Col 1 — About + Socials */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-serif text-[16px] md:text-[18px] leading-[1.5] text-gray-800 mb-6 md:mb-7 tracking-wide">
              25+ Locations Spa Franchise<br />
              Oldest in Jaipur.<br />
              With over 20 Years of Trust.
            </div>
            <p className="text-[12px] md:text-[13px] font-semibold mb-3 md:mb-4 text-brand-dark tracking-wide">Follow us on</p>
            <div className="flex gap-4 md:gap-5 items-center">
              {[
                { Icon: FaFacebook, size: "w-[20px] h-[20px] md:w-[22px] md:h-[22px]" },
                { Icon: FaInstagram, size: "w-[20px] h-[20px] md:w-[22px] md:h-[22px]" },
                { Icon: FaLinkedin, size: "w-[20px] h-[20px] md:w-[22px] md:h-[22px]" },
                { Icon: FaYoutube, size: "w-[22px] h-[22px] md:w-[24px] md:h-[24px]" },
              ].map(({ Icon, size }, i) => (
                <Link key={i} href="#" className="text-[#1D2633] hover:text-brand-red transition-colors">
                  <Icon className={size} />
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-semibold text-brand-dark mb-4 md:mb-5 text-[13px] tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 md:space-y-3 text-gray-500 text-[12px] md:text-[13px] font-medium">
              {["Home","About Us","Projects","Services","Contact Us"].map((l) => (
                <li key={l}><Link href="#" className="hover:text-brand-red transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Specialities */}
          <div>
            <h4 className="font-semibold text-brand-dark mb-4 md:mb-5 text-[13px] tracking-wide">Specialities</h4>
            <ul className="space-y-2.5 md:space-y-3 text-gray-500 text-[12px] md:text-[13px] font-medium">
              {["Interior","Residential","Commercial","Urban","Consultancy"].map((l) => (
                <li key={l}><Link href="#" className="hover:text-brand-red transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-brand-dark mb-4 md:mb-5 text-[17px] md:text-[20px] leading-[1.4] max-w-full md:max-w-[300px]">
              Subscribe to our Newsletter for quick updates and upcoming camps.
            </p>
            <div className="flex items-center bg-[#8B9B7E] rounded-full pl-4 md:pl-5 pr-1 w-full max-w-[400px] h-[44px] md:h-[48px] shadow-sm">
              <Mail className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] text-white mr-2 md:mr-3 shrink-0" strokeWidth={1.2} />
              <input
                type="email"
                placeholder="Enter your mail"
                className="bg-transparent text-white placeholder-white/90 focus:outline-none w-full text-[13px] md:text-[14px] font-medium"
              />
              <button className="bg-white text-gray-800 font-serif px-4 md:px-5 h-[36px] md:h-[40px] rounded-full text-[14px] md:text-[16px] hover:bg-gray-50 transition-colors shadow-sm shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="w-full text-center mt-2 flex justify-center overflow-x-clip">
          <h1 className="text-[20vw] leading-[0.85] font-serif italic whitespace-nowrap select-none tracking-tighter bg-gradient-to-b from-[#DDE1D8] to-white bg-clip-text text-transparent pb-6 pr-[6vw]">
            Nina&apos;s Spa
          </h1>
        </div>
        
        {/* Copyright */}
        <div className="w-full border-t border-gray-100 py-4 text-center text-[12px] md:text-[13px] text-gray-500 font-medium">
          <a href="https://cloverstudio.art" target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-brand-red transition-colors font-semibold">Clover Studio</a> All Copyright Reserved 2026.
        </div>
      </footer>
    </main>
  );
}
