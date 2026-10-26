import { motion } from 'motion/react';
import { container, fadeUp, slideLeft, slideRight } from '../RevealAnimation/animations';

export const news = [
  {
    image: '/images/AboutPage/Main/ImagaNews.png',
    title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
    location: 'India',
    date: '06/11/2024',
    text: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
  },
  {
    image: '/images/AboutPage/Main/ImageNews(2).png',
    title: 'YourBank Expands Branch Network with Opening of New Location in Chennai',
    location: 'India',
    date: '12/11/2024',
    text: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services.',
  },
  {
    image: '/images/AboutPage/Main/ImageNews(3).png',
    title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
    location: 'India',
    date: '24/12/2024',
    text: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.',
  },
  {
    image: '/images/AboutPage/Main/ImageNews(4).png',
    title:
      'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility',
    location: 'India',
    date: '28/12/2024',
    text: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.',
  },
];

const viewport = { once: true, amount: 0.3 };

export const MainAbout = () => {
  return (
    <main className='min-h-screen overflow-hidden bg-black'>
      <div className='m-auto w-full max-w-360 py-20 px-5'>
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
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:gap-16 mt-18'>
          <motion.div
            variants={slideLeft}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            className='w-full lg:w-1/2'
          >
            <img
              src='/images/AboutPage/Main/ImageContainer.png'
              alt=''
              className='h-auto w-full rounded-3xl object-cover'
            />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            className='w-full lg:w-1/2 flex max-w-160 flex-wrap gap-5'
          >
            <div className='w-0.5 shrink-0 self-stretch bg-lime-300'></div>
            <h5 className='mb-3 font-sans text-4xl font-medium text-white'>Mission</h5>
            <p className='mt-5 max-w-2xl font-sans text-sm font-light leading-relaxed text-zinc-400 md:text-lg'>
              At YourBank, our mission is to empower our customers to achieve financial success. We
              are dedicated to delivering innovative banking solutions that cater to their unique
              needs. Through personalized services, expert guidance, and cutting-edge technology, we
              aim to build strong, lasting relationships with our customers. Our mission is to be
              their trusted partner, helping them navigate their financial journey and realize their
              dreams.
            </p>
          </motion.div>
        </div>
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:gap-16 mt-20'>
          <motion.div
            variants={slideLeft}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            className='w-full lg:w-1/2 flex max-w-160 flex-wrap gap-5'
          >
            <div className='w-0.5 shrink-0 self-stretch bg-lime-300'></div>
            <h5 className='mb-3 font-sans text-4xl font-medium text-white'>Vision</h5>
            <p className='mt-5 max-w-2xl font-sans text-sm font-light leading-relaxed text-zinc-400 md:text-lg'>
              Our vision at YourBank is to redefine banking by creating a seamless and personalized
              experience for our customers. We envision a future where banking is accessible,
              transparent, and tailored to individual preferences. Through continuous innovation and
              collaboration, we strive to be at the forefront of the industry, setting new standards
              for customer-centric banking. Our vision is to be the preferred financial institution,
              known for our unwavering commitment to excellence, trust, and customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            className='w-full lg:w-1/2'
          >
            <img
              src='/images/AboutPage/Main/ImageContainer(2).png'
              alt=''
              className='h-auto w-full rounded-3xl object-cover'
            />
          </motion.div>
        </div>
        <div className='flex flex-col gap-4 mt-20'>
          <h2 className='font-sans text-3xl font-medium text-lime-300 sm:text-4xl '>
            Press Releases
          </h2>
          <p className='max-w-5xl font-sans text-base font-light text-white'>
            Stay updated with the latest happenings and exciting developments at YourBank through
            our press releases.
          </p>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'
          >
            {news.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className='flex flex-col gap-6 rounded-3xl border border-[#262626] bg-[#141414] p-4 sm:p-6'
              >
                <div className='aspect-video overflow-hidden rounded-2xl'>
                  <img
                    src={item.image}
                    alt=''
                    loading='lazy'
                    className='h-full w-full object-cover grayscale'
                  />
                </div>
                <div className='flex flex-col gap-4 px-1 sm:px-2'>
                  <h3 className='font-sans text-lg font-medium text-white sm:text-xl'>
                    {item.title}
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    <span className='rounded-full bg-white/5 px-3 py-1 font-sans text-xs font-light text-zinc-400'>
                      Location: {item.location}
                    </span>
                    <span className='rounded-full bg-white/5 px-3 py-1 font-sans text-xs font-light text-zinc-400'>
                      Date: {item.date}
                    </span>
                  </div>
                  <p className='font-sans text-sm font-light leading-relaxed text-zinc-400'>
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
};
