import { AnimatePresence, motion } from 'motion/react';
import { Link, NavLink } from 'react-router';
import { navLinks } from '../Links/constants';
import { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative z-50 mx-5 mt-6 flex h-16 items-center justify-between rounded-full border border-white/30 bg-white/5 px-4 backdrop-blur-md md:mx-auto md:mt-15 md:h-20 md:w-[calc(100%-2.5rem)] md:max-w-330 md:px-5'
    >
      <Link to='/' onClick={close} className='flex items-center gap-2'>
        <img
          src='/images/HomePage/Header/shape-30.png'
          alt='YourBank logo'
          className='h-8 w-8 shrink-0 object-contain'
        />
        <span className='font-sans text-3xl font-light text-white'>YourBank</span>
      </Link>
      <ul className='hidden gap-10 md:flex'>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full border px-5 py-2 font-sans text-lg font-medium transition-colors ${
                  isActive
                    ? 'border-lime-300 text-lime-300'
                    : 'border-white/20 text-white hover:border-white/40 hover:text-gray-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='hidden items-center gap-5 md:flex'>
        <Link to='/register' className='font-sans text-base text-white hover:text-gray-300'>
          Sign Up
        </Link>
        <Link
          to='/login'
          className='flex h-12 w-25 items-center justify-center rounded-full bg-lime-300 font-sans text-base text-black hover:bg-lime-400'
        >
          Login
        </Link>
      </div>
      <button
        type='button'
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className='relative flex h-10 w-10 cursor-pointer items-center justify-center md:hidden'
      >
        <span
          className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
            open ? 'rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ${
            open ? '-rotate-45' : 'translate-y-2'
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='absolute left-0 right-0 top-full mt-3 flex flex-col gap-2 rounded-3xl border border-white/20 bg-[#0a0a0a] p-4 md:hidden'
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-full px-5 py-3 text-center font-sans text-lg font-medium transition-colors ${
                    isActive ? 'bg-lime-300/10 text-lime-300' : 'text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className='mt-2 grid grid-cols-2 gap-3'>
              <Link
                to='/register'
                onClick={close}
                className='flex h-12 items-center justify-center rounded-full bg-white/10 font-sans text-base text-white hover:bg-white/15'
              >
                Sign Up
              </Link>
              <Link
                to='/login'
                onClick={close}
                className='flex h-12 items-center justify-center rounded-full bg-lime-300 font-sans text-base text-black hover:bg-lime-400'
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
