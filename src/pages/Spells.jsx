import { useState, useEffect } from "react";
import { Sparkles, Wand2, Loader2, Search } from "lucide-react";
import SpellCard from "../components/SpellCard";

export default function Spells() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((res) => res.json())
      .then((data) => {
        setSpells(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching spells:", err);
        setLoading(false);
      });
  }, []);

  const filtered = spells.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      (s.description || "").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-5">
        <Loader2 size={42} className="text-purple-400 animate-spin" strokeWidth={1.5} />
        <p
          className="text-purple-400/70 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Summoning Spells...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Sparkles size={20} className="text-purple-400" strokeWidth={1.5} />
          </div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-purple-600/60"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Spell Lexicon
          </p>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{
            fontFamily: "'Cinzel', serif",
            background: "linear-gradient(135deg, #a78bfa, #c4b5fd, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Magical Spells
        </h1>
        <div
          className="w-32 h-px mb-4"
          style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)" }}
        />
        <p className="text-amber-50/40 max-w-lg">
          A comprehensive lexicon of incantations, charms, jinxes, and curses from the wizarding world.
        </p>
      </div>

      {/* Search bar */}
      <div className="relative mb-8 max-w-md">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/40"
          strokeWidth={1.5}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search spells..."
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-amber-50/80 placeholder-amber-50/20 text-sm outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300"
          style={{ fontFamily: "'EB Garamond', serif" }}
        />
        {search && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-amber-50/30">
            {filtered.length} found
          </span>
        )}
      </div>

      {/* Count */}
      <div className="flex items-center gap-3 mb-6">
        <Wand2 size={14} className="text-amber-500/40" strokeWidth={1.5} />
        <span
          className="text-xs text-amber-50/30 tracking-wider"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {filtered.length} {filtered.length === 1 ? "spell" : "spells"} in the lexicon
        </span>
      </div>

      {/* Spells Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((spell, index) => (
          <SpellCard key={index} spell={spell} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Sparkles size={36} className="text-purple-500/20 mx-auto mb-4" strokeWidth={1} />
          <p className="text-amber-50/30" style={{ fontFamily: "'Cinzel', serif" }}>
            No spells found for "{search}"
          </p>
        </div>
      )}
    </div>
  );
}
