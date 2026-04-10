import { useState } from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

export default function CourseCard({ course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-2xl overflow-hidden cursor-pointer group border border-white/10 bg-[#0d1117] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl max-w-full sm:max-w-sm"
      style={{
        boxShadow: hovered
          ? `0 24px 48px ${course.accent}30, 0 0 0 1px ${course.accent}40`
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* ── Image thumbnail ── */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        {/* macOS-style dots */}
        <div className="absolute top-3 left-3 z-10 flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
        </div>

        {/* Badge */}
        {course.badge && (
          <div
            className={`absolute top-3 right-3 z-10 flex items-center gap-1
                        px-2.5 py-1 rounded-full text-white text-xs font-bold
                        ${course.badgeColor}`}
          >
            <MdVerified size={12} />
            {course.badge}
          </div>
        )}

        {/* Course image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay on image */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${course.gradient} opacity-60
                      group-hover:opacity-40 transition-opacity duration-500`}
        />

        {/* Category pill on image */}
        <div className="absolute bottom-3 left-3 z-10">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border
                        backdrop-blur-sm ${course.tagBg}`}
          >
            {course.tag}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        {/* Category label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-500">
          {course.category}
        </p>

        {/* Title */}
        <h3
          className="font-extrabold text-lg sm:text-xl leading-snug text-white transition-colors duration-300"
          style={{ color: hovered ? course.accent : "#ffffff" }}
        >
          {course.title}
        </h3>

        {/* Topics list */}
        <ul className="flex flex-col gap-2">
          {course.topics.map((topic, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <HiCheckCircle
                size={15}
                className="shrink-0"
                style={{ color: course.accent }}
              />
              {topic}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-auto" />

        {/* CTA */}
        <button
          className="flex items-center justify-between w-full text-sm font-semibold transition-all duration-300 group/btn"
          style={{ color: course.accent }}
        >
          <span>Explore Course</span>
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 group-hover/btn:translate-x-1"
            style={{
              borderColor: `${course.accent}50`,
              background: hovered ? `${course.accent}20` : "transparent",
            }}
          >
            <HiArrowRight size={14} />
          </span>
        </button>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: course.accent }}
      />
    </div>
  );
}