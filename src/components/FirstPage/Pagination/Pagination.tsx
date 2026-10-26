import { useState } from 'react';
import type { Review } from '../../Links/constants';

const Arrow = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg
    viewBox='0 0 24 24'
    className={`h-5 w-5 ${dir === 'left' ? 'rotate-180' : ''}`}
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
);

export const Pagination = ({ reviews = [] }: { reviews?: Review[] }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }
  const [active, setActive] = useState(0);
  const last = reviews.length - 1;
  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(last, i + 1));
  const arrowClass =
    'flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full ' +
    'border border-white/5 bg-white/5 text-lime-300 transition-opacity ' +
    'hover:bg-white/10 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-white/5';
  return (
    <section className='mx-auto mt-30 w-full max-w-330 px-5'>
      <div className='flex items-center gap-4'>
        <button
          type='button'
          onClick={prev}
          disabled={active === 0}
          className={arrowClass}
          aria-label='Previous review'
        >
          <Arrow dir='left' />
        </button>
        <div className='flex-1 overflow-hidden lg:mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]'>
          <div
            className='flex transition-transform duration-500 ease-out
                      transform-[translateX(calc(var(--i)*-100%))]
                      lg:transform-[translateX(calc((var(--i)-1)*-33.3333%))]'
            style={{ '--i': active } as React.CSSProperties}
          >
            {reviews.map((r, i) => {
              const isActive = i === active;
              return (
                <article
                  key={r.name || i}
                  onClick={() => setActive(i)}
                  className={`flex basis-full shrink-0 cursor-pointer flex-col items-center gap-8 px-6 text-center transition-opacity duration-500 lg:basis-1/3 ${
                    isActive ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className='flex w-full items-center gap-4'>
                    <div className='h-px flex-1 bg-linear-to-r from-transparent to-white/10' />
                    <span className='font-serif text-8xl leading-none text-lime-300'>“</span>
                    <div className='h-px flex-1 bg-linear-to-l from-transparent to-white/10' />
                  </div>
                  <p className='font-sans text-base font-light text-white'>{r.text}</p>
                  <p className='font-sans text-base font-medium text-lime-300'>{r.name}</p>
                </article>
              );
            })}
          </div>
        </div>
        <button
          type='button'
          onClick={next}
          disabled={active === last}
          className={arrowClass}
          aria-label='Next review'
        >
          <Arrow dir='right' />
        </button>
      </div>
      <div className='mt-8 flex justify-center gap-2 lg:hidden'>
        {reviews.map((r, i) => (
          <button
            key={r.name || i}
            type='button'
            onClick={() => setActive(i)}
            aria-label={`Show review ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? 'w-6 bg-lime-300' : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
