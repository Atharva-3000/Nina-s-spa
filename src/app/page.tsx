"use client";

import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Flower2, Star, Leaf, HeartHandshake, Bird, Sparkles, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  useEffect(() => {
    gsap.to(".parallax-bg", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    ["home", "about", "services", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
          <Link href="#services" className="underline underline-offset-2 hover:text-gray-200 mx-1 font-semibold">
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
              <span className="font-serif text-[22px] md:text-[26px] italic tracking-wide">Nina&apos;s Spa</span>
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
              <Link href="/contact" className="bg-brand-red text-white px-6 lg:px-8 py-[10px] rounded-full font-semibold text-[13px] lg:text-[14px] hover:bg-[#E54848] transition-all shadow-[0_4px_20px_rgba(250,93,93,0.45)] hover:scale-105 whitespace-nowrap">Book a Slot</Link>
              <div className="hidden lg:flex flex-col items-start leading-tight">
                <span className="text-white/60 text-[9px] tracking-widest uppercase">or call us at</span>
                <span className="text-white font-bold text-[11px] tracking-wide">+91-8054698623</span>
              </div>
            </div>

            {/* Mobile: Book + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                className="bg-brand-red text-white px-4 py-2 rounded-full font-semibold text-[12px] shadow-md whitespace-nowrap"
              >
                Book
              </a>
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
      <section
        id="home"
        ref={heroRef}
        className="relative w-full flex flex-col overflow-hidden"
      >
        {/* Parallax Background spans the entire section (100svh + fade area) */}
        <div className="absolute inset-[-5%] w-[110%] h-[110%] z-0 parallax-bg will-change-transform">
          <Image src="/hero-img.png" alt="Spa Massage" fill className="object-cover object-[center_30%]" priority />
        </div>
        <div className="absolute inset-0 z-0 bg-black/10" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/55 via-transparent to-black/65" />

        {/* First Screen (100svh) */}
        <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-end z-10 pb-6 md:pb-8">
          {/* Hero Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5 gap-5 md:gap-6 pt-16 pb-[40%] md:pb-[18%]">
            <h1 className="font-serif text-[40px] sm:text-[50px] md:text-[64px] text-white font-bold leading-[1.05] tracking-tight drop-shadow-sm">
              A Little Time,<br />Just For You.
            </h1>
            <p className="text-white/90 text-[14px] md:text-[15px] font-medium max-w-[400px] md:max-w-[460px] leading-relaxed drop-shadow-md">
              Thoughtfully curated massages and beauty rituals designed to help you slow down, unwind, and leave feeling renewed.
            </p>

            {/* CTA Button */}
            <button className="group bg-white/95 backdrop-blur-sm w-[180px] md:w-[200px] h-[46px] md:h-[50px] rounded-full flex items-center p-1.5 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_12px_40px_rgb(0,0,0,0.15)] mt-2">
              <span className="flex-1 text-center text-brand-red text-[14px] md:text-[15px] font-bold pl-2 tracking-wide">Check More</span>
              <span className="bg-brand-red text-white w-[34px] md:w-[38px] h-[34px] md:h-[38px] flex items-center justify-center rounded-full shadow-md group-hover:bg-[#E54848] transition-colors shrink-0">
                <Flower2 className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </span>
            </button>

            {/* Ratings (Horizontal inline) */}
            <div className="flex items-center gap-3 mt-3 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <div className="flex -space-x-1.5">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1506794778202-cad84cf45f1d",
                  "photo-1494790108377-be9c29b29330",
                ].map((id) => (
                  <div key={id} className="w-6 h-6 md:w-7 md:h-7 rounded-full border border-white/60 overflow-hidden relative shadow-sm">
                    <Image
                      src={`https://images.unsplash.com/${id}?q=80&w=100&auto=format&fit=crop`}
                      fill alt="Customer" className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-white/95 text-[12px] md:text-[13px] font-medium tracking-wide">
                Rated <span className="font-bold text-white">5</span> <Star className="inline w-3 h-3 fill-[#FACC15] text-[#FACC15] -mt-0.5 mx-0.5" /> by <span className="font-bold text-white">1200+</span> Customers
              </p>
            </div>
          </div>

          {/* 3 Glass Info Cards */}
          <div className="relative z-10 w-full max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 px-4 mb-5 md:mb-6">
            {[
              { label: "Japanese Techniques", value: "50+ Trained Staff" },
              { label: "Membership Model", value: "Save More" },
              { label: "Male And Female Staff", value: "100% Comfort" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-[#FA5D5D]/25 backdrop-blur-md text-white border border-[#FA5D5D]/40 py-4 md:py-5 px-4 md:px-5 rounded-[16px] md:rounded-[20px] text-center"
              >
                <p className="font-serif text-[14px] md:text-[15px] mb-1 opacity-90 tracking-wide">{label}</p>
                <h3 className="text-[18px] md:text-[22px] font-bold tracking-wide">{value}</h3>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="relative z-10 flex flex-col items-center text-white/70 text-[10px] md:text-[11px] font-medium tracking-wide gap-1 mb-2">
            <span>scroll to know more</span>
            <span className="animate-bounce text-[12px]">↓</span>
          </div>
        </div>
        
        {/* Floating WhatsApp */}
        <button className="fixed right-0 bottom-6 md:top-[55%] md:-translate-y-1/2 md:bottom-auto bg-white rounded-l-full rounded-r-none p-1.5 pr-3 md:pr-4 shadow-2xl flex items-center gap-2 md:gap-2.5 hover:scale-105 transition-transform z-50 group">
          <div className="bg-[#25D366] w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full group-hover:rotate-12 transition-transform">
            <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="font-bold text-[11px] md:text-[12px] leading-tight text-left text-brand-dark">
            Contact<br />Now!
          </span>
        </button>
      </section>

      {/* ── ABOUT / 50+ SECTION ── */}
      <section id="about" className="py-14 md:py-20 px-5 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-8 w-full">
          {/* Big number */}
          <div className="flex-shrink-0">
            <h2 className="text-[90px] md:text-[130px] leading-none font-sans text-brand-red font-light tracking-tighter">50+</h2>
            <p className="font-serif text-[22px] md:text-[28px] text-brand-dark max-w-[220px] mt-1 leading-tight">
              Internationally<br />Trained staff
            </p>
          </div>

          <div className="w-full h-[1px] md:w-[1px] md:h-28 bg-gray-300 md:block" />

          {/* Body text */}
          <div className="flex-1 max-w-full md:max-w-[420px] text-brand-red/90 text-[15px] md:text-[16px] space-y-4 md:space-y-5 leading-relaxed font-medium">
            <p>
              At Nina&apos;s Spa, we blend soothing massage therapies with restorative beauty rituals, creating a peaceful escape from the everyday.
            </p>
            <p className="text-brand-red/65">
              Step into our serene space to unwind, rejuvenate, and leave feeling renewed.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <button className="group bg-brand-red text-white p-2 pl-6 md:pl-8 rounded-full font-bold flex items-center gap-4 md:gap-5 hover:scale-105 transition-transform shadow-[0_8px_30px_rgb(250,93,93,0.3)] text-[12px] md:text-[13px]">
              <span className="tracking-widest uppercase text-[10px] md:text-[11px]">Check More</span>
              <span className="bg-white text-brand-red w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full group-hover:bg-gray-50 transition-colors">
                <Flower2 className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES / DARK SECTION ── */}
      <section id="services" className="relative z-20 bg-[#2A2B29] py-16 md:h-[379px] md:py-0 flex flex-col justify-center">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <Image src="/4-point-img.png" fill alt="Spa Pattern" className="object-cover" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center text-white w-full">
          {[
            { Icon: Bird, title: "Nurturing Your\nInner Peace", sub: "Personalized treatments designed to restore balance and calm." },
            { Icon: Leaf, title: "Elevating Holistic\nWellness", sub: "Thoughtful rituals that rejuvenate your mind, body, and soul." },
            { Icon: Sparkles, title: "Crafting Serenity in\nEvery Moment", sub: "A tranquil space created for deeper relaxation and renewal." },
            { Icon: HeartHandshake, title: "Empowering Your\nPath to Renewal", sub: "Expert care that leaves you feeling refreshed, restored, and renewed." },
          ].map(({ Icon, title, sub }) => (
            <div key={title} className="flex flex-col items-center">
              <Icon className="w-8 h-8 md:w-9 md:h-9 mb-4 md:mb-5 text-white/85" strokeWidth={1.5} />
              <h3 className="font-serif text-[17px] md:text-[20px] mb-2 md:mb-2.5 tracking-wide whitespace-pre-line leading-snug">{title}</h3>
              <p className="text-white/55 text-[11px] md:text-[12px] leading-relaxed max-w-[160px] md:max-w-[180px]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative z-10 pb-10 flex flex-col justify-center px-5 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-14 w-full items-stretch">

          {/* Left gutter — on mobile sits above masonry, no -mt */}
          <div className="lg:w-[32%] flex flex-col pt-10 md:pt-16 pr-0 lg:pr-6">
            <div>
              <p className="text-brand-red font-semibold mb-2 text-[10px] uppercase tracking-widest">Testimonials</p>
              <h2 className="font-serif text-[38px] md:text-[52px] text-brand-dark leading-[1.05] tracking-tight">
                What are Clients<br />have to say
              </h2>
            </div>
            <div className="mt-8 lg:mt-auto pt-0 lg:pt-16 flex flex-col gap-3 md:gap-4 pb-6">
              <div className="inline-block w-fit border border-brand-red text-brand-red rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide">
                Average of 4.5 across web.
              </div>
              <p className="text-brand-dark font-medium text-[12px] md:text-[13px] tracking-wide">
                Rated 5{" "}<Star className="inline w-3 h-3 fill-[#FACC15] text-[#FACC15] -mt-0.5" />{" "}across 1500{" "}<span className="font-bold">Google reviews</span>.
              </p>
              <p className="text-brand-dark font-medium text-[12px] md:text-[13px] tracking-wide">
                Rated 4.67 across <span className="font-bold">Justdial</span>.
              </p>
            </div>
          </div>

          {/* Masonry grid — desktop: pull up; mobile: normal flow */}
          <div className="lg:w-[68%] lg:-mt-36">
            {/* Mobile: single column stacked */}
            <div className="flex flex-col gap-4 md:hidden">
              {[
                { bg: "bg-brand-red", name: "Sneha.K", text: "The most peaceful spa experience I've had. The atmosphere is beautiful, and the massage left me feeling completely refreshed." },
                { bg: "bg-[#8B9B7E]", name: "Sneha.k", text: "A beautiful space, wonderful service, and exactly the kind of relaxation I was looking for. I left feeling lighter and renewed." },
                { bg: "bg-[#8B9B7E]", name: "Riya.M", text: "From the moment I walked in, everything felt calm and welcoming. The therapists were attentive and incredibly professional." },
                { bg: "bg-brand-red", name: "Meera.R", text: "Nina's Spa is my go-to place whenever I need to slow down and recharge. The treatments are relaxing and thoughtfully done." },
              ].map(({ bg, name, text }) => (
                <div key={name} className={`${bg} text-white p-7 rounded-3xl`}>
                  <h4 className="font-serif text-[26px] leading-none mb-2.5">{name}</h4>
                  <div className="flex text-yellow-300 mb-4 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[14px] leading-relaxed font-medium opacity-90">{text}</p>
                </div>
              ))}
            </div>

            {/* Desktop: 3-column staggered masonry — items-stretch (default) aligns bottoms */}
            <div className="hidden md:grid grid-cols-3 gap-5">
              {/* Col 1: starts LOWEST (pt-28) — flex-1 image → red card → green card */}
              <div className="flex flex-col gap-5 pt-28">
                <div className="relative flex-1 min-h-[140px] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop" fill alt="Spa" className="object-cover" />
                </div>
                <div className="bg-brand-red text-white p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500">
                  <h4 className="font-serif text-[28px] leading-none mb-3">Sneha.K</h4>
                  <div className="flex text-yellow-300 mb-5 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[15px] leading-relaxed font-medium opacity-90">The most peaceful spa experience I&apos;ve had. The atmosphere is beautiful, and the massage left me feeling completely refreshed.</p>
                </div>
                <div className="bg-[#8B9B7E] text-white p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500">
                  <h4 className="font-serif text-[28px] leading-none mb-3">Riya.M</h4>
                  <div className="flex text-yellow-300 mb-5 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[15px] leading-relaxed font-medium opacity-90">From the moment I walked in, everything felt calm and welcoming. The therapists were attentive and incredibly professional.</p>
                </div>
              </div>

              {/* Col 2: starts MEDIUM (pt-16) — green card → image → flex-1 image */}
              <div className="flex flex-col gap-5 pt-16">
                <div className="bg-[#8B9B7E] text-white p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500">
                  <h4 className="font-serif text-[28px] leading-none mb-3">Sneha.k</h4>
                  <div className="flex text-yellow-300 mb-5 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[15px] leading-relaxed font-medium opacity-90">A beautiful space, wonderful service, and exactly the kind of relaxation I was looking for. I left feeling lighter and renewed.</p>
                </div>
                <div className="relative h-56 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop" fill alt="Massage" className="object-cover" />
                </div>
                <div className="relative flex-1 min-h-[140px] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" fill alt="Face" className="object-cover" />
                </div>
              </div>

              {/* Col 3: starts HIGHEST (pt-0) — image → red card → flex-1 image */}
              <div className="flex flex-col gap-5 pt-0">
                <div className="relative h-36 rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop" fill alt="Cucumber" className="object-cover" />
                </div>
                <div className="bg-brand-red text-white p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-500">
                  <h4 className="font-serif text-[28px] leading-none mb-3">Meera.R</h4>
                  <div className="flex text-yellow-300 mb-5 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-[15px] leading-relaxed font-medium opacity-90">Nina&apos;s Spa is my go-to place whenever I need to slow down and recharge. The treatments are relaxing and thoughtfully done.</p>
                </div>
                <div className="relative flex-1 min-h-[140px] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop" fill alt="Hands" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-20 flex flex-col items-center justify-center px-4 md:px-6 w-full">
        <div className="relative w-full max-w-[1352px] h-[280px] md:h-[461px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center text-center shadow-xl">
          <div className="absolute inset-0 z-0">
            <Image src="/bottom-cta-img.png" fill alt="Spa Stones" className="object-cover" />
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-7 md:gap-[44px] px-5 md:px-8 w-full max-w-[900px]">
            <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[44px] text-white font-medium leading-[1.35] md:leading-[1.4] tracking-wide">
              Relax, rejuvenate, and reconnect with yourself through thoughtful treatments and calming rituals.
            </h2>
            <button className="group bg-white text-brand-dark w-[240px] md:w-[300px] h-[52px] md:h-[63px] rounded-full flex items-center justify-between pl-7 md:pl-10 pr-2 hover:scale-105 transition-transform shadow-lg">
              <span className="text-[14px] md:text-[16px] font-medium tracking-wide">Book an Appointment</span>
              <span className="bg-[#8B9B7E] text-white w-[40px] md:w-[50px] h-[40px] md:h-[50px] flex items-center justify-center rounded-full group-hover:bg-[#7a886e] transition-colors shrink-0">
                <Flower2 className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
          </div>
        </div>
      </section>

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
