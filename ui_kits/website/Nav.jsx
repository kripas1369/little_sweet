// LSP UI Kit — Navigation (sticky nav + dropdowns + mobile drawer)
const { useState: useStateN } = React;

const CEREMONIES = ['Baby Shower', 'Bratabandha', 'Birthday', 'Pasni', 'Party', 'Wedding', 'Vacation Photography', 'Newborn', 'Maternity', 'Toddler', 'Family Portrait'];
const BUSINESS = ['Food Photography', 'School Events', 'Corporate Events', 'Brand Video', 'Product Photoshoot', 'Boutique Photography', 'Profile & Headshot'];

function NavDropdown({ label, items, onPick }) {
  const [open, setOpen] = useStateN(false);
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, color: open ? 'var(--gold-ink)' : '#14110B', padding: '8px 0', transition: 'color .2s' }}>
        {label}<span style={{ fontSize: 9, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 4, background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', border: '1px solid var(--border)', borderRadius: 14, padding: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, width: 360, boxShadow: '0 24px 60px rgba(20,17,11,.14)', zIndex: 50 }}>
          {items.map((it) => (
            <div key={it} onClick={() => onPick && onPick(it)}
              style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: '#4A463E', padding: '9px 12px', borderRadius: 8, cursor: 'pointer', transition: 'all .15s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,.12)'; e.currentTarget.style.color = 'var(--gold-ink)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4A463E'; }}>
              {it}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ children, onClick, active }) {
  const [hover, setHover] = useStateN(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, color: (hover || active) ? 'var(--gold-ink)' : '#14110B', padding: '8px 0', transition: 'color .2s' }}>
      {children}
      <span style={{ position: 'absolute', left: 0, bottom: 2, height: 1.5, background: 'var(--gold)', width: (hover || active) ? '100%' : '0%', transition: 'width .3s cubic-bezier(.16,1,.3,1)' }} />
    </button>
  );
}

function Navbar({ onBook, onNav, route, onPick }) {
  const [drawer, setDrawer] = useStateN(false);
  return (
    <React.Fragment>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(251,250,247,0.82)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ cursor: 'pointer', display: 'flex' }} onClick={() => onNav('home')}><Logo width={120} /></div>
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <NavLink active={route === 'home'} onClick={() => onNav('home')}>Home</NavLink>
            <NavLink active={route === 'about'} onClick={() => onNav('about')}>About</NavLink>
            <NavDropdown label="Ceremonies" items={CEREMONIES} onPick={onPick} />
            <NavDropdown label="Business" items={BUSINESS} onPick={onPick} />
            <NavLink active={route === 'contact'} onClick={() => onNav('contact')}>Contact</NavLink>
          </div>
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant="outline" size="sm" onClick={() => onNav('login')}>Client Login</Button>
            <Button variant="primary" size="sm" onClick={onBook}>Book Now</Button>
          </div>
          <button className="nav-burger" onClick={() => setDrawer(true)} style={{ display: 'none', background: 'none', border: 'none', color: 'var(--gold-ink)', cursor: 'pointer' }}><Icon name="menu" size={26} /></button>
        </div>
      </nav>

      {drawer && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(251,250,247,0.98)', backdropFilter: 'blur(20px)', padding: 32, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <Logo width={110} />
            <button onClick={() => setDrawer(false)} style={{ background: 'none', border: 'none', color: 'var(--gold-ink)', cursor: 'pointer' }}><Icon name="x" size={28} /></button>
          </div>
          {['Home', 'About', 'Contact'].map((l) => (
            <div key={l} onClick={() => { onNav(l.toLowerCase()); setDrawer(false); }} style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: '#14110B', padding: '10px 0', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}>{l}</div>
          ))}
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button variant="outline" onClick={() => { onNav('login'); setDrawer(false); }}>Client Login</Button>
            <Button variant="primary" onClick={() => { onBook(); setDrawer(false); }}>Book Now</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Object.assign(window, { Navbar, CEREMONIES, BUSINESS });
