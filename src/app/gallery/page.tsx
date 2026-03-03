import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const allImages = Array.from({ length: 29 }, (_, i) => ({
  src: `/gallery-img/img-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `Houstonians FC West photo ${i + 1}`,
}));

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Houstonians FC West matches, training sessions, and tournaments in West Houston.",
  openGraph: {
    title: "Gallery | Houstonians FC West",
    description:
      "Photos from Houstonians FC West matches, training sessions, and tournaments.",
    images: ["/og-image.png"],
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#C41E3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Button asChild variant="ghost" className="mb-6 text-white hover:bg-white/10">
            <Link href="/#gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Academy Gallery
          </h1>
          <p className="mt-4 text-lg text-white/80">
            All photos from our matches, training sessions, and tournament days.
          </p>
        </div>
      </div>

      {/* All images grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {allImages.map((img, i) => (
            <div
              key={img.src}
              className={`mb-4 overflow-hidden rounded-xl ${
                i % 4 === 0
                  ? "aspect-[4/5]"
                  : i % 4 === 1
                    ? "aspect-[4/3]"
                    : i % 4 === 2
                      ? "aspect-square"
                      : "aspect-[3/4]"
              } relative`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
