import ArrowRight from "./ArrowRight";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Flooring Maintenance",
    description:
      "Stripping, waxing, buffing, and deep floor care for hard surfaces and carpets — keeping every floor looking new.",
    image:
      "https://images.unsplash.com/photo-1581578017093-cd30fce4eeb7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "General Cleaning",
    description:
      "Recurring janitorial service for offices, retail spaces, and properties of every size — done right, every visit.",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Construction Cleaning",
    description:
      "Post-construction debris removal, dust and detail cleaning so your finished space is ready for handover and move-in.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            What we do
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-brand-dark sm:text-5xl">
            Our cleaning services
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            Comprehensive cleaning programs built for the way your space
            actually gets used.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-brand-dark">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark/70">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
