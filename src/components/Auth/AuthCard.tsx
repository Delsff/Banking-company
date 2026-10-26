import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { container, fadeUp } from '../RevealAnimation/animations';

const socials = [
  { name: 'Google', icon: '/images/LoginAndRegister/IconContainer.png' },
  { name: 'Facebook', icon: '/images/LoginAndRegister/IconContainer(2).png' },
  { name: 'Apple', icon: '/images/LoginAndRegister/IconContainer(3).png' },
];

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const AuthCard = ({ title, subtitle, children }: Props) => {
  return (
    <section className='mx-auto mt-10 w-full max-w-5xl px-5 md:mt-16'>
      <div className='relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#141414]'>
        <img
          src='/images/LoginAndRegister/AbstractDesign.png'
          alt=''
          aria-hidden='true'
          className='pointer-events-none absolute right-0 top-0 -z-10 hidden select-none sm:block'
        />
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5 py-10 sm:px-10 md:py-16'
        >
          <motion.div variants={fadeUp} className='text-center'>
            <h1 className='font-sans text-3xl font-medium text-lime-300 md:text-4xl'>{title}</h1>
            <p className='mt-2 font-sans text-sm font-light text-white/80'>{subtitle}</p>
          </motion.div>
          <motion.div variants={fadeUp} className='w-full'>
            {children}
          </motion.div>
          <motion.div variants={fadeUp} className='flex w-full max-w-md items-center gap-4'>
            <div className='h-px flex-1 bg-white/10'></div>
            <span className='font-sans text-xs font-light text-white/60'>Or Continue with</span>
            <div className='h-px flex-1 bg-white/10'></div>
          </motion.div>
          <motion.div variants={fadeUp} className='flex gap-4'>
            {socials.map((s) => (
              <motion.button
                key={s.name}
                type='button'
                aria-label={`Continue with ${s.name}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='flex h-15 w-15 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10'
              >
                <img src={s.icon} alt='' className='h-15 w-15 object-contain' />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
