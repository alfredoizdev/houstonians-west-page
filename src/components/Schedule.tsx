import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const schedule = [
  {
    day: "Monday",
    time: "5:00 PM – 6:30 PM",
    activity: "U6–U8 Practice",
    location: "West Houston Sports Complex",
  },
  {
    day: "Tuesday",
    time: "5:30 PM – 7:00 PM",
    activity: "U9–U11 Practice",
    location: "West Houston Sports Complex",
  },
  {
    day: "Wednesday",
    time: "6:00 PM – 7:30 PM",
    activity: "U12–U14 Practice",
    location: "Bear Creek Park",
  },
  {
    day: "Thursday",
    time: "6:00 PM – 8:00 PM",
    activity: "U15–U18 Practice",
    location: "Bear Creek Park",
  },
  {
    day: "Saturday",
    time: "8:00 AM – 12:00 PM",
    activity: "Game Day (All Ages)",
    location: "Various Locations",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
          Weekly Schedule
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#1A1A1A]/70">
          Practice and game times for the current season. Schedules are subject
          to change — check back for updates.
        </p>

        {/* Desktop table */}
        <div className="mt-14 hidden overflow-hidden rounded-xl border border-gray-100 shadow-sm md:block">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#C41E3A] hover:bg-[#C41E3A]">
                <TableHead className="text-white font-semibold">Day</TableHead>
                <TableHead className="text-white font-semibold">Time</TableHead>
                <TableHead className="text-white font-semibold">Activity</TableHead>
                <TableHead className="text-white font-semibold">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((row, i) => (
                <TableRow
                  key={row.day}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"}
                >
                  <TableCell className="font-medium text-[#1A1A1A]">{row.day}</TableCell>
                  <TableCell className="text-[#1A1A1A]/70">{row.time}</TableCell>
                  <TableCell className="text-[#1A1A1A]/70">{row.activity}</TableCell>
                  <TableCell className="text-[#1A1A1A]/70">{row.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile cards */}
        <div className="mt-14 grid gap-4 md:hidden">
          {schedule.map((row) => (
            <Card key={row.day} className="border-gray-100 bg-[#F5F5F5] shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm font-bold text-[#C41E3A]">{row.day}</p>
                <p className="mt-1 font-semibold text-[#1A1A1A]">{row.activity}</p>
                <p className="mt-1 text-sm text-[#1A1A1A]/70">{row.time}</p>
                <p className="text-sm text-[#1A1A1A]/70">{row.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
