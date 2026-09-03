import works1 from '../assets/works-1.webp'
import works2 from '../assets/works-2.webp'
import works3 from '../assets/works-3.webp'

const CASES = [
  {
    img: works1, alt: '製造業の現場写真', order: 'text-first',
    kicker: 'Case 01 ／ 製造業・売上800億円規模', title: '事業ポートフォリオの再編',
    issue: '七事業のすべてに均等に投資しており、主力事業の設備更新が遅れていた。',
    action: '事業別の投下資本利益率を再計算し、二事業の譲渡と一事業の縮小を決定。浮いた資金を主力二事業の設備と人員に集中させた。',
    result: '三年で営業利益率 4.1% → 9.8%。譲渡益を除く実質ベースでも改善を確認。',
    meta: '支援期間 22か月 ／ 体制 5名',
  },
  {
    img: works2, alt: '店舗・売場の写真', order: 'image-first-reversed',
    kicker: 'Case 02 ／ 小売業・全国240店舗', title: '店舗業務の標準化とDX',
    issue: '発注と棚割の手順が店舗ごとに異なり、店長が事務作業に追われていた。',
    action: '十二店舗で工程を実測して標準手順を作成。既存の基幹システムに最小限の改修を加え、新規導入は一つに絞った。',
    result: '店舗事務作業を週11.5時間削減。欠品率は3.2%から1.4%へ低下。',
    meta: '支援期間 14か月 ／ 体制 4名',
  },
  {
    img: works3, alt: 'オフィス・会議の写真', order: 'text-first',
    kicker: 'Case 03 ／ 情報通信・従業員620名', title: '等級・評価制度の再設計',
    issue: '昇格基準が不明確で、中核人材の離職が三年続いていた。',
    action: '職種別に等級要件を明文化し、評価者研修を全管理職に実施。報酬レンジを市場水準に合わせて改定した。',
    result: '導入二年目で自己都合離職率 18% → 9%。管理職候補者数は1.7倍に。',
    meta: '支援期間 10か月 ／ 体制 3名',
  },
]

const PROJECTS = [
  ['2026', '医療法人', '複数拠点の間接業務のシェアード化', '業務改善'],
  ['2025', '物流', '配車計画の再設計とデータ基盤整備', 'DX'],
  ['2025', '製造（電子部品）', '海外子会社を含む管理会計の統一', '事業戦略'],
  ['2024', '情報通信', '等級・評価制度の再設計', '組織・人材'],
  ['2024', '小売', '店舗業務の標準化とDX', '業務改善・DX'],
  ['2023', '食品', '不採算商品の整理と価格改定', '事業戦略'],
  ['2022', '製造（産業機械）', '事業ポートフォリオの再編', '事業戦略'],
  ['2022', '建設', '基幹システム刷新のPMO', 'DX'],
]

const CLIENTS = [
  ['34', '製造', true],
  ['22', '小売・消費財', false],
  ['18', '情報通信', false],
  ['14', '物流・建設', false],
  ['12', '医療・その他', false],
]

function Figure({ img, alt, order }) {
  return (
    <figure className="plate" style={{ margin: 0, order: order === 'image-first-reversed' ? 2 : undefined }}>
      <img src={img} alt={alt} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover' }} />
    </figure>
  )
}

export default function Works() {
  return (
    <main data-screen-label="WORKS">
      <section style={{ background: 'var(--color-accent-900)', borderBottom: '1px solid var(--color-accent-800)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,72px) 64px' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-300)', margin: '0 0 28px' }}>Works ／ 支援実績</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.36, letterSpacing: '.04em', margin: 0, color: '#fff' }}>成果は、数字で報告する。</h1>
          <p style={{ fontSize: 16, lineHeight: 2.15, color: 'color-mix(in srgb,#fff 80%,transparent)', maxWidth: '44em', margin: '32px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            累計四百八十社を支援しました。以下は許諾をいただいた事例です。社名は非公開とし、業種・規模と実測値のみを掲載しています。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,5vw,72px)', display: 'grid', gap: 80 }}>
        {CASES.map((c, idx) => (
          <div key={c.title} style={{ display: 'contents' }}>
            <article style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '36px 56px', alignItems: 'start' }}>
              {c.order === 'image-first-reversed' ? (
                <>
                  <div style={{ order: 1 }}>
                    <CaseBody c={c} />
                  </div>
                  <Figure img={c.img} alt={c.alt} order={c.order} />
                </>
              ) : (
                <>
                  <Figure img={c.img} alt={c.alt} order={c.order} />
                  <div>
                    <CaseBody c={c} />
                  </div>
                </>
              )}
            </article>
            {idx < CASES.length - 1 && <hr style={{ height: 1, border: 0, margin: 0, background: 'var(--color-divider)' }} />}
          </div>
        ))}
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>Selected projects ／ 支援実績一覧</p>
          <table className="table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: 'left', whiteSpace: 'nowrap' }}>年</th>
                <th scope="col" style={{ textAlign: 'left' }}>業種</th>
                <th scope="col" style={{ textAlign: 'left' }}>テーマ</th>
                <th scope="col" style={{ textAlign: 'left' }}>領域</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>Clients ／ ご支援の内訳</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '36px 32px' }}>
            {CLIENTS.map(([pct, label, accent]) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 38, lineHeight: 1.05, fontFeatureSettings: "'tnum' 1,'lnum' 1", margin: 0, color: accent ? 'var(--color-accent)' : undefined }}>
                  {pct}<span style={{ fontSize: '.42em' }}>%</span>
                </p>
                <p style={{ fontSize: 12.5, letterSpacing: '.1em', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: '14px 0 0' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function CaseBody({ c }) {
  return (
    <>
      <p style={{ fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 18px', fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>{c.kicker}</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 30, lineHeight: 1.45, letterSpacing: '.04em', margin: 0 }}>{c.title}</h2>
      <dl style={{ display: 'grid', gap: 18, margin: '26px 0 0' }}>
        <div>
          <dt style={{ fontSize: 12, letterSpacing: '.14em', color: 'color-mix(in srgb,var(--color-text) 58%,transparent)', margin: '0 0 8px' }}>課題</dt>
          <dd style={{ margin: 0, fontSize: 15, lineHeight: 2.05, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', textAlign: 'justify', lineBreak: 'strict' }}>{c.issue}</dd>
        </div>
        <div>
          <dt style={{ fontSize: 12, letterSpacing: '.14em', color: 'color-mix(in srgb,var(--color-text) 58%,transparent)', margin: '0 0 8px' }}>施策</dt>
          <dd style={{ margin: 0, fontSize: 15, lineHeight: 2.05, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', textAlign: 'justify', lineBreak: 'strict' }}>{c.action}</dd>
        </div>
        <div>
          <dt style={{ fontSize: 12, letterSpacing: '.14em', color: 'color-mix(in srgb,var(--color-text) 58%,transparent)', margin: '0 0 8px' }}>成果</dt>
          <dd style={{ margin: 0, fontSize: 15, lineHeight: 2.05, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', textAlign: 'justify', lineBreak: 'strict' }}>{c.result}</dd>
        </div>
      </dl>
      <p style={{ fontSize: 13, letterSpacing: '.08em', color: 'var(--color-accent-700)', margin: '24px 0 0', fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>{c.meta}</p>
    </>
  )
}
