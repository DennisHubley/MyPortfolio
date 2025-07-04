import React from 'react';
import { Heart, Gamepad2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 border-t border-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gamepad2 className="h-6 w-6 text-orange-500" />
            <span className="text-lg font-bold text-white">GameDev Portfolio</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 fill-current" />
            <span>and lots of</span>
            <Gamepad2 className="h-4 w-4 text-orange-400 mx-1" />
            <span>© 2024 Game Developer. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;