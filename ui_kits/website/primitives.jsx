// LSP UI Kit — primitives: Logo, Button, SectionLabel, pills, Icon helper
// Exposes components on window for sibling babel scripts.
const { useState, useEffect, useRef } = React;

// ---- Lucide icon helper -----------------------------------------------------
function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.8, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, stroke: color, 'stroke-width': strokeWidth },
        nameAttr: 'data-lucide',
      });
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}

// ---- Logo (aperture monogram) ----------------------------------------------
function Logo({ width = 132 }) {
  return (
    <svg width={width} height={width * (100 / 240)} viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Little Sweet Photography">
      <defs>
        <linearGradient id="lspG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C96A" /><stop offset="50%" stopColor="#C9A84C" /><stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="lspGV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C96A" /><stop offset="100%" stopColor="#A9852E" />
        </linearGradient>
      </defs>
      <rect x="14" y="16" width="120" height="68" rx="6" fill="none" stroke="url(#lspG)" strokeWidth="2.5" opacity="0.55" />
      <rect x="106" y="16" width="120" height="68" rx="6" fill="none" stroke="url(#lspG)" strokeWidth="2.5" opacity="0.9" />
      <text x="40" y="68" fontFamily="'Playfair Display', serif" fontSize="54" fontWeight="700" fill="url(#lspGV)">L</text>
      <g>
        <circle cx="110" cy="50" r="29" fill="none" stroke="url(#lspG)" strokeWidth="1.5" opacity="0.5" />
        <path d="M118.79,50.92 L136.00,50.00 Q132.52,63.00 123.00,72.52 Z" fill="url(#lspG)" opacity="0.95" />
        <path d="M113.60,58.08 L123.00,72.52 Q110.00,76.00 97.00,72.52 Z" fill="url(#lspG)" opacity="0.78" />
        <path d="M104.80,57.15 L97.00,72.52 Q87.48,63.00 84.00,50.00 Z" fill="url(#lspG)" opacity="0.62" />
        <path d="M101.21,49.08 L84.00,50.00 Q87.48,37.00 97.00,27.48 Z" fill="url(#lspG)" opacity="0.95" />
        <path d="M106.40,41.92 L97.00,27.48 Q110.00,24.00 123.00,27.48 Z" fill="url(#lspG)" opacity="0.78" />
        <path d="M115.20,42.85 L123.00,27.48 Q132.52,37.00 136.00,50.00 Z" fill="url(#lspG)" opacity="0.62" />
        <circle cx="110" cy="50" r="7" fill="#080808" />
      </g>
      <text x="178" y="68" fontFamily="'Playfair Display', serif" fontSize="54" fontWeight="700" fill="url(#lspGV)">P</text>
    </svg>
  );
}

// ---- Button -----------------------------------------------------------------
function Button({ variant = 'primary', size = 'md', children, onClick, icon, iconRight }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pad = { sm: '9px 18px', md: '13px 26px', lg: '16px 34px' }[size];
  const fs = { sm: 13, md: 15, lg: 17 }[size];
  const base = {
    fontFamily: "var(--font-body)", fontWeight: 600, fontSize: fs, borderRadius: 10,
    padding: pad, border: '1.5px solid transparent', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 8, transition: 'all .25s cubic-bezier(.16,1,.3,1)',
    transform: press ? 'scale(0.97)' : hover ? 'scale(1.02)' : 'scale(1)', whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: hover ? 'var(--gold-light)' : 'var(--gold)', color: '#1C1606', boxShadow: hover ? '0 10px 28px rgba(201,168,76,.45)' : '0 3px 12px rgba(201,168,76,.28)' },
    outline: { background: hover ? '#14110B' : 'transparent', borderColor: '#14110B', color: hover ? '#FBFAF7' : '#14110B' },
    ghost: { background: 'transparent', color: hover ? 'var(--gold-ink)' : '#14110B' },
  };
  return (
    <button style={{ ...base, ...variants[variant] }} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {icon && <Icon name={icon} size={fs + 2} />}
      {children}
      {iconRight && <Icon name={iconRight} size={fs + 2} />}
    </button>
  );
}

// ---- Reveal — scroll-triggered entrance animation --------------------------
function Reveal({ children, delay = 0, y = 28, as = 'div', style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false, timer;
    const reveal = () => { if (!done) { done = true; setShown(true); } };
    // Above-fold safety net: if element starts in view, reveal even if IO never fires
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight || 800) * 0.95) timer = setTimeout(reveal, 400 + delay * 1000);
    if (typeof IntersectionObserver === 'undefined') { reveal(); return () => clearTimeout(timer); }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      ...style,
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
      willChange: 'opacity, transform',
    }} {...rest}>{children}</Tag>
  );
}

// ---- SectionLabel "◆ CEREMONIES" -------------------------------------------
function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-ink)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ fontSize: 10 }}>◆</span>{children}
    </div>
  );
}

// ---- FeaturePill / StatPill -------------------------------------------------
function StatPill({ glyph, value, label }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 999, padding: '10px 18px', fontFamily: 'var(--font-body)', fontSize: 14, color: '#4A463E', boxShadow: '0 2px 10px rgba(20,17,11,.05)' }}>
      <span>{glyph}</span><b style={{ color: 'var(--gold-ink)', fontWeight: 700 }}>{value}</b>{label}
    </span>
  );
}
function FeaturePill({ glyph, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--border-strong)', borderRadius: 999, padding: '11px 20px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: '#14110B', background: '#FFFFFF' }}>
      <span>{glyph}</span>{children}
    </span>
  );
}

Object.assign(window, { Icon, Logo, Button, Reveal, SectionLabel, StatPill, FeaturePill });
