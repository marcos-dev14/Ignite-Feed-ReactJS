export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcos-dev14.png',
      name: 'Marcos Paulo',
      role: 'Developer Frontend'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
      { type: 'link', content: 'mpdeveloper.design' }
    ],
    publishedAt: new Date('2022-09-19 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
      { type: 'link', content: 'difernandes.design' }
    ],
    publishedAt: new Date('2022-09-08 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
      { type: 'link', content: 'maykbrito.design' }
    ],
    publishedAt: new Date('2022-09-01 22:00:00'),
  },

]