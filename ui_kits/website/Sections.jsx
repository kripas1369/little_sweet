// LSP UI Kit — content sections: Ceremonies, Business bento, Why Choose, How It Works
const { useState: useStateS } = React;

const resS = (id, fallback) => (window.__resources && window.__resources[id]) || fallback;

const CEREMONY_CARDS = [
  { name: 'Wedding', desc: 'Cinematic coverage of your big day.', rid: 'c1', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600' },
  { name: 'Birthday', desc: 'Candid joy, every candle.', rid: 'c2', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600' },
  { name: 'Baby Shower', desc: 'Celebrate the new arrival.', rid: 'c3', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600' },
  { name: 'Bratabandha', desc: 'Honour the sacred tradition.', rid: 'c4', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600' },
  { name: 'Newborn', desc: 'The first precious days.', rid: 'c5', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600' },
  { name: 'Maternity', desc: 'The glow before the gift.', rid: 'c6', img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600' },
];

function SectionShell({ label, title, sub, children, bg = 'transparent' }) {
  return (
    <section style={{ background: bg, padding: '96px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal><SectionLabel>{label}</SectionLabel></Reveal>
        <Reveal delay={0.06}><h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4.5vw,46px)', lineHeight: 1.12, letterSpacing: '-0.01em', color: '#14110B', margin: '16px 0 0', maxWidth: 760 }}>{title}</h2></Reveal>
        {sub && <Reveal delay={0.12}><p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: '#4A463E', maxWidth: 560, marginTop: 14 }}>{sub}</p></Reveal>}
        <div style={{ marginTop: 48 }}>{children}</div>
      </div>
    </section>
  );
}

function CeremonyCard({ c, onBook }) {
  const [h, setH] = useStateS(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={() => onBook(c.name)}
      style={{ background: '#FFFFFF', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', border: h ? '1px solid var(--border-gold)' : '1px solid var(--border)', boxShadow: h ? '0 22px 50px rgba(20,17,11,.13)' : '0 4px 16px rgba(20,17,11,.05)', transform: h ? 'translateY(-4px)' : 'none', transition: 'all .4s cubic-bezier(.16,1,.3,1)' }}>
      <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${resS(c.rid, c.img)}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: h ? 'scale(1.07)' : 'scale(1)', transition: 'transform .6s cubic-bezier(.16,1,.3,1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: h ? 'linear-gradient(180deg,rgba(201,168,76,.10),rgba(201,168,76,.04))' : 'transparent', transition: 'background .4s' }} />
        <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold-dark)', background: 'rgba(251,250,247,.92)', border: '1px solid var(--border-gold)', padding: '5px 11px', borderRadius: 999, backdropFilter: 'blur(6px)' }}>{c.name}</span>
      </div>
      <div style={{ padding: '18px 20px 20px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 24, color: '#14110B', margin: '0 0 5px' }}>{c.name}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#6B665C', margin: '0 0 14px' }}>{c.desc}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', color: 'var(--gold-ink)', fontWeight: 700 }}>Book Now →</span>
      </div>
    </div>
  );
}

function Ceremonies({ onBook }) {
  return (
    <SectionShell label="Ceremonies" title="Capturing Life's Most Beautiful Moments">
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {CEREMONY_CARDS.map((c, i) => <Reveal key={c.name} delay={(i % 3) * 0.08}><CeremonyCard c={c} onBook={onBook} /></Reveal>)}
      </div>
    </SectionShell>
  );
}

function BentoCard({ icon, title, desc, span, onBook }) {
  const [h, setH] = useStateS(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={() => onBook(title)}
      style={{ gridColumn: span ? 'span 2' : 'span 1', background: '#FFFFFF', borderLeft: '2px solid var(--gold)', borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', borderRadius: 16, padding: '26px 26px', cursor: 'pointer', transform: h ? 'translateY(-4px)' : 'none', boxShadow: h ? '0 18px 44px rgba(20,17,11,.12)' : '0 2px 12px rgba(20,17,11,.04)', transition: 'all .35s cubic-bezier(.16,1,.3,1)', minHeight: span ? 200 : 'auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: 'var(--gold-ink)', marginBottom: 14 }}><Icon name={icon} size={26} /></div>
      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: span ? 28 : 20, color: '#14110B', margin: '0 0 8px' }}>{title}</h4>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: '#6B665C', margin: 0 }}>{desc}</p>
    </div>
  );
}

function Business({ onBook }) {
  return (
    <SectionShell label="Business" title="Transform Your Brand with Stunning Visuals" bg="var(--cream-2)">
      <div className="bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <Reveal style={{ gridColumn: 'span 2' }}><BentoCard icon="utensils" title="Food Photography" desc="Mouth-watering imagery that sells. Menus, dishes, and restaurant ambiance shot to perfection." span onBook={onBook} /></Reveal>
        <Reveal delay={0.06}><BentoCard icon="building-2" title="Corporate Events" desc="Conferences, launches, and milestones." onBook={onBook} /></Reveal>
        <Reveal delay={0.12}><BentoCard icon="package" title="Product Photoshoot" desc="Clean, catalogue-ready product shots." onBook={onBook} /></Reveal>
        <Reveal delay={0.06}><BentoCard icon="school" title="School Events" desc="Annual days & ceremonies." onBook={onBook} /></Reveal>
        <Reveal delay={0.12}><BentoCard icon="video" title="Brand Video" desc="Cinematic brand films." onBook={onBook} /></Reveal>
        <Reveal delay={0.18}><BentoCard icon="shopping-bag" title="Boutique" desc="Lookbooks & fashion." onBook={onBook} /></Reveal>
        <Reveal delay={0.24}><BentoCard icon="id-card" title="Headshots" desc="Polished profiles." onBook={onBook} /></Reveal>
      </div>
    </SectionShell>
  );
}

function WhyChoose() {
  const feats = [['🏆', 'Top Photographers'], ['💰', 'Transparent Pricing'], ['📅', 'Hassle-Free Booking'], ['🔒', 'Secure & Reliable']];
  const stats = [['150+', 'Photographers'], ['500+', 'Bookings'], ['4.9★', 'Rating'], ['7', 'Years']];
  return (
    <section style={{ padding: '96px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="why-grid">
        <Reveal>
          <SectionLabel>Why LSP</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,5vw,48px)', color: '#14110B', margin: '16px 0 0' }}>Why Choose Us.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: '#4A463E', maxWidth: 460, marginTop: 16 }}>
            We connect you with handpicked, professional photographers tailored to your needs. Enjoy transparent pricing, hassle-free booking, and trusted reviews — all in one place.
          </p>
          <div style={{ display: 'flex', gap: 28, marginTop: 32, flexWrap: 'wrap' }}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 34, color: 'var(--gold-ink)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {feats.map(([g, t], i) => <Reveal key={t} delay={0.1 + i * 0.1}><FeaturePill glyph={g}>{t}</FeaturePill></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [['Browse & Choose', 'Pick your ceremony type and explore packages.'], ['Book Instantly', 'Select date, package, and confirm in minutes.'], ['Relive the Moment', 'Receive your beautifully edited photos & videos.']];
  return (
    <SectionShell label="How It Works" title="Three Steps to Forever" bg="var(--cream-2)">
      <div className="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30, position: 'relative' }}>
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.12} style={{ textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto', border: '1.5px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--gold-ink)', background: '#FFFFFF' }}>{i + 1}</div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: '#14110B', margin: '18px 0 8px' }}>{t}</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: '#6B665C', maxWidth: 240, margin: '0 auto' }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

Object.assign(window, { Ceremonies, Business, WhyChoose, HowItWorks, SectionShell, CEREMONY_CARDS });
