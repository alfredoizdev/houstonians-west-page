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
  return (
    <section id="programs" className="bg-[#F5F5F5] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Our Programs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1A1A1A]/70">
          We offer programs for every age and skill level, from first-time
          players to elite competitors.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {programs.map((p) => (
            <Card
              key={p.name}
              className="border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
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
