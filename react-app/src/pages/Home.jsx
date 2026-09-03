import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-marunouchi.jpg'
import slide1 from '../assets/top-slide-1.png'
import slide2 from '../assets/top-slide-2.webp'
import slide3 from '../assets/top-slide-3.webp'

const CAPTIONS = ['現場に入り、工程を実測する。', '選択肢は三案以内に絞る。', 'チームで課題を洗い出す。']
const SLIDES = [
  { src: slide1, alt: '現場・工場での実測風景' },
  { src: slide2, alt: '経営会議での討議' },
  { src: slide3, alt: 'オフィス・チームの様子' },
]

export default function Home() {
  const [i, setI] = useState(0)
  const go = (n) => setI(((n % 3) + 3) % 3)
  const on = 'var(--color-accent)'
  const off = 'var(--color-divider)'

  return (
    <main data-screen-label="TOP">
      <section
        className="hero"
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-neutral-800)',
          backgroundImage: `linear-gradient(to top,rgba(14,22,36,.66) 0%,rgba(14,22,36,.34) 38%,rgba(14,22,36,.06) 70%,transparent 100%),url(${heroImage})`,
          borderBottom: '1px solid var(--color-divider)',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: 'clamp(72px,12vw,160px) clamp(20px,5vw,72px) clamp(40px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: '#fff', margin: '0 0 32px', textShadow: '0 1px 12px rgba(20,30,45,.55)' }}>
            Management Consulting
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(19px,6vw,72px)', lineHeight: 1.32, letterSpacing: '.04em', margin: 0, whiteSpace: 'nowrap', color: '#fff', textShadow: '0 2px 20px rgba(20,30,45,.5)' }}>
            企業の可能性を、次の領域へ。
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(17px,1.8vw,24px)', letterSpacing: '.06em', color: '#fff', margin: '20px 0 0', textShadow: '0 1px 14px rgba(14,22,36,.7)' }}>
            Unlocking the next growth curve.
          </p>
          <hr style={{ height: 1, border: 0, margin: '44px 0 0', background: 'color-mix(in srgb,#fff 45%,transparent)', maxWidth: 640 }} />
          <div style={{ display: 'grid', gap: 32, marginTop: 36, maxWidth: 640 }}>
            <p style={{ fontSize: 16, lineHeight: 2.15, color: '#fff', margin: 0, textAlign: 'justify', lineBreak: 'strict', textShadow: '0 1px 14px rgba(14,22,36,.75)' }}>
              経営課題を分析し、事業戦略・組織・業務改善・DXを一体で支援します。診断だけで終わらせません。計画を書いたチームが、実行の現場にも残ります。
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link to="/service" className="btn btn-primary" style={{ color: '#fff', borderColor: '#fff' }}>サービスを見る</Link>
              <Link to="/works" className="btn btn-ghost" style={{ color: '#fff', border: '1px solid #fff' }}>支援実績</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>
            By the numbers ／ 数字で見る当社
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '40px 32px' }}>
            <div>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 'clamp(34px,3.6vw,52px)', lineHeight: 1.05, fontFeatureSettings: "'tnum' 1", margin: 0, color: 'var(--color-accent)' }}>2009</p>
              <p style={{ fontSize: 12.5, letterSpacing: '.1em', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: '16px 0 0' }}>設立</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 'clamp(34px,3.6vw,52px)', lineHeight: 1.05, fontFeatureSettings: "'tnum' 1", margin: 0 }}>480<span style={{ fontSize: '.4em', letterSpacing: '.06em' }}>社</span></p>
              <p style={{ fontSize: 12.5, letterSpacing: '.1em', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: '16px 0 0' }}>支援企業数（累計）</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 'clamp(34px,3.6vw,52px)', lineHeight: 1.05, fontFeatureSettings: "'tnum' 1", margin: 0 }}>320<span style={{ fontSize: '.4em', letterSpacing: '.06em' }}>名</span></p>
              <p style={{ fontSize: 12.5, letterSpacing: '.1em', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: '16px 0 0' }}>社員数</p>
            </div>
            <div>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: 'clamp(34px,3.6vw,52px)', lineHeight: 1.05, fontFeatureSettings: "'tnum' 1", margin: 0 }}>92<span style={{ fontSize: '.4em', letterSpacing: '.06em' }}>%</span></p>
              <p style={{ fontSize: 12.5, letterSpacing: '.1em', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: '16px 0 0' }}>継続支援率</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 20px' }}>Service ／ サービス</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.4, letterSpacing: '.04em', margin: 0 }}>四つの領域を<br />切り離さずに扱う。</h2>
          </div>
          <Link to="/service" className="btn btn-ghost">すべて見る</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 48, marginTop: 56 }}>
          {[
            { no: '０１', title: '事業戦略', en: 'Strategy', body: '市場と自社の位置を数字で確かめ、次の三年で何をやめるかを決めます。' },
            { no: '０２', title: '組織・人材', en: 'Organization', body: '戦略が動く形に組織を直します。評価制度と権限の設計まで踏み込みます。' },
            { no: '０３', title: '業務改善', en: 'Operations', body: '現場に入り、工程を実測します。改善は現場が回せる範囲で設計します。' },
            { no: '０４', title: 'DX', en: 'Digital', body: '道具の導入ではなく、業務の再定義から。使われないシステムは作りません。' },
          ].map((s) => (
            <div key={s.title} style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 26 }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'var(--color-accent)', margin: '0 0 18px' }}>{s.no}</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 23, letterSpacing: '.04em', margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', margin: '10px 0 0' }}>{s.en}</p>
              <p style={{ fontSize: 14.5, lineHeight: 2.05, color: 'color-mix(in srgb,var(--color-text) 80%,transparent)', margin: '20px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 20px' }}>Inside ／ 私たちの現場</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(24px,2.8vw,34px)', lineHeight: 1.45, letterSpacing: '.04em', margin: 0 }}>{CAPTIONS[i]}</h2>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button type="button" onClick={() => go(i - 1)} aria-label="前の写真" className="btn btn-ghost btn-icon" style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', fontSize: 16 }}>←</button>
            <span style={{ fontSize: 13, letterSpacing: '.12em', fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'color-mix(in srgb,var(--color-text) 62%,transparent)', minWidth: '4.5em', textAlign: 'center' }}>
              {String(i + 1).padStart(2, '0')} / 03
            </span>
            <button type="button" onClick={() => go(i + 1)} aria-label="次の写真" className="btn btn-ghost btn-icon" style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', fontSize: 16 }}>→</button>
          </div>
        </div>
        <div style={{ marginTop: 36, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 24, transform: `translateX(calc(${-i * 100}% - ${i * 24}px))`, transition: 'transform .55s cubic-bezier(.22,.61,.36,1)' }}>
            {SLIDES.map((s) => (
              <figure key={s.alt} className="plate" style={{ margin: 0, flex: '0 0 100%' }}>
                <img src={s.src} alt={s.alt} style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover' }} />
              </figure>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
          {[0, 1, 2].map((n) => (
            <button key={n} type="button" onClick={() => go(n)} aria-label={`${n + 1}枚目`} style={{ flex: 1, height: 2, border: 0, padding: 0, cursor: 'pointer', background: i === n ? on : off }} />
          ))}
        </div>
      </section>

      <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: 0 }}>Works ／ 支援実績</p>
          <Link to="/works" className="btn btn-ghost">実績一覧</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 32, marginTop: 44 }}>
          {[
            { kicker: '製造業 ／ 売上 800億円規模', title: '事業ポートフォリオの再編', body: '七事業のうち二事業からの撤退を決定。三年で営業利益率を4.1%から9.8%へ。', meta: '支援期間 22か月' },
            { kicker: '小売業 ／ 全国 240店舗', title: '店舗業務の標準化とDX', body: '発注・棚割の工程を実測し、店舗事務作業を週11.5時間削減しました。', meta: '支援期間 14か月' },
            { kicker: 'IT・ソフトウェア ／ 従業員 620名', title: '等級・評価制度の再設計', body: '職種別の等級要件を明文化。二年目で自己都合離職率が18%から9%へ。', meta: '支援期間 10か月' },
          ].map((c) => (
            <div key={c.title} className="card">
              <p className="card-kicker" style={{ fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>{c.kicker}</p>
              <h3 className="card-title" style={{ fontWeight: 400, letterSpacing: '.04em' }}>{c.title}</h3>
              <p className="card-body" style={{ lineHeight: 2, textAlign: 'justify', lineBreak: 'strict' }}>{c.body}</p>
              <p className="card-meta" style={{ fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'var(--color-accent-700)' }}>{c.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 36px' }}>News ／ お知らせ</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--color-divider)' }}>
            {[
              { date: '2026.08.20', tag: 'レポート', tagStyle: { borderColor: 'var(--color-accent)', color: 'var(--color-accent-700)' }, text: '調査レポート「中堅企業のDX投資 2026」を公開しました' },
              { date: '2026.07.08', tag: 'お知らせ', text: '大阪オフィスを移転・拡張しました' },
              { date: '2026.06.15', tag: 'セミナー', text: '経営者向けセミナー「撤退の意思決定」を開催します（9月10日・東京）' },
              { date: '2026.04.01', tag: '採用', text: '2027年度 新卒採用およびキャリア採用の募集を開始しました' },
            ].map((n) => (
              <li key={n.date} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,7.5em) minmax(0,8em) 1fr', gap: '8px 28px', alignItems: 'baseline', padding: '22px 0', borderBottom: '1px solid var(--color-divider)' }}>
                <span style={{ fontSize: 13, fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'color-mix(in srgb,var(--color-text) 65%,transparent)' }}>{n.date}</span>
                <span className="tag tag-outline" style={{ justifySelf: 'start', ...n.tagStyle }}>{n.tag}</span>
                <span style={{ fontSize: 15.5, lineHeight: 1.9 }}>{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(56px,7vw,88px) clamp(20px,5vw,72px) 96px' }}>
        <div style={{ border: '1px solid var(--color-accent-300)', borderRadius: 'var(--radius-md)', padding: 'clamp(28px,4vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '32px 56px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 20px' }}>Recruit ／ 採用情報</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(24px,2.8vw,34px)', lineHeight: 1.45, letterSpacing: '.04em', margin: 0 }}>自ら問いを立てられる<br />人と、働きたい。</h2>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: 'color-mix(in srgb,var(--color-text) 80%,transparent)', margin: '22px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
              新卒・キャリアともに通年で採用しています。前職の業界は問いません。二〇二七年度は二十名程度の採用を予定しています。
            </p>
          </div>
          <div style={{ display: 'grid', gap: 14, justifyItems: 'stretch', alignContent: 'start', width: 'min(260px,100%)', justifySelf: 'end' }}>
            <Link to="/about" className="btn btn-primary" style={{ textAlign: 'center' }}>採用情報を見る</Link>
            <Link to="/contact" className="btn btn-ghost" style={{ textAlign: 'center' }}>カジュアル面談</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
