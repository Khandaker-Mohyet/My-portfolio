
const projects = [
  {
    name: "Chill Gamer",
    image: "https://i.ibb.co.com/Ldzj8B88/Screenshot-2025-02-07-154625.png", // Replace with your project image
    description: "Chill Gamer is a game review platform where users can explore, write, and share game reviews. The application features a clean, responsive design that ensures a seamless and enjoyable user experience.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
    liveLink: "https://chill-gamer-493d7.web.app",
    github: "https://github.com/Khandaker-Mohyet/Chill-Gamer-client",
  },
  {
    name: "Car Booking Platform",
    image: "https://i.ibb.co.com/LdWSGFxT/Screenshot-2025-02-07-154713.png",
    description: "This project is a car booking platform where users can view detailed information about cars and make bookings. The application allows users to select a car, pick a booking date, and confirm their reservation.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
    liveLink: "https://car-rental-750a3.web.app/",
    github: "https://github.com/Khandaker-Mohyet/Car-Rental"
  },
  {
    name: "Study Platform",
    image: "https://i.ibb.co.com/Q389MNxK/Screenshot-2025-02-07-154800.png",
    description: "Collaborative Study Platform is a web-based application designed to connect students, tutors, and administrators for seamless study session scheduling, resource sharing, and effective educational management.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Firebase"],
    liveLink: "https://study-platform-ba93a.web.app",
    github: "https://github.com/Khandaker-Mohyet/Study-Platform",
  },
];

const Projects = () => {
  return (
    <div id="project" className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <img src={project.image} alt={project.name} className="w-full h-52 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-white mt-4">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 text-sm text-white rounded-full">{tech}</span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={project.liveLink} target="_blank" className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90">
              Live Demo
            </a>
            <a href={project.github} target="_blank" className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90">
              Github
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;