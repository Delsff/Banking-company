import { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  type?: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
  autoComplete?: string;
};

export const AuthField = ({
  label,
  type = 'text',
  placeholder,
  registration,
  error,
  autoComplete,
}: Props) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className='flex flex-col gap-2'>
      <label className='font-sans text-sm font-light text-white/80'>{label}</label>
      <div className='relative'>
        <input
          {...registration}
          type={isPassword && show ? 'text' : type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          className={`h-14 w-full rounded-xl border bg-white/5 px-5 font-sans text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-lime-300 ${
            error ? 'border-red-500/70' : 'border-white/10'
          } ${isPassword ? 'pr-16' : ''}`}
        />
        {isPassword && (
          <button
            type='button'
            onClick={() => setShow((s) => !s)}
            className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer font-sans text-xs text-white/50 hover:text-lime-300'
          >
            {show ? 'Hide' : 'show'}
          </button>
        )}
      </div>
      {error && <p className='font-sans text-xs text-red-400'>{error}</p>}
    </div>
  );
};
