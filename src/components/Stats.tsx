const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Satisfied Customers" },
  { value: "50+", label: "Trained Staff Members" },
  { value: "100+", label: "Clean Spaces" },
];

export default function Stats() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-5xl font-extrabold text-brand-green sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
