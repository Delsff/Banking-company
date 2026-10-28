import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-black p-4 text-center'>
      <h1 className='text-8xl font-black text-white tracking-tight'>404</h1>
      <p className='mt-4 text-2xl font-semibold text-gray-400 uppercase tracking-wider'>
        Page Not Found
      </p>
      <p className='mt-2 text-gray-500 max-w-sm'>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to='/'
        className='mt-8 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200'
      >
        Return to Home Page
      </Link>
    </div>
  );
};
