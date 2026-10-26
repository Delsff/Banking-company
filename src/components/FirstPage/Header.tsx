import { motion } from 'motion/react';
import { Navbar } from '../Navbar/Navbar';
import { container, fadeUp } from '../RevealAnimation/animations';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export const HeaderHome = () => {
  return (
    <header className='relative isolate z-50 flow-root bg-black pb-20'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
      >
        <img
          src='/images/HomePage/Header/Objects.png'
          alt=''
          className='absolute left-0 top-0 max-w-none select-none'
        />
      </div>
      <Navbar />
      <section className='mx-auto mt-15 flex w-full max-w-330 flex-col items-center justify-between gap-16 px-5 py-20 lg:flex-row'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex flex-col gap-8'
        >
          <motion.div
            variants={fadeUp}
            className='flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-md'
          >
            <img
              src='/images/HomePage/Header/Icon.png'
              alt=''
              className='h-5 w-5 shrink-0 object-contain'
            />
            <p className='font-sans text-base font-light text-white'>
              No LLC Required, No Credit Check.
            </p>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className='max-w-xl font-sans text-5xl font-medium text-white'
          >
            Welcome to YourBank Empowering Your{' '}
            <span className='text-lime-300'>Financial Journey</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className='max-w-xl font-sans text-base font-light text-white'
          >
            At YourBank, our mission is to provide comprehensive banking solutions that empower
            individuals and businesses to achieve their financial goals. We are committed to
            delivering personalized and innovative services that prioritize our customers' needs.
          </motion.p>
          <MotionLink
            to='/login'
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex h-14 w-full shrink-0 cursor-pointer items-center justify-center rounded-full bg-lime-300 font-sans text-base text-black hover:bg-lime-400 sm:h-16 sm:w-45'
          >
            Open Account
          </MotionLink>
        </motion.div>
        <motion.div
          className='relative isolate'
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <img
            src='/images/HomePage/Header/Container.png'
            alt='YourBank app preview'
            className='relative z-10 h-auto w-full max-w-140'
          />
          <img
            src='/images/HomePage/Header/AbstractDesign.png'
            alt=''
            aria-hidden='true'
            className='pointer-events-none absolute left-55 top-0 -z-10 max-w-none select-none'
          />
        </motion.div>
      </section>
    </header>
  );
};
