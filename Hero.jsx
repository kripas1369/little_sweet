// LSP UI Kit — Hero + Search booking card
const { useState: useStateH, useMemo } = React;

function GoldParticles() {
  const dots = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    left: Math.random() * 100, top: Math.random() * 100,
    size: 3 + Math.random() * 5, delay: Math.random() * 8, dur: 7 + Math.random() * 9,
    op: 0.10 + Math.random() * 0.22
  })), []);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {dots.map((d, i) =>
      <span key={i} style={{ position: 'absolute', left: d.left + '%', top: d.top + '%', width: d.size, height: d.size, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 10px 1px rgba(201,168,76,.35)', opacity: d.op, animation: `floatDot ${d.dur}s ease-in-out ${d.delay}s infinite` }} />
      )}
    </div>);

}

function Hero({ onExplore }) {
  return (
    <header style={{ position: 'relative', minHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 24px 60px', overflow: 'hidden' }}>
      <GoldParticles />
      <div className="grain" style={{ position: 'absolute', inset: 0, opacity: 0.035, backgroundImage: "url('../../assets/grain-texture.svg')", backgroundSize: '200px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 980 }}>
        <SectionLabel>Little Sweet Photography</SectionLabel>
        <h1 style={{ fontWeight: 800, fontSize: 'clamp(48px, 8vw, 92px)', lineHeight: 1.03, letterSpacing: '-0.02em', color: '#14110B', margin: '20px 0 0', fontFamily: "Roboto" }}>
          Capture Every<br />
          <em style={{ fontStyle: 'italic', fontWeight: 500, background: 'var(--gold-gradient-ink)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Precious</em> Moment
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.6, color: '#4A463E', maxWidth: 620, margin: '24px auto 0' }}>
          Nepal's premier photography booking platform — connecting you with handpicked professionals for life's most unforgettable moments.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" onClick={onExplore}>Explore Packages</Button>
          <Button variant="outline" size="lg" icon="play">Watch Our Work</Button>
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          <StatPill glyph="📷" value="150+" label="Photographers" />
          <StatPill glyph="⭐" value="500+" label="Happy Clients" />
          <StatPill glyph="🏆" value="7 Years" label="of Excellence" />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 1, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.7 }} />
    </header>);

}

function SearchBar({ onSearch }) {
  const Field = ({ ph }) =>
  <div style={{ flex: 1, minWidth: 150, display: 'flex', alignItems: 'center', gap: 8, background: '#F3EFE6', border: '1px solid var(--border)', borderRadius: 10, padding: '0 14px', height: 50, fontFamily: 'var(--font-body)', fontSize: 14, color: '#6B665C', cursor: 'pointer' }}>
      <span>{ph}</span><span style={{ marginLeft: 'auto', color: 'var(--gold-ink)', fontSize: 10 }}>▾</span>
    </div>;

  return (
    <section style={{ maxWidth: 960, margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 5 }}>
      <div style={{ background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 18, padding: '24px 26px', boxShadow: '0 26px 64px rgba(20,17,11,.12)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: '#14110B', margin: '0 0 16px' }}>Find Your Perfect Package</h3>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Field ph="Event Type" /><Field ph="Pick a date" /><Field ph="Budget Range" />
          <Button variant="primary" onClick={onSearch} icon="search">Search</Button>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
          Popular: {['Wedding', 'Baby Shower', 'Birthday', 'Corporate'].map((t, i) =>
          <React.Fragment key={t}>{i > 0 && ' · '}<a style={{ color: 'var(--gold-ink)', cursor: 'pointer', fontWeight: 500 }} onClick={() => onSearch && onSearch(t)}>{t}</a></React.Fragment>
          )}
        </p>
      </div>
    </section>);

}

Object.assign(window, { Hero, SearchBar });