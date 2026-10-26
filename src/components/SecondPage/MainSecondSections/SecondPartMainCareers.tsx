import { motion } from 'motion/react';
import { container, fadeUp } from '../../RevealAnimation/animations';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

const MotionLink = motion.create(Link);

const faqs = [
  {
    question: 'How do I open an account with YourBank?',
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    question: 'What documents do I need to provide to apply for a loan?',
    answer:
      "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
  },
  {
    question: 'How can I access my accounts online?',
    answer:
      'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
  },
  {
    question: 'How do I open an account with YourBank?',
    answer:
      'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
  },
  {
    question: 'Is my money safe with YourBank?',
    answer:
      'Yes. We use industry-standard encryption, multi-factor authentication, and 24/7 fraud monitoring to protect your accounts and personal information. Our security team continuously reviews activity to detect and prevent unauthorized access.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'Our support team is available 24/7 through live chat, phone, and email at support@yourbank.com. You can also visit the Help Center on our website for step-by-step guides and answers to common questions.',
  },
];

const INITIAL_COUNT = 4;

export const SecondPartMainCareers = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
  return (
    <div>
      <motion.section
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='mx-auto mt-20 w-full max-w-330 px-5 md:mt-40'
      >
        <motion.h2
          variants={fadeUp}
          className='font-sans text-3xl font-medium text-white sm:text-4xl'
        >
          <span className='text-lime-300'>Frequently </span>
          Asked Questions
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className='mt-2 max-w-2xl font-sans text-base font-light text-white/80'
        >
          Still you have any questions? Contact our Team via support@yourbank.com
        </motion.p>
        <div className='mt-10 grid grid-cols-1 gap-6 md:mt-15 lg:grid-cols-2 lg:gap-12'>
          <AnimatePresence initial={false}>
            {visibleFaqs.map((item, i) => (
              <motion.div
                key={item.question + i}
                variants={i < INITIAL_COUNT ? fadeUp : undefined}
                initial={i < INITIAL_COUNT ? undefined : { opacity: 0, y: 24 }}
                animate={i < INITIAL_COUNT ? undefined : { opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: i < INITIAL_COUNT ? 0 : (i - INITIAL_COUNT) * 0.12,
                }}
                className='flex w-full flex-col rounded-2xl border border-white/5 bg-white/5'
              >
                <h3 className='p-5 font-sans text-lg font-medium text-white sm:p-8'>
                  {item.question}
                </h3>
                <div className='h-px w-full bg-white/5'></div>
                <p className='p-5 font-sans font-light text-white/80 sm:p-8'>{item.answer}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <motion.button
          type='button'
          variants={fadeUp}
          onClick={() => setShowAll((s) => !s)}
          aria-expanded={showAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='m-auto mt-10 flex h-15 w-55 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/5 font-sans text-base font-medium text-white backdrop-blur-md hover:bg-white/10'
        >
          {showAll ? 'Show Less' : 'Load All FAQ’s'}
        </motion.button>
      </motion.section>
      <section className='mx-auto mt-30 w-full max-w-330 px-5'>
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className='relative isolate min-h-60 w-full overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md'
        >
          <motion.img
            src='/images/HomePage/Main/AbstractDesign.png'
            alt=''
            aria-hidden='true'
            animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className='pointer-events-none absolute left-0 top-0 -z-10 max-w-none select-none'
          />
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='flex flex-col items-start justify-between gap-8 p-6 sm:p-10 lg:flex-row lg:items-center lg:p-15'
          >
            <div className='flex flex-1 flex-col gap-5'>
              <motion.h2
                variants={fadeUp}
                className='font-sans text-2xl font-medium text-white sm:text-3xl lg:text-4xl'
              >
                Start your financial journey with{' '}
                <span className='text-lime-300'>YourBank today!</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className='max-w-3xl font-sans text-sm font-light text-white sm:text-base'
              >
                Ready to take control of your finances? Join YourBank now, and let us help you
                achieve your financial goals with our tailored solutions and exceptional customer
                service
              </motion.p>
            </div>
            <MotionLink
              to='/login'
              variants={fadeUp}
              whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(190, 242, 100, 0.45)' }}
              whileTap={{ scale: 0.95 }}
              className='group flex h-14 w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-lime-300 font-sans text-base text-black transition-colors hover:bg-lime-400 sm:h-16 sm:w-45'
            >
              Open Account
              <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
