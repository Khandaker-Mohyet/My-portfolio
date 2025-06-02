

const About = () => {
  return (
    <div id="about" className="w-10/12 mx-auto py-16">
        {/* About Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-2xl">
          I’m <span className="font-bold text-white ">Khandaker Mohyet</span>, a passionate MERN stack developer with a strong focus on building fast, responsive, and user-friendly web applications. I specialize in React, Tailwind CSS, Express.js, and MongoDB, and I’m committed to making web development smoother and more accessible for developers.
          <br />
          <br />
          While my core strength lies in frontend development, I’m actively expanding my skills in backend technologies to deliver more complete and seamless full-stack solutions. I’m a lifelong learner and innovator, always eager to grow and contribute to the developer community by creating tools and experiences that provide real value.
          </p>
        </div>
      </div>
  );
};

export default About;