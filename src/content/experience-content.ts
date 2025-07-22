export interface Experience {
  title: string
  dateRange: string
  company: string
  imagePath: string
  descriptions: string[]
}

export const experienceContent: Experience[] = [
  {
    title: 'Software Engineer - Contract',
    dateRange: 'Jan 2024 - Nov 2024',
    company: 'DIAGEO',
    imagePath: '/companies/diageo.svg',
    descriptions: [
      "Developed Bedrock, Diageo's new web platform (NextJS, React, TS).",
      'Added form action utils & validation, massively increased test coverage and overhauled the type system.',
      "Developed content management utils that were used to programmatically fix agency authoring mistakes that would have cost ten's of thousands of authoring hours to fix manually.",
      'Led the delivery team for Cîroc.com, where I kicked off the project solo, gathered requirements and started delivery of key components.',
      'Onboarded two additional developers and successfully delivered Cîroc.com two weeks before the deadline whilst drastically improving all key site metrics and enabling site authoring.',
      'Delivered & maintained a Yotpo package to retrieve, edit and post reviews to our third party review service to be used across brand deliveries',
      'Delivered & maintained a Shopify package that amalgamated data from three separate services and exposed a basket context to be re-used across brand deliveries.',
      'Created Mineral-UI, a component library based on ShadCN. In collaboration with designers I created & implemented a design token system, this enabled component theming, allowing teams to kick of projects with fully featured, themed components. These components saved thousands of hours of development time and drastically sped up site delivery.',
    ],
  },
  {
    title: 'Software Engineer - Contract',
    dateRange: 'Sep 2022 - May 2023',
    company: 'Awaze',
    imagePath: '/companies/awaze.svg',
    descriptions: [
      'Migrated the Hoseasons brand to the new generation tech stack created for Cottages.com.',
      'Overhauled & created numerous new front-end components',
      'Created a theming strategy & implemented it across all multi brand components.',
      "Integrated platform with multiple new internal API's",
      'Created of back-end for front-end architecture to adapt various API responses to a common format the FE could render',
      'Successfully implemented I18N & launched to two locales',
      'Realized massive uplifts in conversion, customer satisfaction, performance and platform reliability.',
      '3 months extension was then offered to launch the Novasol brand, where I then extended the capabilities of the platform to improve internationalization as well as continued development of front-end components.',
      'Mentored junior engineers to a mid weight level ensuring coding standards were met throughout the projects (AAA A11Y compliance, Observability & TDD)',
    ],
  },
  {
    title: 'Senior Software Engineer',
    dateRange: 'Aug 2019 - Apr 2022',
    company: 'Booking.com',
    imagePath: '/companies/booking.svg',
    descriptions: [
      'Developed BUI, a fully tested & centralized design system for Rentalcars & Booking.com, leading to greater speed of delivery for product teams, greater UI consistency and code quality',
      'Created code-mods to migrate approximately 85% of each teams codebase to the new design system saving thousands of dev hours.',
      'Delivered a new "in-path" solution for RentalCars partnership with RyanAir, integrated parts of MFE architecture into RyanAir sales funnel',
      'Created a bespoke internal marketing image generation tool using React, Express & Puppeteer, allowed up to date pricing to be added to marketing emails, leading to big increase in conversion',
      'I was Lead engineer & temporary engineering manager on a greenfield project to create the new Rentalcars landing page. This delivered the updated brand look & feel, drastically increased performance and rate of conversion.',
    ],
  },
  {
    title: 'Software Engineer',
    dateRange: 'Sept 2014 - May 2019',
    company: 'Ford Motor Company',
    imagePath: '/companies/ford.svg',
    descriptions: [
      "Seconded for 12 months to Pivotal software, a highly regarded digital agency and a leader in digital product development to absorb Pivotal's product development methodology, including XP, pair programming, agile and TDD",
      "Developed a connected vehicle fleet management tool (FCS) for Ford's next generation of commercial vehicles.",
      "After 12 months I returned to Ford Smart Mobility to continue development of FCS, and to teach the learnings from Pivotal to help drive change within existing product teams and demonstrate the benefits of the paradigm's mentioned above.",
      'Developed Ford.co.uk, where I added new features across the site',
      'Worked on key features for the dealer locator & car configurator',
      'Launched Ford.com to multiple locales within multiple',
      'Led development of time critical microsites to coincide with launches of new products & product families',
    ],
  },
]
