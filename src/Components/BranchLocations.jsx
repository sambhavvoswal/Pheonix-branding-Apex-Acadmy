import { useState } from "react";
import { HiLocationMarker, HiArrowRight } from "react-icons/hi";
import { MdAccessTime, MdPhone } from "react-icons/md";

import bangaloreImg from "../assets/branches/bangalore.png";
import hyderabadImg from "../assets/branches/hyderabad.png";
import delhiImg     from "../assets/branches/delhi.png";
import puneImg      from "../assets/branches/pune.png";

const branches = [
  {
    id: 1,
    city: "Bangalore",
    state: "Karnataka",
    image: bangaloreImg,
    address: "MG Road, Bengaluru – 560001",
    phone: "+91646464 43210",
    timing: "Mon–Sat, 8am–8pm",
    tag: "Headquarters",
    accent: "#FF6B35",
  },
  {
    id: 2,
    city: "Hyderabad",
    state: "Telangana",
    image: hyderabadImg,
    address: "Banjara Hills, Hyderabad – 500034",
    phone: "+91 662548 43211",
    timing: "Mon–Sat, 8am–8pm",
    tag: "South Hub",
    accent: "#10B981",
  },
  {
    id: 3,
    city: "Delhi",
    state: "NCR",
    image: delhiImg,
    address: "Connaught Place, New Delhi – 110001",
    phone: "+91 56265 43212",
    timing: "Mon–Sat, 8am–8pm",
    tag: "North Hub",
    accent: "#6366F1",
  },
  {
    id: 4,
    city: "Pune",
    state: "Maharashtra",
    image: puneImg,
    address: "FC Road, Pune – 411004",
    phone: "+91 59265 43213",
    timing: "Mon–Sat, 8am–8pm",
    tag: "West Hub",
    accent: "#F59E0B",
  },
];

function BranchCard({ branch }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-default
                 transition-all duration-500 group"
      style={{
        boxShadow: hovered
          ? `0 24px 48px ${branch.accent}40`
          : "0 4px 20px rgba(0,0,0,0.10)",
        transform: hovered ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
        flex: "1 1 220px",
        minWidth: "220px",
      }}
    >
      {/* Background city image */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden">
        <img
          src={branch.image}
          alt={branch.city}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        />

        {/* Dark overlay — lightens slightly on hover to reveal image */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(to top, ${branch.accent}ee 0%, ${branch.accent}88 40%, rgba(0,0,0,0.15) 100%)`
              : "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        {/* Tag pill — top left */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm
                       transition-all duration-500"
            style={{
              fontFamily: "'Nunito', sans-serif",
              background: hovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.40)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {branch.tag}
          </span>
        </div>

        {/* Pin icon — top right */}
        <div
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full
                     flex items-center justify-center backdrop-blur-sm
                     transition-all duration-500"
          style={{
            background: hovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.2)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <HiLocationMarker size={16} color="#fff" />
        </div>

        {/* City name over image — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5">
          <p
            className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5
                       transition-colors duration-500"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {branch.state}
          </p>
          <h3
            className="text-white font-black leading-none transition-all duration-500"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
            }}
          >
            {branch.city}
          </h3>
        </div>
      </div>

      {/* Info drawer — slides up on hover */}
      <div
        className="flex flex-col gap-3 px-5 overflow-hidden transition-all duration-500"
        style={{
          maxHeight: hovered ? "180px" : "0px",
          paddingTop: hovered ? "16px" : "0px",
          paddingBottom: hovered ? "20px" : "0px",
          background: "#fff",
        }}
      >
        <div className="flex items-start gap-2">
          <HiLocationMarker
            size={15}
            className="shrink-0 mt-0.5"
            style={{ color: branch.accent }}
          />
          <span
            className="text-sm text-gray-500 leading-snug"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {branch.address}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MdPhone size={14} className="shrink-0" style={{ color: branch.accent }} />
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {branch.phone}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MdAccessTime size={14} className="shrink-0" style={{ color: branch.accent }} />
          <span
            className="text-sm text-gray-500"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {branch.timing}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BranchLocations() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative w-full overflow-hidden py-16 sm:py-24 px-4 sm:px-8"
        style={{ background: "#FAFAF8" }}
      >
        {/* Blobs */}
        <div className="absolute pointer-events-none"
          style={{
            top: "-80px", right: "-80px", width: "380px", height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3510 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-12">

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
              Our Centres
            </span>

            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#1B2A4A",
              }}
            >
              We're Present{" "}
              <span style={{ color: "#FF6B35" }}>Across India</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: "#6B7280",
              }}
            >
              Find your nearest Apex Academy centre and walk in for a free counselling session.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-5 justify-center w-full">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
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
            Find Nearest Center
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