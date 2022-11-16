// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#003087, #BF5700, #FFB81C, #00338D, #BF5700, #C8102E",
  firstName: "Zack",
  middleName: "",
  lastName: "Katancik",
  message: " Game Development, Distributed Systems, Cloud - Seattle, WA ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zkatancik",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zachary-katancik/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/katanciktech",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/webportrait.png"),
  imageSize: 375,
  message:
    "I'm Zack Katancik, an engineer originally from Buffalo, NY. I studied Economics at the University of Texas at Austin before taking up a career in finance and trading. After deciding to make a change, I completed my Master's in Computer Science at Northeastern University in Boston. Currently, I'm a Distributed Systems Engineer at Bungie in Seattle. I like building new technologies and using my prior experience in business to think about problems in a unique way.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "zkatancik", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/webportrait.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/webportrait.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Say Hello!",
  message:
    "Career-changer from financial research to software engineering, but still a hobbyist in trading and finance. Feel free to reach out with fun projects to",
  email: "zkatancik@gmail.com",
};

const experience = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: 'Distributed Systems Engineer',// Here Add Company Name
      companylogo: require('../assets/img/bungielogoofficial.png'),
      imageSize: 300,
      date: 'June 2022 – Present',
    },
    {
      role: 'Software Development Engineering Intern',
      companylogo: require('../assets/img/awslogoofficial.png'),
      imageSize: 200,
      date: 'Fall 2021',
    },
    {
      role: 'Wealth Management Analyst',// Here Add Company Name
      companylogo: require('../assets/img/morganstanleylogoofficial.png'),
      imageSize: 300,
      date: 'December 2017 - December 2018',
    },
    {
      role: 'Senior Research Associate',
      companylogo: require('../assets/img/glglogo.png'),
      imageSize: 200,
      date: 'July 2016 - November 2017',
    },
  ]
}

const education = {
  show: true,
  heading: "Education",
  data: [
    {
      role: 'Northeastern University, Master of Science in Computer Science',
      companylogo: require('../assets/img/neulogoofficial.png'),
      imageSize: 300,
      date: '2019 – 2022',
    },
    {
      role: 'The University of Texas At Austin, Bachelor of Arts in Economics, Minor in Mathematics, w/ Honors',// Here Add Company Name
      companylogo: require('../assets/img/utaustinlogoofficial.png'),
      imageSize: 300,
      date: '2012 – 2016',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experience, education };
