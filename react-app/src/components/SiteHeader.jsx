import { NavLink } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <nav className="nav" style={{ paddingInline: 'clamp(20px,5vw,72px)', gap: 'clamp(12px,2.2vw,30px)', position: 'sticky', top: 0, zIndex: 100, background: 'var(--color-bg)' }}>
      <NavLink to="/" className="nav-brand" style={{ display: 'grid', gap: 4, color: 'var(--color-text)', boxShadow: 'none' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: 21, letterSpacing: '.14em', lineHeight: 1 }}>ASCENT PARTNERS</span>
        <span style={{ fontSize: 10.5, letterSpacing: '.22em', color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', lineHeight: 1 }}>株式会社アセントパートナーズ</span>
      </NavLink>
      <NavLink to="/" end style={{ fontSize: 13, letterSpacing: '.1em', color: 'var(--color-text)' }}>TOP</NavLink>
      <NavLink to="/about" style={{ fontSize: 13, letterSpacing: '.1em', color: 'var(--color-text)' }}>ABOUT</NavLink>
      <NavLink to="/service" style={{ fontSize: 13, letterSpacing: '.1em', color: 'var(--color-text)' }}>SERVICE</NavLink>
      <NavLink to="/works" style={{ fontSize: 13, letterSpacing: '.1em', color: 'var(--color-text)' }}>WORKS</NavLink>
      <NavLink to="/contact" className="btn btn-primary" style={{ fontSize: 12.5, letterSpacing: '.08em' }}>ご相談・お問い合わせ</NavLink>
    </nav>
  )
}
