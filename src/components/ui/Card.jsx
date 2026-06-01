export default function Card({ children, className = '' }) {
  return (
    <div className={`max-w-xl w-full mx-auto rounded-lg border border-[#d4af37]/35 bg-[#07110d]/90 p-8 shadow-2xl shadow-black/60 backdrop-blur-md ring-1 ring-emerald-400/10 ${className}`}>
      {children}
    </div>
  );
}
