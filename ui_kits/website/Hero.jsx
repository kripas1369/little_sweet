// LSP UI Kit — Hero + animated photo banner + Search booking card
const { useState: useStateH, useMemo } = React;

// Resolve to an inlined blob URL when bundled offline, else the live URL.
const resH = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

const BANNER_DEFS = [
  ['b1', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=520&q=80'],
  ['b2', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=520&q=80'],
  ['b3', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=520&q=80'],
  ['b4', 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=520&q=80'],
  ['b5', 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=520&q=80'],
  ['b6', 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=520&q=80'],
  ['b7', 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=520&q=80'],
];

function GoldParticles() {
  const dots = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    left: Math.random() * 100, top: Math.random() * 100,
    size: 3 + Math.random() * 5, delay: Math.random() * 8, dur: 7 + Math.random() * 9,
    op: 0.10 + Math.random() * 0.22,
  })), []);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {dots.map((d, i) => (
        <span key={i} style={{ position: 'absolute', left: d.left + '%', top: d.top + '%', width: d.size, height: d.size, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 10px 1px rgba(201,168,76,.35)', opacity: d.op, animation: `floatDot ${d.dur}s ease-in-out ${d.delay}s infinite` }} />
      ))}
    </div>
  );
}

// Auto-scrolling cinematic photo strip with Ken Burns zoom
function PhotoBanner() {
  const base = BANNER_DEFS.map(([id, u]) => resH(id, u));
  const shots = [...base, ...base];
  return (
    <div className="hero-banner" style={{ position: 'relative', width: '100%', overflow: 'hidden', marginTop: 8, maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)' }}>
      <div style={{ display: 'flex', gap: 18, width: 'max-content', animation: 'bannerScroll 48s linear infinite', padding: '4px 0' }}>
        {shots.map((src, i) => (
          <div key={i} style={{ width: 260, height: 320, flex: 'none', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 14px 36px rgba(20,17,11,.10)', background: '#EDE7DA' }}>
            <div style={{ width: '100%', height: '100%', backgroundImage: `url('${src}')`, backgroundSize: 'cover', backgroundPosition: 'center', animation: `kenBurns ${14 + (i % 5) * 2}s ease-in-out ${(i % 4)}s infinite alternate` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ onExplore }) {
  return (
    <header style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '64px 24px 0', overflow: 'hidden' }}>
      <GoldParticles />
      <div className="grain" style={{ position: 'absolute', inset: 0, opacity: 0.035, backgroundImage: `url('${resH('grain', '../../assets/grain-texture.svg')}')`, backgroundSize: '200px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 980 }}>
        <Reveal y={16}><SectionLabel>Little Sweet Photography</SectionLabel></Reveal>
        <Reveal delay={0.08}><h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 6.2vw, 78px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#14110B', margin: '20px 0 0' }}>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Capture Every</span>
          <span style={{ display: 'block', whiteSpace: 'nowrap' }}><em style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--gold-ink)' }}>Precious</em> Moment</span>
        </h1></Reveal>
        <Reveal delay={0.4}><p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.6, color: '#4A463E', maxWidth: 620, margin: '24px auto 0' }}>
          Nepal's premier photography booking platform — connecting you with handpicked professionals for life's most unforgettable moments.
        </p></Reveal>
        <Reveal delay={0.5} style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={onExplore}>Explore Packages</Button>
          <Button variant="outline" size="lg" icon="play">Watch Our Work</Button>
        </Reveal>
        <Reveal delay={0.6} style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <StatPill glyph="📷" value="150+" label="Photographers" />
          <StatPill glyph="⭐" value="500+" label="Happy Clients" />
          <StatPill glyph="🏆" value="7 Years" label="of Excellence" />
        </Reveal>
      </div>
      <Reveal delay={0.72} y={20} style={{ width: '100%', marginTop: 'auto', paddingTop: 48 }}>
        <PhotoBanner />
      </Reveal>
    </header>
  );
}

function SearchBar({ onSearch }) {
  const Field = ({ ph }) => (
    <div style={{ flex: 1, minWidth: 150, display: 'flex', alignItems: 'center', gap: 8, background: '#F3EFE6', border: '1px solid var(--border)', borderRadius: 10, padding: '0 14px', height: 50, fontFamily: 'var(--font-body)', fontSize: 14, color: '#6B665C', cursor: 'pointer' }}>
      <span>{ph}</span><span style={{ marginLeft: 'auto', color: 'var(--gold-ink)', fontSize: 10 }}>▾</span>
    </div>
  );
  return (
    <section style={{ maxWidth: 960, margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 18, padding: '24px 26px', boxShadow: '0 26px 64px rgba(20,17,11,.12)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: '#14110B', margin: '0 0 16px' }}>Find Your Perfect Package</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Field ph="Event Type" /><Field ph="Pick a date" /><Field ph="Budget Range" />
          <Button variant="primary" onClick={onSearch} icon="search">Search</Button>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
          Popular: {['Wedding', 'Baby Shower', 'Birthday', 'Corporate'].map((t, i) => (
            <React.Fragment key={t}>{i > 0 && ' · '}<a style={{ color: 'var(--gold-ink)', cursor: 'pointer', fontWeight: 500 }} onClick={() => onSearch && onSearch(t)}>{t}</a></React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, SearchBar });
