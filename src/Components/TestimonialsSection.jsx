import { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sneha Iyer",
    role: "NEET UG — AIR 45",
    initials: "SI",
    accent: "#10B981",
    review:
      "Apex Academy helped me secure AIR 45 in NEET. The faculty support was absolutely amazing — every doubt was cleared within hours!",
    rating: 5,
    tag: "NEET 2025",
    liked: 142,
  },
  {
    id: 2,
    name: "Rohan Mehta",
    role: "JEE Advanced — AIR 12",
    initials: "RM",
    accent: "#FF6B35",
    review:
      "The structured preparation and test series made all the difference. I never felt lost — the mentors always knew exactly where I was struggling.",
    rating: 5,
    tag: "JEE 2025",
    liked: 198,
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "NEET UG — AIR 210",
    initials: "PN",
    accent: "#6366F1",
    review:
      "Coming from a small town, I was nervous. But the recorded lectures and doubt sessions made it feel like I had a personal tutor 24/7.",
    rating: 5,
    tag: "NEET 2025",
    liked: 87,
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "UPSC CSE — AIR 78",
    initials: "AS",
    accent: "#F59E0B",
    review:
      "The GS Foundation course is brilliantly structured. The interview guidance sessions gave me the confidence to walk into that room without fear.",
    rating: 5,
    tag: "UPSC 2025",
    liked: 113,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={11} color="#FBBF24" />
      ))}
    </div>
  );
}

function CommentCard({ t, active }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(t.liked);

  const handleLike = () => {
    setLiked((p) => !p);
    setLikeCount((p) => (liked ? p - 1 : p + 1));
  };

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl p-5 sm:p-6 w-full
                 transition-all duration-500"
      style={{
        background: "#fff",
        border: `1.5px solid ${active ? t.accent : "#F3F4F6"}`,
        boxShadow: active
          ? `0 16px 40px ${t.accent}22`
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: active ? "scale(1.01)" : "scale(1)",
      }}
    >
      {/* Top row — avatar + name + tag */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center
                     text-white text-sm font-black shrink-0"
          style={{ background: t.accent }}
        >
          {t.initials}
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <span
            className="font-black text-sm leading-tight truncate"
            style={{ fontFamily: "'Nunito', sans-serif", color: "#1B2A4A" }}
          >
            {t.name}
          </span>
          <span
            className="text-xs truncate"
            style={{ fontFamily: "'Nunito', sans-serif", color: "#9CA3AF" }}
          >
            {t.role}
          </span>
        </div>

        {/* Tag pill */}
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
          style={{
            fontFamily: "'Nunito', sans-serif",
            background: `${t.accent}15`,
            color: t.accent,
          }}
        >
          {t.tag}
        </span>
      </div>

      {/* Quote */}
      <div className="relative pl-5">
        <FaQuoteLeft
          size={14}
          className="absolute top-0 left-0"
          style={{ color: `${t.accent}60` }}
        />
        <p
          className="text-sm leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif", color: "#4B5563" }}
        >
          {t.review}
        </p>
      </div>

      {/* Bottom row — stars + like */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <StarRating count={t.rating} />

        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-xs font-semibold
                     transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: liked ? t.accent : "#9CA3AF",
          }}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill={liked ? t.accent : "none"}
            stroke={liked ? t.accent : "#9CA3AF"}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {likeCount}
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);


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
        <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10">

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
              Student Reviews
            </span>

            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#1B2A4A",
              }}
            >
              What Our{" "}
              <span style={{ color: "#FF6B35" }}>Students Say</span>
            </h2>
          </div>

          {/* Cards grid — show all, highlight active */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {testimonials.map((t, i) => (
              <CommentCard key={t.id} t={t} active={i === current} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}