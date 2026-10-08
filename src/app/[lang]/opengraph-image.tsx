import { ImageResponse } from 'next/og'

export const alt = 'Innovial Shift, code migration with reviewable changes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage({ params }: { params: { lang: 'en' | 'id' } }) {
  const english = params.lang === 'en'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0F172A',
          color: '#FFFFFF',
          padding: '68px 76px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 12, height: 42, background: '#3B82F6' }} />
          <span>INNOVIAL</span>
          <span style={{ color: '#93C5FD', fontWeight: 400 }}>SHIFT</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 1000 }}>
          <div style={{ fontSize: 66, lineHeight: 1.08, fontWeight: 700 }}>
            {english ? 'Code migration, reviewed in small changes.' : 'Migrasi kode, ditinjau dalam perubahan kecil.'}
          </div>
          <div style={{ fontSize: 27, lineHeight: 1.35, color: '#CBD5E1' }}>
            {english ? 'Repository context · Migration planning · Project checks' : 'Konteks repository · Rencana migrasi · Pemeriksaan proyek'}
          </div>
        </div>
        <div style={{ fontSize: 22, color: '#93C5FD' }}>shift.innovial.tech</div>
      </div>
    ),
    { ...size },
  )
}
