import ArrowRight from "./ArrowRight";

export default function CallBand() {
  return (
    <section className="bg-gradient-to-r from-brand-green via-brand-green to-brand-green-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:py-12 lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Call us today
          </p>
          <a
            href="tel:+16193615019"
            className="mt-1 block font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl hover:underline"
          >
            +1 (619) 361 5019
          </a>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <span className="text-base font-medium">or</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
