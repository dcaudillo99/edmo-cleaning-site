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
            <div className="flex flex-col items-center leading-none">
              <span className="font-display text-3xl font-extrabold text-[#182B49]">
                UC San Diego
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#182B49]/70">
                University of California
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center text-gray-400">
            <span className="font-display text-2xl font-bold tracking-wide">
              NORTHGATE
            </span>
          </div>

          <div className="flex items-center justify-center text-gray-400">
            <span className="font-display text-2xl font-bold italic tracking-wide">
              Pacifica Group
            </span>
          </div>

          <div className="flex items-center justify-center text-gray-400">
            <span className="font-display text-2xl font-bold tracking-[0.18em]">
              COASTAL CO.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
