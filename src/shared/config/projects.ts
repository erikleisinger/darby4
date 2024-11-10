export type Project = {
  key: string;
  // Appears in the actual main projects page
  title_main: string;
  // Appears on the card on home page
  title_card: string;
  description: string;
  tools: ProjectTool[];
  // the FIRST tag here will display on the crd
  tags: ProjectTag[];
  examples: ProjectExample[];
  examples_mobile: ProjectExample[];

}

export type ProjectTool = 'figma' | 'adobe' | 'openAi' | 'zoom' | 'discord' | 'miro'

export type ProjectTag = 'uiDesign' | 'contentDesign' | 'uxDesign' | 'branding' | 'designStrategy' | 'visualDesign'

export type ProjectExample = {
  type: 'image' | 'video';
  url: string;
  preventZoom?: boolean
}


export const PROJECTS: Project[] = [

  {
    key: 'ccc',
    title_card: 'Counselling Centre Website',
    title_main: 'Community Counselling Centre',
    description: 'With a bounce rate of 90%, the Community Counselling Centre in Prince George, BC needed a new low-barrier website for their varied clientele. After user interviews, card sorts, and communication with key stakeholders, I created a more responsive, visual website with a friendlier tone overall. We also noticed that people on the waitlist were struggling to cope so we created bite sized content of the counsellors teaching strategies for basic issues such as Anxiety and Depression. ',
    tools: ['figma', 'adobe', 'openAi', 'zoom'],
    tags: ['uiDesign', 'uxDesign', 'contentDesign'],
    examples: [
      {
        type: 'image',
        url: 'ccc/ccc_1.png'
      },

      {
        type: 'image',
        url: 'ccc/ccc_2.png'
      },

      {
        type: 'image',
        url: 'ccc/ccc_3.png'
      },

      {
        type: 'image',
        url: 'ccc/ccc_4.png'
      },
      {
        type: 'image',
        url: 'ccc/ccc_5.gif'
      }
    ],
    examples_mobile: [
      {
        type: 'image',
        url: 'ccc/ccc_1_mobile.png',
      },
      {
        type: 'image',
        url: 'ccc/ccc_2_mobile.png',
      },
      {
        type: 'image',
        url: 'ccc/ccc_3_mobile.png',
      },
    ]
  },
  {
    key: 'mff',
    title_card: 'My Forest Fund App',
    title_main: 'My Forest Fund',
    description: 'My Forest Fund was originally a gamified, financial literacy app for children. MFF was having issues with getting buy in from parents while still making the app fun for kids. After conducting  user research online, I found a whole market of young adults who were interested in the app. I presented my findings to key stakeholders and they eventually agreed to pivot. Luckily, MFF was in early stages of development and pivoting was still fairly simple. As a result, MFF now has their primary market and a whole new direction for the app!',
    tools: ['figma', 'adobe', 'openAi', 'zoom'],
    tags: ['uxDesign', 'uiDesign', 'branding'],
    examples: [
      {
        type: 'image',
        url: 'mff/mff_1.png'
      },

      {
        type: 'image',
        url: 'mff/mff_2.png'
      },

      {
        type: 'image',
        url: 'mff/mff_3.png'
      },

      {
        type: 'image',
        url: 'mff/mff_4.png'
      },
      {
        type: 'image',
        url: 'mff/mff_5.png'
      },
      {
        type: 'image',
        url: 'mff/mff_6.gif'
      }
    ],
    examples_mobile: [
      {
        type: 'image',
        url: 'mff/mff_1_mobile.png'
      },

      {
        type: 'image',
        url: 'mff/mff_2_mobile.png'
      },

      {
        type: 'image',
        url: 'mff/mff_3_mobile.png'
      },

      {
        type: 'image',
        url: 'mff/mff_4_mobile.png'
      },
      {
        type: 'image',
        url: 'mff/mff_5_mobile.gif'
      },
    ]
  },
  {
    key: 'nrts',
    title_card: 'Landscaping Landing Page',
    title_main: 'New Route Trail Solutions',
    description: `I approached New Route Trail Solutions with a proposition to develop a landing page for their business. Before this, they did not have a website but they needed one due to the fact that they are conducting a large amount of business. After a meeting gathering NRTS’ business goals, I created basic User Personas of current customers they serve. The problem became, “How might we make it easier for customers to contact NRTS and research their work?”
The objective of this project was to increase NRTS’ visibility and online presence. A secondary objective was to legitimize them to new customers who are researching landscaping or trail building options.`,
    tools: ['figma', 'adobe', 'openAi', 'zoom'],
    tags: ['visualDesign', 'uiDesign', 'designStrategy'],
    examples: [
      {
        type: 'image',
        url: 'nrts/nrts_1.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_2.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_3.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_4.png'
      },
      {
        type: 'image',
        url: 'nrts/nrts_5.gif'
      },
    ],
    examples_mobile: [
      {
        type: 'image',
        url: 'nrts/nrts_1_mobile.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_2_mobile.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_3_mobile.png'
      },

      {
        type: 'image',
        url: 'nrts/nrts_4_mobile.png'
      },
      {
        type: 'image',
        url: 'nrts/nrts_5_mobile.gif',
        preventZoom: true
      },
    ]
  },
  {
    key: 'arc',
    title_card: 'Arcteryx App Redesign',
    title_main: 'Arcteryx Redesign',
    description: 'This is a redesign I did for the ‘Discover’ section of Arc’Teryx’s eCommerce App. I noticed that every interaction on the Discovery page linked back to the home page of the store, not allowing users to explore products they were interested in on the page. I made a user flow that creates buy in to the Arc’Teryx lifestyle, then gently guides users to explore products they may be interested in.',
    tools: ['figma', 'adobe', 'openAi'],
    tags: ['uiDesign', 'contentDesign'],
    examples: [
      {
        type: 'image',
        url: 'arc/arc_1.png'
      },

      {
        type: 'image',
        url: 'arc/arc_2.png'
      },

      {
        type: 'image',
        url: 'arc/arc_3.png'
      },

      {
        type: 'image',
        url: 'arc/arc_4.png'
      },
      {
        type: 'image',
        url: 'arc/arc_5.gif'
      }
    ],
    examples_mobile: [
      {
        type: 'image',
        url: 'arc/arc_1_mobile.png',
      },
      {
        type: 'image',
        url: 'arc/arc_2_mobile.png',
      },
      {
        type: 'image',
        url: 'arc/arc_3_mobile.png',
      },
    ]
  },
]
