export default function Button({ children, variant = 'primary', className = '', loading = false, ...rest }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold tracking-wide shadow-lg transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none';
  const variants = {
    primary:
      'border border-[#f7d978] bg-gradient-to-r from-[#d4af37] via-[#f7d978] to-[#b8871f] text-black shadow-[#d4af37]/25 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#f7d978] focus:ring-offset-2 focus:ring-offset-black',
    ghost:
      'border border-[#d4af37]/70 bg-black/50 text-[#f7d978] shadow-black/40 hover:bg-[#113d2b] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-black'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest} disabled={loading || rest.disabled}>
      {loading ? 'Loading...' : children}
    </button>
  );
}
