import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { container, fadeUp } from '../../RevealAnimation/animations';

const tabs = [
  {
    name: 'Online Banking',
    cards: [
      {
        title: '24/7 Account Access',
        text: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.',
      },
      {
        title: 'Mobile Banking App',
        text: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.',
      },
      {
        title: 'Secure Transactions',
        text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
      },
      {
        title: 'Bill Pay and Transfers',
        text: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.',
      },
    ],
  },
  {
    name: 'Financial Tools',
    cards: [
      {
        title: 'Budget Planner',
        text: 'Take control of your spending with our built-in budget planner. Set monthly limits, track expenses by category, and see where your money goes at a glance.',
      },
      {
        title: 'Loan and Mortgage Calculator',
        text: 'Estimate your monthly payments before you apply. Adjust the amount, term, and interest rate to find a loan that fits comfortably within your budget.',
      },
      {
        title: 'Savings Goals',
        text: 'Create goals for a vacation, a new home, or an emergency fund. Set up automatic contributions and watch your progress grow over time.',
      },
      {
        title: 'Spending Insights',
        text: 'Get clear, personalized reports on your income and expenses. Spot trends, find ways to save, and make smarter financial decisions with confidence.',
      },
    ],
  },
  {
    name: 'Customer Support',
    cards: [
      {
        title: '24/7 Live Chat',
        text: 'Get quick answers whenever you need them. Our support team is available around the clock through live chat to help with any question or issue.',
      },
      {
        title: 'Dedicated Phone Support',
        text: 'Speak directly with a friendly specialist who can guide you through account questions, card issues, and anything else you need help with.',
      },
      {
        title: 'Help Center',
        text: 'Browse step-by-step guides and answers to the most common questions. Find the information you need quickly, without waiting for a reply.',
      },
      {
        title: 'Fraud and Dispute Assistance',
        text: 'If you notice suspicious activity, our team acts immediately to secure your account, investigate the issue, and resolve disputes as fast as possible.',
      },
    ],
  },
];

const ArrowIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='h-6 w-6 shrink-0 text-lime-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M7 17L17 7M9 7h8v8' />
  </svg>
);

export const SecondPartMain = () => {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      className='mx-auto mt-40 w-full max-w-330 px-5'
    >
      <motion.h2 variants={fadeUp} className='font-sans text-4xl font-medium text-white'>
        Our <span className='text-lime-300 font-sans text-4xl font-medium'>Features</span>
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className='mt-2 max-w-2xl font-sans text-base font-light text-white/85'
      >
        Experience a host of powerful features at YourBank, including seamless online banking,
        secure transactions, and personalized financial insights, all designed to enhance your
        banking experience
      </motion.p>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr] mt-15'>
        <motion.div
          variants={fadeUp}
          className='flex flex-row lg:flex-col gap-3 overflow-x-auto rounded-2xl bg-white/5 p-4 lg:self-start border border-white/10 backdrop-blur-md'
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => setActive(i)}
              type='button'
              role='tab'
              aria-selected={active === i}
              className={`h-12 shrink-0 cursor-pointer rounded-full px-6 font-sans text-base transition-all duration-300 ${
                active === i
                  ? 'bg-lime-300 text-black font-medium shadow-lg shadow-lime-300/10'
                  : 'bg-black/20 text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='grid grid-cols-1 gap-6 md:grid-cols-2'
          >
            {tabs[active].cards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, borderColor: 'rgba(190, 242, 100, 0.4)' }}
                className='group flex min-h-44 flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-md transition-colors cursor-default'
              >
                <div className='flex items-center justify-between gap-4'>
                  <h3 className='font-sans text-xl font-medium text-white'>{card.title}</h3>
                  <ArrowIcon />
                </div>
                <p className='font-sans text-base font-light text-white/70 leading-relaxed'>
                  {card.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
