import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.7)', padding: '40px 0' }}>
      <div className="wrap foot-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13.5px', fontWeight: 700 }}>
        <div className="logo" style={{ color: '#fff', fontFamily: "'Baloo 2'", fontWeight: 800, fontSize: '22px' }}>Нұрзат</div>
        <div>© {new Date().getFullYear()} «Нұрзат» бөбекжай балабақшасы. Барлық құқықтар қорғалған.</div>
      </div>
    </footer>
  );
}