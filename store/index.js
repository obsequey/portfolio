export const state = () => ({
  projects: [
    {
      id: 2,
      title: 'Сайт для Комьюнити центра «Действие»',
      img: 'center-action.org.webp',
      imgHQ: 'center-action.org.png',
      link: 'https://center-action.org/',
      stack: [
        {
          name: 'Vue',
          icon: 'vuejs.svg'
        },
        {
          name: 'Wordpress',
          icon: 'wordpress.svg'
        }
      ],
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lacus, aliquet vitae vehicula quis, facilisis nec ipsum. Phasellus auctor sem vitae elit aliquam, nec porta elit lacinia. Suspendisse potenti. Cras convallis nunc at lorem faucibus tristique. Nulla facilisi. Mauris malesuada massa velit, nec iaculis nisi facilisis ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Ut bibendum pharetra fermentum. In suscipit ipsum vitae euismod condimentum. Vestibulum fermentum sit amet diam eu fringilla. Morbi at accumsan arcu. Vivamus ut vehicula eros. Phasellus congue, mauris quis venenatis dignissim, velit sem dictum augue, sit amet vehicula nisl dui sed metus. Nam condimentum nibh a tristique pharetra. Integer tristique enim sed tristique sagittis. Sed posuere finibus dui, eu rhoncus magna hendrerit ut. Mauris non eros at felis sagittis imperdiet. Donec lacinia vel odio ut porttitor. Maecenas eget ipsum nec neque pharetra vestibulum a non libero. Nam sed justo porta, venenatis tellus ac, condimentum erat.
      `
    },
    {
      id: 1,
      title: 'Сайт для «Монтаж Питер»',
      img: 'montazh.webp',
      imgHQ: 'montazh.jpeg',
      link: null,
      stack: [
        {
          name: 'JavaScript',
          icon: 'js-square.svg'
        }
      ],
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lacus, aliquet vitae vehicula quis, facilisis nec ipsum. Phasellus auctor sem vitae elit aliquam, nec porta elit lacinia. Suspendisse potenti. Cras convallis nunc at lorem faucibus tristique. Nulla facilisi. Mauris malesuada massa velit, nec iaculis nisi facilisis ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Ut bibendum pharetra fermentum. In suscipit ipsum vitae euismod condimentum. Vestibulum fermentum sit amet diam eu fringilla. Morbi at accumsan arcu. Vivamus ut vehicula eros. Phasellus congue, mauris quis venenatis dignissim, velit sem dictum augue, sit amet vehicula nisl dui sed metus. Nam condimentum nibh a tristique pharetra. Integer tristique enim sed tristique sagittis. Sed posuere finibus dui, eu rhoncus magna hendrerit ut. Mauris non eros at felis sagittis imperdiet. Donec lacinia vel odio ut porttitor. Maecenas eget ipsum nec neque pharetra vestibulum a non libero. Nam sed justo porta, venenatis tellus ac, condimentum erat. 
      `
    },
    {
      id: 0,
      title: 'Сайт для «Правозащитного Совета Санкт-Петербурга»',
      img: 'hrcspb.webp',
      imgHQ: 'hrcspb.jpg',
      link: 'https://hrcspb.org/',
      stack: [
        {
          name: 'PHP',
          icon: 'php.svg'
        },
        {
          name: 'Wordpress',
          icon: 'wordpress.svg'
        }
      ],
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor lacus, aliquet vitae vehicula quis, facilisis nec ipsum. Phasellus auctor sem vitae elit aliquam, nec porta elit lacinia. Suspendisse potenti. Cras convallis nunc at lorem faucibus tristique. Nulla facilisi. Mauris malesuada massa velit, nec iaculis nisi facilisis ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Ut bibendum pharetra fermentum. In suscipit ipsum vitae euismod condimentum. Vestibulum fermentum sit amet diam eu fringilla. Morbi at accumsan arcu. Vivamus ut vehicula eros. Phasellus congue, mauris quis venenatis dignissim, velit sem dictum augue, sit amet vehicula nisl dui sed metus. Nam condimentum nibh a tristique pharetra. Integer tristique enim sed tristique sagittis. Sed posuere finibus dui, eu rhoncus magna hendrerit ut. Mauris non eros at felis sagittis imperdiet. Donec lacinia vel odio ut porttitor. Maecenas eget ipsum nec neque pharetra vestibulum a non libero. Nam sed justo porta, venenatis tellus ac, condimentum erat. 
      `
    }
  ],
  socials: [
    {
      name: 'twitter',
      icon: 'twitter.svg',
      link: 'https://twitter.com/burnallatonce'
    },
    {
      name: 'github',
      icon: 'github.svg',
      link: 'https://github.com/obsequey'
    },
    {
      name: 'telegram',
      icon: 'telegram.svg',
      link: ''
    },
    {
      name: 'facebook',
      icon: 'facebook.svg',
      link: ''
    }
  ]
})
