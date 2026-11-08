import { contact, images, zones, partyThemes, mapFloors } from './data.js'

function zoneChapter(zone, index) {
  return `
    <article class="zone zone--${zone.layout} zone--${zone.accent}" id="${zone.id}" data-reveal>
      <div class="zone__media">
        <img src="${zone.image}" alt="${zone.name}" loading="lazy" width="1400" height="900" />
        <span class="zone__floor">этаж ${zone.floor}</span>
      </div>
      <div class="zone__copy">
        <p class="zone__index">остров ${String(index + 1).padStart(2, '0')}</p>
        <h3>${zone.name}</h3>
        <p>${zone.lead}</p>
        <a class="text-link" href="#map">← к карте</a>
      </div>
    </article>
  `
}

export function renderApp(root) {
  root.innerHTML = `
    <a class="skip-link" href="#map">К карте острова</a>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="Островок радости Дизарди">
        <span class="brand__mark" aria-hidden="true"></span>
        <span class="brand__text">
          <strong>Островок радости</strong>
          <em>Дизарди</em>
        </span>
      </a>
      <nav class="nav" aria-label="Основная">
        <a href="#map">Карта</a>
        <a href="#zones">Зоны</a>
        <a href="#parties">Праздники</a>
        <a href="#parents">Кафе</a>
        <a href="#dock">Контакты</a>
      </nav>
      <a class="header-phone" href="${contact.phoneHref}">${contact.phoneDisplay}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Меню">
        <span></span><span></span>
      </button>
    </header>

    <div class="mobile-nav" id="mobile-nav" hidden>
      <a href="#map">Карта</a>
      <a href="#zones">Зоны</a>
      <a href="#parties">Праздники</a>
      <a href="#parents">Кафе</a>
      <a href="#dock">Контакты</a>
      <a class="btn btn--coral" href="${contact.whatsapp}" target="_blank" rel="noopener">Написать в WhatsApp</a>
    </div>

    <main id="top">
      <section class="hero" aria-label="Прибытие на остров">
        <div class="hero__visual">
          <img src="${images.hero}" alt="Дети в игровом пространстве" width="2000" height="1200" fetchpriority="high" />
          <div class="hero__veil" aria-hidden="true"></div>
        </div>
        <div class="hero__content">
          <p class="hero__place">${contact.city} · ТЦ «Мар»</p>
          <h1 class="hero__brand">Островок<br />радости</h1>
          <p class="hero__lead">Два этажа игры — и отдельный берег для детских праздников.</p>
          <div class="hero__cta">
            <a class="btn btn--coral" href="#parties">Забронировать праздник</a>
            <a class="btn btn--ghost" href="#map">Смотреть зоны</a>
          </div>
        </div>
      </section>

      <section class="map-section" id="map" aria-labelledby="map-title">
        <div class="section-head">
          <p class="eyebrow">карта острова</p>
          <h2 id="map-title">Выберите берег</h2>
          <p class="section-lead">Два яруса в ТЦ «Мар». Нажмите фото зоны — перейдёте к ней.</p>
        </div>

        <div class="shore-nav" data-island-map>
          ${mapFloors
            .map(
              (floor) => `
            <div class="shore-nav__floor" data-floor="${floor.floor}">
              <p class="shore-nav__label">${floor.label}</p>
              <div class="shore-nav__rail" role="list">
                ${floor.stops
                  .map((stop) => {
                    const tag = stop.href ? 'a' : 'button'
                    const attrs = stop.href
                      ? `href="${stop.href}"`
                      : `type="button" data-target="${stop.id}"`
                    return `
                  <${tag}
                    class="shore-chip shore-chip--${stop.accent}"
                    ${attrs}
                    role="listitem"
                    aria-label="${stop.name}, ${floor.label}"
                  >
                    <img src="${stop.image}" alt="" loading="lazy" width="640" height="480" />
                    <span class="shore-chip__veil" aria-hidden="true"></span>
                    <span class="shore-chip__name">${stop.name}</span>
                  </${tag}>
                `
                  })
                  .join('')}
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </section>

      <section class="zones" id="zones" aria-labelledby="zones-title">
        <div class="section-head section-head--inline">
          <p class="eyebrow">архипелаг</p>
          <h2 id="zones-title">Зоны острова</h2>
        </div>
        <div class="zones__stream">
          ${zones.map((z, i) => zoneChapter(z, i)).join('')}
        </div>
      </section>

      <section class="parties" id="parties" aria-labelledby="parties-title">
        <div class="parties__stage">
          <img src="${images.party}" alt="Детский праздник" loading="lazy" width="1600" height="1000" />
          <div class="parties__veil" aria-hidden="true"></div>
          <div class="parties__intro" data-reveal>
            <p class="eyebrow eyebrow--light">пирс праздников</p>
            <h2 id="parties-title">День рождения на острове</h2>
            <p>Тематические программы с аниматорами — как в витрине VK. Напишите дату — подскажем формат.</p>
            <div class="parties__cta">
              <a class="btn btn--sun" href="${contact.whatsapp}" target="_blank" rel="noopener">Написать дату в WhatsApp</a>
              <a class="btn btn--ghost-light" href="${contact.phoneHref}">Позвонить</a>
            </div>
          </div>
        </div>

        <div class="theme-parade" aria-label="Темы праздников" data-reveal>
          <div class="theme-parade__track">
            ${[...partyThemes, ...partyThemes]
              .map(
                (t) => `
              <figure class="theme-ticket">
                <img src="${t.image}" alt="" loading="lazy" width="333" height="400" />
                <figcaption>${t.name}</figcaption>
              </figure>
            `,
              )
              .join('')}
          </div>
        </div>

        <div class="banquet" data-reveal>
          <p class="banquet__label">банкетный зал</p>
          <p class="banquet__number">${contact.banquet}</p>
          <p class="banquet__unit">мест</p>
          <p class="banquet__note">Для больших семейных и детских застолий на острове.</p>
        </div>
      </section>

      <section class="parents" id="parents" aria-labelledby="parents-title">
        <div class="parents__grid" data-reveal>
          <div class="parents__copy">
            <p class="eyebrow">берег родителей</p>
            <h2 id="parents-title">Пока дети на острове</h2>
            <p>Кафе рядом с игровыми зонами: пока дети на острове, взрослые могут передохнуть и перекусить.</p>
            <ul class="parents__facts">
              <li>${contact.hours}</li>
              <li>${contact.address}</li>
              <li>${contact.city}</li>
            </ul>
          </div>
          <div class="parents__media">
            <img src="${images.cafe}" alt="Кафе в центре" loading="lazy" width="1400" height="900" />
          </div>
        </div>
      </section>

      <section class="compass" id="compass" aria-labelledby="compass-title">
        <div class="compass__inner" data-reveal>
          <h2 id="compass-title" class="visually-hidden">Как добраться</h2>
          <div class="compass__item">
            <span>Когда</span>
            <strong>${contact.hours}</strong>
          </div>
          <div class="compass__item">
            <span>Где</span>
            <strong>ТЦ «Мар», 2–3 этаж</strong>
          </div>
          <div class="compass__item">
            <span>Связь</span>
            <strong><a href="${contact.phoneHref}">${contact.phoneDisplay}</a></strong>
          </div>
        </div>
      </section>

      <section class="gallery" aria-label="Атмосфера">
        <div class="gallery__rail">
          ${images.gallery
            .map(
              (src, i) => `
            <figure class="gallery__shot" data-reveal>
              <img src="${src}" alt="Атмосфера острова ${i + 1}" loading="lazy" width="900" height="700" />
            </figure>
          `,
            )
            .join('')}
        </div>
        <p class="gallery__note">Кадры из вашего VK и отзывов на Яндекс Картах.</p>
      </section>

      <section class="dock" id="dock" aria-labelledby="dock-title">
        <div class="dock__panel" data-reveal>
          <p class="eyebrow">причал</p>
          <h2 id="dock-title">Приплывайте на островок</h2>
          <p class="dock__address">${contact.address}<br />${contact.city}</p>
          <div class="dock__actions">
            <a class="btn btn--coral" href="${contact.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
            <a class="btn btn--teal" href="${contact.phoneHref}">Позвонить</a>
          </div>
          <div class="dock__social">
            <a href="${contact.vk}" target="_blank" rel="noopener">ВКонтакте</a>
            <a href="${contact.telegram}" target="_blank" rel="noopener">Telegram</a>
          </div>
        </div>
        <div class="dock__map" data-reveal>
          <iframe
            title="Карта: Островок радости Дизарди"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://yandex.ru/map-widget/v1/?ll=44.209443%2C43.139269&z=16&pt=44.209443%2C43.139269%2Cpm2rdm&l=map"
          ></iframe>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p><strong>Островок радости Дизарди</strong></p>
      <p>${contact.city} · ${contact.hours}</p>
      <p><a href="${contact.phoneHref}">${contact.phoneDisplay}</a></p>
    </footer>
  `

  const toggle = root.querySelector('.nav-toggle')
  const mobileNav = root.querySelector('#mobile-nav')
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    mobileNav.hidden = open
  })
  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false')
      mobileNav.hidden = true
    })
  })
}
