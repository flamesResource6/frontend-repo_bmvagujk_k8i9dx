import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60vh] w-[80vw] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Arboris Comptabilité. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App