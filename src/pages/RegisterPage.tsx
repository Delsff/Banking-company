import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar/Navbar';
import { FooterHome } from '../components/FirstPage/Footer';
import { AuthCard } from '../components/Auth/AuthCard';
import { AuthField } from '../components/Auth/AuthField';
import { Pagination } from '../components/FirstPage/Pagination/Pagination';
import { reviewsByTab } from '../components/Links/constants';
import type { TestimonialTab } from '../components/Links/constants';
import { useState } from 'react';
import { Reveal } from '../components/RevealAnimation/animations';
import { AnimatePresence } from 'motion/react';
import { fadeUp, container } from '../components/RevealAnimation/animations';

const testimonialTabs: { id: TestimonialTab; label: string }[] = [
  { id: 'individuals', label: 'For Individuals' },
  { id: 'businesses', label: 'For Businesses' },
];

const schema = z
  .object({
    name: z.string().min(2, 'At least 2 characters'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email'),
    password: z.string().min(8, 'At least 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm your password'),
    terms: z.literal(true, { message: 'You must accept the terms' }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do no match',
  });
type FormData = z.infer<typeof schema>;

export const RegisterPage = () => {
  const [tab, setTab] = useState<TestimonialTab>('individuals');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async (data: FormData) => {
    console.log(data);
    navigate('/');
  };
  return (
    <div className='min-h-screen bg-black'>
      <header className='bg-black flow-root'>
        <Navbar />
      </header>
      <AuthCard
        title='Sign Up'
        subtitle='Create your account to start your financial journey with YourBank.'
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className='mx-auto flex w-full max-w-2xl flex-col gap-4'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <AuthField
              label='Full Name'
              placeholder='Enter your Name'
              autoComplete='name'
              registration={register('name')}
              error={errors.name?.message}
            />
            <AuthField
              label='Email'
              type='email'
              placeholder='Enter your Email'
              autoComplete='email'
              registration={register('email')}
              error={errors.email?.message}
            />
            <AuthField
              label='Password'
              type='password'
              placeholder='Create a Password'
              autoComplete='new-password'
              registration={register('password')}
              error={errors.password?.message}
            />
            <AuthField
              label='Confirm Password'
              type='password'
              placeholder='Repeat your Password'
              autoComplete='new-password'
              registration={register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>
          <label className='flex items-start gap-3 font-sans text-sm font-light text-white/80'>
            <input
              type='checkbox'
              {...register('terms')}
              className='mt-1 h-4 w-4 accent-lime-300'
            />
            I agree to the Terms of Service and Privacy Policy
          </label>
          {errors.terms && <p className='font-sans text-xs text-red-400'>{errors.terms.message}</p>}
          <div className='mx-auto flex w-full max-w-md flex-col gap-3'>
            <motion.button
              type='submit'
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='h-12 w-full cursor-pointer rounded-full bg-lime-300 font-sans text-base text-black hover:bg-lime-400 disabled:opacity-60'
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </motion.button>
            <Link
              to='/login'
              className='flex h-12 w-full items-center justify-center rounded-full bg-white/10 font-sans text-base text-white hover:bg-white/15'
            >
              Login
            </Link>
          </div>
        </form>
      </AuthCard>
      <section className='mx-auto mt-40 w-full max-w-330 px-5 mb-10'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col justify-between gap-8 md:flex-row md:items-end'
        >
          <div className='flex flex-col gap-4'>
            <motion.h2
              variants={fadeUp}
              className='font-sans text-3xl font-medium text-white sm:text-4xl'
            >
              Our <span className='text-lime-300'>Testimonials</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className='max-w-xl font-sans text-base font-light text-white'
            >
              Discover how YourBank has transformed lives with innovative digital solutions and
              personalized customer service. See why our clients trust us for a secure and
              prosperous financial journey
            </motion.p>
          </div>
          <motion.div variants={fadeUp} role='tablist' className='flex flex-wrap gap-4'>
            {testimonialTabs.map((t) => (
              <motion.button
                key={t.id}
                type='button'
                role='tab'
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`h-12 w-45 cursor-pointer rounded-full font-sans text-base transition-colors ${
                  tab === t.id
                    ? 'bg-lime-300 text-black'
                    : 'bg-white/5 text-white backdrop-blur-md hover:bg-white/10'
                }`}
              >
                {t.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        <Reveal>
          <AnimatePresence mode='wait'>
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Pagination reviews={reviewsByTab[tab]} />
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </section>
      <FooterHome />
    </div>
  );
};
