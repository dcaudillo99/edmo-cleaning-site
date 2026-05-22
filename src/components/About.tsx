export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
              About Us
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-brand-dark sm:text-5xl">
              Our experience
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-brand-dark/75">
              <p>
                For over 15 years, EDMO has delivered dependable cleaning and
                sanitation services to residential and commercial properties
                throughout the San Diego area. From neighborhood homes to
                multi-tenant offices and large facilities, our crews show up on
                time and leave every space visibly cleaner.
              </p>
              <p>
                We tailor every program to the unique needs of the property —
                combining trained staff, the right equipment, and proven
                processes to keep your environment safe, healthy, and ready for
                whatever comes next.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80"
                alt="EDMO team member cleaning a corporate lobby"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl bg-brand-green sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
