export interface Experience {
  title: string
  dateRange: string
  company: string
  descriptions: string[]
  subRole?: {
    title: string
    description: string
  }
}

export const experienceContent: Experience[] = [
  {
    title: "Software Engineer - Contract",
    dateRange: "Jan 2024 - Nov 2024",
    company: "DIAGEO",
    descriptions: [
      "I initially developed Diageo's new web platform (NextJS, React, TS) adding form action utils & validation, massively increased test coverage and overhauled the type system. I then developed content management utils that were used to programmatically fix agency authoring mistakes that would have cost ten's of thousands of authoring hours to fix manually. I then led the delivery team for Cîroc.com, where I kicked off the project solo, gathered requirements and started delivery of key components. I then onboarded two additional developers and successfully delivered the site two weeks before the deadline whilst drastically improving all key site metrics and enabling site authoring. I re-joined the bedrock team & delivered a Yotpo package to retrieve, edit and post reviews to our third party review service, I also delivered a shopify package that amalgamated data from three separate services and exposed a basket context to be re-used across brand deliveries. These packages were fully unit tested, and were used in multiple brand deliveries with no issues. I then created Mineral-UI, a component library based on ShadCN. In collaboration with designers I created & implemented a design token system, this enabled component theming, allowing teams to kick of projects with fully featured, themed components. These components saved thousands of hours of development time and drastically sped up site delivery."
    ]
  },
  {
    title: "Software Engineer - Contract",
    dateRange: "Sep 2022 - May 2023",
    company: "Awaze",
    descriptions: [
      "My primary assignment was to migrate the Hoseasons brand to the new generation tech stack created for Cottages.com. This involved an overhaul & creation of new front-end components, creation of theming strategy & implementation. Integration with multiple internal API's and creation of back-end for front-end architecture using NextJS & React. After a successful launch, Awaze realized massive uplifts in conversion, customer satisfaction, performance and platform reliability. A 3 months extension was then offered to launch the Novasol brand, where I then extended the capabilities of the platform to allow internationalization as well as continued development of front-end components. I was also responsible for mentoring engineers and ensuring coding standards were met throughout the projects (AAA A11Y compliance, Observability & TDD)"
    ]
  },
  {
    title: "Senior Software Engineer",
    dateRange: "Aug 2019 - Apr 2022",
    company: "Booking.com",
    descriptions: [
      "My primary assignment was to develop a centralised design system for Rentalcars & Booking.com, leading to greater speed of delivery for product teams, greater UI consistency and code quality. I then created code-mods to migrate approximately 85% of each teams code base to the micro-front-ends. I was also lead engineer & temporary engineering manager on a greenfield project to create the new Rentalcars landing page. This delivered the updated brand look & feel, drastically increased performance and rate of conversion."
    ]
  },
  {
    title: "Software Engineer",
    dateRange: "Sept 2014 - May 2019",
    company: "Ford Motor Company",
    descriptions: [
      "I was selected to spend 12 months within Pivotal software, a highly regarded digital agency and a leader in digital product development. My assignment was to develop a fleet management tool (FCS) for Ford's next generation of connected commercial vehicles. My secondary goal was to absorb Pivotal's product development methodology, including paradigm's such as extreme programming, pair programming, agile and test driven development. After 12 months I returned to Ford Smart Mobility to continue development of FCS, and to teach the learnings from the assignment to help drive change within existing product teams and demonstrate the benefits of the paradigm's mentioned above."
    ],
    subRole: {
      title: "Software Engineer",
      description: "I worked primarily on Ford.co.uk, where I developed new features across the site including on the dealer locator & car configurator. I also gained experience launching to multiple countries and languages, and worked creating microsites for promotional events and marketing initiatives."
    }
  }
]