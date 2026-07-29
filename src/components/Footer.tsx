import Logo from "./Logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Customized cleaning and sanitation solutions for every business
              need in San Diego, CA.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href={"#"} label="Facebook">
                <path d="M13 22v-8h3l1-4h-4V7.5C13 6.7 13.3 6 14.7 6H17V2.4C16.5 2.3 15.3 2 14 2c-3 0-5 1.8-5 5.1V10H6v4h3v8h4z" />
              </SocialIcon>
              <SocialIcon
                href={"https://www.instagram.com/edmocleaning"}
                label="Instagram"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </SocialIcon>
              <SocialIcon href={"#"} label="LinkedIn">
                <path d="M4 4h4v4H4V4zm0 6h4v12H4V10zm6 0h4v2c.7-1.2 2-2.3 4-2.3 3 0 5 2 5 5.3V22h-4v-7c0-1.6-.6-2.7-2-2.7s-2.3 1-2.3 2.7V22h-4V10z" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-brand-green"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+16193615019" className="hover:text-brand-green">
                  +1 (619) 361 5019
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@edmocleaning.com"
                  className="hover:text-brand-green"
                >
                  info@edmocleaning.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:edmocleaning@gmail.com"
                  className="hover:text-brand-green"
                >
                  edmocleaning@gmail.com
                </a>
              </li>
              <li>San Diego, CA</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Hours
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Mon – Fri: 7:00 AM – 7:00 PM</li>
              <li>Sat: 8:00 AM – 4:00 PM</li>
              <li>Sun: By appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} EDMO Cleaning Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

type SocialIconProps = {
  label: string;
  href: string;
  children: React.ReactNode;
};

function SocialIcon({ label, href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-green hover:text-brand-dark"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        {children}
      </svg>
    </a>
  );
}
