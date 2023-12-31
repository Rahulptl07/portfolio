// import images
import Hero_person from "./assets/images/Hero/main_comp.json";
import nitk from '../src/assets/images/Education/nitk.png'
import openFoodFacts from './assets/images/OpenSrc/openFoodFacts.png'
import flood from "./assets/images/OpenSrc/flood.png"
import mattermost from './assets/images/OpenSrc/mattermost.jfif'

export const resumeLink = "../src/assets/Rahul Patel.pdf"
export const repoLink = "https://github.com/Rahulptl07"

import {
  SiJavascript,
  SiLaravel,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPhp,
  SiCplusplus,
  SiC,
  SiJquery,
  SiVisualstudiocode,
  SiGit,
  SiFigma,
  SiAdobeillustrator,
  SiMysql,
  SiNetlify,
  SiHtml5,
  SiVite,
  SiCss3,
  SiMongodb,
  SiRedux,
  SiJava,
  SiDart,
  SiFlutter,
  SiExpress,
  SiIntellijidea,
  SiReactivex
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillHtml5,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import * as ic from 'react-icons/all'


import bookmark from "./assets/images/Projects/netflix.jpg";
import bank from "./assets/images/Projects/bank.jpg";
import keep_notes from "./assets/images/Projects/keepNotes.png";
import movie_land from "./assets/images/Projects/movieLand.jfif";
import tindog from "./assets/images/Projects/tindog.png";
import videotube from "./assets/images/Projects/video-tube.png";
import TriNit from "./assets/images/TriNit.jfif";
import portfolio from './assets/images/Projects/portfolio.jpg';
import acm from './assets/images/Projects/acm.png';
import expenseTracker from './assets/images/Projects/expense-tracker.png';
import appFlowy from './assets/images/OpenSrc/appflowy.png'

export const content = {
  navs: [
    {
      link: "#skills",
      title: "Skills & Experience",
    },
    {
      link: "#education",
      title: "Education",
    },
    {
      link: "#projects",
      title: "Projects",
    },
    // {
    //   link: "#openSrc",
    //   title: "Open Source",
    // },
    {
      link: "#contact",
      title: "Contact Me",
    },
  ],
  hero: {
    title: `Hello,`,
    sub1: "there",
    sub2: "I am",
    firstName: "RAHUL",
    LastName: "PATEL",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Passionate UX designer with a foundation in user-centered design principles. Proficient in wireframing, prototyping, and conducting user research.",
      },
    ],
  },
  skillsList: [
    {
      title: "Programming Languages",
      items: [
        {
          id: "pl-1",
          icon: SiCplusplus,
          name: "C++",
        },
        {
          id: "pl-2",
          icon: SiPhp,
          name: "PHP",
        },
        {
          id: "pl-3",
          icon: SiJava,
          name: "JAVA",
        },
        {
          id: "pl-4",
          icon: SiC,
          name: "C",
        },
        {
          id: "pl-5",
          icon: SiHtml5,
          name: "HTML",
        },
        {
          id: "pl-6",
          icon: SiCss3,
          name: "CSS",
        },
        {
          id: "pl-7",
          icon: SiJavascript,
          name: "JavaScript",
        },
        {
          id: "pl-8",
          icon: SiDart,
          name: "Dart",
        },
      ],
    },
    {
      title: "Frameworks/ Libraries",
      items: [
        {
          id: "f-1",
          icon: SiLaravel,
          name: "Laravel",
        },      
        {
          id: "f-3",
          icon: SiBootstrap,
          name: "Bootstrap",
        },
        {
          id: "f-4",
          icon: SiTailwindcss,
          name: "Tailwind CSS",
        },
        {
          id: "f-5",
          icon: SiJquery,
          name: "jQuery",
        }, 
      
      ],
    },
    {
      title: "Tools",
      items: [
        {
          id: "t-1",
          icon: SiFigma,
          name: "Figma",
        },
        {
          id: "t-2",
          icon: SiAdobeillustrator,
          name: "Adobe XD",
        },
        {
          id: "t-2",
          icon: SiMysql,
          name: "MySQL",
        },

        {
          id: "t-3",
          icon: SiVisualstudiocode,
          name: "VS Code",
        },
        {
          id: "t-4",
          icon: SiGit,
          name: "Git",
        },
        {
          id: "t-5",
          icon: AiFillGithub,
          name: "GitHub",
        },
        {
          id: "t-7",
          icon: SiNetlify,
          name: "Netlify",
        },
        {
          id: "t-8",
          icon: SiVite,
          name: "ViteJS",
        },
        {
          id: "t-8",
          icon: SiIntellijidea,
          name: "IntelliJ",
        },
      ],
    },
  ],

  experiences: [
    {
      organisation: "Dynamic Dreamz.",
      logo: TriNit,
      // link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Web Developer",
          duration: "(Jan 2022 - Oct 2023",
          content: [
            {
              text: "Solid experience with MVC architecture based web application developmenton PHP, Laravel.",
              
              // link: "https://github.com/TRI-NIT",
            },
          ],
        },
      ],
    },
    {
      organisation: "Indiscor Forensic Technology & Service Pvt Ltd",
      logo: acm,
      // link: "https://github.com/TRI-NIT",
      positions: [
        {
          title: "Telecom Engineer",
          duration: "June 2018 - Nov 2021",
          content: [
            {
              text: "Handling responsibility of installing and configuring CDU to RDU.",
              link: "",
            },
          ],
        },
       
       
      ],
    },
  ],

  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Synergy Institute of Tecnology, Bhubaneshwar Odisha",
    degree: "Bachelor of Technology",
    duration: "December 2013 - May 2017",
    // content1: "Major: Mchanical Engineering",
    // content2: "Minor: Information Technology",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Netflix Clone",
    github: "https://www.figma.com/proto/zsmwBjdmoi5whfU5fv8VMn/Projects?type=design&node-id=138-2&t=bEJcTQ5HI4PiORC1-0&scaling=scale-down&page-id=0%3A1",
    link: "",
    image: bookmark,
    content:
      "UX Design :- Netflix-Clone using Figma ",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "FIGMA"
      },
      
    ],
  },
  {
    id: "project-2",
    title: "Hubflix",
    github: "https://www.figma.com/file/zsmwBjdmoi5whfU5fv8VMn/Projects?type=design&node-id=297%3A2&mode=design&t=56rI5kwXJyvqZjoE-1",
    link: "",
    image: bookmark,
    content:
      "UX Design :- Hubflix",
    stack: [
      {
        id: "icon-1",
        icon: SiFigma,
        name: "FIGMA"
      },
      
    ],
  },

]

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title:
      'Make "Start Scanning" Button',
    link: "https://github.com/openfoodfacts/smooth-app/pull/3569",
    number: "#3569",
    date: "Jan 12 2023",
    linesAdded: "34",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  {
    id: "os-2",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Pop dialog navigator properly",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3528",
    number: "#3538",
    date: "Jan 5 2023",
    linesAdded: "1",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-3",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fab appearing in start scanning page",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3550",
    number: "#3550",
    date: "Jan 8 2023",
    linesAdded: "1",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-4",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: add troubleshooting section",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3587",
    number: "#3587",
    date: "Jan 18 2023",
    linesAdded: "16",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-5",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "String with only spaces is considered as name !",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3593",
    number: "#3593",
    date: "Jan 18 2023",
    linesAdded: "3",
    linesDeleted: "2",
    technology: SiFlutter,
  },
  {
    id: "os-6",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Alternate the color between packaging components to avoid any potential confusion",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3619",
    number: "#3619",
    date: "Jan 23 2023",
    linesAdded: "22",
    linesDeleted: "1",
    technology: SiFlutter,
  },
  {
    id: "os-7",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Add undo option when product in list deleted!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3648",
    number: "#3648",
    date: "Jan 30 2023",
    linesAdded: "23",
    linesDeleted: "4",
    technology: SiFlutter,
  },
  {
    id: "os-8",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "No intuitive way to close a modal on mobile",
    link: "https://github.com/openfoodfacts/hunger-games/pull/495",
    number: "#495",
    date: "Jan 31 2023",
    linesAdded: "27",
    linesDeleted: "2",
    technology: SiReact,
  },
  {
    id: "os-9",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "Email sender application broken",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3649",
    number: "#3649",
    date: "Jan 29 2023",
    linesAdded: "6",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-10",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Add copy to clipBoard button in send email manually when user has no email application",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3651",
    number: "#3651",
    date: "Feb 8 2023",
    linesAdded: "63",
    linesDeleted: "11",
    technology: SiFlutter,
  },
  {
    id: "os-11",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "Capitalize countries",
    link: "https://github.com/openfoodfacts/hunger-games/pull/522",
    number: "#522",
    date: "Feb 5 2023",
    linesAdded: "35",
    linesDeleted: "6",
    technology: SiReact,
  },
  {
    id: "os-12",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: add loading animation before question display",
    link: "https://github.com/openfoodfacts/hunger-games/pull/498",
    number: "#498",
    date: "Jan 31 5 2023",
    linesAdded: "14",
    linesDeleted: "3",
    technology: SiReact,
  },
  {
    id: "os-13",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "fix: selectAll in logo game",
    link: "https://github.com/openfoodfacts/hunger-games/pull/530",
    number: "#530",
    date: "Feb 5 2023",
    linesAdded: "6",
    linesDeleted: "1",
    technology: SiReact,
  },
  {
    id: "os-14",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: format sign_up_errors to normal texts instead of HTML format",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3692",
    number: "#3692",
    date: "Feb 16 2023",
    linesAdded: "33",
    linesDeleted: "13",
    technology: SiFlutter,
  },
  {
    id: "os-15",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Improve user profile UI",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3693",
    number: "#3693",
    date: "Feb 16 2023",
    linesAdded: "28",
    linesDeleted: "29",
    technology: SiFlutter,
  },
  {
    id: "os-16",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "refactor: move usermanagement provider after if check!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3698",
    number: "#3698",
    date: "Feb 16 2023",
    linesAdded: "3",
    linesDeleted: "2",
    technology: SiFlutter,
  },
  {
    id: "os-17",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: Common footer module.",
    link: "https://github.com/openfoodfacts/hunger-games/pull/539",
    number: "#539",
    date: "Feb 14 2023",
    linesAdded: "565",
    linesDeleted: "90",
    technology: SiReact,
  },
  {
    id: "os-18",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: add rate the app link and share the app link in the settings page!",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3704",
    number: "#3704",
    date: "Feb 21 2023",
    linesAdded: "111",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-19",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: checkBox not showing right mark in dark theme",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3725",
    number: "#3725",
    date: "Feb 21 2023",
    linesAdded: "2",
    linesDeleted: "0",
    technology: SiFlutter,
  },
  {
    id: "os-20",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: make nutrient search accentuation insensitive",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3792",
    number: "#3792",
    date: "Mar 21 2023",
    linesAdded: "7",
    linesDeleted: "3",
    technology: SiFlutter,
  },
  {
    id: "os-21",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: remove validation check for basic info fields",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3794",
    number: "#3794",
    date: "Apr 8 2023",
    linesAdded: "12",
    linesDeleted: "28",
    technology: SiFlutter,
  },
  {
    id: "os-22",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "fix: visual inconsistency in app_settings",
    link: "https://github.com/openfoodfacts/smooth-app/pull/3818",
    number: "#3818",
    date: "Apr 8 2023",
    linesAdded: "77",
    linesDeleted: "49",
    technology: SiFlutter,
  },
  {
    id: "os-23",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "rate-my-recipe",
    type: "pull-request",
    status: "merged",
    title: "chore: refactor and enhancement",
    link: "https://github.com/openfoodfacts/rate-my-recipe/pull/27",
    number: "#27",
    date: "Jun 19 2023",
    linesAdded: "28",
    linesDeleted: "13",
    technology: SiReact,
  },
  {
    id: "os-24",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "hunger-games",
    type: "pull-request",
    status: "merged",
    title: "feat: Add lazy import for different routes",
    link: "https://github.com/openfoodfacts/hunger-games/pull/656",
    number: "#656",
    date: "Jul 9 2023",
    linesAdded: "660",
    linesDeleted: "600",
    technology: SiReact,
  },
  {
    id: "os-25",
    organisation: "openfoodfacts",
    logo: openFoodFacts,
    repo: "smooth-app",
    type: "pull-request",
    status: "merged",
    title: "feat: Create a screen listing all attributes for a product",
    link: "https://github.com/openfoodfacts/smooth-app/pull/4714",
    number: "#4714",
    date: "Nov 4 2023",
    linesAdded: "354",
    linesDeleted: "39",
    technology: SiReact,
  },
  {
    id: "os-101",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "fix: reset password bug",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7135",
    number: "#7135",
    date: "Feb 16 2023",
    linesAdded: "3",
    linesDeleted: "4",
    technology: ic.TbBrandReactNative,
  },
  {
    id: "os-102",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost-mobile",
    type: "pull-request",
    status: "merged",
    title: "Feat: add copy to clipboard button in \"about\" mattermost page",
    link: "https://github.com/mattermost/mattermost-mobile/pull/7134",
    number: "#7134",
    date: "Jul 26 2023",
    linesAdded: "73",
    linesDeleted: "37",
    technology: ic.TbBrandReactNative,
  },
  {
    id: "os-103",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Migrate \"advanced_create_post.test.jsx\" to Typescript",
    link: "https://github.com/mattermost/mattermost/pull/24955",
    number: "#24955",
    date: "Oct 24 2023",
    linesAdded: "471",
    linesDeleted: "232",
    technology: ic.SiTypescript,
  },
  {
    id: "os-104",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Migrate \"interactive_dialog.jsx\" and tests to Typescript",
    link: "https://github.com/mattermost/mattermost/pull/25026",
    number: "#25026",
    date: "Oct 28 2023",
    linesAdded: "88",
    linesDeleted: "56",
    technology: ic.SiTypescript,
  },
  {
    id: "os-105",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Replace usage of LocalizedIcon in 'plain_log_list.tsx' with i/span tags",
    link: "https://github.com/mattermost/mattermost/pull/25135",
    number: "#25135",
    date: "Oct 31 2023",
    linesAdded: "8",
    linesDeleted: "9",
    technology: SiReact,
  },
  {
    id: "os-106",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: "Replace usage of LocalizedIcon in 'rhs_header_post.tsx' with i/span tags",
    link: "https://github.com/mattermost/mattermost/pull/25159",
    number: "#25159",
    date: "Oct 27 2023",
    linesAdded: "15",
    linesDeleted: "14",
    technology: SiReact,
  },
  {
    id: "os-107",
    organisation: "mattermost",
    logo: mattermost,
    repo: "mattermost",
    type: "pull-request",
    status: "merged",
    title: " Migrate 'switch_channel_provider.test.jsx' to TypeScript",
    link: "https://github.com/mattermost/mattermost/pull/25210",
    number: "#25210",
    date: "Oct 31 2023",
    linesAdded: "63",
    linesDeleted: "53",
    technology: ic.SiTypescript,
  },
  {
    id: "os-201",
    organisation: "CCExtractor",
    logo: flood,
    repo: "Flood_Mobile",
    type: "pull-request",
    status: "merged",
    title: "fix: make checkbox clearly visible onclick",
    link: "https://github.com/CCExtractor/Flood_Mobile/pull/160",
    number: "#160",
    date: "Jan 20 2023",
    linesAdded: "133",
    linesDeleted: "105",
    technology: SiFlutter,
  },
  {
    id: "os-301",
    organisation: "AppFlowy-IO",
    logo: appFlowy,
    repo: "AppFlowy",
    type: "pull-request",
    status: "merged",
    title: "feat: add icon to dropdown button in language view",
    link: "https://github.com/AppFlowy-IO/AppFlowy/pull/2031",
    number: "#2031",
    date: "Mar 20 2023",
    linesAdded: "24",
    linesDeleted: "23",
    technology: SiFlutter,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/rahul-patel-0a1b1729a/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Rahulptl07",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ptlrahul07@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/sudhanva_nadiger__",
  // },
  // {
  //   id: "social-media-5",
  //   icon: ic.AiFillTwitterCircle,
  //   link: "https://twitter.com/SudhanvaNadiger",
  // },
];

export const aboutMe = {
  name: "Rahul Patel",
  tagLine: "Crafting Seamless Experiences: Elevating User Journeys through Intuitive Design.",
  intro: content.hero.hero_content.text
}
