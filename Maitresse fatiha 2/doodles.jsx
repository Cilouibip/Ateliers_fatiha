// Hand-drawn aubergine doodles, simple stroke SVGs.
// Each is a pure function returning JSX; pass className/size/color as props.

const Doodle = {
  Sun: ({ className = "", size = 48, color = "currentColor" }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 60 60" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <circle cx="30" cy="30" r="9" />
      <path d="M30 6 V14" />
      <path d="M30 46 V54" />
      <path d="M6 30 H14" />
      <path d="M46 30 H54" />
      <path d="M12 12 L18 18" />
      <path d="M42 42 L48 48" />
      <path d="M48 12 L42 18" />
      <path d="M12 48 L18 42" />
    </svg>
  ),
  Star: ({ className = "", size = 36, color = "currentColor" }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 5 L24 16 L35 17 L26.5 24 L29 35 L20 29 L11 35 L13.5 24 L5 17 L16 16 Z" />
    </svg>
  ),
  Spark: ({ className = "", size = 32, color = "currentColor" }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 30 30" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M15 4 L15 12" />
      <path d="M15 18 L15 26" />
      <path d="M4 15 L12 15" />
      <path d="M18 15 L26 15" />
      <path d="M7 7 L11 11" />
      <path d="M19 19 L23 23" />
    </svg>
  ),
  Arrow: ({ className = "", size = 80, color = "currentColor" }) => (
    <svg className={className} width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 38 C 18 14, 42 6, 70 14" />
      <path d="M62 8 L72 14 L66 24" />
    </svg>
  ),
  Wave: ({ className = "", size = 64, color = "currentColor" }) => (
    <svg className={className} width={size} height={size * 0.45} viewBox="0 0 60 28" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M3 14 Q 12 4, 21 14 T 39 14 T 57 14" />
    </svg>
  ),
  Mountain: ({ className = "", size = 64, color = "currentColor" }) => (
    <svg className={className} width={size} height={size * 0.7} viewBox="0 0 60 42" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 36 L20 12 L30 24 L40 8 L56 36 Z" />
      <path d="M22 32 L24 30 L26 32" />
    </svg>
  ),
  Flag: ({ className = "", size = 56, color = "currentColor" }) => (
    <svg className={className} width={size} height={size * 0.95} viewBox="0 0 50 48" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 6 L10 44" />
      <path d="M10 8 L40 8 L34 18 L40 28 L10 28" />
    </svg>
  ),
  Plant: ({ className = "", size = 52, color = "currentColor" }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 50 50" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M25 44 L25 22" />
      <path d="M25 30 C 18 28, 14 22, 14 16 C 20 16, 25 22, 25 28" />
      <path d="M25 26 C 32 24, 36 18, 36 12 C 30 12, 25 18, 25 24" />
      <path d="M16 44 L34 44 L32 38 L18 38 Z" />
    </svg>
  ),
  Heart: ({ className = "", size = 36, color = "currentColor" }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 36 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 28 C 4 18, 4 6, 12 6 C 16 6, 18 10, 18 12 C 18 10, 20 6, 24 6 C 32 6, 32 18, 18 28 Z" />
    </svg>
  ),
  Underline: ({ className = "", color = "currentColor" }) => (
    <svg className={className} viewBox="0 0 200 14" preserveAspectRatio="none" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round">
      <path d="M3 8 Q 50 12 100 7 T 197 8" />
    </svg>
  ),
  // wooden sign / placeholder hand-letter feel
  WoodTag: ({ className = "", text = "", color = "var(--aubergine)" }) => (
    <div className={className} style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "6px 12px",
      background: "linear-gradient(180deg, #C99B6A, #B07F4D)",
      borderRadius: 4,
      fontFamily: "var(--t-hand)",
      fontSize: 18,
      color: "#fff",
      boxShadow: "0 2px 0 rgba(0,0,0,0.18)",
      transform: "rotate(-2deg)"
    }}>
      {text}
    </div>
  ),
};

window.Doodle = Doodle;
