import { useState } from "react";
import { FaTrophy, FaMedal } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

const toppers = [
  {
    id: 1,
    name: "Rohan Mehta",
    exam: "JEE Advanced",
    air: 12,
    category: "Engineering",
    initials: "RM",
    accent: "#FF6B35",
    bg: "#FFF4EF",
    border: "#FFD5C2",
    avatarBg: "#FF6B35",
    medal: "gold",
    year: "2025",
  },
  {
    id: 2,
    name: "Sneha Iyer",
    exam: "NEET UG",
    air: 45,
    category: "Medical",
    initials: "SI",
    accent: "#10B981",
    bg: "#F0FDF4",
    border: "#A7F3D0",
    avatarBg: "#10B981",
    medal: "silver",
    year: "2025",
  },
  {
    id: 3,
    name: "Arjun Singh",
    exam: "UPSC CSE",
    air: 78,
    category: "Civil Services",
    initials: "AS",
    accent: "#6366F1",
    bg: "#EEF2FF",
    border: "#C7D2FE",
    avatarBg: "#6366F1",
    medal: "bronze",
    year: "2025",
  },
];

const medalStyles = {
  gold:   { icon: <FaTrophy size={14} />,  bg: "#FEF3C7", color: "#D97706", label: "Gold"   },
  silver: { icon: <FaMedal  size={14} />,  bg: "#F1F5F9", color: "#64748B", label: "Silver" },
  bronze: { icon: <FaMedal  size={14} />,  bg: "#FEF0E7", color: "#C2622D", label: "Bronze" },
};

function TopperCard({ topper, index }) {
  const [hovered, setHovered] = useState(false);
  const medal = medalStyles[topper.medal];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden
                 transition-all duration-500 cursor-default"
      style={{
        background: hovered ? topper.accent : "#fff",
        border: `1.5px solid ${hovered ? topper.accent : topper.border}`,
        boxShadow: hovered
          ? `0 24px 48px ${topper.accent}35`
          : "0 2px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transitionDelay: `${index * 0.08}s`,
      }}
    >
      {/* Top band with AIR badge */}
      <div
        className="relative w-full flex items-center justify-between px-5 pt-5 pb-10"
        style={{
          background: hovered
            ? `${topper.accent}25`
            : `linear-gradient(135deg, ${topper.accent}18 0%, ${topper.accent}06 100%)`,
        }}
      >
        {/* Medal pill */}
        <span
          className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full
                     transition-all duration-500"
          style={{
            background: hovered ? "rgba(255,255,255,0.2)" : medal.bg,
            color: hovered ? "#fff" : medal.color,
          }}
        >
          {medal.icon}
          {medal.label}
        </span>

        {/* Year */}
        <span
          className="text-xs font-semibold transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "rgba(255,255,255,0.7)" : "#9CA3AF",
          }}
        >
          {topper.year}
        </span>
      </div>

      {/* Avatar — overlaps band */}
      <div className="relative flex justify-center -mt-10 mb-4 z-10">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center
                       text-white text-xl font-black ring-4 transition-all duration-500"
            style={{
              background: topper.avatarBg,
              ringColor: hovered ? "rgba(255,255,255,0.3)" : "#fff",
              boxShadow: hovered
                ? `0 8px 24px ${topper.accent}55`
                : `0 4px 12px ${topper.accent}30`,
              outline: `4px solid ${hovered ? "rgba(255,255,255,0.3)" : "#fff"}`,
            }}
          >
            {topper.initials}
          </div>
          {/* Verified dot */}
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full
                       flex items-center justify-center"
            style={{
              background: topper.accent,
              outline: "2px solid #fff",
            }}
          >
            <MdVerified size={12} color="#fff" />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col items-center gap-3 px-6 pb-7 text-center">

        {/* AIR badge — hero element */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-500"
          style={{
            background: hovered ? "rgba(255,255,255,0.18)" : topper.bg,
            border: `1px solid ${hovered ? "rgba(255,255,255,0.25)" : topper.border}`,
          }}
        >
          <FaTrophy
            size={14}
            style={{ color: hovered ? "#fff" : topper.accent }}
          />
          <span
            className="font-black text-2xl transition-colors duration-500"
            style={{
              fontFamily: "'Nunito', sans-serif",
              color: hovered ? "#fff" : topper.accent,
              letterSpacing: "-0.5px",
            }}
          >
            AIR {topper.air}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-black text-lg leading-tight transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "#fff" : "#1B2A4A",
          }}
        >
          {topper.name}
        </h3>

        {/* Exam */}
        <span
          className="text-sm font-semibold px-3 py-1 rounded-full transition-all duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: hovered ? "rgba(255,255,255,0.15)" : topper.bg,
            color: hovered ? "rgba(255,255,255,0.9)" : topper.accent,
          }}
        >
          {topper.exam}
        </span>

        {/* Category */}
        <p
          className="text-xs transition-colors duration-500"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: hovered ? "rgba(255,255,255,0.65)" : "#9CA3AF",
          }}
        >
          {topper.category}
        </p>

      </div>

      {/* Bottom accent slide */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full
                   transition-all duration-500"
        style={{
          background: topper.accent,
          width: hovered ? "100%" : "0%",
        }}
      />
    </div>
  );
}

export default function TopResults() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full overflow-hidden py-20 sm:py-28 px-4 sm:px-8"
        style={{ background: "#FAFAF8" }}
      >
        {/* Blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-60px", right: "-60px",
            width: "350px", height: "350px", borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3512 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-60px", left: "-60px",
            width: "300px", height: "300px", borderRadius: "50%",
            background: "radial-gradient(circle, #6366F110 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-14">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-xl">
            <span
              className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#FF6B35",
                background: "#FFF4EF",
                border: "1px solid #FFD5C2",
                letterSpacing: "2.5px",
              }}
            >
              Hall of Fame
            </span>

            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                color: "#1B2A4A",
              }}
            >
              Our{" "}
              <span style={{ color: "#FF6B35" }}>Top Rankers</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#6B7280",
              }}
            >
              Every AIR is a story of hard work, great mentorship, and the
              Apex Academy difference.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {toppers.map((topper, i) => (
              <TopperCard key={topper.id} topper={topper} index={i} />
            ))}
          </div>

          {/* CTA */}
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full
                       font-bold text-base transition-all duration-300"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: btnHovered ? "#e85a25" : "#FF6B35",
              color: "#fff",
              boxShadow: btnHovered
                ? "0 12px 32px #FF6B3550"
                : "0 4px 16px #FF6B3530",
              transform: btnHovered ? "scale(1.04)" : "scale(1)",
            }}
          >
            View All Results
            <HiArrowRight
              size={18}
              style={{
                transform: btnHovered ? "translateX(3px)" : "translateX(0)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>

        </div>
      </section>
    </>
  );
}