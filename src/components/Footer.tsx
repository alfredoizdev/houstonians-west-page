import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-12 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-team.png"
                alt="Houstonians FC West logo"
                width={52}
                height={52}
                className="h-13 w-auto object-contain"
              />
              <h3 className="text-lg font-bold text-white">
                Houstonians FC West
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Developing champions on and off the field. A youth soccer club
              serving the West Houston community.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white">Follow Us</h4>
            <div className="mt-3 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-colors hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Houstonians FC West. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
