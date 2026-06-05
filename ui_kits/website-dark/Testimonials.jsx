// LSP UI Kit — Testimonials marquee + Final CTA banner
const TESTIMONIALS = [
  { q: 'The team exceeded all our expectations! Their attention to detail resulted in stunning visuals that perfectly represented our brand.', n: 'Himal Thakuri', r: 'Marketing Director' },
  { q: 'Professional, punctual, and exceptional work. The final deliverables were exactly what we needed.', n: 'Keshav Koirala', r: 'CEO, DesignHub' },
  { q: 'None have captured the essence of our events like this team. The photos tell the story perfectly.', n: 'Ujjwal Kadel', r: 'Event Planner' },
  { q: 'Their ability to understand our vision was impressive. The turnaround time was quick and quality outstanding.', n: 'David Wilson', r: 'Creative Director' },
];

function TCard({ t }) {
  return (
    <div style={{ width: 380, flex: 'none', background: '#181818', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 26px', marginRight: 20 }}>
      <div style={{ color: 'var(--gold)', fontSize: 14, letterSpacing: 3, marginBottom: 12 }}>★★★★★</div>
      <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 17, lineHeight: 1.5, color: '#E4E4E4', margin: '0 0 18px' }}>"{t.q}"</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#FAFAFA' }}>{t.n}</div>
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
        <SectionLabel>What Clients Say</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,4.5vw,44px)', color: '#FAFAFA', margin: '16px 0 0' }}>Trusted by Hundreds of Happy Families</h2>
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
      <div style={{ maxWidth: 1100, margin: '0 auto', borderRadius: 24, padding: '64px 48px', textAlign: 'center', background: 'radial-gradient(120% 140% at 50% 0%, rgba(201,168,76,.18), rgba(8,8,8,0) 60%), #111', border: '1px solid var(--border-strong)', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,5vw,48px)', color: '#FAFAFA', margin: 0 }}>Ready to Capture Your <em style={{ fontStyle: 'italic', fontWeight: 500, background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Perfect</em> Moment?</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: '#B0B0B0', maxWidth: 520, margin: '18px auto 32px' }}>Book a session today and preserve your most precious memories forever.</p>
        <Button variant="primary" size="lg" onClick={onBook}>Book Your Session Now</Button>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--gold)', marginTop: 24, letterSpacing: '.04em' }}>+977 15916533 &nbsp;·&nbsp; +977 9851195181</div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, FinalCTA, TESTIMONIALS });
