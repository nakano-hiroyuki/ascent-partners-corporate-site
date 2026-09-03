import { Link } from 'react-router-dom'
import ceoPhoto from '../assets/about-ceo.webp'

const VALUES = [
  { title: '現場から始める', body: '仮説の前に実測。初月は必ず現場に入り、自分の目で工程と数字を確かめます。' },
  { title: 'やめる案を必ず出す', body: '追加ではなく削減から。撤退・停止の選択肢を含まない提案は社内審査を通しません。' },
  { title: '引き継いで去る', body: '依存させません。運用の担い手を社内に育て、手順書を残して撤収します。' },
]

const HISTORY = [
  { year: '2009', text: '東京・丸の内にて創業。製造業向けの事業戦略支援から開始。社員4名。' },
  { year: '2012', text: '組織・人材コンサルティング部門を設置。累計支援企業50社に到達。' },
  { year: '2015', text: '大阪オフィスを開設。関西の中堅製造業向け支援を本格化。' },
  { year: '2018', text: 'デジタル部門を新設。業務改善とシステム導入を一体で提供する体制へ。' },
  { year: '2021', text: '実行支援（PMO常駐）サービスを開始。社員200名を超える。' },
  { year: '2024', text: '名古屋・福岡に拠点を開設。研究部門「アセント経営研究室」を設立。' },
  { year: '2026', text: '累計支援企業480社。社員320名。' },
]

const PROFILE = [
  ['商号', '株式会社アセントパートナーズ（Ascent Partners, Inc.）', false],
  ['設立', '2009年5月18日', true],
  ['代表者', '代表取締役　庄司 直人', false],
  ['資本金', '4億8,000万円', true],
  ['売上高', '92億4,000万円（2026年3月期）', true],
  ['社員数', '320名（2026年4月現在／うちコンサルタント248名）', true],
  ['本社', '東京都千代田区丸の内一丁目9番2号　丸の内三葉ビル 14階', false],
  ['拠点', '東京（本社）・大阪・名古屋・福岡', false],
  ['事業内容', '経営コンサルティング（事業戦略、組織・人材、業務改善、DX）、実行支援、経営調査・研究', false],
  ['主要取引先業種', '製造・小売・情報通信・物流・医療法人', false],
]

export default function About() {
  return (
    <main data-screen-label="ABOUT">
      <section style={{ background: 'var(--color-accent-900)', borderBottom: '1px solid var(--color-accent-800)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,72px) 64px' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-300)', margin: '0 0 28px' }}>About ／ 会社について</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(30px,4.2vw,58px)', lineHeight: 1.36, letterSpacing: '.04em', margin: 0, color: '#fff' }}>分析で終わらない会社をつくる。</h1>
          <p style={{ fontSize: 16, lineHeight: 2.15, color: 'color-mix(in srgb,#fff 80%,transparent)', maxWidth: '44em', margin: '32px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            二〇〇九年、四名で創業しました。提言書を納めて終わる仕事ではなく、決定と実行に立ち会う仕事をするという一点で集まった会社です。
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,5vw,72px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px 64px', alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 24px' }}>Message ／ 代表メッセージ</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(23px,2.6vw,32px)', lineHeight: 1.5, letterSpacing: '.04em', margin: 0 }}>決めるのは、経営者です。</h2>
          <p style={{ fontSize: 15.5, lineHeight: 2.15, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', margin: '28px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            コンサルタントの仕事は、決定を代わりに行うことではありません。判断に必要な材料を、判断できる形で揃えることです。当社は数字と現場の両方から材料を集めます。工場に立ち、店舗に入り、伝票を数えます。会議室だけで完結する提案には署名しません。
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 2.15, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', margin: '24px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
            支援した企業のうち九割超が、次の課題でも当社を選んでくださっています。この数字だけを、私たちは品質の指標としています。
          </p>
          <p style={{ fontSize: 14, lineHeight: 2, margin: '32px 0 0', color: 'color-mix(in srgb,var(--color-text) 70%,transparent)' }}>
            株式会社アセントパートナーズ<br />代表取締役　庄司 直人
          </p>
        </div>
        <figure className="plate" style={{ margin: 0 }}>
          <img src={ceoPhoto} alt="代表者の肖像写真" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
        </figure>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 44px' }}>Values ／ 行動の基準</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 48 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 26 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 22, letterSpacing: '.04em', margin: 0 }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 2.05, color: 'color-mix(in srgb,var(--color-text) 80%,transparent)', margin: '18px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,5vw,72px)' }}>
        <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>History ／ 沿革</p>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--color-divider)' }}>
          {HISTORY.map((h) => (
            <li key={h.year} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,6em) 1fr', gap: '6px 40px', padding: '24px 0', borderBottom: '1px solid var(--color-divider)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 21, fontFeatureSettings: "'tnum' 1,'lnum' 1", color: 'var(--color-accent-700)' }}>{h.year}</span>
              <span style={{ fontSize: 15.5, lineHeight: 2 }}>{h.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ background: 'var(--color-surface)', borderBlock: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px clamp(20px,5vw,72px)' }}>
          <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>Profile ／ 会社概要</p>
          <table className="table" style={{ width: '100%' }}>
            <tbody>
              {PROFILE.map(([label, value, tnum]) => (
                <tr key={label}>
                  <th scope="row" style={{ width: '13em', textAlign: 'left', fontWeight: 500, whiteSpace: 'nowrap' }}>{label}</th>
                  <td style={tnum ? { fontFeatureSettings: "'tnum' 1,'lnum' 1" } : undefined}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px clamp(20px,5vw,72px) 96px' }}>
        <p style={{ fontSize: 11.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 40px' }}>Recruit ／ 採用情報</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px 64px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(23px,2.6vw,32px)', lineHeight: 1.5, letterSpacing: '.04em', margin: 0 }}>問いを立てられる人と、働きたい。</h2>
            <p style={{ fontSize: 15.5, lineHeight: 2.15, color: 'color-mix(in srgb,var(--color-text) 84%,transparent)', margin: '26px 0 0', textAlign: 'justify', lineBreak: 'strict' }}>
              新卒・キャリアともに通年採用です。コンサルティング経験は不要で、現在の社員の六割は事業会社の出身です。選考は面談三回と現場同行一日。入社後三か月は先輩と同一案件に入ります。
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', marginTop: 32 }}>
              <Link to="/contact" className="btn btn-primary">応募・カジュアル面談</Link>
            </div>
          </div>
          <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px 32px', margin: 0, fontSize: 14.5, lineHeight: 1.9, borderTop: '1px solid var(--color-divider)', paddingTop: 24 }}>
            <dt style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>募集職種</dt><dd style={{ margin: 0 }}>コンサルタント（戦略／組織／業務／デジタル）、コーポレート</dd>
            <dt style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>勤務地</dt><dd style={{ margin: 0 }}>東京・大阪・名古屋・福岡（リモート併用）</dd>
            <dt style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>2027年度予定</dt><dd style={{ margin: 0, fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>20名程度</dd>
            <dt style={{ color: 'color-mix(in srgb,var(--color-text) 60%,transparent)' }}>平均在籍年数</dt><dd style={{ margin: 0, fontFeatureSettings: "'tnum' 1,'lnum' 1" }}>6.8年</dd>
          </dl>
        </div>
      </section>
    </main>
  )
}
