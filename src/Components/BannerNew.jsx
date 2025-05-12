import { CiLinkedin } from 'react-icons/ci';
import image from '../assets/image.png'
import { FaDownload, FaFacebook, FaGithub } from 'react-icons/fa';

const BannerNew = () => {
  return (
    <div id='home' className="w-10/12 mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center mt-7 justify-between gap-10 bg-gray-900 text-white p-10 rounded-2xl shadow-lg">

        {/* Details Section */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-300">Hello,</h1>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              I'm Abdullah Al Mohyet
            </h1>
            <h1 className="text-2xl font-semibold text-gray-400">Frontend Developer</h1>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/abdullah-al-mohyet-724ba1323/" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition duration-300">
              <CiLinkedin className="size-10 text-white" />
            </a>
            <a href="https://github.com/Khandaker-Mohyet" className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300">
              <FaGithub className="size-10 text-white" />
            </a>
            <a href="https://www.facebook.com/share/17exYoJUrr/" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300">
              <FaFacebook className="size-10 text-white" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a href="/resume-1.pdf"
            download
            className='inline-block'
          >
          <button className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            <FaDownload /> Download Resume
          </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img className="w-[350px] h-[350px] rounded-full border-4 border-purple-500 shadow-lg" src={image} alt="Profile" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-purple-400 transition duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerNew;