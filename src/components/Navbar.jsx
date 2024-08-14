import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <header className='sticky top-0 z-[10000] mx-auto flex flex-wrap w-full items-center justify-between px-4 md:px-10 py-6 bg-white border-b border-b-slate-400'>
      <div className='logo w-[100px] md:w-[130px]'>
        <Link to="/">
          <img src='/logo.png' alt='logo'/>
        </Link>
      </div>
      <nav className='flex w-1/3 justify-end flex-wrap'>
        {/* Menú de Escritorio */}
        <div className='w-full hidden md:flex justify-end'>
          <ul className='flex justify-between gap-4'>
            <li className="font-bold hover:text-orange-500">
              <Link to="/">
                Inicio
              </Link>
            </li>
            <li className="relative font-bold transition-all ease-in-out" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center">
                Productos <ChevronDown size={20} className="ml-1" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full mt-2 left-0 w-[200px] bg-white shadow-lg rounded-md overflow-hidden"
                  >
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/productos/alcantarillado" className="hover:text-orange-500">Alcantarillado</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/productos/sistema-hidraulico" className="hover:text-orange-500">Sistema Hidráulico</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/productos/c900" className="hover:text-orange-500">C-900</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <Link to="/productos/cedula-80" className="hover:text-orange-500">Cedula 80</Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
              <Link to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
              <Link to="/contacto">
                Contacto
              </Link>
            </li>
            <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
              <Link to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú Móvil */}
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X size='30' /> : <Menu size='30' />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-4 basis-full md:hidden overflow-hidden"
          >
            <ul className='flex flex-col items-center gap-4'>
              <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
                <Link to="/" onClick={toggleNavbar}>
                  Inicio
                </Link>
              </li>
              <li className="relative font-bold transition-all ease-in-out" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex items-center">
                  Productos <ChevronDown size={20} className="ml-1" />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full bg-white shadow-lg rounded-md overflow-hidden"
                    >
                      <li className="py-2 px-4 hover:bg-gray-100">
                        <Link to="/productos/alcantarillado" onClick={toggleNavbar} className="hover:text-orange-500">Alcantarillado</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100">
                        <Link to="/productos/sistema-hidraulico" onClick={toggleNavbar} className="hover:text-orange-500">Sistema Hidráulico</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100">
                        <Link to="/productos/c900" onClick={toggleNavbar} className="hover:text-orange-500">C-900</Link>
                      </li>
                      <li className="py-2 px-4 hover:bg-gray-100">
                        <Link to="/productos/cedula-80" onClick={toggleNavbar} className="hover:text-orange-500">Cedula 80</Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
                <Link to="/nosotros" onClick={toggleNavbar}>
                  Nosotros
                </Link>
              </li>
              <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
                <Link to="/contacto" onClick={toggleNavbar}>
                  Contacto
                </Link>
              </li>
              <li className="font-bold hover:text-orange-500 transition-all ease-in-out">
                <Link to="/blog" onClick={toggleNavbar}>
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};