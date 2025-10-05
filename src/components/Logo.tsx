import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo-w.png';

interface LogoProps {
  logoTextColor?: string;
  subtitleColor?: string;
}

const Logo: React.FC<LogoProps> = ({ logoTextColor, subtitleColor }) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="p-2 rounded-xl group-hover:scale-105 transition-transform duration-200">
        <img 
          src={logo} 
          alt="WalWorking Technologies Logo" 
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-lg ${logoTextColor} group-hover:text-bs-primary transition-colors duration-200`}>
          WalWorking Technologies
        </span>
        <span className={`text-xs ${subtitleColor}`}>
          Fire Protection & Safety Solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;