export default function Services() {
  const items = [
    {
      title: "Tenue & révision comptable",
      desc: "Externalisez votre comptabilité avec un pilotage en temps réel et des tableaux de bord clairs.",
    },
    {
      title: "Fiscalité & déclarations",
      desc: "Sécurisez vos obligations fiscales : TVA, IS, IR, liasse fiscale, CFE, et plus.",
    },
    {
      title: "Paie & RH",
      desc: "Bulletins, déclarations sociales et accompagnement RH pour vos équipes.",
    },
    {
      title: "Création d'entreprise",
      desc: "Choix de la forme juridique, prévisionnels, immatriculation et accompagnement bancaire.",
    },
    {
      title: "Conseil & pilotage",
      desc: "Analyse financière, optimisation de marge, prévisionnel, et suivi de trésorerie.",
    },
    {
      title: "Audit légal & contractuel",
      desc: "Des audits précis et pragmatiques pour sécuriser vos prises de décision.",
    },
  ];

  return (
    <section id="services" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-white/70">Une offre complète pour chaque étape de votre développement.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-md bg-[#d4af37]/15 ring-1 ring-[#d4af37]/30 text-[#d4af37] grid place-items-center font-semibold">{it.title.charAt(0)}</div>
              <h3 className="mt-5 text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
