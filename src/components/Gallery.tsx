import { useCallback, useEffect, useRef, useState } from "react";

type Comparison = {
  id: string;
  title: string;
  caption: string;
  before: string;
  after: string;
};

type Shot = {
  src: string;
  alt: string;
  tag: string;
};

const comparisons: Comparison[] = [
  {
    id: "tunnel",
    title: "Utility tunnel maintenance",
    caption:
      "Years of dust and grime removed from an active mechanical tunnel — pipes, insulation, and floors restored.",
    before: "/gallery/tunnel-before.jpg",
    after: "/gallery/tunnel-after.jpg",
  },
  {
    id: "floor",
    title: "Industrial floor deep clean",
    caption:
      "Heavy-duty scrub and polish on a working plant floor — safety lines popping and surfaces looking new.",
    before: "/gallery/floor-before.jpg",
    after: "/gallery/floor-after.jpg",
  },
];

const shots: Shot[] = [
  {
    src: "/gallery/pipes-3.jpg",
    alt: "Bright plant room with a network of green condenser water pipes",
    tag: "Mechanical room",
  },
  {
    src: "/gallery/office-1.jpg",
    alt: "Cleaned office workspace with reflective vinyl floor",
    tag: "Office",
  },
  {
    src: "/gallery/warehouse-1.jpg",
    alt: "Warehouse floor with crisp yellow safety lane markings",
    tag: "Warehouse",
  },
  {
    src: "/gallery/pipes-2.jpg",
    alt: "Condenser water piping cleaned and repainted",
    tag: "Mechanical room",
  },
  {
    src: "/gallery/storage-1.jpg",
    alt: "Organized parts and tool storage room",
    tag: "Storage",
  },
  {
    src: "/gallery/shop-1.jpg",
    alt: "Machine shop with CNC equipment after service",
    tag: "Machine shop",
  },
  {
    src: "/gallery/office-2.jpg",
    alt: "Bright office and lab workspace",
    tag: "Office",
  },
  {
    src: "/gallery/pipes-1.jpg",
    alt: "Detail of large green condenser water pipes and valves",
    tag: "Mechanical room",
  },
  {
    src: "/gallery/warehouse-2.jpg",
    alt: "Shop floor with fresh yellow lane markings",
    tag: "Warehouse",
  },
  {
    src: "/gallery/storage-2.jpg",
    alt: "Storage room with white cabinets and workbench",
    tag: "Storage",
  },
  {
    src: "/gallery/shop-2.jpg",
    alt: "Machine shop with drums and equipment, floor swept",
    tag: "Machine shop",
  },
  {
    src: "/gallery/shop-3.jpg",
    alt: "Cleaned floor detail next to workshop equipment",
    tag: "Machine shop",
  },
];

function BeforeAfter({ item, onOpen }: { item: Comparison; onOpen: (src: string) => void }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [updateFromClientX]);

  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] w-full select-none overflow-hidden sm:aspect-[4/3]"
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          updateFromClientX(e.clientX);
        }}
      >
        <img
          src={item.after}
          alt={`${item.title} — after`}
          className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
          loading="lazy"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item.after);
          }}
        />

        <img
          src={item.before}
          alt={`${item.title} — before`}
          className="absolute inset-0 h-full w-full cursor-zoom-in object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          loading="lazy"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item.before);
          }}
        />

        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-green px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-dark">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `calc(${pos}% - 1px)` }}
        />
        <button
          type="button"
          aria-label="Drag to compare before and after"
          className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-dark shadow-lg ring-1 ring-black/10 transition-transform hover:scale-110"
          style={{ left: `${pos}%` }}
          onPointerDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            draggingRef.current = true;
            (e.target as Element).setPointerCapture?.(e.pointerId);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 6 L3 12 L8 18" />
            <path d="M16 6 L21 12 L16 18" />
          </svg>
        </button>
      </div>
      <figcaption className="p-5">
        <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
        <p className="mt-1 text-sm text-brand-dark/70">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, images.length, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 6 L9 12 L15 18" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6 L15 12 L9 18" />
            </svg>
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />
    </div>
  );
}

export default function Gallery() {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openComparison = (src: string) => {
    const list = comparisons.flatMap((c) => [c.before, c.after]);
    setLightboxImages(list);
    setLightboxIndex(list.indexOf(src));
  };

  const openShot = (i: number) => {
    setLightboxImages(shots.map((s) => s.src));
    setLightboxIndex(i);
  };

  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Our work
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-brand-dark sm:text-5xl">
            See the EDMO difference
          </h2>
          <p className="mt-4 text-lg text-brand-dark/70">
            Real jobs from real facilities. Drag the slider to see how much of
            a difference our team makes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisons.map((item) => (
            <BeforeAfter
              key={item.id}
              item={item}
              onOpen={openComparison}
            />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark sm:text-3xl">
                Recent projects
              </h3>
              <p className="mt-1 text-sm text-brand-dark/60">
                Mechanical rooms, offices, warehouses, and machine shops.
              </p>
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-dark/50">
              Tap any photo to enlarge
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => openShot(i)}
                className="group mb-4 block w-full overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5 transition-shadow hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                style={{ breakInside: "avoid" }}
              >
                <div className="relative">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-dark opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {shot.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightboxImages && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxImages(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
