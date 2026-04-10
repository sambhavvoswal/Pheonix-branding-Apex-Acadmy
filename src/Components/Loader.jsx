import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

/**
 * Premium splash / loader screen.
 * Shows the tagline "Shaping Futures, Building Careers"
 * with a cinematic GSAP timeline, then exits after ~2.5s.
 *
 * @param {{ onComplete: () => void }} props
 */
export default function Loader({ onComplete }) {
  const overlayRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const barRef = useRef(null);
  const dotRef = useRef(null);
  const [ready, setReady] = useState(false);

  /* make sure DOM is painted before we animate */
  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const tl = gsap.timeline({
      onComplete: () => {
        /* exit animation */
        gsap.to(overlayRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    /* ── entrance ── */
    tl.fromTo(
      dotRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }
    )
      .fromTo(
        line1Ref.current,
        { y: 40, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .fromTo(
        line2Ref.current,
        { y: 30, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35"
      )
      .fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.0, ease: "power2.inOut" },
        "-=0.3"
      )
      /* hold for a beat */
      .to({}, { duration: 0.6 });

    return () => tl.kill();
  }, [ready, onComplete]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#1B2A4A",
        overflow: "hidden",
      }}
    >
      {/* subtle radial glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* logo dot */}
      <div
        ref={dotRef}
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#FF6B35",
          marginBottom: 28,
          boxShadow: "0 0 30px rgba(255,107,53,0.5)",
          opacity: 0,
        }}
      />

      {/* tagline line 1 */}
      <div
        ref={line1Ref}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1.4rem, 4vw, 2.6rem)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.5px",
          lineHeight: 1.2,
          textAlign: "center",
          opacity: 0,
        }}
      >
        Shaping Futures,
      </div>

      {/* tagline line 2 */}
      <div
        ref={line2Ref}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "clamp(1.4rem, 4vw, 2.6rem)",
          fontWeight: 900,
          color: "#FF6B35",
          letterSpacing: "-0.5px",
          lineHeight: 1.2,
          textAlign: "center",
          opacity: 0,
        }}
      >
        Building Careers.
      </div>

      {/* animated underline bar */}
      <div
        ref={barRef}
        style={{
          width: "clamp(80px, 20vw, 160px)",
          height: 3,
          borderRadius: 4,
          background:
            "linear-gradient(90deg, #FF6B35, #F59E0B)",
          marginTop: 20,
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
