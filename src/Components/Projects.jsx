
const projects = [
  {
    name: "E-Commerce Website",
    image: "https://via.placeholder.com/400", // Replace with your project image
    description: "An online shopping platform with user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    liveLink: "https://your-ecommerce.com",
  },
  {
    name: "Task Management App",
    image: "https://via.placeholder.com/400",
    description: "A simple app to manage daily tasks and track progress.",
    technologies: ["React", "Firebase", "TailwindCSS"],
    liveLink: "https://your-taskapp.com",
  },
];

const Projects = () => {
  return (
    <div className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <img src={project.image} alt={project.name} className="w-full h-52 object-cover rounded-lg" />
            <h3 className="text-xl font-bold text-white mt-4">{project.name}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700 text-sm text-white rounded-full">{tech}</span>
              ))}
            </div>
            <a href={project.liveLink} target="_blank" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;