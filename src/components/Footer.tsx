import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Globe,
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const aboutLinks = [
  { name: 'About the Summit', to: '/#about' },
  { name: 'Event Details', to: '/#details' },
  { name: 'Why Attend', to: '/#why-attend' },
];

const menuLinks = [
  { name: 'Agenda', to: '/#agenda' },
  { name: 'Highlights', to: '/#highlights' },
  { name: 'Speakers', to: '/#speakers' },
  { name: 'Gallery', to: '/#gallery' },
  { name: 'Register', to: '/#register' },
];

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rpa-society',
    icon: Linkedin,
    primary: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rpasociety_sjgi',
    icon: Instagram,
    primary: false,
  },
  {
    name: 'Email',
    href: 'mailto:uipathsjcet@gmail.com',
    icon: Mail,
    primary: false,
  },
  {
    name: 'Website',
    href: 'https://www.stjosephs.ac.in/',
    icon: Globe,
    primary: false,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white border-t border-platinum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-3">
            <Link to="/" className="inline-flex items-start gap-3 group" aria-label="ABS '26 home">
              <BrandLogo size="lg" />
              <span className="min-w-0">
                    <span className="block text-xl sm:text-2xl font-extrabold text-[#1A3A4A] font-display tracking-tight group-hover:text-turquoise transition-colors">
                      SUMMIT 3.0
                    </span>
                <span className="mt-0.5 block text-sm font-semibold text-turquoise">
                  Agent Builder&apos;s Summit
                </span>
              </span>
            </Link>
            <div className="mt-4 mb-4 h-px w-full bg-platinum" />
            <p className="text-sm text-[#3A5566] leading-relaxed font-normal">
              A full-day technology summit by the RPA Society at St. Joseph&apos;s
              College of Engineering, Chennai.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={item.name}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      item.primary
                        ? 'bg-turquoise text-white hover:bg-[#3A6F86]'
                        : 'bg-white text-[#455A66] border border-platinum hover:border-turquoise hover:text-turquoise'
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#1A3A4A] mb-4">About</h4>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-[#3A5566] hover:text-turquoise transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-platinum flex-shrink-0" aria-hidden />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#1A3A4A] mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 text-sm text-[#3A5566] hover:text-turquoise transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-platinum flex-shrink-0" aria-hidden />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 sm:col-span-2">
            <div className="relative w-full h-[200px] sm:h-[220px] lg:h-full lg:min-h-[220px] rounded-xl overflow-hidden border border-platinum bg-ice-blue shadow-sm">
              <iframe
                title="St. Joseph's College of Engineering location"
                src="https://maps.google.com/maps?q=St.%20Joseph%27s%20College%20of%20Engineering%20OMR%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-turquoise text-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/#register"
            className="inline-flex items-center justify-center w-full sm:w-auto max-w-3xl px-8 py-3.5 rounded-full border border-[#1A3A4A] text-[#1A3A4A] text-sm sm:text-base font-bold font-display text-center hover:bg-turquoise hover:text-white hover:border-turquoise transition-colors"
          >
            Thank you for being part of Agent Builder&apos;s Summit &apos;26
          </Link>
        </div>
      </div>

      <div className="bg-[#1A3A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-ice-blue/80"
            aria-label="Footer legal"
          >
            <Link to="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <span className="text-white/30" aria-hidden>
              |
            </span>
            <Link to="/#highlights" className="hover:text-white transition-colors">
              Highlights
            </Link>
            <span className="text-white/30" aria-hidden>
              |
            </span>
            <Link to="/#why-attend" className="hover:text-white transition-colors">
              Why Attend
            </Link>
          </nav>
          <p className="text-xs text-ice-blue/70 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Agent Builder&apos;s Summit | Made from Earth-616
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
