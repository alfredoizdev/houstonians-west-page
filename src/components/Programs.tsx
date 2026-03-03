"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    name: "U6 – U8 | Little Kickers",
    description:
      "An introduction to soccer focused on fun, coordination, and basic ball skills in a supportive environment.",
    age: "Ages 5–8",
  },
  {
    name: "U9 – U11 | Development Academy",
    description:
      "Building on fundamentals with more structured training, small-sided games, and an emphasis on decision-making.",
    age: "Ages 9–11",
  },
  {
    name: "U12 – U14 | Competitive Teams",
    description:
      "Competitive league play with advanced tactical training, positional work, and tournament participation.",
    age: "Ages 12–14",
  },
  {
    name: "U15 – U18 | Elite Program",
    description:
      "High-level competition preparing players for college recruitment, showcases, and elite-level soccer.",
    age: "Ages 15–18",
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      const content = contentRef.current;
      if (!section || !bg || !content) return;

      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Only animate when section is in viewport
      if (rect.bottom < 0 || rect.top > windowH) return;

      // How far the section has scrolled relative to viewport center
      const offset = rect.top;

      // Background moves slower (0.3x) — classic parallax
      bg.style.transform = `translateY(${offset * 0.3}px)`;

      // Content moves slightly faster (0.05x opposite) for depth
      content.style.transform = `translateY(${offset * 0.05}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="relative overflow-hidden py-20">
      {/* Background image — parallax layer (slower) */}
      <div ref={bgRef} className="absolute inset-[-50%] will-change-transform">
        <Image
          src="/field.jpg"
          alt=""
          fill
          className="object-cover object-center"
          quality={80}
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/50" />

      {/* Content — parallax layer (faster) */}
      <div ref={contentRef} className="relative z-10 mx-auto max-w-7xl px-6 will-change-transform">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Our Programs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/70">
          We offer programs for every age and skill level, from first-time
          players to elite competitors.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {programs.map((p) => (
            <Card
              key={p.name}
              className="border-white/10 bg-white/95 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl"
            >
              <CardContent className="p-8">
                <Badge variant="secondary" className="bg-[#C41E3A]/10 text-[#C41E3A] hover:bg-[#C41E3A]/10">
                  {p.age}
                </Badge>
                <h3 className="mt-3 text-xl font-semibold text-[#1A1A1A]">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
