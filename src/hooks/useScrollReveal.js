import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable scroll-reveal hook.
 * Any element inside `containerRef` with `data-gsap="reveal"` will
 * fade-up into view the first time it scrolls into the viewport.
 *
 * @param {React.RefObject} containerRef
 * @param {object} [opts]
 * @param {number} [opts.y=50]         start offset in px
 * @param {number} [opts.duration=0.8] tween duration
 * @param {number} [opts.stagger=0.12] stagger between siblings
 * @param {string} [opts.ease="power3.out"]
 * @param {string} [opts.start="top 85%"] ScrollTrigger start
 */
export default function useScrollReveal(containerRef, opts = {}) {
  const {
    y = 50,
    duration = 0.8,
    stagger = 0.12,
    ease = "power3.out",
    start = "top 85%",
  } = opts;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('[data-gsap="reveal"]');
      if (!items.length) return;

      gsap.set(items, { opacity: 0, y });

      ScrollTrigger.batch(items, {
        start,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration,
            ease,
            stagger,
            overwrite: true,
          }),
        once: true,
      });
    },
    { scope: containerRef, dependencies: [] }
  );
}
