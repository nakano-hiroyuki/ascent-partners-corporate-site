import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main data-screen-label="CONTACT">
      <section style={{ background: 'var(--color-accent-900)', borderBottom: '1px solid var(--color-accent-800)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,72px) 64px' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-300)', margin: '0 0 28px' }}>Contact ／ お問い合わせ</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.36, letterSpacing: '.04em', margin: 0, color: '#fff' }}>まず、課題の所在から。</h1>
          <p style={{ fontSize: 16, lineHeight: 2.15, color: 'color-mix(in srgb,#fff 80%,transparent)', maxWidth: '44em', margin: '32px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            ご相談、初回診断のお申し込み、採用に関するお問い合わせを承ります。二営業日以内に担当より返信します。初回診断は無償です。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '56px 72px', alignItems: 'start' }}>
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 26 }}>
          <div className="field">
            <label>お問い合わせ種別</label>
            <div className="seg" style={{ marginTop: 10 }}>
              <label className="seg-opt"><input type="radio" name="kind" value="consult" defaultChecked /><span>経営のご相談</span></label>
              <label className="seg-opt"><input type="radio" name="kind" value="diagnosis" /><span>初回診断</span></label>
              <label className="seg-opt"><input type="radio" name="kind" value="recruit" /><span>採用</span></label>
              <label className="seg-opt"><input type="radio" name="kind" value="other" /><span>取材・その他</span></label>
            </div>
          </div>
          <div className="field"><label htmlFor="c-company">会社名</label><input className="input" id="c-company" type="text" placeholder="株式会社〇〇" /></div>
          <div className="field"><label htmlFor="c-name">ご担当者名</label><input className="input" id="c-name" type="text" placeholder="山田 太郎" /></div>
          <div className="field"><label htmlFor="c-mail">メールアドレス</label><input className="input" id="c-mail" type="email" placeholder="name@example.co.jp" /></div>
          <div className="field"><label htmlFor="c-tel">電話番号（任意）</label><input className="input" id="c-tel" type="tel" placeholder="03-0000-0000" /></div>
          <div className="field">
            <label htmlFor="c-body">ご相談内容</label>
            <textarea className="input" id="c-body" rows={6} style={{ resize: 'vertical', fontFamily: 'var(--font-body)', lineHeight: 1.9 }} placeholder="現在の課題、検討の背景などをご記入ください" />
          </div>
          <p style={{ fontSize: 12.5, lineHeight: 1.9, color: 'color-mix(in srgb,var(--color-text) 65%,transparent)', margin: 0 }}>
            ご記入いただいた個人情報は、お問い合わせへの対応のみに利用します。
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <button type="submit" className="btn btn-primary">送信する</button>
            <span style={{ fontSize: 13.5, color: 'var(--color-accent-700)' }}>{sent ? '送信しました。二営業日以内にご連絡します。' : ''}</span>
          </div>
        </form>

        <aside style={{ display: 'grid', gap: 36 }}>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 18px' }}>Head office ／ 本社</p>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', margin: 0 }}>
              〒100-0005<br />東京都千代田区丸の内一丁目9番2号<br />丸の内三葉ビル 14階
            </p>
            <p style={{ fontSize: 15, lineHeight: 2.1, margin: '18px 0 0', fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>
              TEL　03-6205-0000（代表）<br />受付　平日 9:30–18:00
            </p>
          </div>
          <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 18px' }}>Access ／ アクセス</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12, fontSize: 14.5, lineHeight: 1.9 }}>
              <li style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14 }}><span style={{ color: 'var(--color-accent)' }}>—</span><span>JR 東京駅 丸の内南口より徒歩4分</span></li>
              <li style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14 }}><span style={{ color: 'var(--color-accent)' }}>—</span><span>東京メトロ丸ノ内線 東京駅 直結（地下通路）</span></li>
              <li style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 14 }}><span style={{ color: 'var(--color-accent)' }}>—</span><span>都営三田線 大手町駅 D3出口より徒歩6分</span></li>
            </ul>
          </div>
          <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 18px' }}>Offices ／ 拠点</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12, fontSize: 14.5, lineHeight: 1.9 }}>
              <li style={{ display: 'grid', gridTemplateColumns: '6em 1fr', gap: 16 }}><span style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>大阪</span><span>大阪市北区梅田二丁目</span></li>
              <li style={{ display: 'grid', gridTemplateColumns: '6em 1fr', gap: 16 }}><span style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>名古屋</span><span>名古屋市中村区名駅四丁目</span></li>
              <li style={{ display: 'grid', gridTemplateColumns: '6em 1fr', gap: 16 }}><span style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>福岡</span><span>福岡市博多区博多駅前二丁目</span></li>
            </ul>
          </div>
        </aside>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 24px' }}>Map ／ 本社周辺</p>
          <figure style={{ margin: 0, border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--color-neutral-100)' }}>
            <svg viewBox="0 0 1200 420" role="img" aria-label="本社周辺の略図。東京駅丸の内南口から徒歩4分、丸の内仲通り沿い。" style={{ display: 'block', width: '100%', height: 'auto' }}>
              <rect x="0" y="0" width="1200" height="420" fill="var(--color-neutral-100)" />
              <g stroke="var(--color-divider)" strokeWidth="1">
                <path d="M0 90 H880" />
                <path d="M0 200 H880" />
                <path d="M0 320 H880" />
                <path d="M180 0 V420" />
                <path d="M470 0 V420" />
                <path d="M760 0 V420" />
              </g>
              <path d="M760 0 V420" stroke="var(--color-neutral-300)" strokeWidth="16" fill="none" />
              <path d="M0 200 H880" stroke="var(--color-neutral-300)" strokeWidth="22" fill="none" />
              <rect x="880" y="60" width="230" height="290" fill="var(--color-neutral-100)" stroke="var(--color-neutral-500)" strokeWidth="1.5" />
              <text x="995" y="205" textAnchor="middle" fontFamily="var(--font-body)" fontSize="17" fill="var(--color-text)">JR 東京駅</text>
              <text x="995" y="232" textAnchor="middle" fontFamily="var(--font-body)" fontSize="13" fill="var(--color-neutral-700)">丸の内南口</text>
              <path d="M880 215 H620" stroke="var(--color-accent)" strokeWidth="2" strokeDasharray="7 6" fill="none" />
              <circle cx="560" cy="215" r="9" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
              <circle cx="560" cy="215" r="3" fill="var(--color-accent)" />
              <text x="560" y="178" textAnchor="middle" fontFamily="var(--font-heading)" fontSize="21" fill="var(--color-text)">丸の内三葉ビル 14F</text>
              <text x="560" y="256" textAnchor="middle" fontFamily="var(--font-body)" fontSize="13" fill="var(--color-neutral-700)">徒歩 4 分</text>
              <text x="150" y="118" fontFamily="var(--font-body)" fontSize="12.5" fill="var(--color-neutral-600)" letterSpacing="1.5">丸の内仲通り</text>
              <text x="30" y="192" fontFamily="var(--font-body)" fontSize="12.5" fill="var(--color-neutral-600)" letterSpacing="1.5">永代通り</text>
            </svg>
            <figcaption style={{ fontSize: 12.5, lineHeight: 1.9, color: 'color-mix(in srgb,var(--color-text) 62%,transparent)', padding: '16px 20px', borderTop: '1px solid var(--color-divider)' }}>
              略図です。ご来社の際は受付にて社名をお伝えください。
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  )
}
