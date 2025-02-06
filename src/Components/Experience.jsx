

const Experience = () => {
  return (
    <div className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Experience
      </h2>

      {/* Experience Card */}
      <div className="mt-10 flex justify-center">
        <div className="w-full md:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-white">Supply Chain Supevisor</h3>
          <p className="text-gray-400">Marico Bangladesh LTD.</p>
          <p className="text-gray-500">Duration:01-03-2022 to 30-03-2022</p>
          <p className="text-gray-300 mt-4">[Short Description of Responsibilities]</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
