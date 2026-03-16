import { User2, Wand2, MapPin, Clapperboard } from "lucide-react";

const houseColors = {
  Gryffindor: { accent: "#e53e3e", bg: "rgba(174,0,1,0.1)", border: "rgba(174,0,1,0.3)" },
  Slytherin: { accent: "#38a169", bg: "rgba(26,71,42,0.1)", border: "rgba(42,98,61,0.3)" },
  Hufflepuff: { accent: "#d69e2e", bg: "rgba(236,185,57,0.1)", border: "rgba(236,185,57,0.3)" },
  Ravenclaw: { accent: "#4299e1", bg: "rgba(34,47,91,0.1)", border: "rgba(34,47,91,0.4)" },
};

export default function CharacterCard({ character }) {
  const houseStyle = houseColors[character.house] || {
    accent: "#fbbf24",
    bg: "rgba(180,100,0,0.08)",
    border: "rgba(180,100,0,0.2)",
  };

  return (
    <div className="group glass-card-hover overflow-hidden flex flex-col">
      {/* Image area */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1f22, #020b0d)" }}
      >
        <img
          src={
            character.image ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(character.name)}&background=0a1f22&color=fbbf24&size=300&bold=true`
          }
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(character.name)}&background=0a1f22&color=fbbf24&size=300&bold=true`;
          }}
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b0d] via-transparent to-transparent" />

        {/* House badge */}
        {character.house && (
          <div
            className="absolute top-3 right-3 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm"
            style={{
              background: houseStyle.bg,
              border: `1px solid ${houseStyle.border}`,
              color: houseStyle.accent,
              fontFamily: "'Cinzel', serif",
            }}
          >
            {character.house}
          </div>
        )}

        {/* Student / Staff badge */}
        {(character.hogwartsStudent || character.hogwartsStaff) && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] text-amber-400/80 bg-black/40 backdrop-blur-sm border border-amber-700/20">
            <Wand2 size={10} strokeWidth={1.5} />
            <span style={{ fontFamily: "'Cinzel', serif" }}>
              {character.hogwartsStudent ? "Student" : "Staff"}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3
          className="text-base font-bold text-amber-400 group-hover:text-amber-300 transition-colors duration-300 leading-snug"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {character.name}
        </h3>

        <div className="space-y-2 text-xs flex-1">
          {character.species && (
            <div className="flex items-center gap-2">
              <User2 size={12} className="text-amber-600/60 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-amber-50/40 w-16 flex-shrink-0">Species</span>
              <span className="text-amber-50/70 capitalize">{character.species}</span>
            </div>
          )}
          {character.gender && (
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-amber-600/60 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-amber-50/40 w-16 flex-shrink-0">Gender</span>
              <span className="text-amber-50/70 capitalize">{character.gender}</span>
            </div>
          )}
          {character.actor && (
            <div className="flex items-center gap-2">
              <Clapperboard size={12} className="text-amber-600/60 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-amber-50/40 w-16 flex-shrink-0">Actor</span>
              <span className="text-amber-50/70 truncate">{character.actor}</span>
            </div>
          )}
        </div>

        {/* Alive status */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: character.alive ? "#34d399" : "#6b7280",
              boxShadow: character.alive ? "0 0 6px rgba(52,211,153,0.6)" : "none",
            }}
          />
          <span className="text-[11px] text-amber-50/30" style={{ fontFamily: "'Cinzel', serif" }}>
            {character.alive ? "Alive" : "Deceased"}
          </span>
        </div>
      </div>
    </div>
  );
}
