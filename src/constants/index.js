const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lukeshpoddar/",
    icon: "/images/coding-profiles/leetcode.png",
    solved: 450,
    total: 2000,
    color: "#FFA116",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/lukeshpoddar",
    icon: "/images/coding-profiles/codechef.png",
    solved: 1200,
    total: 4000,
    color: "#7A7A7A",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/lukeshpoddar",
    icon: "/images/coding-profiles/codeforces.png",
    solved: 800,
    total: 10000,
    color: "#3B5998",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/lukeshpoddar",
    icon: "/images/coding-profiles/gfg.png",
    solved: 300,
    total: 1500,
    color: "#2F8D46",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/b502aeab-0210-4fd9-a512-c8f8a6411a5e",
    icon: "/images/coding-profiles/coding-ninjas.png",
    solved: 200,
    total: 500,
    color: "#FF5733",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Unity Developer",
    imgPath: "/images/logos/Unity-logo-tech.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Running a coaching business and mentoring over 500 students has made a real difference in countless lives. His passion for teaching is unmatched.",
    imgPath: "/images/BusinessExp.png",
    logoPath: "/images/coachinglogo.png",
    title: "Coaching Business Owner & Mentor",
    date: "2017 - 2023",
    responsibilities: [
      "Mentored over 500 students on coding, career paths, and technical foundations.",
      "Designed learning paths tailored to individual needs and goals.",
      "Built a reputation for practical, result-oriented coaching and guidance.",
    ],
  },
  {
    review: "Lukesh is a dynamic content creator whose videos inspire and educate thousands. His consistency and creativity are rare to find.",
    imgPath: "/images/youtubelogoexp.png",
    logoPath: "/images/youtube-logo-exp.png",
    title: "YouTube Tech Educator & Course Creator",
    date: "2017 - Present",
    responsibilities: [
      "Produced over 1000 videos on coding, career advice, and emerging tech trends.",
      "Created online courses with hands-on projects and conceptual depth.",
      "Engaged with a large subscriber base by maintaining clarity and consistency.",
    ],
  },
  {
    review: "As a Unity developer, he delivered immersive game experiences that showcased creativity and strong technical acumen.",
    imgPath: "/images/unityexp.png",
    logoPath: "/images/Unity-logo-exp.png",
    title: "Unity 2D/3D Game Developer",
    date: "2021 - 2023",
    responsibilities: [
      "Developed multiple interactive 2D and 3D games using Unity and C#.",
      "Implemented physics, animation, and UI systems for enhanced gameplay.",
      "Collaborated with designers and artists to deliver engaging user experiences.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Lukesh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Lukesh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Lukesh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Lukesh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Lukesh is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Lukesh was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Lukesh's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Lukesh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  codingProfiles,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};