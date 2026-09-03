import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--color-neutral-900)', color: 'color-mix(in srgb,#fff 88%,transparent)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px clamp(20px,5vw,72px) 40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '40px 48px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, letterSpacing: '.14em', margin: 0 }}>ASCENT PARTNERS</p>
          <p style={{ fontSize: 12.5, letterSpacing: '.06em', color: 'color-mix(in srgb,#fff 66%,transparent)', margin: '12px 0 0', lineHeight: 1.9 }}>
            株式会社アセントパートナーズ<br />〒100-0005 東京都千代田区丸の内一丁目9番2号<br />丸の内三葉ビル 14階
          </p>
        </div>
        <nav style={{ display: 'grid', gap: 12, fontSize: 13, letterSpacing: '.08em', alignContent: 'start' }}>
          <Link to="/" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>TOP</Link>
          <Link to="/about" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>ABOUT ／ 会社について</Link>
          <Link to="/service" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>SERVICE ／ サービス</Link>
        </nav>
        <nav style={{ display: 'grid', gap: 12, fontSize: 13, letterSpacing: '.08em', alignContent: 'start' }}>
          <Link to="/works" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>WORKS ／ 支援実績</Link>
          <Link to="/contact" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>CONTACT ／ お問い合わせ</Link>
          <Link to="/about" style={{ color: 'color-mix(in srgb,#fff 80%,transparent)' }}>RECRUIT ／ 採用情報</Link>
        </nav>
        <div>
          <p style={{ fontSize: 12.5, letterSpacing: '.06em', color: 'color-mix(in srgb,#fff 66%,transparent)', margin: 0, lineHeight: 1.9, fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>
            TEL 03-6205-0000（代表）<br />受付 平日 9:30–18:00
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px,5vw,72px) 48px' }}>
        <hr style={{ height: 1, border: 0, margin: '0 0 20px', background: 'color-mix(in srgb,#fff 22%,transparent)' }} />
        <p style={{ fontSize: 11.5, color: 'color-mix(in srgb,#fff 55%,transparent)', margin: 0, letterSpacing: '.04em', fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>
          © 2026 Ascent Partners, Inc.　※本サイトは架空企業の制作例です。
        </p>
      </div>
    </footer>
  )
}
