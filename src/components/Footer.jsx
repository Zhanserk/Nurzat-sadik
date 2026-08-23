import React from 'react';

const NAV = [
  { label: 'Біз туралы', href: '#about' },
  { label: 'Топтар', href: '#groups' },
  { label: 'Күн тәртібі', href: '#day' },
  { label: 'Құжаттар', href: '#trust' },
  { label: 'Байланыс', href: '#contact' },
];

const SOCIAL = [
  { label: 'WhatsApp', href: 'https://wa.me/77054849891', ic: 'WhatsApp  : +7 (705) 484-98-91' },
];

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ color: '#fff', marginBottom: '16px' }}>
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 44 44" width="24" height="24">
                  <circle cx="22" cy="24" r="15" fill="#FFEFD9" />
                  <path d="M22 8c3 0 5 2.4 5 5.4 0 2-1.2 3.3-2.6 4.2 1.7.2 3 .9 3 2-1.8 1-3.6.2-5.4.2s-3.6.8-5.4-.2c0-1.1 1.3-1.8 3-2-1.4-.9-2.6-2.2-2.6-4.2C17 10.4 19 8 22 8z" fill="#FFB800" />
                  <circle cx="18.5" cy="25" r="2" fill="#2B2640" />
                  <circle cx="25.5" cy="25" r="2" fill="#2B2640" />
                  <path d="M22 24l3.2 1.4-3.2 1.4z" fill="#E85A30" />
                </svg>
              </span>
              <span>Ер-Талғат</span>
            </a>
            <p>ЖШС «Нұрзат» бөбекжай балабақшасы — Қоралас ауылыңдағы жарық та жайлы, мейірімді балабақша.</p>
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.ic}
                </a>
              ))}
            </div>
          </div>



          <div className="footer-col">
            <h5>Байланыс</h5>
            <a href="tel:+77054849891">+7 (705) 484-98-91</a>
  
            <span style={{ display: 'block', marginTop: '10px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 600 }}>
              Дс–Жм, 08:00–18:00
            </span>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ЖШС «Нұрзат»» бөбекжай балабақшасы. Барлық құқықтар қорғалған.</span>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Жоғарыға ↑
          </a>
        </div>
      </div>
    </footer>
  );
}