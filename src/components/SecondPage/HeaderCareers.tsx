import { Navbar } from '../Navbar/Navbar';
import { container, fadeUp } from '../RevealAnimation/animations';
import { motion } from 'motion/react';
export const HeaderCareers = () => {
  return (
    <header className='relative isolate z-50 flow-root bg-black pb-20'>
      <Navbar />
      <motion.section
        variants={fadeUp}
        initial='hidden'
        animate='show'
        className='mx-auto mt-25 w-full max-w-7xl rounded-3xl border border-[#262626] bg-[#141414] p-6 md:p-12 lg:p-16'
      >
        <div className='relative flex w-full flex-col items-center justify-center lg:flex-row lg:items-stretch'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='z-10 w-full max-w-2xl rounded-tl-[40px] rounded-br-[40px] border border-[#262626] bg-[#1a1a1a] p-8 md:p-12 lg:-mr-16 lg:flex lg:flex-col lg:justify-center'
          >
            <motion.h1
              variants={fadeUp}
              className='font-sans text-3xl font-medium leading-tight text-white md:text-5xl'
            >
              Welcome to <span className='text-[#CAFF33]'>YourBank</span> Careers!
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className='mt-5 font-sans text-sm font-light leading-relaxed text-zinc-400 md:text-base'
            >
              Join our team and embark on a rewarding journey in the banking industry. At YourBank,
              we are committed to fostering a culture of excellence and providing opportunities for
              professional growth. With a focus on innovation, customer service, and integrity, we
              strive to make a positive impact in the lives of our customers and communities. Join
              us today and be a part of our mission to shape the future of banking.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='w-full max-w-2xl overflow-hidden rounded-3xl lg:w-1/2'
          >
            <img
              src='/images/CareersPage/Header/Image.png'
              alt='YourBank Careers'
              className='h-full w-full object-cover'
            />
          </motion.div>
        </div>
      </motion.section>
    </header>
  );
};
