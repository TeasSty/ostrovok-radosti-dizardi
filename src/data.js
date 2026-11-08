const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const contact = {
  phoneDisplay: '+7 928 343-72-07',
  phoneHref: 'tel:+79283437207',
  whatsapp: 'https://wa.me/79283437207',
  address: 'пр. 22 Партсъезда 9/1, ТЦ «Мар», 2–3 этаж',
  city: 'Минеральные Воды',
  hours: 'ежедневно 10:00–22:00',
  vk: 'https://vk.ru/ostrovok_radosti_dizardi',
  telegram: 'https://t.me/ostrovok_radosti_dizardi',
  banquet: 280,
}

/** Client media from VK + Yandex Maps org gallery */
export const images = {
  hero: asset('media/hero.jpg'),
  trampoline: asset('media/zones/trampolines.jpg'),
  slides: asset('media/zones/slides.jpg'),
  interactive: asset('media/zones/interactive.jpg'),
  maze: asset('media/zones/maze.jpg'),
  cafe: asset('media/cafe.jpg'),
  party: asset('media/party.jpg'),
  gallery: [
    asset('media/gallery/brand-wall.jpg'),
    asset('media/gallery/interactive-space.jpg'),
    asset('media/gallery/koi.jpg'),
    asset('media/gallery/bowling.jpg'),
  ],
}

export const zones = [
  {
    id: 'trampolines',
    floor: 2,
    name: 'Батутный берег',
    lead: 'Прыжки, разгон и «ещё один круг» — пока родители пьют чай.',
    image: images.trampoline,
    mapImage: asset('media/map/trampolines.jpg'),
    accent: 'coral',
    layout: 'wide-left',
  },
  {
    id: 'slides',
    floor: 2,
    name: 'Горки и шары',
    lead: 'Спуски, бассейн с шариками и то самое ощущение «ещё разок».',
    image: images.slides,
    mapImage: asset('media/map/slides.jpg'),
    accent: 'sun',
    layout: 'wide-right',
  },
  {
    id: 'interactive',
    floor: 3,
    name: 'Интерактивный залив',
    lead: 'Комната, которую в отзывах называют необычной даже взрослые.',
    image: images.interactive,
    mapImage: asset('media/map/interactive.jpg'),
    accent: 'lilac',
    layout: 'tall',
  },
  {
    id: 'maze',
    floor: 3,
    name: 'Верёвочный лабиринт',
    lead: 'Туннели и высоты для тех, кто уже «вырос» из простых горок.',
    image: images.maze,
    mapImage: asset('media/map/maze.jpg'),
    accent: 'teal',
    layout: 'compact',
  },
]

export const partyThemes = [
  { name: 'Микки и Мини Маус', image: asset('media/parties/mickey.jpg') },
  { name: 'Волшебный Единорог', image: asset('media/parties/unicorn.jpg') },
  { name: 'Эльза и Олаф', image: asset('media/parties/elsa.jpg') },
  { name: 'Бэтмен', image: asset('media/parties/batman.jpg') },
  { name: 'Тигруля и мишка Тедди', image: asset('media/parties/tiger.jpg') },
  { name: 'Железный человек и Человек-паук', image: asset('media/parties/ironman.jpg') },
  { name: 'Хагги-Вагги и Кисси-Мисси', image: asset('media/parties/huggy.jpg') },
]

export const mapFloors = [
  {
    floor: 3,
    label: 'Этаж 3',
    stops: [
      { id: 'interactive', name: 'Интерактивный залив', image: asset('media/map/interactive.jpg'), accent: 'lilac' },
      { id: 'maze', name: 'Верёвочный лабиринт', image: asset('media/map/maze.jpg'), accent: 'teal' },
      { id: 'parties', name: 'Праздники', image: asset('media/map/parties.jpg'), accent: 'party', href: '#parties' },
    ],
  },
  {
    floor: 2,
    label: 'Этаж 2',
    stops: [
      { id: 'trampolines', name: 'Батутный берег', image: asset('media/map/trampolines.jpg'), accent: 'coral' },
      { id: 'slides', name: 'Горки и шары', image: asset('media/map/slides.jpg'), accent: 'sun' },
    ],
  },
]
