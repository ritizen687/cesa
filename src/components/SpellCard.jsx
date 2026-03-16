import { Sparkles, Zap } from "lucide-react";

export default function SpellCard({ spell }) {
  return (
    <div className="group glass-card-hover p-6 flex flex-col gap-4 min-h-[160px]">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-lg font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300 leading-tight"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {spell.name}
        </h3>
        <div
          className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, rgba(120,60,200,0.3), rgba(80,40,140,0.2))",
            border: "1px solid rgba(167,139,250,0.2)",
            boxShadow: "0 0 15px rgba(120,60,200,0.1)",
          }}
        >
          <Sparkles size={16} className="text-purple-400" strokeWidth={1.5} />
        </div>
      </div>

      {/* Description */}
      <p className="text-amber-50/60 text-sm leading-relaxed italic flex-1">
        "{spell.description}"
      </p>

      {/* Type badge */}
      {spell.type && (
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-amber-500/60" strokeWidth={1.5} />
          <span
            className="text-xs uppercase tracking-widest text-amber-500/70"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.15em" }}
          >
            {spell.type}
          </span>
        </div>
      )}
    </div>
  );
}
