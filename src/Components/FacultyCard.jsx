import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiAcademicCap } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const facultyData = [
    {
        id: 1,
        name: "Dr. Rajesh Sharma",
        subject: "Physics",
        experience: "15+ Years",
        tag: "JEE Expert",
        accent: "#FF6B35",
        bg: "#FFF4EF",
        border: "#FFD5C2",
        initials: "RS",
        avatarBg: "#FF6B35",
    },
    {
        id: 2,
        name: "Neha Verma",
        subject: "Biology",
        experience: "10+ Years",
        tag: "NEET Specialist",
        accent: "#10B981",
        bg: "#F0FDF4",
        border: "#A7F3D0",
        initials: "NV",
        avatarBg: "#10B981",
    },
    {
        id: 3,
        name: "Amit Gupta",
        subject: "Mathematics",
        experience: "12+ Years",
        tag: "JEE & Foundation",
        accent: "#6366F1",
        bg: "#EEF2FF",
        border: "#C7D2FE",
        initials: "AG",
        avatarBg: "#6366F1",
    },
];

function FacultyCard({ faculty, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    data-gsap="card"
    className="relative flex flex-col items-center rounded-2xl overflow-hidden transition-all duration-500 cursor-default group"
    style={{
        background: hovered ? faculty.accent : "#fff",
        border: `1.5px solid ${hovered ? faculty.accent : faculty.border}`,
        boxShadow: hovered ? `0 24px 48px ${faculty.accent}35` : "0 2px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        opacity: 0,
        }}
    >
      {/* Top color band */}
        <div
        className="w-full h-24 transition-all duration-500"
        style={{
            background: hovered
            ? `${faculty.accent}30`
            : `linear-gradient(135deg, ${faculty.accent}22 0%, ${faculty.accent}08 100%)`,
        }}
        />

      {/* Avatar — overlaps the band */}
        <div className="relative -mt-12 mb-4 z-10">
        <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black ring-4 ring-white transition-all duration-500"
            style={{
            background: faculty.avatarBg,
            boxShadow: hovered
                ? `0 8px 24px ${faculty.accent}50`
                : `0 4px 12px ${faculty.accent}30`,
            }}
        >
            {faculty.initials}
        </div>

        {/* Verified badge */}
        <div
            className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center ring-2 ring-white"
            style={{ background: faculty.accent }}
        >
            <MdVerified size={14} color="#fff" />
        </div>
        </div>

      {/* Info */}
        <div className="flex flex-col items-center gap-2 px-6 pb-6 text-center w-full">

        {/* Tag pill */}
        <span
            className="text-xs font-bold px-3 py-1 rounded-full border transition-all duration-500"
            style={{
            fontFamily: "'Nunito', sans-serif",
            background: hovered ? "rgba(255,255,255,0.2)" : faculty.bg,
            color: hovered ? "#fff" : faculty.accent,
            borderColor: hovered ? "rgba(255,255,255,0.3)" : faculty.border,
            }}
        >
            {faculty.tag}
        </span>

        {/* Name */}
        <h3
            className="font-black text-lg leading-tight transition-colors duration-500"
            style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "#fff" : "#1B2A4A",
            }}
        >
            {faculty.name}
        </h3>

        {/* Divider */}
        <div
            className="w-10 h-0.5 rounded-full transition-all duration-500"
            style={{ background: hovered ? "rgba(255,255,255,0.4)" : faculty.border }}
        />

        {/* Subject */}
        <div className="flex items-center gap-1.5">
            <FaChalkboardTeacher
            size={13}
            style={{ color: hovered ? "rgba(255,255,255,0.8)" : faculty.accent }}
            />
            <span
            className="text-sm font-semibold transition-colors duration-500"
            style={{
                fontFamily: "'Nunito', sans-serif",
                color: hovered ? "rgba(255,255,255,0.9)" : "#374151",
            }}
            >
            {faculty.subject}
            </span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-1.5">
            <HiAcademicCap
            size={14}
            style={{ color: hovered ? "rgba(255,255,255,0.8)" : faculty.accent }}
            />
            <span
            className="text-sm transition-colors duration-500"
            style={{
                fontFamily: "'Nunito', sans-serif",
                color: hovered ? "rgba(255,255,255,0.75)" : "#6B7280",
            }}
            >
            {faculty.experience} Experience
            </span>
        </div>

        </div>
    </div>
    );
}

export default function FacultySection() {
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

      // Cards
      const cards = sectionRef.current.querySelectorAll('[data-gsap="card"]');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
            top: "-80px", left: "50%", transform: "translateX(-50%)",
            width: "600px", height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, #FF6B3510 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-14">

          {/* ── Header ── */}
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
              Meet The Mentors
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
              Learn From{" "}
              <span style={{ color: "#FF6B35" }}>India's Best</span>
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
              Our faculty brings decades of teaching experience and a track record
              of producing top rankers every year.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {facultyData.map((faculty, i) => (
              <FacultyCard key={faculty.id} faculty={faculty} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}