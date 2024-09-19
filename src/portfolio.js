/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shahryar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shahryar Bahmaei Portfolio",
    type: "website",
    url: "http://ShahryarBahmaei.com/",
  },
};

//Home Page
const greeting = {
  title: "Shahryar Bahmaei",
  logo_name: "ShahryarBahmaei",
  nickname: "Shazam",
  subTitle:
    "It is hard to tell your own story, but here it goes: I am an aspiring software engineer with a passion for building scalable and efficient software solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1eG5IZbugiWGp8vX0SxMk93ovR92stJ4Q/view?usp=sharing",
  portfolio_repository: "https://github.com/shahryarbhm/shahryarbhm.com",
  githubProfile: "https://github.com/shahryarbhm",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/shahryarbhm",
  // linkedin: "https://www.linkedin.com/in/shahryarbhm/",
  // gmail: "Shahryarbahmaei@gmail.com",
  // gitlab: "https://gitlab.com/ShahryarBahmaei98",
  // facebook: "https://www.facebook.com/shahryarbhm.19/",
  // twitter: "https://twitter.com/Shahryar_1919",
  // instagram: "https://www.instagram.com/shahryarbhm/"

  {
    name: "Github",
    link: "https://github.com/shahryarbhm",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shahryarbhm/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ShahryarBahmaei@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/0xshazam",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/shahryarbhm/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];


const skills = {
  data: [
    {
      title: "Blockchain & Back-End Development",
      fileName: "BlockchainBackendImg",
      skills: [
        "⚡ Developing robust back-end services using NestJS, Express.js, and Django",
        "⚡ Specializing in seamless API integration and smart contract interaction",
        "⚡ Building scalable blockchain applications with a focus on Web3 technologies",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: { color: "#339933" },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: { color: "#E0234E" },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#007ACC" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing full-stack applications with React, Tailwind, and Next.js",
        "⚡ Building mobile applications using React Native",
        "⚡ Creating user-friendly UI/UX designs with Figma",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#38B2AC" },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" },
        },
      ],
    },
    {
      title: "DevOps & Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Dockerizing and deploying applications on cloud platforms",
        "⚡ Managing scalable back-end services using Kubernetes and Docker",
        "⚡ Ensuring efficient database management with SQL and NoSQL solutions",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: { color: "#DC382D" },
        },
      ],
    },
    {
      title: "IoT & Computer Vision",
      fileName: "IoTVisionImg",
      skills: [
        "⚡ Configuring IoT devices with OpenHAB and KNX for smart automation",
        "⚡ Implementing Computer Vision solutions using CNN, RCNN, and LSTM",
        "⚡ Dockerizing IoT applications for efficient deployment and management",
      ],
      softwareSkills: [
        {
          skillName: "OpenHAB",
          fontAwesomeClassname: "simple-icons:openhab",
          style: { color: "#F68212" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/shahryarbhm/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/shahryarbhm",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Shahryar_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/shahryarbhm",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Shahryar391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shahryarbhm",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shiraz University",
      subtitle: "B.Sc. in Computer Engineering",
      logo_path: "shiraz_university.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://shirazu.ac.ir",
    },
    {
      title: "University of Klagenfurt",
      subtitle: "M.Sc. in Informatics",
      logo_path: "klagenfurt_university.png",
      alt_name: "Alpen-Adria-Universität Klagenfurt",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.aau.at/",
    },
  ],
};

const certificationss = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};
const certifications = {certifications:[]}

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Back-End Developer",
          company: "Delinternet",
          company_url: "https://www.delinternet.com/",
          logo_path: "delinternet.jpg",
          duration: "Feb 2023 - Sep 2023",
          location: "Remote, Spain",
          description:
            "As a remote Back-End Developer at DelInternet, I was responsible for developing TypeScript SDKs to facilitate communication with third-party providers and backend services, using Express.js for seamless API integration. This role, combined with my experience configuring the IvozProvider on the Asterisk platform, significantly enhanced my understanding of real-world telecommunication systems and robust web application development.",
          color: "#000000",
        },
        {
          title: "Computer Vision Research Engineer",
          company: "Offrang",
          company_url: "https://iranlase.com/",
          logo_path: "Offrang.png",
          duration: "Aug 2022 - Mar 2023",
          location: "Shiraz, Iran",
          description:
            "During my time at Offrang, I was deeply involved in configuring and managing IoT devices, using platforms like OpenHAB and KNX to connect and control a wide range of devices seamlessly. I also gained valuable experience in containerization by dockerizing applications for Linux devices, enhancing deployment efficiency and software management. These experiences significantly strengthened my expertise in internet communication technologies, especially within the realm of IoT and Linux-based systems.",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Namira-Soccer-2D-Simulation-Team-Description-Paper-2020",
      name: "Namira Soccer 2D Simulation Team Description Paper 2020",
      createdAt: "2020-06-24T00:00:00Z",
      description: "Paper published in Arxiv 2022",
      url: "https://arxiv.org/abs/2006.13534v1",
    },
    {
      id: "Namira-Soccer-2D-Simulation-Team-Description-Paper-2018",
      name: "Namira Soccer 2D Simulation Team Description Paper 2020",
      createdAt: "2018-07-04T00:00:00Z",
      description: "Team description paper",
      url: "https://archive.robocup.info/Soccer/Simulation/2D/TDPs/RoboCup/2018/Namira_SS2D_RC2018_TDP.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_profile.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.shahryarbhm.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Klagenfurt, Austria, 9020",
    locality: "Klagenfurt",
    country: "Austria",
    region: "Carinthia",
    postalCode: "9020",
    streetAddress: "Rosentaler Strasse",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/kZG7GzT2s4H7iemk8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
