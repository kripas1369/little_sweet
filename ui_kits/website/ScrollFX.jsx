// LSP UI Kit — Scroll experience: progress bar, section dots, scroll-to-top ring
const { useState: useStateSx, useEffect: useEffectSx, useRef: useRefSx } = React;

// Shared scroll-progress hook (0 → 1)
function useScrollProgress() {
  const [p, setP] = useStateSx(0);
  useEffectSx(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return p;
}

// ---- Top progress bar -------------------------------------------------------
function ScrollProgress() {
  const p = useScrollProgress();
  return (
    <div className="scroll-progress" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 250, background: 'transparent', pointerEvents: 'none' }}>
      <div style={{ height: '100%', width: `${p * 100}%`, background: 'linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))', boxShadow: '0 0 12px rgba(201,168,76,.6)', transformOrigin: 'left', transition: 'width .12s linear' }} />
    </div>
  );
}

// ---- Right-rail section dots ------------------------------------------------
const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'ceremonies', label: 'Ceremonies' },
  { id: 'business', label: 'Business' },
  { id: 'why', label: 'Why LSP' },
  { id: 'how', label: 'How It Works' },
  { id: 'voices', label: 'Reviews' },
  { id: 'book', label: 'Book' },
];

function ScrollDots() {
  const [active, setActive] = useStateSx('hero');
  useEffectSx(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const go = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: id === 'hero' ? 0 : el.offsetTop - 64, behavior: 'smooth' }); };
  return (
    <div className="scroll-dots" style={{ position: 'fixed', right: 26, top: '50%', transform: 'translateY(-50%)', zIndex: 120, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <button key={s.id} onClick={() => go(s.id)} title={s.label}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0, height: 12 }}
            onMouseEnter={(e) => { const l = e.currentTarget.querySelector('.dl'); if (l) { l.style.opacity = 1; l.style.transform = 'translateX(0)'; } }}
            onMouseLeave={(e) => { const l = e.currentTarget.querySelector('.dl'); if (l && !on) { l.style.opacity = 0; l.style.transform = 'translateX(6px)'; } }}>
            <span className="dl" style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-ink)', opacity: on ? 1 : 0, transform: on ? 'translateX(0)' : 'translateX(6px)', transition: 'all .35s cubic-bezier(.16,1,.3,1)', whiteSpace: 'nowrap' }}>{s.label}</span>
            <span style={{ display: 'block', height: on ? 12 : 8, width: on ? 12 : 8, borderRadius: 999, background: on ? 'var(--gold)' : 'rgba(20,17,11,.22)', boxShadow: on ? '0 0 0 4px rgba(201,168,76,.18)' : 'none', transition: 'all .35s cubic-bezier(.16,1,.3,1)' }} />
          </button>
        );
      })}
    </div>
  );
}

// ---- Circular scroll-to-top button -----------------------------------------
function ScrollTopButton() {
  const p = useScrollProgress();
  const show = p > 0.06;
  const R = 22, C = 2 * Math.PI * R;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top"
      className="scroll-top"
      style={{ position: 'fixed', right: 26, bottom: 26, zIndex: 120, width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer', background: '#FFFFFF', boxShadow: '0 10px 30px rgba(20,17,11,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: show ? 1 : 0, transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(.8)', pointerEvents: show ? 'auto' : 'none', transition: 'all .4s cubic-bezier(.16,1,.3,1)' }}>
      <svg width="56" height="56" viewBox="0 0 56 56" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
        <circle cx="28" cy="28" r={R} fill="none" stroke="rgba(20,17,11,.08)" strokeWidth="3" />
        <circle cx="28" cy="28" r={R} fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - p)} style={{ transition: 'stroke-dashoffset .12s linear' }} />
      </svg>
      <Icon name="arrow-up" size={20} color="#14110B" />
    </button>
  );
}

function ScrollFX() {
  return (
    <React.Fragment>
      <ScrollProgress />
      <ScrollDots />
      <ScrollTopButton />
    </React.Fragment>
  );
}

Object.assign(window, { ScrollFX, ScrollProgress, ScrollDots, ScrollTopButton, useScrollProgress });
