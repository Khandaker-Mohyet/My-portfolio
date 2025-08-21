const Experience = () => {
  return (
    <div id="experience" className="w-10/12 mx-auto py-16">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Experience
      </h2>

      {/* Experience Card 1 */}
      <div className="mt-10 flex justify-center">
        <div className="w-full md:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-white">Supply Chain Supervisor</h3>
          <p className="text-gray-400">Marico Bangladesh LTD.</p>
          <p className="text-gray-500">Duration: 01-03-2022 to 30-03-2022</p>
          <p className="text-gray-300 mt-4">
            I used to manage all Production materials and finished goods of this company. 
            I used to create VAT file 6.3 and 6.5.
          </p>
        </div>
      </div>

      {/* Experience Card 2 */}
      <div className="mt-6 flex justify-center">
        <div className="w-full md:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold text-white">Frontend Developer (CMS)</h3>
          <p className="text-gray-400">Softvance Agency</p>
          <p className="text-gray-500">Duration: 01-07-2025 - Present</p>
          <p className="text-gray-300 mt-4">
            My responsibility is to create websites with good communication with clients 
            and deliver high-quality CMS-based solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
