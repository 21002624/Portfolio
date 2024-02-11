import frontend from '../Utils/images/frontend.webp';
import backendIcon from './images/backend.png'; // Corrected import path
import toolsIcon from './images/tools.png'; // Corrected import path
import softSkillsIcon from './images/softkill.png'; // Corrected import path

export const SKILLS = [
    {
      title: "Frontend",
      icon: frontend,
      skills: [
        { skill: "HTML5", percentage: "95%" },
        { skill: "CSS3 (Sass/SCSS)", percentage: "95%" },
        { skill: "JavaScript", percentage: "80%" },
        { skill: "React.js", percentage: "80%" }
      ]
    },
    {
      title: "Backend",
      icon: backendIcon,
      skills: [
        { skill: "Node.js", percentage: "80%" },
        { skill: "Express.js", percentage: "70%"}
      ]
    },
    {
      title: "Tools",
      icon: toolsIcon,
      skills: [
        { skill: "Git & GitHub", percentage: "85%"},
        { skill: "Visual Studio Code", percentage: "75%"},
        { skill: "Webpack", percentage: "60%"},
        { skill: "Responsive Design", percentage: "90%" }
      ]
    },
    {
        title: "Soft Skills",
        icon: softSkillsIcon,
        skills: [
          { skill: "Problem-solving", percentage: "80%"},
          { skill: "Collaboration", percentage: "85%" },
          { skill: "Attention to Detail", percentage: "90%"}
        ]
      }
      
  ];
  

  export const WORK_EXPERIENCE = [
    {
      title: " Frontend Inter at Connect Infosystems",
      date: "January 21 -  February 18",
      responsibilities: [
        "Completed internship at Connect Infosystems, Chennai from January 21, 2023, to February 18, 2023.",
        "Gained practical experience in HTML, CSS, and Java.",
        "Received guidance from seasoned professionals in web designing and development.",
        " I gained invaluable practical experience in web designing and development. Under the guidance of seasoned professionals, I acquired proficiency in HTML, CSS, and Java, laying a solid foundation in frontend technologies"
      ]
    },
    {
      title: "2023 IBM Z Datathon",
      date: "october 22 ,2023",
      responsibilities: [
        "Participated in the IBM Datathon at Saveetha Engineering College with a dynamic quartet of talented teammates.",
        "Engaged in data-driven challenges, fostering collaboration and teamwork to devise innovative solutions.",
        "Honed data analysis skills through hands-on experience and real-world problem-solving during the event",
        "gained collaborative skills, problem-solving acumen, and proficiency in data analysis through real-world challenges with my talented teammates."
      ]
    },
    {
      title: "Accenture Virtual Experience",
      date: "february 2023",
      responsibilities: [
        "IAM policies and permissions",
        "Securing the software development lifecycle (SDLC)",
        "Gain insights into various industries, including technology, consulting, and digital transformation, understanding the challenges and opportunities they present.",
        "Accenture's methodologies, frameworks, and approaches to solving business problems, understanding how consulting firms operate and deliver value to clients."
      ]
    },
  ];
  