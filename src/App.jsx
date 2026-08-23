import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilesPage from './FilesPage';
import PhotoCarousel from './components/PhotoCarousel';
import './App.css';

// ---------- Нақты фотолар (тек сен растаған дәл жолдар) ----------
import heroPhoto from './Picters/Main entry/PHOTO-2026-08-21-15-24-40 2.jpg';
import streetPhoto from './Picters/in street/PHOTO-2026-08-21-15-24-40.jpg';
import atmospherePhoto from './Picters/Atmopshep sadik/photo_14_2026-08-23_09-27-14.jpg';
import inSadikPhoto from './Picters/In sadik/photo_1_2026-08-23_09-27-14.jpg';

import smallGroupDoor from './Picters/Small group/photo_19_2026-08-23_09-27-14.jpg';
import middleGroupDoor from './Picters/Middle group/photo_11_2026-08-23_09-27-14.jpg';
import bigGroupDoor from './Picters/Big group/photo_9_2026-08-23_09-27-14.jpg';
import maGroupDoor from './Picters/MA top/photo_5_2026-08-23_09-27-14.jpg';

// ---------- Галерея: «Ішкі бөлмелер» — In sadik папкасының барлық фотолары ----------
import inSadik1 from './Picters/In sadik/photo_1_2026-08-23_09-27-14.jpg';
import inSadik2 from './Picters/In sadik/photo_2_2026-08-23_09-27-14.jpg';
import inSadik3 from './Picters/In sadik/photo_3_2026-08-23_09-27-14.jpg';
import inSadik4 from './Picters/In sadik/photo_4_2026-08-23_09-27-14.jpg';
import inSadik6 from './Picters/In sadik/photo_6_2026-08-23_09-27-14.jpg';
import inSadik7 from './Picters/In sadik/photo_7_2026-08-23_09-27-14.jpg';
import inSadik8 from './Picters/In sadik/photo_8_2026-08-23_09-27-14.jpg';
import inSadik10 from './Picters/In sadik/photo_10_2026-08-23_09-27-14.jpg';
import inSadik12 from './Picters/In sadik/photo_12_2026-08-23_09-27-14.jpg';
import inSadik13 from './Picters/In sadik/photo_13_2026-08-23_09-27-14.jpg';
import inSadik15 from './Picters/In sadik/photo_15_2026-08-23_09-27-14.jpg';
import inSadik16 from './Picters/In sadik/photo_16_2026-08-23_09-27-14.jpg';
import inSadik17 from './Picters/In sadik/photo_17_2026-08-23_09-27-14.jpg';
import inSadik18 from './Picters/In sadik/photo_18_2026-08-23_09-27-14.jpg';

// ---------- Галерея: «Сырт келбеті» — in street папкасының фотолары ----------
import street1 from './Picters/in street/PHOTO-2026-08-21-15-24-40.jpg';
import street2 from './Picters/in street/PHOTO-2026-08-21-15-24-41.jpg';

const inSadikPhotos = [
  inSadik1, inSadik2, inSadik3, inSadik4, inSadik6, inSadik7, inSadik8,
  inSadik10, inSadik12, inSadik13, inSadik15, inSadik16, inSadik17, inSadik18,
];

const streetPhotos = [street1, street2];

export default function App() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Ата-аналар сенген бөбекжай</div>
            <h1>Сәбиіңіздің әр сәті <span className="crayon" style={{ color: 'var(--coral-dark)' }}>қуанышпен</span> өтетін ұя</h1>
            <p className="lead">«Нұрзат» бөбекжайы — нұрлы да ыңғайлы бөлмелер, дербес ойын аймақтары және қамқор тәрбиешілер ұжымы. Гигиеналық талаптарға толықтай сай, білікті мамандар қызмет көрсетеді.</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Танысу турына тіркелу</a>
              <a href="#about" className="btn btn-ghost">Көбірек ақпарат алу</a>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>4</b><span>жасқа лайықталған топ</span></div>
              <div className="stat"><b>100%</b><span>гигиеналық стандартқа сай</span></div>
              <div className="stat"><b>1</b><span>дербес дәрігерлік бөлме</span></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="blob blob-1"></div>
            <div className="hero-photo">
              <div className="ph" style={{ backgroundImage: `url(${heroPhoto})` }}></div>
            </div>
            <div className="float-card fc-1"><div className="ic">🧸</div>Дербес шкафтар</div>
            <div className="float-card fc-2"><div className="ic">☀️</div>Жылы әрі жарық бөлмелер</div>
            <div className="float-card fc-3"><div className="ic">🌳</div>Таза ауада демалыс</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div className="about-photo-grid">
            <div className="ph tall" style={{ backgroundImage: `url(${inSadikPhoto})` }}></div>
            <div className="ph" style={{ backgroundImage: `url(${streetPhoto})` }}></div>
            <div className="ph" style={{ backgroundImage: `url(${atmospherePhoto})` }}></div>
          </div>
          <div className="about-text">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Біз жайлы</div>
            <h2>Әр бөлме — нәрестеге арналған шағын әлем</h2>
            {/* Келес ауданы Ұшқын а/о Қоралас ауылы Еңбекші 140 */}
            <p>«Нұрзат» бөбекжайы Келес ауданы Ұшқын мекенінде орналасқан. Жас топтарының әрқайсысына бөлек киім ілу бөлмесі, ойын аймағы, ұйықтайтын бөлме мен санитарлық торап қарастырылған — топтар бір-бірінен толық оқшауланған.</p>
            <p>Едендерге қазіргі заманғы жылыту жүйесі орнатылған, терезелер қауіпсіздік бекіткіштерімен қамтамасыз етілген. Барлық жиһаз бен құрал-жабдық балалардың жасы мен бойына сай іріктелген.</p>
            <div className="about-facts">
              <div className="fact"><div className="ic">🛏️</div><div><b>Дербес төсек</b><span>әрбір бала үшін жеке тұрақты кереует</span></div></div>
              <div className="fact"><div className="ic">🧴</div><div><b>Гигиеналық талап</b><span>толық тексерістен өтті</span></div></div>
              <div className="fact"><div className="ic">🔥</div><div><b>Жылытылған еден</b><span>әр бөлмеде орнатылған</span></div></div>
              <div className="fact"><div className="ic">🪟</div><div><b>Күн сәулесі</b><span>күннен қорғайтын жүйемен қамтамасыз етілген</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPS SECTION */}
      <section className="groups" id="groups">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Топтар және бөлмелер</div>
            <h2>Нәрестеңізге арналған төрт жайлы топ</h2>
            <p>Әр топта дербес киім ілу, ойын және дамыту аймақтары қарастырылған.</p>
          </div>
          <div className="group-cards">
            <div className="gcard">
              <div className="gcard-photo" style={{ backgroundImage: `url(${smallGroupDoor})` }}></div>
              <div className="gcard-body">
                <div className="num">Кіші топ</div>
                <h3>«Байтерек» тобы</h3>
                <p>Кішкентай балаларға арналған жарық та жайлы бөлме.</p>
                <ul>
                  <li>Дербес ойын кеңістігі</li>
                  <li>Жарық та жылы бөлме</li>
                  <li>Әр түсті дамыту бұрышы</li>
                </ul>
              </div>
            </div>
            <div className="gcard">
              <div className="gcard-photo" style={{ backgroundImage: `url(${middleGroupDoor})` }}></div>
              <div className="gcard-body">
                <div className="num">Ортаңғы топ</div>
                <h3>«Балапан» тобы</h3>
                <p>Сөйлеу тілін дамыту мен шығармашылыққа лайықталған кең орын.</p>
                <ul>
                  <li>Сенсорлық дамыту бұрыштары</li>
                  <li>Дербес ойын үстелдері</li>
                  <li>Жарық безендірілген интерьер</li>
                </ul>
              </div>
            </div>
            <div className="gcard">
              <div className="gcard-photo" style={{ backgroundImage: `url(${bigGroupDoor})` }}></div>
              <div className="gcard-body">
                <div className="num">Үлкен топ</div>
                <h3>«Күншуақ» тобы</h3>
                <p>Үлкен топ балаларына арналған кең бөлме мен дербес шкафтар.</p>
                <ul>
                  <li>Дербес киім шкафы</li>
                  <li>Кең ойын әрі дамыту аймағы</li>
                  <li>Мектепке дайындықтың негізгі бағдарламасы</li>
                </ul>
              </div>
            </div>
            <div className="gcard">
              <div className="gcard-photo" style={{ backgroundImage: `url(${maGroupDoor})` }}></div>
              <div className="gcard-body">
                <div className="num">МА тобы</div>
                <h3>«Болашақ» тобы</h3>
                <p>Мектеп өміріне кешенді дайындық, сауаттылық пен есептің бастамасы.</p>
                <ul>
                  <li>Интерактивті білім беру құралдары</li>
                  <li>Тіл мен математиканың негізі</li>
                  <li>Жүйелі сабақ кестесі</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="adv-sec">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Неліктен бізді таңдайды</div>
            <h2>Ата-аналар нанатын төрт дәлел</h2>
          </div>
          <div className="adv-grid">
            <div className="adv"><div className="ic">🛡️</div><h4>Қауіпсіздік</h4><p>Терезелер мен электр құралдарына арнайы қорғаныс механизмдері орнатылған.</p></div>
            <div className="adv"><div className="ic">🎨</div><h4>Даму кеңістігі</h4><p>Әр бөлме ойын, шығармашылық пен демалысқа арналған бөліктерге бөлінген.</p></div>
            <div className="adv"><div className="ic">👩‍⚕️</div><h4>Медициналық қадағалау</h4><p>Жеке медбике кабинеті бар, денсаулық күн сайын тексеріледі.</p></div>
            <div className="adv"><div className="ic">🧼</div><h4>Тазалық және санитария</h4><p>Барлық бөлмелер гигиеналық ережелерге сай таза ұсталады.</p></div>
          </div>
        </div>
      </section>

      {/* DAY SCHEDULE */}
      <section className="day" id="day">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px', alignItems: 'flex-start' }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">Күнделікті режим</div>
            <h2>Нәрестеңіздің күні қалай жоспарланады</h2>
            <p>Ойын, тамақтану, ұйқы және спорт — барлығы үйлесімді реттелген.</p>
          </div>
          <div className="timeline">
            <div className="titem"><b className="time">08:00 — Қабылдау</b><p>Балаларды ыстық ықыласпен қарсы алу, таңертеңгі жаттығу</p></div>
            <div className="titem"><b className="time">09:00 — Таңғы ас</b><p>Дәмді де пайдалы таңғы ас</p></div>
            <div className="titem"><b className="time">09:30 — Сабақ пен ойын</b><p>Дамытушы сабақтар, шығармашылық іс-әрекеттер</p></div>
            <div className="titem"><b className="time">11:30 — Серуен</b><p>Ашық алаңда белсенді қимыл ойындары</p></div>
            <div className="titem"><b className="time">13:00 — Түскі ас пен ұйқы</b><p>Дербес төсекте тыныш дем алу сәті</p></div>
            <div className="titem"><b className="time">16:00 — Бесін ас, еркін ойын</b><p>Ата-ана келгенше еркін ойнау, үйге қайту</p></div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery" id="gallery">
        <div className="wrap">
          <div className="section-head center" style={{ margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ margin: '0 auto 16px', display: 'inline-flex' }}>Суреттер топтамасы</div>
            <h2>Бөбекжайымыздың ішкі көрінісі</h2>
            <p>Экранды сырғытып шолыңыз — сырт келбетінен бастап ішкі бөлмелерге дейін.</p>
          </div>

          <PhotoCarousel title="Сырт келбеті" photos={streetPhotos} />
          <PhotoCarousel title="Ішкі бөлмелер" photos={inSadikPhotos} />
          <PhotoCarousel title="Көңіл-күй сәттері" photos={[atmospherePhoto]} />
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section>
        <div className="wrap">
          <div className="cta">
            <h2>Нәрестеңізді бүгіннен «Нұрзатпен» таныстырыңыз</h2>
            <p>Орындар шектеулі — турға алдын ала тіркеліңіз.</p>
            <a href="#contact" className="btn btn-ghost" style={{ color: 'var(--coral-dark)' }}>Хабарласу</a>
          </div>
        </div>
      </section>

      {/* CONTACTS & MAP */}
      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <div className="ccard">
            <div className="eyebrow" style={{ background: 'var(--cream)' }}>Байланыс</div>
            <h2 style={{ margin: '16px 0 24px', fontSize: '28px' }}>Бізге хабарласыңыз</h2>
            <div className="crow"><div className="ic">📍</div><div><b>Мекенжай</b><span>Келес ауданы Ұшқын а/о Қоралас ауылы Еңбекші 140</span></div></div>
            <div className="crow"><div className="ic">📞</div><div><b>Телефон</b><br /><a href="tel:+77054849891">+7 (705) 484-98-91 </a></div></div>
            <div className="crow"><div className="ic">🕗</div><div><b>Жұмыс уақыты</b><span>Дүйсенбі – Жұма, 08:00 – 18:00</span></div></div>
          </div>
          <a
            className="map-box"
            href="https://maps.app.goo.gl/g1YMC4VU2WcoQDaR7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Мекенжайды Google картасынан қарау"
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
              Картаны көру үшін басыңыз
            </span>
          </a>
        </div>
      </section>

      {/* ҚҰЖАТТАР */}
      <section id="trust">
        <FilesPage />
      </section>

      <Footer />
    </>
  );
}