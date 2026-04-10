import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdPhone, MdEmail, MdSend } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FaBell } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  "JEE Main & Advanced",
  "NEET UG",
  "UPSC Foundation",
  "2-Year Classroom Program",
  "Crash Course",
  "Foundation (Class 8–10)",
  "Test Series",
];

export default function ContactNewsletter() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [focused, setFocused] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);
  const [subHovered, setSubHovered] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.course || !form.message) return;
    setFormSubmitted(true);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterDone(true);
  };

  const inputBase = (name) => ({
    fontFamily: "'Nunito', sans-serif",
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    outline: "none",
    border: `1.5px solid ${focused === name ? "#FF6B35" : "#E5E7EB"}`,
    background: focused === name ? "#FFF9F7" : "#F9FAFB",
    color: "#1B2A4A",
    transition: "all 0.25s ease",
    boxShadow: focused === name ? "0 0 0 3px #FF6B3518" : "none",
  });

  useGSAP(
    () => {
      // Left info block — slide from left
      const left = sectionRef.current.querySelector('[data-gsap="left"]');
      gsap.fromTo(
        left,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Right form — slide from right
      const right = sectionRef.current.querySelector('[data-gsap="right"]');
      gsap.fromTo(
        right,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Newsletter bar — fade up
      const newsletter = sectionRef.current.querySelector('[data-gsap="newsletter"]');
      gsap.fromTo(
        newsletter,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: newsletter,
            start: "top 90%",
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
        className="relative w-full overflow-hidden py-16 sm:py-24 px-4 sm:px-8"
        style={{ background: "#1B2A4A" }}
      >
        {/* Background blobs */}
        <div className="absolute pointer-events-none"
          style={{
            top: "-100px", right: "-100px", width: "450px", height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #FF6B3518 0%, transparent 70%)",
          }}
        />
        <div className="absolute pointer-events-none"
          style={{
            bottom: "-80px", left: "-80px", width: "350px", height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #6366F115 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto flex flex-col gap-16">

          {/* ── TOP: Contact info + Form ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — info */}
            <div data-gsap="left" className="flex flex-col gap-8" style={{ opacity: 0 }}>
              <div className="flex flex-col gap-4">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-4 py-1.5
                             rounded-full w-fit"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: "#FF6B35",
                    background: "#FF6B3520",
                    border: "1px solid #FF6B3535",
                    letterSpacing: "2.5px",
                  }}
                >
                  Get In Touch
                </span>

                <h2
                  className="font-black leading-tight"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    color: "#fff",
                  }}
                >
                  Let's Start Your{" "}
                  <span style={{ color: "#FF6B35" }}>Journey Today</span>
                </h2>

                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#94A3B8" }}
                >
                  Have questions? Our counsellors are here to help you pick the right
                  course and get started.
                </p>
              </div>

              {/* Contact pills */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: <MdPhone size={18} />, label: "Call Us", value: "+91 98765 43210" },
                  { icon: <MdEmail size={18} />, label: "Email Us", value: "support@apexacademy.com" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#FF6B3525", color: "#FF6B35" }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="text-xs font-semibold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#64748B" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#fff" }}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative stat strip */}
              <div
                className="grid grid-cols-3 gap-3 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {[
                  { val: "< 24h", label: "Response time" },
                  { val: "Free", label: "Counselling" },
                  { val: "4.8★", label: "Support rating" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-1">
                    <span
                      className="font-black text-lg"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#FF6B35" }}
                    >
                      {s.val}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'Nunito', sans-serif", color: "#64748B" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              data-gsap="right"
              className="rounded-2xl p-6 sm:p-8 flex flex-col gap-5"
              style={{
                background: "#fff",
                boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                opacity: 0,
              }}
            >
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "#FFF4EF" }}
                  >
                    <MdSend size={28} color="#FF6B35" />
                  </div>
                  <h3
                    className="font-black text-xl"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "#1B2A4A" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    Our team will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setForm({ name: "", phone: "", course: "", message: "" }); }}
                    className="text-sm font-bold underline"
                    style={{ color: "#FF6B35", fontFamily: "'Nunito', sans-serif" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="font-black text-xl"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "#1B2A4A" }}
                  >
                    Book Free Counselling
                  </h3>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#6B7280" }}
                      >
                        Full Name
                      </label>
                      <input
                        name="name" value={form.name} onChange={handleChange}
                        placeholder="Rohan Mehta"
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        style={inputBase("name")}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#6B7280" }}
                      >
                        Phone Number
                      </label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" type="tel"
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused("")}
                        style={inputBase("phone")}
                      />
                    </div>

                    {/* Course dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#6B7280" }}
                      >
                        Course Interested In
                      </label>
                      <select
                        name="course" value={form.course} onChange={handleChange}
                        onFocus={() => setFocused("course")}
                        onBlur={() => setFocused("")}
                        style={{ ...inputBase("course"), cursor: "pointer" }}
                      >
                        <option value="">Select a course...</option>
                        {courses.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="text-xs font-bold"
                        style={{ fontFamily: "'Nunito', sans-serif", color: "#6B7280" }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        placeholder="Tell us about your goals or questions..."
                        rows={3}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        style={{ ...inputBase("message"), resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      onMouseEnter={() => setBtnHovered(true)}
                      onMouseLeave={() => setBtnHovered(false)}
                      className="flex items-center justify-center gap-2.5 w-full
                                 py-3.5 rounded-xl font-bold text-base
                                 transition-all duration-300"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        background: btnHovered ? "#e85a25" : "#FF6B35",
                        color: "#fff",
                        boxShadow: btnHovered
                          ? "0 10px 28px #FF6B3550"
                          : "0 4px 14px #FF6B3530",
                        transform: btnHovered ? "scale(1.02)" : "scale(1)",
                      }}
                    >
                      <MdSend size={17} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            className="w-full h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          {/* ── BOTTOM: Newsletter ── */}
          <div
            data-gsap="newsletter"
            className="flex flex-col sm:flex-row items-center justify-between
                       gap-8 rounded-2xl px-6 sm:px-10 py-8"
            style={{
              background: "rgba(255,107,53,0.10)",
              border: "1px solid rgba(255,107,53,0.22)",
              opacity: 0,
            }}
          >
            {/* Left text */}
            <div className="flex items-start gap-4 flex-1">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#FF6B3525", color: "#FF6B35" }}
              >
                <FaBell size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className="font-black text-lg"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#fff" }}
                >
                  Stay Updated
                </h3>
                <p
                  className="text-sm"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#94A3B8" }}
                >
                  Get exam tips, batch updates & exclusive offers straight to your inbox.
                </p>
              </div>
            </div>

            {/* Right — email input */}
            {newsletterDone ? (
              <div
                className="flex items-center gap-2 px-5 py-3 rounded-xl"
                style={{ background: "#FF6B3525", border: "1px solid #FF6B3540" }}
              >
                <FaBell size={14} color="#FF6B35" />
                <span
                  className="text-sm font-bold"
                  style={{ fontFamily: "'Nunito', sans-serif", color: "#FF6B35" }}
                >
                  You're subscribed!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex gap-2 w-full sm:w-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 sm:w-64 px-4 py-3 rounded-xl text-sm outline-none
                             transition-all duration-300"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                  }}
                />
                <button
                  type="submit"
                  onMouseEnter={() => setSubHovered(true)}
                  onMouseLeave={() => setSubHovered(false)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl
                             font-bold text-sm transition-all duration-300 shrink-0"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    background: subHovered ? "#e85a25" : "#FF6B35",
                    color: "#fff",
                    transform: subHovered ? "scale(1.04)" : "scale(1)",
                    boxShadow: subHovered ? "0 8px 20px #FF6B3545" : "none",
                  }}
                >
                  Subscribe
                  <HiArrowRight
                    size={15}
                    style={{
                      transform: subHovered ? "translateX(2px)" : "translateX(0)",
                      transition: "transform 0.3s",
                    }}
                  />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}