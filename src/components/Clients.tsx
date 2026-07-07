export default function Clients() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Trusted by
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-brand-dark sm:text-5xl">
            Our Clients
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
          <div className="flex items-center justify-center">
            <img
              src="/UCSanDiegoLogo-Blue.svg"
              alt="UC San Diego"
              className="h-10 w-auto max-w-full object-contain sm:h-12"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
