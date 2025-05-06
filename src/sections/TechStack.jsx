import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lukeshpoddar/",
    icon: "/images/coding-profiles/leetcode.png",
    solved: 0,
    total: 2000,
    color: "#FFA116",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/lukeshpoddar",
    icon: "/images/coding-profiles/codechef.png",
    solved: 0,
    total: 4000,
    color: "#7A7A7A",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/lukeshpoddar",
    icon: "/images/coding-profiles/codeforces.png",
    solved: 0,
    total: 10000,
    color: "#3B5998",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/lukeshpoddar",
    icon: "/images/coding-profiles/gfg.png",
    solved: 0,
    total: 1500,
    color: "#2F8D46",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/b502aeab-0210-4fd9-a512-c8f8a6411a5e",
    icon: "/images/coding-profiles/coding-ninjas.png",
    solved: 0,
    total: 500,
    color: "#FF5733",
  },
];

const latestProjects = [
  {
    title: "AI-Powered Code Review Assistant",
    description:
      "A machine learning tool that analyzes code quality and suggests improvements in real-time.",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    githubLink: "#",
    liveDemo: "#",
    image: "/images/projects/code-review-ai.jpg",
    accentColor: "#6366F1",
  },
  {
    title: "Developer Portfolio Builder",
    description:
      "An interactive platform that helps developers create stunning portfolios with minimal configuration.",
    technologies: ["Next.js", "Tailwind CSS", "Three.js"],
    githubLink: "#",
    liveDemo: "#",
    image: "/images/projects/portfolio-builder.jpg",
    accentColor: "#10B981",
  },
  {
    title: "Algorithm Visualization Tool",
    description:
      "Interactive visualizations of complex algorithms to enhance learning and understanding.",
    technologies: ["JavaScript", "D3.js", "React"],
    githubLink: "#",
    liveDemo: "#",
    image: "/images/projects/algo-visualizer.jpg",
    accentColor: "#3B82F6",
  },
];

const TechStack = () => {
  const [profileData, setProfileData] = useState(codingProfiles);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const updatedProfiles = codingProfiles.map((profile) => ({
        ...profile,
        solved:
          Math.floor(Math.random() * (profile.total * 0.8)) +
          profile.total * 0.2,
      }));
      setProfileData(updatedProfiles);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card, .profile-card, .project-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );

    gsap.fromTo(
      ".project-highlight",
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 70%",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* Tech Stack Section */}
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles Section */}
        <div className="mt-16">
          <TitleHeader
            title="My Competitive Programming & DSA Journey"
            sub="💻 Consistent Problem Solving"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {profileData.map((profile) => (
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={profile.name}
                className="profile-card card-border overflow-hidden group rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: profile.color }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-12 h-12 object-contain"
                  />
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: profile.color }}
                  >
                    {profile.name}
                  </h3>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Solved:</span>
                    <span className="font-medium">{profile.solved}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${(profile.solved / profile.total) * 100}%`,
                        backgroundColor: profile.color,
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Total Problems:</span>
                  <span>{profile.total}</span>
                </div>

                <div className="mt-4 flex justify-end">
                  <span
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${profile.color}20`,
                      color: profile.color,
                    }}
                  >
                    {Math.round((profile.solved / profile.total) * 100)}%
                    Completed
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Latest Projects Section */}
        <div id="projects" className="mt-24">
          <TitleHeader
            title="My Latest Projects"
            sub="🚀 Recent Work & Innovations"
          />

          <div className="flex flex-col lg:flex-row gap-8 mt-12">
            {/* Project Highlight */}
            <div
              className="project-highlight lg:w-2/3 rounded-2xl overflow-hidden relative group"
              style={{
                backgroundColor:
                  latestProjects[activeProject].accentColor + "20",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
              <img
                src={latestProjects[activeProject].image}
                alt={latestProjects[activeProject].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-3xl font-bold text-white">
                  {latestProjects[activeProject].title}
                </h3>
                <p className="text-white/90 mt-2">
                  {latestProjects[activeProject].description}
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={latestProjects[activeProject].githubLink}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={latestProjects[activeProject].liveDemo}
                    className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project List */}
            <div className="lg:w-1/3 flex flex-col gap-4">
              {latestProjects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`project-card cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    activeProject === index
                      ? "ring-2 ring-offset-4"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  style={{
                    borderLeft: `4px solid ${project.accentColor}`,
                    transform:
                      activeProject === index ? "translateX(8px)" : "none",
                  }}
                >
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${project.accentColor}20`,
                          color: project.accentColor,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
