"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Flower2, Mail, Menu, X, Leaf, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Membership() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  const activeSection = "membership";

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
                href="/#contact"
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
                href="/#contact"
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
      <section className="relative w-full h-[60vh] min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" alt="Membership" fill className="object-cover object-[center_30%]" priority />
        </div>
        <div className="absolute inset-0 z-0 bg-black/40" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

        <div className="relative z-10 text-center px-5 flex flex-col items-center mt-10 md:mt-20">
          <span className="text-white/80 font-semibold tracking-widest uppercase text-[11px] md:text-[13px] mb-3">Premium Plans</span>
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] text-white font-bold leading-[1.05] tracking-tight drop-shadow-sm">
            Nina&apos;s Spa<br />Membership
          </h1>
          <p className="text-white/90 text-[14px] md:text-[16px] font-medium max-w-[400px] md:max-w-[480px] leading-relaxed drop-shadow-md mt-5">
            Join our exclusive membership program to enjoy premium services, priority bookings, and special monthly discounts.
          </p>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section className="py-16 md:py-24 px-5 md:px-8 max-w-[1200px] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          
          {/* Plan 1 */}
          <div className="border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition-shadow bg-gray-50 flex flex-col">
            <h3 className="font-serif text-[24px] text-brand-dark font-bold mb-2">Silver Plan</h3>
            <p className="text-gray-500 text-[14px] mb-6">Perfect for occasional relaxation.</p>
            <div className="text-[40px] font-bold text-brand-dark mb-8">
              ₹2,999 <span className="text-[16px] text-gray-500 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "1 Full Body Massage per month",
                "15% off additional treatments",
                "Access to steam & sauna",
                "Complimentary herbal tea",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-[14px] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8B9B7E] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-brand-red text-brand-red font-bold text-[14px] hover:bg-brand-red hover:text-white transition-colors">
              Choose Silver
            </button>
          </div>

          {/* Plan 2 */}
          <div className="border border-brand-red rounded-[24px] p-8 shadow-xl bg-white relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="font-serif text-[24px] text-brand-dark font-bold mb-2">Gold Plan</h3>
            <p className="text-gray-500 text-[14px] mb-6">Our most requested wellness package.</p>
            <div className="text-[40px] font-bold text-brand-red mb-8">
              ₹4,999 <span className="text-[16px] text-gray-500 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "2 Full Body Massages per month",
                "1 Signature Facial per month",
                "25% off additional treatments",
                "Priority booking status",
                "Free guest pass (1 per year)",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-[14px] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full bg-brand-red text-white font-bold text-[14px] hover:bg-[#e54848] transition-colors shadow-lg">
              Choose Gold
            </button>
          </div>

          {/* Plan 3 */}
          <div className="border border-gray-200 rounded-[24px] p-8 hover:shadow-xl transition-shadow bg-gray-50 flex flex-col">
            <h3 className="font-serif text-[24px] text-brand-dark font-bold mb-2">Platinum Plan</h3>
            <p className="text-gray-500 text-[14px] mb-6">The ultimate spa & wellness experience.</p>
            <div className="text-[40px] font-bold text-brand-dark mb-8">
              ₹7,999 <span className="text-[16px] text-gray-500 font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited basic treatments",
                "2 Premium rituals per month",
                "40% off additional treatments",
                "Exclusive VIP suite access",
                "Free guest pass (3 per year)",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-[14px] font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8B9B7E] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-full border-2 border-brand-red text-brand-red font-bold text-[14px] hover:bg-brand-red hover:text-white transition-colors">
              Choose Platinum
            </button>
          </div>

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
      <footer id="contact" className="pt-10 md:pt-14 border-t border-gray-100 relative bg-white w-full">
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
