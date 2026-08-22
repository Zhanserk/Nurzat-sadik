import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#" className="logo">
          <div className="logo-mark">Н</div>
          Нұрзат
        </a>

        <nav className={`links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="#about" onClick={() => setIsOpen(false)}>Біз туралы</a>
          <a href="#groups" onClick={() => setIsOpen(false)}>Топтар</a>
          <a href="#day" onClick={() => setIsOpen(false)}>Күн тәртібі</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Галерея</a>
          <a href="#trust" onClick={() => setIsOpen(false)}>Құжаттар</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Байланыс</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="#contact" className="btn btn-primary">Өтінім қалдыру</a>
          <button className="menu-toggle" id="menuBtn" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>
    </header>
  );
}