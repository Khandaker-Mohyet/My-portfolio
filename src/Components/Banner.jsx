import { CiLinkedin } from 'react-icons/ci';
import image from '../assets/image.png'
import { FaDownload, FaFacebook, FaGithub } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto border-2 text-white">
      <div className="flex">
        {/* deatils */}
        <div className='flex-1 space-y-4'>
          <div className=''>
            <h1 className='text-4xl font-semibold'>helow </h1>
            <h1 className='text-4xl font-semibold'>This is Abdullah Al Mohyet</h1>
            <h1 className='text-2xl font-semibold'>I am a Frontand Developer</h1>
          </div>
          <div className='flex'>
            <button><CiLinkedin className='size-12' /></button>
            <button><FaGithub className='size-12'/></button>
            <button><FaFacebook className='size-12'/></button>
          </div>
          <button className='btn btn-success'><FaDownload /> Download Resume</button>
        </div>


        {/* image */}
        <div className='border-2 flex-1'>
          <img className='w-[350px] h-[350px] rounded-full text-center' src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;