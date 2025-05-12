

const About = () => {
  return (
    <div id="about" className="w-10/12 mx-auto py-16">
        {/* About Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-2xl">
          I'm <span className="font-bold text-white ">Abdullah Al Mohyet</span>, a passionate Fontend developer specializing React ,Tailwind ,Express mongoDb My focus is on making web development faster, easier, and accessible to all developers. Currently, I’m expanding into backend development to grow as a Fontend development and create seamless, robust web applications.
          <br />
          <br />
          I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
          </p>
        </div>
      </div>
  );
};

export default About;