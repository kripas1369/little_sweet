// LSP UI Kit — content sections: Ceremonies, Business bento, Why Choose, How It Works
const { useState: useStateS } = React;

const CEREMONY_CARDS = [
  { name: 'Wedding', desc: 'Cinematic coverage of your big day.', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600' },
  { name: 'Birthday', desc: 'Candid joy, every candle.', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600' },
  { name: 'Baby Shower', desc: 'Celebrate the new arrival.', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600' },
  { name: 'Bratabandha', desc: 'Honour the sacred tradition.', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600' },
  { name: 'Newborn', desc: 'The first precious days.', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600' },
  { name: 'Maternity', desc: 'The glow before the gift.', img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600' },
];

function SectionShell({ label, title, sub, children, bg = 'transparent' }) {
  return (
    <section style={{ background: bg, padding: '96px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <SectionLabel>{label}</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4.5vw,44px)', lineHeight: 1.15, color: '#FAFAFA', margin: '16px 0 0', maxWidth: 720 }}>{title}</h2>
        {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: '#A8A8A8', maxWidth: 560, marginTop: 14 }}>{sub}</p>}
        <div style={{ marginTop: 44 }}>{children}</div>
      </div>
    </section>
  );
}

function CeremonyCard({ c, onBook }) {
  const [h, setH] = useStateS(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={() => onBook(c.name)}
      style={{ position: 'relative', height: 340, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', border: h ? '1px solid var(--border-strong)' : '1px solid var(--border)', boxShadow: h ? '0 18px 50px rgba(201,168,76,.18)' : 'none', transition: 'all .4s cubic-bezier(.16,1,.3,1)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${c.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: h ? 'scale(1.07)' : 'scale(1)', transition: 'transform .6s cubic-bezier(.16,1,.3,1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: h ? 'linear-gradient(135deg,rgba(201,168,76,.22),rgba(8,8,8,.2))' : 'transparent', transition: 'background .4s' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(8,8,8,0) 40%,rgba(8,8,8,.94))' }} />
      <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(8,8,8,.55)', border: '1px solid var(--border)', padding: '5px 11px', borderRadius: 999, backdropFilter: 'blur(6px)' }}>{c.name}</span>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '18px 20px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: '#FAFAFA', margin: '0 0 5px' }}>{c.name}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: '#C0C0C0', margin: '0 0 12px' }}>{c.desc}</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', color: 'var(--gold)' }}>Book Now →</span>
      </div>
    </div>
  );
}

function Ceremonies({ onBook }) {
  return (
    <SectionShell label="Ceremonies" title="Capturing Life's Most Beautiful Moments">
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {CEREMONY_CARDS.map((c) => <CeremonyCard key={c.name} c={c} onBook={onBook} />)}
      </div>
    </SectionShell>
  );
}

function BentoCard({ icon, title, desc, span, onBook }) {
  const [h, setH] = useStateS(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={() => onBook(title)}
      style={{ gridColumn: span ? 'span 2' : 'span 1', background: '#181818', borderLeft: '2px solid var(--gold)', borderTop: '1px solid var(--border)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', borderRadius: 16, padding: '26px 26px', cursor: 'pointer', transform: h ? 'translateY(-4px)' : 'none', boxShadow: h ? '0 16px 44px rgba(201,168,76,.16)' : 'none', transition: 'all .35s cubic-bezier(.16,1,.3,1)', minHeight: span ? 200 : 'auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: 'var(--gold)', marginBottom: 14 }}><Icon name={icon} size={26} /></div>
      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: span ? 28 : 20, color: '#FAFAFA', margin: '0 0 8px' }}>{title}</h4>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: '#A0A0A0', margin: 0 }}>{desc}</p>
    </div>
  );
}

function Business({ onBook }) {
  return (
    <SectionShell label="Business" title="Transform Your Brand with Stunning Visuals" bg="#0c0c0c">
      <div className="bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <BentoCard icon="utensils" title="Food Photography" desc="Mouth-watering imagery that sells. Menus, dishes, and restaurant ambiance shot to perfection." span onBook={onBook} />
        <BentoCard icon="building-2" title="Corporate Events" desc="Conferences, launches, and milestones." onBook={onBook} />
        <BentoCard icon="package" title="Product Photoshoot" desc="Clean, catalogue-ready product shots." onBook={onBook} />
        <BentoCard icon="school" title="School Events" desc="Annual days & ceremonies." onBook={onBook} />
        <BentoCard icon="video" title="Brand Video" desc="Cinematic brand films." onBook={onBook} />
        <BentoCard icon="shopping-bag" title="Boutique" desc="Lookbooks & fashion." onBook={onBook} />
        <BentoCard icon="id-card" title="Headshots" desc="Polished profiles." onBook={onBook} />
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
        <div>
          <SectionLabel>Why LSP</SectionLabel>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px,5vw,46px)', color: '#FAFAFA', margin: '16px 0 0' }}>Why Choose Us.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: '#A8A8A8', maxWidth: 460, marginTop: 16 }}>
            We connect you with handpicked, professional photographers tailored to your needs. Enjoy transparent pricing, hassle-free booking, and trusted reviews — all in one place.
          </p>
          <div style={{ display: 'flex', gap: 28, marginTop: 32, flexWrap: 'wrap' }}>
            {stats.map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 32, background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {feats.map(([g, t]) => <FeaturePill key={t} glyph={g}>{t}</FeaturePill>)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [['Browse & Choose', 'Pick your ceremony type and explore packages.'], ['Book Instantly', 'Select date, package, and confirm in minutes.'], ['Relive the Moment', 'Receive your beautifully edited photos & videos.']];
  return (
    <SectionShell label="How It Works" title="Three Steps to Forever" bg="#0c0c0c">
      <div className="steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 30, position: 'relative' }}>
        {steps.map(([t, d], i) => (
          <div key={t} style={{ textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', margin: '0 auto', border: '1.5px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26, color: 'var(--gold)', background: 'rgba(201,168,76,.06)' }}>{i + 1}</div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: '#FAFAFA', margin: '18px 0 8px' }}>{t}</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: '#A0A0A0', maxWidth: 240, margin: '0 auto' }}>{d}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

Object.assign(window, { Ceremonies, Business, WhyChoose, HowItWorks, SectionShell, CEREMONY_CARDS });
