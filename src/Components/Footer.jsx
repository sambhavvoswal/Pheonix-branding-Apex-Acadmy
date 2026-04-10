import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const quickLinks = ["Courses", "Results", "Faculty", "Contact"];
const policies   = ["Privacy Policy", "Terms & Conditions"];
const socials    = [
  { icon: <FaYoutube size={18} />,   label: "YouTube",   href: "#", accent: "#FF0000" },
  { icon: <FaInstagram size={18} />, label: "Instagram", href: "#", accent: "#E1306C" },
  { icon: <FaFacebook size={18} />,  label: "Facebook",  href: "#", accent: "#1877F2" },
];

function FooterLink({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-2 text-sm transition-all duration-300"
        style={{
          fontFamily: "'Nunito', sans-serif",
          color: hovered ? "#FF6B35" : "#94A3B8",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "inline-flex",
        }}
      >
        <span
          className="w-1 h-1 rounded-full transition-all duration-300"
          style={{ background: hovered ? "#FF6B35" : "#334155" }}
        />
        {label}
      </a>
    </li>
  );
}

function SocialBtn({ social }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={social.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                 transition-all duration-300"
      style={{
        background: hovered ? `${social.accent}20` : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? `${social.accent}50` : "rgba(255,255,255,0.08)"}`,
        color: hovered ? social.accent : "#94A3B8",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {social.icon}
      <span
        className="text-sm font-semibold"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        {social.label}
      </span>
    </a>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      // Footer columns — staggered fade-up
      const cols = footerRef.current.querySelectorAll('[data-gsap="col"]');
      gsap.fromTo(
        cols,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );

      // Bottom bar — fade in
      const bottom = footerRef.current.querySelector('[data-gsap="bottom"]');
      gsap.fromTo(
        bottom,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottom,
            start: "top 95%",
            once: true,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <footer
        ref={footerRef}
        className="relative w-full overflow-hidden"
        style={{ background: "#0D1827" }}
      >
        {/* Top glow line */}
        <div
          className="w-full h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, #FF6B3560, #6366F150, transparent)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 pt-14 pb-8 flex flex-col gap-12">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1 — Brand */}
            <div data-gsap="col" className="flex flex-col gap-5 lg:col-span-1" style={{ opacity: 0 }}>
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                             font-black text-white text-base"
                  style={{ background: "#FF6B35", fontFamily: "'Nunito', sans-serif" }}
                >
                  A
                </div>
                <span
                  className="font-black text-xl text-white"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Apex Academy
                </span>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif", color: "#64748B" }}
              >
                Shaping Futures, Building Careers. India's trusted coaching institute
                for JEE, NEET, UPSC & Foundation courses.
              </p>

              {/* Contact mini info */}
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: <MdPhone size={13} />, text: "+91 98765 43210" },
                  { icon: <MdEmail size={13} />, text: "support@apexacademy.com" },
                  { icon: <HiLocationMarker size={13} />, text: "Bangalore • Delhi • Hyderabad • Pune" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0" style={{ color: "#FF6B35" }}>
                      {item.icon}
                    </span>
                    <span
                      className="text-xs leading-snug"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#64748B" }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div data-gsap="col" className="flex flex-col gap-5" style={{ opacity: 0 }}>
              <h4
                className="text-sm font-black uppercase tracking-widest"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((l) => <FooterLink key={l} label={l} />)}
              </ul>
            </div>

            {/* Col 3 — Policies */}
            <div data-gsap="col" className="flex flex-col gap-5" style={{ opacity: 0 }}>
              <h4
                className="text-sm font-black uppercase tracking-widest"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                Policies
              </h4>
              <ul className="flex flex-col gap-3">
                {policies.map((l) => <FooterLink key={l} label={l} />)}
              </ul>

              {/* Courses sub-list */}
              <h4
                className="text-sm font-black uppercase tracking-widest mt-2"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                Courses
              </h4>
              <ul className="flex flex-col gap-3">
                {["JEE", "NEET", "UPSC", "Foundation"].map((l) => (
                  <FooterLink key={l} label={l} />
                ))}
              </ul>
            </div>

            {/* Col 4 — Social */}
            <div data-gsap="col" className="flex flex-col gap-5" style={{ opacity: 0 }}>
              <h4
                className="text-sm font-black uppercase tracking-widest"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#fff",
                  letterSpacing: "2px",
                }}
              >
                Follow Us
              </h4>

              <div className="flex flex-col gap-3">
                {socials.map((s) => <SocialBtn key={s.label} social={s} />)}
              </div>

              {/* Badge */}
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl mt-2"
                style={{
                  background: "rgba(255,107,53,0.08)",
                  border: "1px solid rgba(255,107,53,0.18)",
                }}
              >
                <span className="text-lg">🏆</span>
                <div className="flex flex-col">
                  <span
                    className="text-xs font-black"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "#FF6B35" }}
                  >
                    15+ Years of Excellence
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "#64748B" }}
                  >
                    50,000+ students trained
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="w-full h-px"
            style={{ background: "rgba(255,255,255,0.07)" }}
          />

          <div data-gsap="bottom" className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ opacity: 0 }}>
            <p
              className="text-xs text-center sm:text-left"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#475569" }}
            >
              © 2026 Apex Academy. All rights reserved.
            </p>

            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#10B981" }}
              />
              <span
                className="text-xs"
                style={{ fontFamily: "'Nunito', sans-serif", color: "#475569" }}
              >
                Admissions open for 2026–27 batch
              </span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}