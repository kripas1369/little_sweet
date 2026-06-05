// LSP UI Kit — Testimonials marquee + Final CTA banner
const TESTIMONIALS = [
  { q: 'The team exceeded all our expectations! Their attention to detail resulted in stunning visuals that perfectly represented our brand.', n: 'Himal Thakuri', r: 'Marketing Director' },
  { q: 'Professional, punctual, and exceptional work. The final deliverables were exactly what we needed.', n: 'Keshav Koirala', r: 'CEO, DesignHub' },
  { q: 'None have captured the essence of our events like this team. The photos tell the story perfectly.', n: 'Ujjwal Kadel', r: 'Event Planner' },
  { q: 'Their ability to understand our vision was impressive. The turnaround time was quick and quality outstanding.', n: 'David Wilson', r: 'Creative Director' },
];

function TCard({ t }) {
  return (
    <div style={{ width: 380, flex: 'none', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 26px', marginRight: 20, boxShadow: '0 4px 16px rgba(20,17,11,.05)' }}>
      <div style={{ color: 'var(--gold)', fontSize: 14, letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>
      <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 17, lineHeight: 1.5, color: '#2A2620', margin: '0 0 18px' }}>"{t.q}"</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#14110B' }}>{t.n}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--muted)', letterSpacing: '.04em', marginTop: 3 }}>{t.r}</div>
        </div>
        <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'conic-gradient(#EA4335,#FBBC05,#34A853,#4285F4,#EA4335)' }} />
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: `${reverse ? 'marqueeR' : 'marqueeL'} 40s linear infinite` }}>
        {doubled.map((t, i) => <TCard key={i} t={t} />)}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto 44px', padding: '0 32px' }}>
        <Reveal><SectionLabel>What Clients Say</SectionLabel></Reveal>
        <Reveal delay={0.06}><h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4.5vw,46px)', color: '#14110B', margin: '16px 0 0' }}>Trusted by Hundreds of Happy Families</h2></Reveal>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <MarqueeRow items={TESTIMONIALS} />
        <MarqueeRow items={[...TESTIMONIALS].reverse()} reverse />
      </div>
    </section>
  );
}

function FinalCTA({ onBook }) {
  return (
    <section style={{ padding: '40px 32px 96px' }}>
      <Reveal style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ borderRadius: 24, padding: '64px 48px', textAlign: 'center', background: 'var(--gold)', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 70px rgba(201,168,76,.35)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,5vw,48px)', color: '#1C1606', margin: 0 }}>Ready to Capture Your <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Perfect</em> Moment?</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#4A370C', maxWidth: 520, margin: '18px auto 32px' }}>Book a session today and preserve your most precious memories forever.</p>
          <button onClick={onBook} className="cta-dark-btn" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 17, borderRadius: 10, padding: '16px 34px', border: 'none', cursor: 'pointer', background: '#1C1606', color: '#FBFAF7', boxShadow: '0 8px 24px rgba(28,22,6,.28)', transition: 'all .25s cubic-bezier(.16,1,.3,1)' }}>Book Your Session Now</button>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: '#4A370C', marginTop: 24, letterSpacing: '.04em' }}>+977 15916533 &nbsp;·&nbsp; +977 9851195181</div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { Testimonials, FinalCTA, TESTIMONIALS });
