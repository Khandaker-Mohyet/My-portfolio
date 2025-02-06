

const Education = () => {
  return (
    <div className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Education
      </h2>

      {/* Education Cards */}
      <div className="mt-10 flex flex-col md:flex-row gap-8 justify-center">
        
        {/* Education 1 */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-white">Bachelor of Business Studies (B.B.S.)</h3>
          <p className="text-gray-400">National University</p>
          <p className="text-gray-400">Vhawal Badra Alom Gov College</p>
          <p className="text-gray-500">Pussing Year: 2023</p>
        </div>

        {/* Education 2 */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-white">[Degree Name]</h3>
          <p className="text-gray-400">[Institution Name]</p>
          <p className="text-gray-500">[Year]</p>
        </div>

      </div>
    </div>
  );
};

export default Education;
