import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "React", icon: <FaReact />, color: "text-cyan-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-500" },
];

const Skills = () => {
  return (
    <div id="skill" className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      {/* Skills Icons Row */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-xl shadow-md transition duration-300 hover:scale-110"
          >
            <div className={`text-4xl text-gray-500 transition duration-300 hover:${skill.color}`}>
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
