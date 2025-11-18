import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-md bg-black/80 ring-1 ring-white/10 grid place-items-center">
            {/* Minimal gold tree mark */}
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M12 2c3.5 0 5.5 2.6 5.5 4.7 0 1.4-.9 2.7-2.2 3.5 1.9.5 3.2 2 3.2 3.8 0 2.4-2.2 4.3-5.1 4.3h-.4v3.7h-2v-3.7h-.4C7.7 18.3 5.5 16.4 5.5 14c0-1.8 1.3-3.3 3.2-3.8C7.4 9.4 6.5 8.1 6.5 6.7 6.5 4.6 8.5 2 12 2z" fill="#d4af37"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">Arboris Comptabilité</p>
            <p className="text-xs text-white/60 leading-none mt-1">Conseil & Expertise • France</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="mailto:contact@arboris.fr" className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <Mail className="h-4 w-4" /> contact@arboris.fr
          </a>
          <a href="tel:+33123456789" className="hidden sm:inline-flex items-center gap-2 text-sm text-black bg-[#d4af37] hover:bg-[#c39a2f] transition-colors rounded-md px-3 py-2 font-medium">
            <Phone className="h-4 w-4" /> 01 23 45 67 89
          </a>
          <button className="inline-flex sm:hidden items-center justify-center h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
