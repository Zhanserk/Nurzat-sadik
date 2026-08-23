import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilesPage from './FilesPage';
import './App.css';

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Сенімді балабақша</div>
            <h1>Балаңыздың күні <span className="crayon" style={{ color: 'var(--coral-dark)' }}>күлкіге</span> толы өтетін мекен</h1>
            <p className="lead">«Нұрзат» бөбекжай балабақшасы — жарық, жайлы бөлмелер, жеке ойын алаңдары және мейірімді тәрбиешілер. Санитарлық нормаларға толық сай, білікті ұстаздар ұжымы.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Экскурсияға жазылу</a>
              <a href="#about" className="btn btn-ghost">Толығырақ білу</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>4</b><span>жас ерекшелігіне сай топ</span></div>
              <div className="stat"><b>100%</b><span>санитарлық нормаларға сай</span></div>
              <div className="stat"><b>1</b><span>жеке медбике кабинеті</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="blob blob-1"></div>
            <div className="hero-photo">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587616211892-b3b7e63a6da4?q=80&w=800&auto=format&fit=crop')" }}></div>
            </div>
            <div className="float-card fc-1"><div className="ic">🧸</div>Жеке шкафшалар</div>
            <div className="float-card fc-2"><div className="ic">☀️</div>Жарық, жылы бөлмелер</div>
            <div className="float-card fc-3"><div className="ic">🌳</div>Ашық ауада серуен</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo-grid">
            <div className="ph tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
          <div className="about-text">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Біз туралы</div>
            <h2>Әрбір бөлме — балаға арналған кішкентай әлем</h2>
            {/* TODO: нақты мекенжайды осында жаз */}
            <p>«Нұрзат» бөбекжай балабақшасы [мекенжайды осында жаз] орналасқан. Әрбір жас тобына арнайы бөлінген киім шешетін бөлме, ойын бөлмесі, жатын бөлмесі және дәретхана бар — әр топ бір-бірінен оқшауланған.</p>
            <p>Едендер заманауи жылыту жүйесімен жабдықталған, терезелер қауіпсіздік құрылғыларымен қамтамасыз етілген. Барлық жиһаз бен жабдық балалардың бой-жас ерекшеліктеріне сай таңдалған.</p>
            <div className="about-facts">
              <div className="fact"><div className="ic">🛏️</div><div><b>Жеке кереует</b><span>әр балаға жеке стационарлық кереует</span></div></div>
              <div className="fact"><div className="ic">🧴</div><div><b>Санитарлық норма</b><span>тексеруден толық өтті</span></div></div>
              <div className="fact"><div className="ic">🔥</div><div><b>Жылы едендер</b><span>барлық бөлмелерде</span></div></div>
              <div className="fact"><div className="ic">🪟</div><div><b>Табиғи жарық</b><span>күннен қорғау жүйесімен</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS SECTION */}
      <section className="groups" id="groups">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Топтар мен бөлмелер</div>
            <h2>Балаңызға жайлы төрт топ</h2>
            <p>Әр топта жеке киім шешетін, ойын және дамыту аймақтары жоспарланған.</p>
          </div>
          <div className="group-cards">
            <div className="gcard">
              <div className="num">Кіші топ</div>
              <h3>«Байтерек» тобы</h3>
              <p>Кіші жастағы балаларға арналған жарық, жайлы бөлме.</p>
              <ul>
                <li>Жеке ойын аймағы</li>
                <li>Жарық, жылы бөлме</li>
                <li>Түрлі-түсті дамыту бұрышы</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Ортаңғы топ</div>
              <h3>«Балапан» тобы</h3>
              <p>Тіл дамыту мен шығармашылыққа арналған кең кеңістік.</p>
              <ul>
                <li>Дамыту-сенсорлық бұрыштар</li>
                <li>Жеке ойын үстелдері</li>
                <li>Жарық интерьер</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">Үлкен топ</div>
              <h3>«Күншуақ» тобы</h3>
              <p>Ересек топ балаларына арналған кең бөлме, жеке шкафтар.</p>
              <ul>
                <li>Жеке киім шкафтары</li>
                <li>Кең ойын-дамыту кеңістігі</li>
                <li>Мектепке дайындық негіздері</li>
              </ul>
            </div>
            <div className="gcard">
              <div className="num">МА тобы</div>
              <h3>«Болашақ» тобы</h3>
              <p>Мектеп өміріне толыққанды дайындық, сауат ашу мен есеп негіздері.</p>
              <ul>
                <li>Интерактивті оқыту құралдары</li>
                <li>Тілдік және математикалық база</li>
                <li>Дәйекті оқу кестесі</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Неге бізді таңдайды</div>
            <h2>Ата-аналар сенетін төрт себеп</h2>
          </div>
          <div className="adv-grid">
            <div className="adv"><div className="ic">🛡️</div><h4>Қауіпсіздік</h4><p>Терезелер мен жарықтандыру құралдарында арнайы қоршау жүйелері орнатылған.</p></div>
            <div className="adv"><div className="ic">🎨</div><h4>Дамыту ортасы</h4><p>Әр бөлме ойын, шығармашылық және демалуға арналған аймақтарға бөлінген.</p></div>
            <div className="adv"><div className="ic">👩‍⚕️</div><h4>Медициналық бақылау</h4><p>Арнайы медбике бөлмесі және күнделікті денсаулық тексеруі.</p></div>
            <div className="adv"><div className="ic">🧼</div><h4>Тазалық пен гигиена</h4><p>Барлық үй-жайлар санитарлық қағидаларға толық сәйкес ұсталады.</p></div>
          </div>
        </div>
      </section>

      {/* TIMELINE / DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Күн тәртібі</div>
            <h2>Балаңыздың бір күні қалай өтеді</h2>
            <p>Ойын, тамақтану, ұйқы және дене шынықтыру — барлығы теңгерімді жоспарланған.</p>
          </div>
          <div className="timeline">
            <div className="titem"><b className="time">08:00 — Қабылдау</b><p>Балаларды жылы қарсы алу, таңғы жаттығу</p></div>
            <div className="titem"><b className="time">09:00 — Таңғы ас</b><p>Дәмді әрі пайдалы таңғы ас</p></div>
            <div className="titem"><b className="time">09:30 — Сабақ пен ойын</b><p>Дамыту сабақтары, шығармашылық жұмыстар</p></div>
            <div className="titem"><b className="time">11:30 — Серуен</b><p>Ашық аулада белсенді қозғалыс ойындары</p></div>
            <div className="titem"><b className="time">13:00 — Түскі ас пен ұйқы</b><p>Жеке кереуеттерде тыныш демалыс уақыты</p></div>
            <div className="titem"><b className="time">16:00 — Бесін ас, еркін ойын</b><p>Ата-аналарды күту, үйге қайту</p></div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery" id="gallery">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Галерея</div>
            <h2>Балабақшамыздың ішінен</h2>
            <p>Жарық ойын бөлмелерінен бастап ашық ауадағы алаңға дейін.</p>
          </div>
          {/* TODO: осы төмендегі суреттерді балабақшаның нақты фотолорымен ауыстыр */}
          <div className="gal-grid">
            <div className="g-item g-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587616211892-b3b7e63a6da4?q=80&w=900&auto=format&fit=crop')" }}><span>Ойын бөлмесі</span></div>
            <div className="g-item g-tall" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=700&auto=format&fit=crop')" }}><span>Жатын бөлмесі</span></div>
            <div className="g-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=700&auto=format&fit=crop')" }}><span>Санитарлық бөлме</span></div>
            <div className="g-item" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=700&auto=format&fit=crop')" }}><span>Аула</span></div>
            <div className="g-item g-wide" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560932684-5e552e2372da?q=80&w=900&auto=format&fit=crop')" }}><span>Ойын алаңы</span></div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section>
        <div className="wrap">
          <div className="cta">
            <h2>Балаңызды бүгін «Нұрзатпен» таныстырыңыз</h2>
            <p>Орын саны шектеулі — экскурсияға алдын ала жазылыңыз.</p>
            <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--coral-dark)' }}>Байланысу</a>
          </div>
        </div>
      </section>

      {/* CONTACTS & MAP */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="ccard">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Байланыс</div>
            <h2 style={{ margin: '16px 0 24px', fontSize: '28px' }}>Бізбен хабарласыңыз</h2>
            {/* TODO: нақты мекенжай, телефон, email қой */}
            <div className="crow"><div className="ic">📍</div><div><b>Мекенжай</b><span>Келес ауданы Ұшқын а/о Қоралас ауылы Еңбекші 140</span></div></div>
            <div className="crow"><div className="ic">📞</div><div><b>Телефон</b><br /><a href="tel:+77054849891">+7 (705) 484-98-91 </a></div></div>
            <div className="crow"><div className="ic">🕗</div><div><b>Жұмыс уақыты</b><span>Дүйсенбі – Жұма, 08:00 – 18:00</span></div></div>
          </div>
          <a
            className="map-box"
            href="https://maps.app.goo.gl/g1YMC4VU2WcoQDaR7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Мекенжайды Google Картадан ашу"
          >
            <iframe
              className="map-iframe"
              title="Нұрзат балабақшасының орналасқан жері"
              src="https://maps.google.com/maps?q=%D0%9A%D0%B5%D0%BB%D0%B5%D1%81+%D0%B0%D1%83%D0%B4%D0%B0%D0%BD%D1%8B+%D2%B0%D1%88%D2%9B%D1%8B%D0%BD+%D0%B0%2Fo+%D2%9A%D0%BE%D1%80%D0%B0%D0%BB%D0%B0%D1%81+%D0%B0%D1%83%D1%8B%D0%BB%D1%8B+%D0%95%D2%A3%D0%B1%D0%B5%D0%BA%D1%88%D1%96+140&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="map-overlay">
              <span className="map-pin">📍</span>
              Картаны ашу үшін басыңыз
            </span>
          </a>
        </div>
      </section>

      {/* ҚҰЖАТТАР — толық архив, іздеу мен сүзгілермен бірге, тікелей осында */}
      <section id="trust">
        <FilesPage />
      </section>

      <Footer />
    </>
  );
}