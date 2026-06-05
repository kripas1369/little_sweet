// LSP UI Kit — Footer + Booking modal + toast notification
const { useState: useStateF } = React;

function Footer({ onNav }) {
  const cols = [
    ['Quick Links', ['About', 'Contact', 'Ceremonies', 'Events']],
    ['Occasions', ['Wedding', 'Baby Shower', 'Birthday', 'Bratabandha', 'Pasni']],
    ['Business', ['Food Photography', 'Corporate Events', 'Product Photoshoot', 'Headshots']],
  ];
  const Link = ({ children }) => {
    const [h, setH] = useStateF(false);
    return <li onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: h ? 'var(--gold)' : '#9A9A9A', padding: '6px 0', cursor: 'pointer', transition: 'color .2s', listStyle: 'none' }}>{children}</li>;
  };
  return (
    <footer style={{ background: '#0E0C08', borderTop: '1px solid rgba(201,168,76,.3)', padding: '60px 32px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
        <div>
          <Logo width={130} />
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, color: '#9A9A9A', marginTop: 16, maxWidth: 240, lineHeight: 1.5 }}>Starts with a click — ends with a notification.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
            {['instagram', 'facebook', 'music-2'].map((ic) => (
              <span key={ic} style={{ color: 'var(--muted)', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}><Icon name={ic} size={20} /></span>
            ))}
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 14 }}>{h}</div>
            <ul style={{ margin: 0, padding: 0 }}>{items.map((i) => <Link key={i}>{i}</Link>)}</ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1240, margin: '44px auto 0', paddingTop: 24, borderTop: '1px solid rgba(201,168,76,.12)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--muted)' }}>© 2025 Little Sweet Photography · Kathmandu, Nepal · All Rights Reserved</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--gold)' }}>+977 15916533 · +977 9851195181</span>
      </div>
    </footer>
  );
}

// ---- Booking modal ----------------------------------------------------------
function BookingModal({ open, preset, onClose, onConfirm }) {
  const [field, setField] = useStateF({ date: '', time: '', notes: '' });
  if (!open) return null;
  const input = { width: '100%', background: '#F3EFE6', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: 14, color: '#14110B', boxSizing: 'border-box', marginTop: 6 };
  const lbl = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(20,17,11,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 440, maxWidth: '100%', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 20, padding: '32px 32px 28px', boxShadow: '0 30px 80px rgba(20,17,11,.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <SectionLabel>Book This Package</SectionLabel>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, color: '#14110B', margin: '12px 0 0' }}>{preset || 'Your Session'}</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><Icon name="x" size={22} /></button>
        </div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div><div style={lbl}>Date</div><input type="date" style={input} value={field.date} onChange={(e) => setField({ ...field, date: e.target.value })} /></div>
          <div><div style={lbl}>Time</div><input type="time" style={input} value={field.time} onChange={(e) => setField({ ...field, time: e.target.value })} /></div>
          <div><div style={lbl}>Notes</div><textarea rows={3} placeholder="Tell us about your event…" style={{ ...input, resize: 'vertical' }} value={field.notes} onChange={(e) => setField({ ...field, notes: e.target.value })} /></div>
        </div>
        <div style={{ marginTop: 24 }}>
          <Button variant="primary" size="lg" onClick={() => onConfirm(preset)} iconRight="arrow-right">Confirm Booking</Button>
        </div>
      </div>
    </div>
  );
}

// ---- Toast ("ends with a notification") -------------------------------------
function Toast({ show, text }) {
  return (
    <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 400, transform: show ? 'translateY(0)' : 'translateY(140%)', opacity: show ? 1 : 0, transition: 'all .5s cubic-bezier(.16,1,.3,1)', background: '#FFFFFF', border: '1px solid var(--border-gold)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 16px 50px rgba(20,17,11,.18)', maxWidth: 340 }}>
      <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--gold-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1C1606', flex: 'none' }}><Icon name="bell" size={18} color="#1C1606" /></span>
      <div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: '#14110B' }}>Booking received!</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: '#6B665C', marginTop: 2 }}>{text}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Footer, BookingModal, Toast });
