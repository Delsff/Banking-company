import { motion } from 'motion/react';
import { container, fadeUp } from '../RevealAnimation/animations';
import { Link } from 'react-router-dom';
import { navLinks } from '../Links/constants';
export const FooterHome = () => {
  return (
    <footer className=' bg-black py-16 md:py-24'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='mx-auto flex w-full max-w-330 flex-col items-center gap-10 px-5'
      >
        <motion.a variants={fadeUp} href='#' className='flex items-center gap-2'>
          <img
            src='/images/HomePage/Header/shape-30.png'
            alt='YourBank logo'
            className='h-10 w-10 shrink-0 object-contain'
          />
          <span className='font-sans text-3xl font-light text-white'>YourBank</span>
        </motion.a>
        <motion.ul variants={fadeUp} className='flex flex-wrap justify-center gap-x-10 gap-y-4'>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className='font-sans text-lg font-normal text-white transition-colors hover:text-gray-300'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
        <div className='h-px w-full bg-white/5' />
        <motion.div
          variants={fadeUp}
          className='flex flex-col items-center gap-6 md:flex-row md:gap-16 '
        >
          <div className='flex flex-wrap gap-2'>
            <img src='/images/HomePage/Footer/Icon.png' alt='' />
            <a href='#' className='font-sans font-light text-white hover:text-gray-300'>
              hello@skillbridge.com
            </a>
          </div>
          <div className='flex flex-wrap gap-2'>
            <img src='/images/HomePage/Footer/Icon(2).png' alt='' />
            <a href='#' className='font-sans font-light text-white hover:text-gray-300'>
              +91 91813 23 2309
            </a>
          </div>
          <div className='flex flex-wrap gap-2'>
            <img src='/images/HomePage/Footer/Icon(3).png' alt='' />
            <a href='#' className='font-sans font-light text-white hover:text-gray-300'>
              Somewhere in the World
            </a>
          </div>
        </motion.div>
        <div className='h-px w-full bg-white/5 mt-5' />
        <motion.div
          variants={fadeUp}
          className='flex w-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md md:h-20 md:flex-row md:justify-between md:rounded-full md:py-0'
        >
          <div className='text-white'>
            <div className='flex gap-5'>
              <a href='#' aria-label='Facebook'>
                <img src='/images/HomePage/Footer/Button.png' alt='' />
              </a>
              <a href='#' aria-label='Twitter'>
                <img src='/images/HomePage/Footer/Button(2).png' alt='' />
              </a>
              <a href='#' aria-label='LinkedIn'>
                <img src='/images/HomePage/Footer/Button(3).png' alt='' />
              </a>
            </div>
          </div>
          <p className='font-sans text-sm font-extralight text-white md:text-base'>
            YourBank All Rights Reserved
          </p>
          <div className='text-white'>
            <p className='font-sans text-sm font-extralight text-white md:text-base'>
              Privacy Policy | Terms of Service
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
