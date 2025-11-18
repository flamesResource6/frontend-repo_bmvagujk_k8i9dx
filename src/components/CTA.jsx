export default function CTA() {
  return (
    <section id="contact" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Parlons de vos besoins</h3>
              <p className="mt-3 text-white/70 max-w-2xl">Expliquez-nous votre activité et vos objectifs. Nous revenons vers vous sous 24h avec une proposition claire.</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
                <p>• Devis gratuit et sans engagement</p>
                <p>• Onboarding 100% en ligne</p>
                <p>• Outils modernes & sécurisés</p>
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-3">
                <input className="rounded-md bg-black/60 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-[#d4af37]/60" placeholder="Votre nom" />
                <input className="rounded-md bg-black/60 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-[#d4af37]/60" placeholder="Email" type="email" />
                <input className="rounded-md bg-black/60 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-[#d4af37]/60" placeholder="Téléphone" />
                <textarea className="rounded-md bg-black/60 ring-1 ring-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-[#d4af37]/60" placeholder="Votre message" rows="3" />
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-md bg-[#d4af37] px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-[#c39a2f] transition-colors">Envoyer ma demande</button>
                <p className="text-xs text-white/50">En envoyant ce formulaire vous acceptez notre politique de confidentialité.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
