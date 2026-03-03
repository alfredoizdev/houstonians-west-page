import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-[#1A1A1A] text-white md:min-h-[850px]">
      {/* Mobile: static image */}
      <Image
        src="/hero-mobile.jpeg"
        alt="Houstonians FC West team running"
        fill
        className="absolute inset-0 object-cover md:hidden"
        priority
      />

      {/* Desktop: background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 hidden h-full w-full object-cover object-[center_55%] md:block"
      >
        <source src="/video/banner-hero-compressed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#8B0000]/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Image
          src="/logo-team.png"
          alt="Houstonians FC West logo"
          width={150}
          height={150}
          className="mx-auto mb-6 drop-shadow-lg"
          priority
        />
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md sm:text-5xl md:text-6xl">
          Houstonians FC West
        </h1>
        <p className="mt-4 text-lg font-medium text-white/90 drop-shadow-sm sm:text-xl md:text-2xl">
          Developing Champions On and Off the Field
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full bg-white px-8 text-[#C41E3A] font-bold shadow-lg hover:bg-[#F5F5F5]">
          <a href="#contact">Join Our Team</a>
        </Button>
      </div>
    </section>
  );
}
