import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import jeeImg   from "../assets/courses/jeeImg.png";
import neetImg  from "../assets/courses/neetImg.png";
import upscImg  from "../assets/courses/upscImg.png";
import foundImg from "../assets/courses/foundImg.png";
import CourseCard from './course/CourseCard';

gsap.registerPlugin(ScrollTrigger);

const courseData = [
    {
        id: 1,
        category: "Engineering",
        tag: "JEE",
        title: "JEE Main & Advanced",
        image: jeeImg,
        accent: "#FF6B35",
        gradient: "from-[#0d1b3e] to-[#1a3a6b]",
        tagBg: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        topics: ["JEE Main & Advanced Prep", "2-Year Classroom Program", "Crash Course"],
        badge: "Most Popular",
        badgeColor: "bg-orange-500",
    },
    {
        id: 2,
        category: "Medical",
        tag: "NEET",
        title: "NEET UG Preparation",
        image: neetImg,
        accent: "#10B981",
        gradient: "from-[#0d2e1f] to-[#0f4a32]",
        tagBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        topics: ["NEET UG Preparation", "Foundation Course", "Test Series"],
        badge: null,
        badgeColor: "",
    },
    {
        id: 3,
        category: "Civil Services",
        tag: "UPSC",
        title: "UPSC CS Foundation",
        image: upscImg,
        accent: "#6366F1",
        gradient: "from-[#0f0d2e] to-[#1a1760]",
        tagBg: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
        topics: ["GS Foundation", "Prelims + Mains", "Interview Guidance"],
        badge: "New Batch",
        badgeColor: "bg-indigo-500",
    },
    {
        id: 4,
        category: "School",
        tag: "Class 8–10",
        title: "Foundation Program",
        image: foundImg,
        accent: "#F59E0B",
        gradient: "from-[#2e1d05] to-[#4a3010]",
        tagBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
        topics: ["Olympiad Preparation", "NTSE", "Concept Building"],
        badge: null,
        badgeColor: "",
    },
];


const Couse = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Badge pill
      gsap.fromTo(
        sectionRef.current.querySelector('[data-gsap="badge"]'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Course cards
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
    <div ref={sectionRef}>
      <div className='w-full h-auto flex justify-center mt-10'>
        <div
          data-gsap="badge"
          className='inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-orange-600 mb-6'
          style={{ opacity: 0 }}
        >
          Courses
        </div>
      </div>

      <div className='w-full max-w-7xl mx-auto px-4 py-20 flex gap-8 flex-wrap justify-center'>
        {courseData.map((course) => (
          <div key={course.id} data-gsap="card" style={{ opacity: 0 }}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Couse