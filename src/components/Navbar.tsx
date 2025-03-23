
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        scrolled ? 'glass shadow-soft py-3' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link 
            to="/" 
            className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-primary">Tidy</span>Data
          </Link>
        </div>
        
        <nav className="flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={cn(
                  "transition-all duration-200 hover:text-primary relative py-2",
                  location.pathname === "/" ? 
                    "text-primary font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" : 
                    "text-foreground/80"
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={cn(
                  "transition-all duration-200 hover:text-primary relative py-2",
                  location.pathname === "/about" ? 
                    "text-primary font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" : 
                    "text-foreground/80"
                )}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
