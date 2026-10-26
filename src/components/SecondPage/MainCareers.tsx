import { motion } from 'motion/react';
import { FirstPartMainCareers } from './MainSecondSections/FIrstPartMainCareers';
import { SecondPartMainCareers } from './MainSecondSections/SecondPartMainCareers';
import { container, fadeUp, Reveal } from '../RevealAnimation/animations';

const viewport = { once: true, amount: 0.2 };

const values = [
  {
    title: 'Integrity',
    text: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.',
  },
  {
    title: 'Customer Centricity',
    text: 'Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.',
  },
  {
    title: 'Collaboration',
    text: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.',
  },
  {
    title: 'Innovation',
    text: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.',
  },
];

const benefits = [
  {
    icon: '/images/CareersPage/Main/IconContainer.png',
    title: 'Competitive Compensation',
    text: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.',
  },
  {
    icon: '/images/CareersPage/Main/IconContainer(3).png',
    title: 'Health and Wellness',
    text: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.',
  },
  {
    icon: '/images/CareersPage/Main/IconContainer(2).png',
    title: 'Retirement Planning',
    text: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.',
  },
  {
    icon: '/images/CareersPage/Main/IconContainer(4).png',
    title: 'Work-Life Balance',
    text: 'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.',
  },
];

export const MainCareers = () => {
  return (
    <main className='min-h-screen overflow-hidden bg-black'>
      <div className='m-auto w-full max-w-330 py-20 px-5'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={viewport}
          className='flex flex-col gap-4'
        >
          <motion.h2
            variants={fadeUp}
            className='font-sans text-3xl font-medium text-white sm:text-4xl'
          >
            Our <span className='text-lime-300'>Values</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='max-w-5xl font-sans text-base font-light text-white'
          >
            At YourBank, our values form the foundation of our organization and guide our actions.
            We believe in upholding the highest standards of integrity, delivering exceptional
            service, and embracing innovation. These values define our culture and shape the way we
            work together to achieve our goals.
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={viewport}
          className='mx-auto mt-20 grid grid-cols-1 items-center justify-center gap-20 sm:grid-cols-2'
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className='flex w-full max-w-160 flex-wrap gap-5'
            >
              <div className='w-0.5 shrink-0 self-stretch bg-lime-300'></div>
              <div className='flex flex-col gap-4 sm:gap-8'>
                <h2 className='font-sans text-3xl font-medium text-white/25 sm:text-4xl lg:text-6xl'>
                  {item.title}
                </h2>
                <p className='max-w-xl font-sans font-extralight text-white'>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <section className='m-auto w-full max-w-330 py-20 px-5'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={viewport}
          className='flex flex-col gap-4'
        >
          <motion.h2 variants={fadeUp} className='font-sans text-4xl font-medium text-white'>
            Our <span className='text-lime-300'>Benefits</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='max-w-5xl font-sans text-base font-light text-white'
          >
            At YourBank, we value our employees and are dedicated to their well-being and success.
            We offer a comprehensive range of benefits designed to support their personal and
            professional growth.
          </motion.p>
        </motion.div>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={viewport}
          className='mx-auto mt-20 grid grid-cols-1 items-center justify-center gap-20 sm:grid-cols-2'
        >
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className='flex w-full max-w-160 items-start gap-6 rounded-tl-[40px] rounded-br-[40px] border border-[#262626] bg-[#1a1a1a] p-6 md:p-8'
            >
              <img src={item.icon} alt='' className='shrink-0' />
              <div className='flex flex-col gap-3'>
                <h4 className='font-sans text-2xl font-medium text-white'>{item.title}</h4>
                <p className='font-sans text-base font-light text-zinc-400'>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <Reveal>
          <FirstPartMainCareers />
        </Reveal>
        <SecondPartMainCareers />
      </section>
    </main>
  );
};
