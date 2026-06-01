// A simple reusable input with icon and error display
export default function Input({
  label,
  id,
  type = 'text',
  placeholder,
  register,
  name,
  icon: Icon,
  error,
  ...rest
}) {
  const inputPadding = Icon ? 'pl-10' : 'pl-4';

  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={id || name} className="mb-2 block text-sm font-semibold tracking-wide text-[#f7d978]">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d4af37]">
            <Icon size={18} />
          </div>
        )}

        <input
          id={id || name}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-[#d4af37]/30 bg-black/45 py-3 ${inputPadding} pr-4 text-white shadow-inner shadow-black/40 placeholder-white/45 transition-all focus:border-[#f7d978] focus:outline-none focus:ring-2 focus:ring-emerald-400/80`}
          {...(register ? register(name) : {})}
          {...rest}
        />
      </div>

      {error && <p className="mt-2 text-xs font-medium text-red-300">{error}</p>}
    </div>
  );
}
