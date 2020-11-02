
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aditi Anshu",
  title: "Hi all, I'm Aditi",
  subTitle: emoji("Currently a Web Developer with special interest in Data Science. Experience working with MERN Stack and discovering new frameworks everyday. Links below to contact me for hiring/collaborations! :)"),
  resumeLink: "https://drive.google.com/file/d/180bZqxOoFDCt8miPwYy0Se819eiUfLZI/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/aditianshu",
  linkedin: "https://www.linkedin.com/in/aditi-anshu-2202a3194/",
  gmail: "aditianshu09@gmail.com",
  facebook: "https://www.facebook.com/aditi.anshu.9",
  instagram: "https://www.instagram.com/anshu_aditi/",
  twitter: "https://twitter.com/wasp_inc_"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do : ",
  subTitle: "WEB DEVELOPER WANTING TO EXPLORE DATA SCIENCE",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Come up with Machine Learning models for different problems")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "National Institute of Technology Patna",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.Tech in Electronics and Communication Engineering",
      duration: "August 2018 - May 2022 (Expected)",
      desc: "Majoring in ECE with several small projects and an ongoing project on Image Classification.",
      descBullets: [
        "Done relevant courses and picked minors in Data Analysis.",
        "Part of IEEE Student Branch NIT Patna, Literary CLub and have held PoRs in both."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analytics Intern",
      company: "The Spark Foundation",
      companylogo: require("./assets/images/logo_small.png"),
      date: "November 2020 - Present",
      desc: "Building Machine Learning models from scratch for the given tasks. Working with several pre-existing models and tailoring them to suit our needs."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Web Developer",
      company: "Caim consulting",
      companylogo: require("./assets/images/caim.png"),
      date: "September 2020 - Present",
      desc: "Part of a start-up which provides free legal counsel to up and coming start-ups of India. Among the board for this initiative, involved in the initial production and promotion of the website."
    },
    {
      role: "Front-End Developer Intern",
      company: "Devlofox Technologies",
      companylogo: require("./assets/images/devlo.png"),
      date: "May 2020 - August 2020",
      desc: "Worked for a website builing startup. In the three month duration, I worked on around 4 websites in adding functionalitites or modifications to the existing websites."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "aditianshu", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/caim-f.png"),
      link: "https://www.caimconsulting.in/"
    },
    {
      image: require("./assets/images/logo.png"),
      link: "https://arevaconsultancy.com/index.html"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Tata Crucible Hackathon '20 - Winner",
      subtitle: "Secured the First prize in the Hackathon organized by Tata Crucible.",
      image: require("./assets/images/Crucible.jpg"),
      footerLink: [
        { name: "E-mail", url: "https://www.linkedin.com/posts/aditi-anshu-2202a3194_hackathon-tatainnoverse-tata-activity-6698952353543938049-MXH2" }
      ]
    },
    {
      title: "Code-A-Clash Winner",
      subtitle: "Won a coding competition in my first year in college.",
      image: require("./assets/images/codehuh.jpg"),
      footerLink: [{ name: "Certification", url: "" }]
    },

    {
      title: "Impulse '19 - Winner",
      subtitle: "Won the First prize for presenting a paper on Desalination.",
      image: require("./assets/images/impulse.jpg"),
      footerLink: [
        { name: "Certification", url: "" }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Summer Training at Tata Steel for Machine Learning",
      image: require("./assets/images/tatasteel.jpg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1dUNonCUZlf5wWco0JL54xWSVOjRbTuX0/view" }
      ]
    } ,
    {
      title: "Web Development",
      subtitle: "Completed a course by Internshala on basics of Web Development, i.e., HTML, CSS, PHP, SQL, etc.",
      image: require("./assets/images/is.png"),
      footerLink: [
        { name: "Certification ID", url: "BD6EE27D-559B-DCF2-2604-BF0BB8F28215" }
      ]
    },

  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "A mix of my other interests, which is writing about technology and some Sci-Fi!",

  blogs: [
    {
      url: "https://learnturtle.co/articles/web-development/styled-components-in-react/",
      title: "Styled Components in React",
      description: "Styling components in React can be done in many ways, most of the newcomers go for the traditional CSS sheets or modules but there are several ways of styling components which are very unique to React. "
    },
    {
      url: "https://dev.to/teamxenox/the-truth-behind-productivity-apps-4ep4",
      title: "The Truth Behind Productivity Apps 🧐🤫",
      description: "Productivity is not just a mere concept anymore, it has materialized into a whole industry."
    },
    {
      url: "https://ieee-sbnitp.blogspot.com/?m=0",
      title: "Several Blogs for IEEE SB NIT-Patna",
      description: "Technology, Sci-Fi, it has it all."
    },
    {
      url: "http://ieee.nitp.ac.in/new/results/index3.html#page/6",
      title: "Plugged 1.0 ",
      description: "First Tech Magazine of NIT Patna. "
    },
    {
      url: "https://www.instagram.com/feelsinclusive/",
      title: "Feels Inclusive",
      description: "A social awareness page I maintain and design posts for."
    },
    {
      url: "https://www.instagram.com/smallpartsofmylife/",
      title: "Gallery of pictures clicked by me.",
      description: "Not related to Tech."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for collaboration and hiring!",
  number: "+91-95461-6708",
  email_address: "aditianshu09@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "wasp_inc_"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
