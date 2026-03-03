import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Star } from "lucide-react";

const values = [
  {
    title: "Development",
    description:
      "We focus on building well-rounded players through age-appropriate training that nurtures technical skills, tactical understanding, and a love for the game.",
    icon: Zap,
  },
  {
    title: "Teamwork",
    description:
      "Soccer is a team sport. We instill values of collaboration, communication, and mutual respect that extend far beyond the pitch.",
    icon: Users,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do — from coaching standards to player development — empowering each athlete to reach their full potential.",
    icon: Star,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          About Our Club
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1A1A1A]/70">
          Houstonians FC West is a competitive youth soccer club dedicated to
          developing the next generation of players in the Houston area. We
          provide a positive, challenging environment where young athletes grow
          as players and people.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card
              key={v.title}
              className="border-gray-100 bg-[#F5F5F5] text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <v.icon className="h-8 w-8 text-[#C41E3A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">
                  {v.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
