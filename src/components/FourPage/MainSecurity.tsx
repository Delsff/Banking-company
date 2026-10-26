import { motion } from 'motion/react';
import { fadeUp, container } from '../RevealAnimation/animations';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

const viewport = { once: true, amount: 0.2 };

const benefits = [
  {
    icon: '/images/SecurityPage/Main/IconContainer.png',
    title: 'Secure Online Banking Platform',
    text: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.',
  },
  {
    icon: '/images/SecurityPage/Main/IconContainer(2).png',
    title: 'Multi-Factor Authentication',
    text: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.',
  },
  {
    icon: '/images/SecurityPage/Main/IconContainer(3).png',
    title: 'Fraud Monitoring',
    text: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.',
  },
  {
    icon: '/images/SecurityPage/Main/IconContainer(4).png',
    title: 'Secure Mobile Banking',
    text: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.',
  },
];

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

export const MainSecurity = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
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
            How We <span className='text-lime-300'>Protect You</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className='max-w-5xl font-sans text-base font-light text-white'
          >
            At YourBank, we prioritize the security and confidentiality of your financial
            information. Our state-of-the-art encryption technology and stringent data protection
            measures ensure your assets and transactions are safeguarded at all times
          </motion.p>
        </motion.div>
        <div className='m-auto w-full max-w-330 px-5 py-12 md:py-20'>
          <div
            className='mx-auto mt-10 w-full rounded-3xl bg-[#141414] bg-cover bg-center bg-no-repeat p-4 sm:p-8 md:mt-16 md:p-12 lg:p-16'
            style={{ backgroundImage: "url('/images/SecurityPage/Main/BackgroundImage.png')" }}
          >
            <motion.div
              variants={container}
              initial='hidden'
              whileInView='show'
              viewport={viewport}
              className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8'
            >
              {benefits.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className='flex w-full flex-col items-start gap-4 rounded-3xl border border-white/5 bg-[#141414]/80 p-5 sm:p-6 md:gap-6 md:p-8'
                >
                  <div className='flex items-center gap-4'>
                    <img src={item.icon} alt='' className='h-12 w-12 shrink-0 md:h-14 md:w-14' />
                    <h4 className='font-sans text-lg font-medium text-white sm:text-xl md:text-2xl'>
                      {item.title}
                    </h4>
                  </div>
                  <p className='font-sans text-sm font-light text-zinc-400 md:text-base'>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
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
      </div>
    </main>
  );
};
