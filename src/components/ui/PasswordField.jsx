import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

export default function PasswordField({ register, name, label, error, placeholder }) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full text-left">
      {label && <label className="mb-2 block text-sm font-semibold tracking-wide text-[#f7d978]">{label}</label>}

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#d4af37]">
          <Lock size={18} />
        </div>

        <input
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          className="w-full rounded-lg border border-[#d4af37]/30 bg-black/45 py-3 pl-10 pr-12 text-white shadow-inner shadow-black/40 placeholder-white/45 transition-all focus:border-[#f7d978] focus:outline-none focus:ring-2 focus:ring-emerald-400/80"
          {...register(name)}
        />

        <button
          type="button"
          aria-label={show ? 'Hide password' : 'Show password'}
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-[#f7d978] transition hover:bg-[#d4af37]/15 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="mt-2 text-xs font-medium text-red-300">{error}</p>}
    </div>
  );
}
