import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='sticky top-0 z-20 mx-auto flex flex-wrap w-full items-center justify-between px-8 md:px-10 py-8 bg-white'>
      <div className='logo w-[130px]'>
        <Link to="/">
          <img src='/logo.png' alt='logo'/>
        </Link>
      </div>
      <nav className='flex w-1/3 justify-end flex-wrap'>
        <div className='w-full hidden md:flex justify-end'>
          <ul className='flex justify-between gap-4'>
            <li>
              <Link to="">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="">
                Productos
              </Link>
            </li>
            <li>
              <Link to="">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="">
                Blog
              </Link>
            </li>
          </ul>
        </div>
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
              <li>
                <Link to="" onClick={toggleNavbar}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="" onClick={toggleNavbar}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="" onClick={toggleNavbar}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="" onClick={toggleNavbar}>
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="" onClick={toggleNavbar}>
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