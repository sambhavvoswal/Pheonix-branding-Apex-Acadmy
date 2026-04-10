import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserGraduate, FaTrophy, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <FaUserGraduate size={32} />,
    value: 50000,
    suffix: "+",
    label: "Students Trained",
    sublabel: "Across JEE, NEET & UPSC",
    color: "#FF6B35",
    bg: "#FFF4EF",
    border: "#FFD5C2",
  },
  {
    icon: <FaTrophy size={32} />,
    value: 1200,
    suffix: "+",
    label: "Top Rankers",
    sublabel: "AIR holders every year",
    color: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  {
    icon: <MdVerified size={34} />,
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Trusted since 2009",
    color: "#10B981",
    bg: "#F0FDF4",
    border: "#A7F3D0",
  },
  {
    icon: <FaStar size={32} />,
    value: 4.8,
    suffix: "",
    label: "Average Rating",
    sublabel: "By students & parents",
    color: "#6366F1",
    bg: "#EEF2FF",
    border: "#C7D2FE",
  },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isDecimal = !Number.isInteger(target);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ stat, index, visible }) {
  const count = useCountUp(stat.value, 2000, visible);
  const [hovered, setHovered] = useState(false);

  const display = Number.isInteger(stat.value)
    ? count.toLocaleString()
    : count.toFixed(1);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-gsap="reveal"
      style={{
        background: hovered ? stat.color : stat.bg,
        border: `1.5px solid ${hovered ? stat.color : stat.border}`,
        borderRadius: "20px",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
        flex: "1 1 220px",
        minWidth: "220px",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 40px ${stat.color}33`
          : "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          color: hovered ? "#fff" : stat.color,
          background: hovered ? "rgba(255,255,255,0.2)" : `${stat.color}18`,
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.35s ease",
        }}
      >
        {stat.icon}
      </div>

      <div>
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: hovered ? "#fff" : stat.color,
            lineHeight: 1,
            letterSpacing: "-1px",
            transition: "color 0.35s ease",
          }}
        >
          {display}
          {stat.suffix}
        </div>
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: hovered ? "rgba(255,255,255,0.95)" : "#1B2A4A",
            marginTop: "6px",
            transition: "color 0.35s ease",
          }}
        >
          {stat.label}
        </div>
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.82rem",
            color: hovered ? "rgba(255,255,255,0.75)" : "#6B7280",
            marginTop: "3px",
            transition: "color 0.35s ease",
          }}
        >
          {stat.sublabel}
        </div>
      </div>
    </div>
  );
}

const Achievement = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  /* Use ScrollTrigger instead of IntersectionObserver */
  useGSAP(
    () => {
      // Header reveal
      const headerEls = sectionRef.current.querySelectorAll('[data-gsap="reveal-header"]');
      gsap.fromTo(
        headerEls,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Cards reveal + trigger count-up
      const cards = sectionRef.current.querySelectorAll('[data-gsap="reveal"]');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
            onEnter: () => setVisible(true),
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
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem)",
          background: "#FAFAF8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3515 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6366F115 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          <span
            data-gsap="reveal-header"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#FF6B35",
              background: "#FFF4EF",
              border: "1px solid #FFD5C2",
              borderRadius: "100px",
              padding: "6px 18px",
              display: "inline-block",
              marginBottom: "1rem",
              opacity: 0,
            }}
          >
            Our Achievements
          </span>
          <h2
            data-gsap="reveal-header"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              fontWeight: 900,
              color: "#1B2A4A",
              margin: "0 0 0.75rem",
              lineHeight: 1.2,
              opacity: 0,
            }}
          >
            Numbers That Speak
            <br />
            <span style={{ color: "#FF6B35" }}>For Themselves</span>
          </h2>
          <p
            data-gsap="reveal-header"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#6B7280",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
              opacity: 0,
            }}
          >
            Over a decade of shaping toppers across India's most competitive exams.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(1rem, 3vw, 1.5rem)",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievement;
