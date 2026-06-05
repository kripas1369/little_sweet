// LSP UI Kit — App: composes the home page + booking/login flows
const { useState: useStateA, useEffect: useEffectA } = React;

function LoginModal({ open, onClose }) {
  if (!open) return null;
  const input = { width: '100%', background: '#F3EFE6', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: 14, color: '#14110B', boxSizing: 'border-box', marginTop: 6 };
  const lbl = { fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)' };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(20,17,11,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 400, maxWidth: '100%', background: '#FFFFFF', border: '1px solid var(--border)', borderRadius: 20, padding: '34px 32px', textAlign: 'center', boxShadow: '0 30px 80px rgba(20,17,11,.25)' }}>
        <Logo width={120} />
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: '#14110B', margin: '20px 0 6px' }}>Welcome Back</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--muted)', margin: '0 0 24px' }}>Log in to manage your bookings.</p>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div><div style={lbl}>Email</div><input style={input} placeholder="you@email.com" /></div>
          <div><div style={lbl}>Password</div><input type="password" style={input} placeholder="••••••••" /></div>
        </div>
        <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" onClick={onClose} iconRight="arrow-right">Log In</Button></div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--muted)', marginTop: 18 }}>New here? <a style={{ color: 'var(--gold)', cursor: 'pointer' }}>Create an account</a></p>
      </div>
    </div>
  );
}

function App() {
  const [route, setRoute] = useStateA('home');
  const [booking, setBooking] = useStateA({ open: false, preset: '' });
  const [login, setLogin] = useStateA(false);
  const [toast, setToast] = useStateA({ show: false, text: '' });

  useEffectA(() => { window.lucide && window.lucide.createIcons(); });

  const openBooking = (preset = '') => setBooking({ open: true, preset });
  const confirm = (preset) => {
    setBooking({ open: false, preset: '' });
    setToast({ show: true, text: `We'll confirm your ${preset || 'session'} shortly. Check your notifications.` });
    setTimeout(() => setToast({ show: false, text: '' }), 4200);
  };
  const onNav = (r) => { if (r === 'login') setLogin(true); else setRoute(r); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <ScrollFX />
      <Navbar route={route} onNav={onNav} onBook={() => openBooking()} onPick={(p) => openBooking(p)} />
      <div id="hero"><Hero onExplore={() => { const el = document.getElementById('ceremonies'); el && window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' }); }} /></div>
      <SearchBar onSearch={(t) => openBooking(typeof t === 'string' ? t : '')} />
      <div id="ceremonies"><Ceremonies onBook={openBooking} /></div>
      <div id="business"><Business onBook={openBooking} /></div>
      <div id="why"><WhyChoose /></div>
      <div id="how"><HowItWorks /></div>
      <div id="voices"><Testimonials /></div>
      <div id="book"><FinalCTA onBook={() => openBooking()} /></div>
      <Footer onNav={onNav} />

      <BookingModal open={booking.open} preset={booking.preset} onClose={() => setBooking({ open: false, preset: '' })} onConfirm={confirm} />
      <LoginModal open={login} onClose={() => setLogin(false)} />
      <Toast show={toast.show} text={toast.text} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
