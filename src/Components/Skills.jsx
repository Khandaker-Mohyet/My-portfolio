
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiBootstrap, SiJquery } from 'react-icons/si';


const Skills = () => {
  return (
    <div id="skill" className="relative py-16 bg-background text-center overflow-hidden">

      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">All Skills</h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-base font-normal leading-relaxed mb-8 relative z-10">
        Here are some of the key technologies and tools I work with regularly.
      </p>
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        <FaHtml5 className="text-6xl text-orange-600" />
        <FaCss3Alt className="text-6xl text-blue-600" />
        <SiTailwindcss className="text-6xl text-teal-500" />
        <SiBootstrap className="text-6xl text-purple-600" />
        <SiJquery className="text-6xl text-blue-700" />
        <FaJsSquare className="text-6xl text-yellow-500" />
        <SiTypescript className="text-6xl text-blue-500" />
        <FaReact className="text-6xl text-blue-400" />
        <SiMongodb className="text-6xl text-green-600" />
        <FaNodeJs className="text-6xl text-green-500" />
        <SiExpress className="text-6xl text-gray-600" />
        <SiFirebase className="text-6xl text-orange-500" />
      </div>
    </div>
  );
};

export default Skills;


