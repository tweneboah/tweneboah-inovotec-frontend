import React from 'react';

const Divider = () => {
  return (
    <div class='relative'>
      <div class='absolute inset-0 flex items-center' aria-hidden='true'>
        <div class='w-full border-t border-green-300'></div>
      </div>
      <div class='relative flex justify-center'>
        <span class='bg-yellow-300 rounded-full px-2 text-gray-500'>
          <svg
            class='h-5 w-5 text-yellow-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'>
            <path
              fill='#6B7280'
              fill-rule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
              clip-rule='evenodd'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Divider;
