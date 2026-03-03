import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/gallery-img/01-team-running.jpeg", alt: "Team running together" },
  { src: "/gallery-img/02-dribble-action.jpeg", alt: "Player dribbling past defender" },
  { src: "/gallery-img/03-players-running.jpeg", alt: "Players running on the field" },
  { src: "/gallery-img/04-coach-team.jpeg", alt: "Coach talking to the team" },
  { src: "/gallery-img/05-handshake.jpeg", alt: "Teams shaking hands" },
  { src: "/gallery-img/06-goalkeeper.jpeg", alt: "Goalkeeper in action" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Academy Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1A1A1A]/70">
          Highlights from our matches, training sessions, and tournament days.
        </p>

        {/* Masonry-style grid — only 6 images on landing */}
        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`mb-4 overflow-hidden rounded-xl ${
                i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
              } relative`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="rounded-full bg-[#C41E3A] px-8 font-bold text-white hover:bg-[#8B0000]">
            <Link href="/gallery">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
