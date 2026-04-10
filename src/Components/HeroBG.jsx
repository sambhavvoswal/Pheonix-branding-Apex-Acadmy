import { useState } from "react";
import img1 from "../assets/HeroBG/img1.png";
import img2 from "../assets/HeroBG/img2.png";
import img3 from "../assets/HeroBG/img3.png";
import img4 from "../assets/HeroBG/img4.png";
import img5 from "../assets/HeroBG/img5.png";
import img6 from "../assets/HeroBG/img6.png";


const images = [img1, img2, img3, img4, img5, img6];

const SLIDE_DURATION = 3;
const FADE_DURATION = 0.2;
const CYCLE = SLIDE_DURATION * images.length;

const holdPct = (SLIDE_DURATION / CYCLE) * 100;
const fadePct = (FADE_DURATION / CYCLE) * 100;

const keyframes = `
@keyframes heroBGFade {
  0%                     { opacity: 0.75; }
  ${holdPct - fadePct}%  { opacity: 0.75; }
  ${holdPct}%            { opacity: 0;    }
  99.99%                 { opacity: 0;    }
  100%                   { opacity: 0.75; }
}
@keyframes kenBurns {
  0%   { transform: scale(1)    translateX(0%)    translateY(0%);  }
  100% { transform: scale(1.08) translateX(-1.5%) translateY(-1%); }
}
`;

export default function HeroBG() {
  useState(() => {
    if (typeof document === "undefined") return;
    const id = "hero-bg-keyframes";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = keyframes;
      document.head.appendChild(tag);
    }
  });

  return (
    <div className="z-0" style={styles.wrapper}>
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            ...styles.layer,
            backgroundImage: `url(${src})`,
            animationDelay: `${-(CYCLE - i * SLIDE_DURATION)}s`,
          }}
        />
      ))}
      <div style={styles.gradient} />
    </div>
  );
}

const styles = {
  wrapper: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    backgroundColor: "#1B2A4A",
    zIndex: -1,
  },
  layer: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: `heroBGFade ${CYCLE}s linear infinite, kenBurns ${CYCLE}s ease-in-out infinite`,
    willChange: "opacity, transform",
  },
  gradient: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(27,42,74,0.85) 0%, rgba(27,42,74,0.35) 50%, rgba(27,42,74,0.15) 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
};