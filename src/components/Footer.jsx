import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-4 sm:px-8 md:px-12 lg:px-24 mt-28 w-full">
      <div className="flex flex-col w-full space-y-10">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center gap-24 w-full">
          <div className="flex-1 w-full max-w-full md:max-w-lg p-6 md:p-10 bg-[#373737] space-y-6">
            <div className="flex justify-start items-start">
              <img src={logo} alt="Logo" className="w-auto" />
            </div>
            <p className="text-xs text-left">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <div className="space-y-2">
              <p className="font-bold text-start">Join Newsletters</p>
              <div className="flex items-center w-full bg-[#3d3d3d] rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Insert your mail here"
                  className="w-full p-2 px-4 bg-transparent text-sm text-gray-200 focus:outline-none"
                />
                <div className="p-2 pr-4 bg-red-600 cursor-pointer">
                  <ArrowRight className="text-black" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 flex-1 w-full justify-between">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Movies</li>
                <li>TV Show</li>
                <li>Videos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Media Group</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Nice Studio</li>
                <li>Nice News</li>
                <li>Nice TV</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sitemap</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 w-full max-w-full">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 text-sm text-gray-300">
              <h4 className="font-semibold text-white text-lg">Contact</h4>
              <p className="flex items-center justify-center lg:justify-start gap-2 break-words">
                <Phone size={16} /> +971 366-647-3637
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-2 break-words">
                <Mail size={16} /> aurstudio@hello.com
              </p>
              <p className="flex items-start justify-center lg:justify-start gap-2 break-words">
                <MapPin size={16} />
                <span>
                  8819 Ohio St. South Gate, <br />
                  California 90280
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
