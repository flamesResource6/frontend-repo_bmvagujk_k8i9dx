import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
            Cabinet d'expertise comptable
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Comptabilité moderne, conseils clairs, résultats fiables.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Nous accompagnons les PME, startups et indépendants partout en France avec une approche data-driven et des outils de dernière génération.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-[#d4af37] px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-[#c39a2f] transition-colors">
              Demander un devis
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 ring-1 ring-white/10 transition-colors">
              Nos services
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 grid grid-cols-2 sm:flex gap-6 text-white/60 text-sm">
            <div>
              <p className="text-2xl font-semibold text-white">+250</p>
              <p>Entreprises accompagnées</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">98%</p>
              <p>Clients satisfaits</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">24h</p>
              <p>Réponse sous 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
