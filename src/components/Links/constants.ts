export type Review = { name: string; text: string };
export type TestimonialTab = 'individuals' | 'businesses';

export const reviewsByTab: Record<TestimonialTab, Review[]> = {
  individuals: [
    {
      name: 'Sara T',
      text: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
    },
    {
      name: 'John D',
      text: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed.',
    },
    {
      name: 'Emily G',
      text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go.",
    },
  ],
  businesses: [
    {
      name: 'Mark L',
      text: 'The business account setup took one day. Payroll tools and fast payment settlement saved our small team hours every week.',
    },
    {
      name: 'Anna K',
      text: 'A working capital loan helped us cover seasonal costs without stress. Our loan officer explained every option clearly.',
    },
    {
      name: 'David R',
      text: 'We expanded to a second location thanks to the financing YourBank tailored for us. Reliable service and transparent fees.',
    },
  ],
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Careers', to: '/careers' },
  { label: 'About', to: '/about' },
  { label: 'Security', to: '/security' },
];
