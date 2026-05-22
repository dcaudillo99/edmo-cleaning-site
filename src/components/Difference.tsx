import ArrowRight from "./ArrowRight";

export default function Difference() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #9DC75C 0, #9DC75C 1px, transparent 1px, transparent 22px)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
          Get started
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Experience the EDMO Difference
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
          Ready to transform your workspace? Contact us today and experience
          superior cleaning and safety.
        </p>
        <div className="mt-10">
          <a
            href="tel:+16193615019"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-transform hover:scale-[1.02] hover:bg-brand-green hover:text-brand-dark"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
