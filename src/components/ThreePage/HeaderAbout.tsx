import { Navbar } from '../Navbar/Navbar';
import { container, fadeUp } from '../RevealAnimation/animations';
import { motion } from 'motion/react';

export const HeaderAbout = () => {
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
            className='z-10 w-full max-w-2xl rounded-tl-[40px] rounded-br-[40px] border border-[#262626] bg-[#1a1a1a] p-8 md:p-12 lg:-mr-16 lg:self-start'
          >
            <motion.p
              variants={fadeUp}
              className='mb-3 font-sans text-sm font-medium text-white md:text-base'
            >
              Welcome to YourBank
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className='font-sans text-3xl font-medium leading-tight text-white md:text-5xl'
            >
              Where Banking Meets<span className='text-[#CAFF33]'> Excellence!</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className='mt-5 font-sans text-sm font-light leading-relaxed text-zinc-400 md:text-base'
            >
              At YourBank, we believe that banking should be more than just transactions. It should
              be an experience that empowers individuals and businesses to thrive and reach their
              financial goals. As a trusted financial institution, we are committed to delivering
              exceptional banking services that go beyond expectations. With a focus on innovation,
              personalized solutions, and unwavering integrity, we strive to provide the best
              banking experience for our valued customers. Join us on this exciting journey and
              discover a new level of banking excellence.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className='h-72 w-full max-w-2xl overflow-hidden rounded-3xl md:h-96 lg:h-130 lg:w-1/2'
          >
            <img
              src='/images/AboutPage/Header/imgHeaderAbout.png'
              alt=''
              className='h-full w-full object-cover'
            />
          </motion.div>
        </div>
      </motion.section>
    </header>
  );
};
