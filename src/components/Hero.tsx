import ArrowRight from "./ArrowRight";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              Cleaning &amp; Sanitation
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] text-brand-dark sm:text-6xl lg:text-7xl">
              EDMO Cleaning
              <br />
              Services
            </h1>
            <p className="mt-4 text-lg text-brand-dark/60">
              a cleaning services company
            </p>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-dark/75">
              Customized cleaning and sanitation solutions for every business
              need.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-brand-dark"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
                alt="Professional cleaning crew servicing a modern office floor"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl bg-brand-green/90 sm:block" aria-hidden />
            <div className="absolute -top-4 -right-4 hidden h-16 w-16 rounded-full bg-brand-dark/90 sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
