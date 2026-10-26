import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { motion } from 'motion/react';

type UseCase = { title: string; icon: string };
type Stat = { value: string; label: string };

type UseCaseBlockProps = {
  title: string;
  text: string;
  details: string[];
  cases: UseCase[];
  stats: Stat[];
  reverse?: boolean;
};

const individuals: UseCaseBlockProps = {
  title: 'For Individuals',
  text: 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
  details: [
    'Fixed and variable rate mortgages with flexible terms',
    'Personal loans with quick online approval',
    'Retirement plans with employer match options',
  ],
  cases: [
    { title: 'Managing Personal Finances', icon: '/images/HomePage/Main/IconContainer.png' },
    { title: 'Saving for the Future', icon: '/images/HomePage/Main/IconContainer(2).png' },
    { title: 'Homeownership', icon: '/images/HomePage/Main/IconContainer(3).png' },
    { title: 'Education Funding', icon: '/images/HomePage/Main/IconContainer(4).png' },
  ],
  stats: [
    { value: '78%', label: 'Secure Retirement Planning' },
    { value: '63%', label: 'Manageable Debt Consolidation' },
    { value: '91%', label: 'Reducing financial burdens' },
  ],
};

const business: UseCaseBlockProps = {
  title: 'For Business',
  text: 'For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them',
  details: [
    'Fixed and variable rate mortgages with flexible terms',
    'Personal loans with quick online approval',
    'Retirement plans with employer match options',
  ],
  cases: [
    { title: 'Startups and Entrepreneurs', icon: '/images/HomePage/Main/IconContainer(5).png' },
    { title: 'Cash Flow Management', icon: '/images/HomePage/Main/IconContainer(6).png' },
    { title: 'Business Expansion', icon: '/images/HomePage/Main/IconContainer(7).png' },
    { title: 'Payment Solutions', icon: '/images/HomePage/Main/IconContainer(8).png' },
  ],
  stats: [
    { value: '65%', label: 'Cash Flow Management' },
    { value: '70%', label: 'Drive Business Expansion' },
    { value: '45%', label: 'Streamline payroll processing' },
  ],
  reverse: true,
};

const UseCaseBlock = ({ title, text, details, cases, stats, reverse }: UseCaseBlockProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2'>
      <div
        className={`relative isolate overflow-hidden rounded-2xl bg-white/5 p-8 backdrop-blur-md ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <img
          src='/images/HomePage/Main/AbstractDesign.png'
          alt=''
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-0 -z-10 max-w-none select-none'
        />
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {cases.map((item) => (
            <div
              key={item.title}
              className='flex h-40 flex-col items-center justify-center gap-5 rounded-lg bg-black/40 px-4 text-center'
            >
              <img src={item.icon} alt='' className='h-15 w-15' />
              <p className='font-sans text-base font-light text-white'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex flex-col gap-10 ${reverse ? 'lg:order-1' : ''}`}>
        <div className='flex flex-col gap-4'>
          <h3 className='font-sans text-4xl text-white'>{title}</h3>
          <p className='max-w-xl font-sans text-base font-light text-white/80'>{text}</p>
        </div>
        <div className='grid grid-cols-3'>
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex flex-col gap-2 ${i > 0 ? 'border-l border-white/10 pl-6' : 'pr-6'}`}
            >
              <p className='font-sans text-5xl font-bold text-lime-300'>{s.value}</p>
              <p className='font-sans text-base font-light text-white/80'>{s.label}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-6'>
          <AnimatePresence initial={false}>
            {open && (
              <motion.ul
                key='details'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='flex flex-col gap-3 overflow-hidden'
              >
                {details.map((d) => (
                  <li key={d} className='flex gap-3 font-sans text-base font-light text-white/80'>
                    <span className='text-lime-300'>•</span>
                    {d}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            type='button'
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className='h-12 w-45 cursor-pointer rounded-full border border-white/30 bg-white/5 font-sans text-base font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10'
          >
            {open ? 'Show Less' : 'Learn More'}
          </button>
        </div>
      </div>
    </div>
  );
};
export const FirstPartMain = () => {
  return (
    <section className='mx-auto mt-30 w-full max-w-330 px-5'>
      <h2 className='font-sans text-4xl font-medium text-lime-300'>Use Cases</h2>
      <p className='mt-2 max-w-2xl font-sans text-base font-light text-white/80'>
        At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a
        wide range of financial solutions
      </p>
      <UseCaseBlock {...individuals} />
      <UseCaseBlock {...business} />
    </section>
  );
};
