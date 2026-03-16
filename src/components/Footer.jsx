import { Link } from "react-router-dom";
import { Wand2, Github, Twitter, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020b0d] border-t border-amber-900/20 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                <Wand2 size={20} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                  className="text-amber-400 font-bold text-xl leading-none tracking-wide"
                >
                  Hogwarts
                </span>
                <span className="text-amber-600/60 text-[10px] tracking-[0.25em] uppercase">
                  Wizarding Archive
                </span>
              </div>
            </Link>
            <p className="text-amber-50/40 max-w-sm leading-relaxed mb-8" style={{ fontFamily: "'EB Garamond', serif" }}>
              The definitive digital archive for the Wizarding World. Explore the secrets of Hogwarts, 
              master the arcane arts, and discover your magical heritage.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-amber-900/30 flex items-center justify-center text-amber-500/60 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "Characters", path: "/characters" },
                { name: "Spells", path: "/spells" },
                { name: "Houses", path: "/houses" },
                { name: "Potions", path: "/potions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-amber-50/40 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legacy</h4>
            <ul className="space-y-4">
              {[
                { name: "Magical Creatures", path: "/creatures" },
                { name: "Sorting Hat", path: "/sorting-hat" },
                { name: "Daily Prophet", path: "#" },
                { name: "Ministry of Magic", path: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-amber-50/40 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-amber-900/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-amber-50/20 text-xs tracking-widest uppercase">
            © 2026 Wizarding Archive • Built with Magic
          </p>
          <div className="flex gap-8">
            <button className="text-amber-50/20 hover:text-amber-50/40 transition-colors text-[10px] uppercase tracking-widest">
              Privacy Policy
            </button>
            <button className="text-amber-50/20 hover:text-amber-50/40 transition-colors text-[10px] uppercase tracking-widest">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
