import { FirstPartMain } from './MainSections/FirstPartMain';
import { SecondPartMain } from './MainSections/SecondPartMain';
import { ThreePartMain } from './MainSections/ThreePartMain';
import { AnimatePresence, motion } from 'motion/react';
import { container, fadeUp } from '../RevealAnimation/animations';
import { useState } from 'react';

type Tab = 'individuals' | 'businesses';

const tabs: { id: Tab; label: string }[] = [
  { id: 'individuals', label: 'For Individuals' },
  { id: 'businesses', label: 'For Businesses' },
];

const productByTab = {
  individuals: [
    {
      icon: '/images/HomePage/Header/IconContainer.png',
      title: 'Checking Accounts',
      text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
    },
    {
      icon: '/images/HomePage/Header/IconContainer2.png',
      title: 'Savings Accounts',
      text: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      icon: '/images/HomePage/Header/IconContainer3.png',
      title: 'Loans and Mortgages',
      text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
    },
  ],
  businesses: [
    {
      icon: '/images/HomePage/Header/IconContainer.png',
      title: 'Business Accounts',
      text: 'Placeholder: manage payroll, payments and cash flow with accounts built for companies of any size.',
    },
    {
      icon: '/images/HomePage/Header/IconContainer2.png',
      title: 'Business Loans',
      text: 'Placeholder: flexible financing to help you invest, expand and cover working capital.',
    },
    {
      icon: '/images/HomePage/Header/IconContainer3.png',
      title: 'Merchant Services',
      text: 'Placeholder: accept card and online payments with fast settlement and transparent fees.',
    },
  ],
};

export const MainHome = () => {
  const [tab, setTab] = useState<Tab>('individuals');
  const products = productByTab[tab];
  return (
    <main className='min-h-screen overflow-hidden bg-black'>
      <div className='mx-auto w-full max-w-330 px-5 py-20'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col justify-between gap-8 md:flex-row md:items-end'
        >
          <motion.div variants={fadeUp} className='flex flex-col gap-4'>
            <h2 className='font-sans text-4xl font-medium text-white'>
              Our <span className='text-lime-300'>Products</span>
            </h2>
            <p className='max-w-xl font-sans text-base font-light text-white'>
              Discover a range of comprehensive and customizable banking products at YourBank,
              designed to suit your unique financial needs and aspirations
            </p>
          </motion.div>
          <motion.div variants={fadeUp} role='tablist' className='flex flex-wrap gap-4'>
            {tabs.map((t) => (
              <button
                key={t.id}
                type='button'
                role='tab'
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`h-12 w-45 cursor-pointer rounded-full font-sans text-base transition-colors ${tab === t.id ? 'bg-lime-300 text-black' : 'bg-white/5 text-white backdrop-blur-md hover:bg-white/10'}`}
              >
                {t.label}
              </button>
            ))}
          </motion.div>
        </motion.div>
        <AnimatePresence mode='wait'>
          <motion.section
            key={tab}
            variants={container}
            initial='hidden'
            animate='show'
            exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            className='mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0'
          >
            {products.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`flex flex-col items-center gap-10 text-center md:px-8 ${i > 0 ? 'md:border-none md:border-white/20' : ''}`}
              >
                <img src={item.icon} alt='' className='h-20 w-20' />
                <div className='flex flex-col gap-3'>
                  <h3 className='font-sans text-2xl font-medium text-white'>{item.title}</h3>
                  <p className='font-sans text-base font-light text-white/80'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.section>
        </AnimatePresence>
      </div>
      <FirstPartMain />
      <SecondPartMain />
      <ThreePartMain />
    </main>
  );
};
