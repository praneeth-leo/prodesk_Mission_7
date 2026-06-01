function ProgressBar({ step }) {
  const pct = Math.round((step / 3) * 100);

  return (
    <div className="mx-auto mb-8 max-w-xl">
      <div className="mb-3 flex items-center justify-between text-[#f7d978]">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase">Step {step} of 3</div>
        <div className="text-sm font-bold">{pct}%</div>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full border border-[#d4af37]/35 bg-black/60 shadow-inner shadow-black">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-[#d4af37] to-[#f7d978] shadow-lg shadow-[#d4af37]/30 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
