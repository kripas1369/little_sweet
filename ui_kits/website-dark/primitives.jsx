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

// ---- Logo ----------------------------------------------
function Logo({ width = 132 }) {
  return (
    <img src="../../assets/logo.png" width={width} alt="Little Sweet Photography" style={{ display: 'block' }} />
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
    primary: { background: 'var(--gold-gradient)', color: '#080808', filter: hover ? 'brightness(1.08)' : 'none', boxShadow: hover ? '0 8px 30px rgba(201,168,76,.35)' : 'none' },
    outline: { background: hover ? 'var(--gold)' : 'transparent', borderColor: 'var(--gold)', color: hover ? '#080808' : 'var(--gold)' },
    ghost: { background: 'transparent', color: hover ? 'var(--gold)' : '#FAFAFA' },
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

// ---- SectionLabel "◆ CEREMONIES" -------------------------------------------
function SectionLabel({ children }) {
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ fontSize: 10 }}>◆</span>{children}
    </div>
  );
}

// ---- FeaturePill / StatPill -------------------------------------------------
function StatPill({ glyph, value, label }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#111', border: '1px solid var(--border)', borderRadius: 999, padding: '10px 18px', fontFamily: 'var(--font-body)', fontSize: 14, color: '#EDEDED' }}>
      <span>{glyph}</span><b style={{ color: 'var(--gold)', fontWeight: 600 }}>{value}</b>{label}
    </span>
  );
}
function FeaturePill({ glyph, children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid var(--border-strong)', borderRadius: 999, padding: '11px 20px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: '#FAFAFA', background: 'rgba(201,168,76,.05)' }}>
      <span>{glyph}</span>{children}
    </span>
  );
}

Object.assign(window, { Icon, Logo, Button, SectionLabel, StatPill, FeaturePill });
