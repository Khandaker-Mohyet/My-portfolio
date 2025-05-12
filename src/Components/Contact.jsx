import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-10/12 mx-auto py-16 flex flex-col md:flex-row gap-12">
      {/* Left Side: Contact Info */}
      <div className=" flex-1 flex items-center justify-center p-4">
        <div className=" text-white ">
        <h2 className="text-4xl font-extrabold text-blue-400">Get in Touch</h2>
        <p className="text-gray-400 mt-2">Have a question or want to work together? Drop us a message!</p>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-gray-400">mohyet0007@gmail.com</p>
            </div>
            </div>
            
          <div className="flex items-center gap-4">
            <FaPhoneSquareAlt className="text-pink-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-400">01700592546</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="text-gray-400">Gazipur</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-lg">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white" />
          <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white h-32"></textarea>
          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:opacity-90">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
