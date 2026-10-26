import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { container, fadeUp } from '../../RevealAnimation/animations';

const jobs = [
  {
    id: 'relationship-manager',
    title: 'Relationship Manager',
    location: 'India',
    department: 'Retail Banking',
    about:
      'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
    requirements: [
      "Bachelor's degree in Business, Finance, or a related field",
      'Minimum of 3 years of experience in sales or relationship management in the banking industry',
      'Proven track record of meeting and exceeding sales targets',
      'Excellent interpersonal and negotiation skills',
      'Strong knowledge of banking products and services',
    ],
  },
  {
    id: 'risk-analyst',
    title: 'Risk Analyst',
    location: 'India',
    department: 'Risk Management',
    about:
      'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
    requirements: [
      "Bachelor's degree in Finance, Economics, or a related field",
      'Minimum of 2 years of experience in risk management or a similar role',
      'Proficiency in risk analysis tools and techniques',
      'Strong analytical and problem-solving skills',
      'Knowledge of regulatory requirements and industry best practices',
    ],
  },
  {
    id: 'it-security-specialist',
    title: 'IT Security Specialist',
    location: 'India',
    department: 'Information Technology',
    about:
      'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
    requirements: [
      "Bachelor's degree in Computer Science, Information Security, or a related field",
      'Minimum of 5 years of experience in IT security or a similar role',
      'In-depth knowledge of network security protocols and technologies',
      'Familiarity with regulatory frameworks such as PCI DSS and GDPR',
      'Professional certifications such as CISSP or CISM are preferred',
    ],
  },
];

export const FirstPartMainCareers = () => {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmitApplication = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedJob) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setAppliedJobs((prev) => [...prev, selectedJob.id]);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedJob(null);
      }, 2000);
    }, 1000);
  };

  return (
    <div className='m-auto mt-16 w-full max-w-330 md:mt-25 px-4'>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-col gap-4'
      >
        <motion.h2
          variants={fadeUp}
          className='font-sans text-3xl font-medium text-lime-300 sm:text-4xl'
        >
          Job Openings
        </motion.h2>
        <motion.p variants={fadeUp} className='max-w-5xl font-sans text-base font-light text-white'>
          Explore exciting job openings at YourBank, where we value talent, innovation, and a
          passion for customer service. Join our team and be part of shaping a brighter future in
          the banking industry
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-20 sm:grid-cols-2 lg:gap-10'
      >
        {jobs.map((job) => {
          const hasApplied = appliedJobs.includes(job.id);
          return (
            <motion.article
              key={job.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className='flex flex-col gap-8 rounded-lg bg-white/5 p-6 sm:p-10'
            >
              <h5 className='text-left font-sans text-2xl font-medium text-white'>{job.title}</h5>
              <div className='flex flex-wrap gap-3'>
                <span className='rounded-full bg-white/5 px-4 py-1 font-sans text-sm font-light text-zinc-400 sm:text-base'>
                  Location: {job.location}
                </span>
                <span className='rounded-full bg-white/5 px-4 py-1 font-sans text-sm font-light text-zinc-400 sm:text-base'>
                  Department: {job.department}
                </span>
              </div>
              <div>
                <h6 className='font-sans text-lg font-medium text-white'>About This Job</h6>
                <p className='mt-4 font-sans text-base text-zinc-400'>{job.about}</p>
              </div>
              <div>
                <h6 className='font-sans text-xl font-medium text-white sm:text-2xl'>
                  Requirements & Qualifications
                </h6>
                <ul className='mt-4 flex flex-col gap-4'>
                  {job.requirements.map((r, index) => (
                    <li key={index} className='font-sans text-base text-zinc-400'>
                      • {r}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                type='button'
                onClick={() => setSelectedJob(job)}
                disabled={hasApplied}
                whileHover={hasApplied ? {} : { scale: 1.05 }}
                whileTap={hasApplied ? {} : { scale: 0.95 }}
                className={`mt-auto h-12 w-36 cursor-pointer rounded-full font-sans text-base transition-colors ${
                  hasApplied
                    ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                    : 'bg-lime-300 text-black hover:bg-lime-400'
                }`}
              >
                {hasApplied ? 'Applied ✓' : 'Apply Now'}
              </motion.button>
            </motion.article>
          );
        })}
      </motion.div>
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm'
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='w-full max-w-lg rounded-xl bg-zinc-900 p-6 sm:p-8 border border-white/10 shadow-2xl relative'
            >
              <button
                onClick={() => setSelectedJob(null)}
                className='absolute top-4 right-4 text-zinc-400 hover:text-white text-xl font-bold'
              >
                ✕
              </button>
              <h3 className='text-2xl font-medium text-white mb-2'>
                Apply for {selectedJob.title}
              </h3>
              <p className='text-sm text-zinc-400 mb-6'>
                {selectedJob.department} • {selectedJob.location}
              </p>
              {isSuccess ? (
                <div className='py-8 text-center'>
                  <p className='text-lime-300 text-lg font-medium'>
                    Application submitted successfully!
                  </p>
                  <p className='text-sm text-zinc-400 mt-2'>
                    We will review your profile and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className='flex flex-col gap-4'>
                  <div>
                    <label className='block text-sm text-zinc-300 mb-1 font-sans'>Full Name</label>
                    <input
                      required
                      type='text'
                      placeholder='John Doe'
                      className='w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-300'
                    />
                  </div>
                  <div>
                    <label className='block text-sm text-zinc-300 mb-1 font-sans'>
                      Email Address
                    </label>
                    <input
                      required
                      type='email'
                      placeholder='john@example.com'
                      className='w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-300'
                    />
                  </div>
                  <div>
                    <label className='block text-sm text-zinc-300 mb-1 font-sans'>
                      Resume / CV Link (LinkedIn or Portfolio)
                    </label>
                    <input
                      required
                      type='url'
                      placeholder='https://linkedin.com/in/username'
                      className='w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-lime-300'
                    />
                  </div>
                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='mt-4 h-12 w-full rounded-full bg-lime-300 font-sans text-base text-black font-medium hover:bg-lime-400 disabled:opacity-50'
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
