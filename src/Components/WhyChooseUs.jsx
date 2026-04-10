import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChalkboardTeacher, FaFlask, FaBook } from "react-icons/fa";
import { MdPersonSearch, MdQuestionAnswer } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: 1,
    icon: <FaChalkboardTeacher size={26} />,
    title: "Experienced Faculty",
    desc: "Learn from IIT/AIIMS alumni with 10–15 years of proven teaching excellence.",
    accent: "#FF6B35",
    bg: "#FFF4EF",
    border: "#FFD5C2",
    number: "01",
  },
  {
    id: 2,
    icon: <MdPersonSearch size={26} />,
    title: "Personalized Mentorship",
    desc: "Every student gets a dedicated mentor who tracks progress and guides week by week.",
    accent: "#6366F1",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    number: "02",
  },
  {
    id: 3,
    icon: <FaFlask size={26} />,
    title: "Regular Tests & Analysis",
    desc: "Weekly mocks with deep performance analytics — know exactly where you stand.",
    accent: "#10B981",
    bg: "#F0FDF4",
    border: "#A7F3D0",
    number: "03",
  },
  {
    id: 4,
    icon: <FaBook size={26} />,
    title: "Study Material & Notes",
    desc: "Curated, exam-focused notes crafted by toppers — no fluff, pure value.",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
    number: "04",
  },
  {
    id: 5,
    icon: <MdQuestionAnswer size={26} />,
    title: "Doubt Clearing Sessions",
    desc: "Daily live doubt sessions so no question goes unanswered before your exam.",
    accent: "#EC4899",
    bg: "#FDF2F8",
    border: "#FBCFE8",
    number: "05",
  },
];

function ReasonRow({ reason, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-gsap="reason"
      data-direction={isEven ? "left" : "right"}
      className="group relative flex items-start sm:items-center gap-5 sm:gap-8
                 rounded-2xl px-5 sm:px-8 py-5 sm:py-6 cursor-default
                 transition-all duration-500"
      style={{
        background: hovered ? reason.accent : "#fff",
        border: `1.5px solid ${hovered ? reason.accent : reason.border}`,
        boxShadow: hovered
          ? `0 16px 40px ${reason.accent}30`
          : "0 2px 10px rgba(0,0,0,0.04)",
        transform: hovered
          ? `translateX(${isEven ? "6px" : "-6px"})`
          : "translateX(0)",
        opacity: 0,
      }}
    >
      {/* Big faded number — decorative */}
      <span
        className="absolute right-5 top-1/2 -translate-y-1/2 font-black
                   select-none pointer-events-none transition-all duration-500
                   hidden sm:block"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "4.5rem",
          lineHeight: 1,
          color: hovered ? "rgba(255,255,255,0.12)" : `${reason.accent}14`,
        }}
      >
        {reason.number}
      </span>

      {/* Icon box */}
      <div
        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center
                   transition-all duration-500"
        style={{
          background: hovered ? "rgba(255,255,255,0.2)" : reason.bg,
          color: hovered ? "#fff" : reason.accent,
          boxShadow: hovered ? `0 4px 16px rgba(0,0,0,0.15)` : "none",
        }}
      >
        {reason.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 flex-1 min-w-0 z-10">
        <h3
          className="font-black text-base sm:text-lg transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "#fff" : "#1B2A4A",
          }}
        >
          {reason.title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "rgba(255,255,255,0.8)" : "#6B7280",
          }}
        >
          {reason.desc}
        </p>
      </div>

      {/* Arrow indicator */}
      <div
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                   transition-all duration-500 hidden sm:flex"
        style={{
          background: hovered ? "rgba(255,255,255,0.2)" : reason.bg,
          color: hovered ? "#fff" : reason.accent,
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Header
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

      // Reason rows — alternating slide-in from left/right
      const rows = sectionRef.current.querySelectorAll('[data-gsap="reason"]');
      rows.forEach((row, i) => {
        const fromLeft = row.dataset.direction === "left";
        gsap.fromTo(
          row,
          { x: fromLeft ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
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
        className="relative w-full overflow-hidden py-16 sm:py-24 px-4 sm:px-8"
        style={{ background: "#FAFAF8" }}
      >
        {/* Blobs */}
        <div className="absolute pointer-events-none"
          style={{
            top: "-80px", left: "-80px", width: "360px", height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3510 0%, transparent 70%)",
          }}
        />
        <div className="absolute pointer-events-none"
          style={{
            bottom: "-60px", right: "-60px", width: "300px", height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6366F110 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-10">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xl">
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
              Why Apex Academy
            </span>

            <h2
              data-gsap="header"
              className="font-black leading-tight"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#1B2A4A",
                opacity: 0,
              }}
            >
              Not Just a Coaching.{" "}
              <span style={{ color: "#FF6B35" }}>A Launch Pad.</span>
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
              Here's what sets us apart from every other institute out there.
            </p>
          </div>

          {/* Reason rows */}
          <div className="flex flex-col gap-4 w-full">
            {reasons.map((reason, i) => (
              <ReasonRow key={reason.id} reason={reason} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}