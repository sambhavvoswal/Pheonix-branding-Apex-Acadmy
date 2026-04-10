import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiPlay } from "react-icons/hi";
import { MdLiveTv, MdVideoLibrary, MdTopic } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <MdLiveTv size={28} />,
    title: "Free Live Classes",
    desc: "Join real-time sessions with top mentors and get your doubts solved instantly.",
    accent: "#FF6B35",
    bg: "#FFF4EF",
    border: "#FFD5C2",
  },
  {
    icon: <MdVideoLibrary size={28} />,
    title: "Recorded Lectures",
    desc: "Revisit any lecture anytime — study at your own pace, on your own schedule.",
    accent: "#6366F1",
    bg: "#EEF2FF",
    border: "#C7D2FE",
  },
  {
    icon: <MdTopic size={28} />,
    title: "Topic-wise Previews",
    desc: "Explore chapter-level previews before committing — know exactly what you're signing up for.",
    accent: "#10B981",
    bg: "#F0FDF4",
    border: "#A7F3D0",
  },
];

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-gsap="card"
      className="flex flex-col gap-4 rounded-2xl p-6 sm:p-8 flex-1 min-w-55
                 transition-all duration-500 cursor-default"
      style={{
        background: hovered ? feature.accent : feature.bg,
        border: `1.5px solid ${hovered ? feature.accent : feature.border}`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px ${feature.accent}30`
          : "0 2px 12px rgba(0,0,0,0.05)",
        opacity: 0,
      }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center
                   transition-all duration-500"
        style={{
          background: hovered ? "rgba(255,255,255,0.2)" : `${feature.accent}18`,
          color: hovered ? "#fff" : feature.accent,
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3
          className="font-black text-lg transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "#fff" : "#1B2A4A",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "rgba(255,255,255,0.82)" : "#6B7280",
          }}
        >
          {feature.desc}
        </p>
      </div>
    </div>
  );
}

export default function DemoClassesSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Header elements
      const headers = sectionRef.current.querySelectorAll('[data-gsap="header"]');
      gsap.fromTo(
        headers,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Feature cards
      const cards = sectionRef.current.querySelectorAll('[data-gsap="card"]');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // CTA button
      const btn = sectionRef.current.querySelector('[data-gsap="cta"]');
      gsap.fromTo(
        btn,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden py-20 sm:py-28 px-4 sm:px-8"
        style={{ background: "#FAFAF8" }}
      >
        {/* Background blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-100px", right: "-100px",
            width: "400px", height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3512 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-80px", left: "-80px",
            width: "300px", height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6366F112 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-14">

          {/* ── Header ── */}
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl">
            <span
              data-gsap="header"
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#FF6B35",
                background: "#FFF4EF",
                border: "1px solid #FFD5C2",
                letterSpacing: "2.5px",
                opacity: 0,
              }}
            >
              Demo Classes
            </span>

            <h2
              data-gsap="header"
              className="font-black leading-tight"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                color: "#1B2A4A",
                opacity: 0,
              }}
            >
              Experience Learning{" "}
              <span style={{ color: "#FF6B35" }}>Before You Enroll</span>
            </h2>

            <p
              data-gsap="header"
              className="text-base sm:text-lg leading-relaxed"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#6B7280",
                opacity: 0,
              }}
            >
              Get a taste of Apex Academy's teaching quality — completely free,
              no commitment needed.
            </p>
          </div>

          {/* ── Feature cards ── */}
          <div className="flex flex-col sm:flex-row gap-5 w-full">
            {features.map((f, i) => (
              <FeatureCard key={i} feature={f} />
            ))}
          </div>

          {/* ── CTA Button ── */}
          <button
            data-gsap="cta"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold
                       text-base transition-all duration-300"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: btnHovered ? "#e85a25" : "#FF6B35",
              color: "#fff",
              boxShadow: btnHovered
                ? "0 12px 32px #FF6B3550"
                : "0 4px 16px #FF6B3530",
              transform: btnHovered ? "scale(1.04)" : "scale(1)",
              opacity: 0,
            }}
          >
            {/* Animated play icon ring */}
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.2)",
              }}
            >
              <HiPlay size={16} className="translate-x-px" />
            </span>
            Watch Demo
          </button>

        </div>
      </section>
    </>
  );
}