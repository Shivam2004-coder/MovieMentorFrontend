import { useSelector } from "react-redux";

const Footer = () => {
  const { translations } = useSelector((store) => store.language); // Get translations from Redux


    return (
      <footer className="bg-gray-900 text-gray-300 py-3 bottom-0">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          {/* Logo or Website Name */}
          <h2 className="text-3xl flex font-bold text-white mb-4">
            <img alt="websiteLogo" src="/website-logo.jpg" className="w-10 h-10 rounded-md mr-2" /> <span>MovieMentor</span>
          </h2>
          
          {/* Navigation Links */}
  
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-xl hover:text-blue-500"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-blue-400"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-pink-500"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-xl hover:text-red-500"></i>
            </a>
          </div>
  
          {/* Copyright */}
          <p className="text-sm">&copy; {new Date().getFullYear()} MovieMentor. {translations.AllRightsReserved}.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  