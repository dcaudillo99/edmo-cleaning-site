type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-brand-dark" : "text-white";
  return (
    <a href="#" className={`inline-flex items-baseline gap-0.5 font-display font-extrabold tracking-tight ${className}`}>
      <span className={`text-2xl ${textColor}`}>EDMO</span>
      <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-brand-green" aria-hidden />
    </a>
  );
}
