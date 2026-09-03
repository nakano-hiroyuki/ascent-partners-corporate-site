import { Link } from 'react-router-dom'

const SERVICES = [
  {
    no: '01', title: '事業戦略', en: 'Business Strategy',
    body: '市場規模、競合の収益構造、自社の原価を並べて、事業ごとの立ち位置を数字で確定させます。成長投資の前に、撤退・縮小の候補を必ず提示します。',
    items: ['事業ポートフォリオの評価・再編', '中期経営計画の策定と数値計画への落とし込み', '新規事業の投資判断、M&A後の統合方針'],
  },
  {
    no: '02', title: '組織・人材', en: 'Organization & Talent',
    body: '決定が遅い、責任が曖昧、優秀な人が辞める。多くは制度の設計不良です。権限、等級、評価の三点を同時に直します。',
    items: ['組織構造・権限規程の再設計', '等級・評価・報酬制度の刷新と運用定着', '後継者計画、管理職研修'],
  },
  {
    no: '03', title: '業務改善', en: 'Operations',
    body: '現場に入り、工程と所要時間を実測します。改善案は、担当者が翌週から回せる粒度まで分解して渡します。',
    items: ['業務プロセスの可視化・標準化', '調達・在庫・物流のコスト構造改善', '間接部門の生産性向上、シェアード化'],
  },
  {
    no: '04', title: 'DX', en: 'Digital Transformation',
    body: 'ツール選定から始めません。業務の再定義、データの整備、そのうえで最小構成の導入。使われない機能に費用を払わない設計にします。',
    items: ['DX構想策定、投資計画とロードマップ', '基幹システム刷新のPMO、ベンダー選定支援', 'データ基盤の整備、社内人材の育成'],
  },
]

const APPROACH = [
  { num: 'I', title: '診断（2–4週）', body: '財務・現場・組織を並行して調査。無償の初回診断から始められます。' },
  { num: 'II', title: '設計（6–10週）', body: '選択肢を三案以内に絞り、投資額と回収時期を添えて経営会議に提出します。' },
  { num: 'III', title: '実行（6–24か月）', body: 'PMOとして常駐。週次で進捗と数値を追い、計画を現実に合わせて更新します。' },
  { num: 'IV', title: '移管', body: '運用の担い手を社内に指名し、手順書と指標を引き継いで撤収します。' },
]

const ENGAGEMENTS = [
  ['初回診断', '2–4週', '2名', '課題の所在を先に確かめたい'],
  ['プロジェクト型', '3–10か月', '3–6名', '戦略・制度・業務の設計まで'],
  ['実行支援（PMO常駐）', '6–24か月', '2–4名常駐', '決めた計画を確実に動かす'],
  ['顧問・定例助言', '年間契約', '1–2名', '経営判断の相談相手が必要'],
]

export default function Service() {
  return (
    <main data-screen-label="SERVICE">
      <section style={{ background: 'var(--color-accent-900)', borderBottom: '1px solid var(--color-accent-800)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,72px) 64px' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-300)', margin: '0 0 28px' }}>Service ／ サービス</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.36, letterSpacing: '.04em', margin: 0, color: '#fff' }}>四つの領域を、切り離さずに扱う。</h1>
          <p style={{ fontSize: 16, lineHeight: 2.15, color: 'color-mix(in srgb,#fff 80%,transparent)', maxWidth: '44em', margin: '32px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            戦略の失敗はたいてい組織か業務の問題です。当社は四領域を同じチームで担当し、案件ごとに比重を変えます。単一領域のみのご依頼もお受けします。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,5vw,72px)', display: 'grid', gap: 64 }}>
        {SERVICES.map((s, idx) => (
          <div key={s.no} style={{ display: 'contents' }}>
            <article style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3.5em) minmax(0,1fr) minmax(0,1.15fr)', gap: '24px 48px', alignItems: 'start' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'var(--color-accent)', lineHeight: 1 }}>{s.no}</span>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 28, lineHeight: 1.5, letterSpacing: '.04em', margin: 0 }}>{s.title}</h2>
                <p style={{ fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', margin: '12px 0 0' }}>{s.en}</p>
              </div>
              <div>
                <p style={{ fontSize: 15.5, lineHeight: 2.15, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', margin: 0, textAlign: 'justify', lineBreak: 'strict' }}>{s.body}</p>
                <ul style={{ listStyle: 'none', margin: '22px 0 0', padding: 0, display: 'grid', gap: 10 }}>
                  {s.items.map((it) => (
                    <li key={it} style={{ fontSize: 14, lineHeight: 1.9, paddingLeft: '1.3em', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>—</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            {idx < SERVICES.length - 1 && <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />}
          </div>
        ))}
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 44px' }}>Approach ／ 進め方</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: '40px 32px' }}>
            {APPROACH.map((a) => (
              <div key={a.num} style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 26 }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'var(--color-accent-700)', margin: '0 0 16px', letterSpacing: '.08em' }}>{a.num}</p>
                <h3 style={{ fontSize: 16.5, fontWeight: 500, letterSpacing: '.04em', margin: 0 }}>{a.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 2, color: 'color-mix(in srgb,var(--color-text) 78%,transparent)', margin: '16px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>Engagement ／ ご契約の形</p>
          <table className="table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: 'left' }}>形態</th>
                <th scope="col" style={{ textAlign: 'left' }}>期間の目安</th>
                <th scope="col" style={{ textAlign: 'left' }}>体制</th>
                <th scope="col" style={{ textAlign: 'left' }}>適する場面</th>
              </tr>
            </thead>
            <tbody>
              {ENGAGEMENTS.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td style={{ fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 44 }}>
            <Link to="/contact" className="btn btn-primary">初回診断を相談する</Link>
            <Link to="/works" className="btn btn-ghost">支援実績を見る</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
