import React from 'react';

const Navbar = () => {
  return (
    <header className='relative'>
      <div className='bg-green-900 pt-6'>
        <nav
          className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'>
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='/'>
                <span className='sr-only'>Workflow</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                  alt='banner'
                />
              </a>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                  id='main-menu'
                  aria-haspopup='true'>
                  <span className='sr-only'>Open main menu</span>
                  {/* <!-- Heroicon name: menu --> */}
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden space-x-8 md:flex md:ml-10'>
              <a
                href='/'
                className='text-base font-medium text-white hover:text-gray-300'>
                Product
              </a>

              <a
                href='/'
                className='text-base font-medium text-white hover:text-gray-300'>
                Features
              </a>

              <a
                href='/'
                className='text-base font-medium text-white hover:text-gray-300'>
                Marketplace
              </a>

              <a
                href='/'
                className='text-base font-medium text-white hover:text-gray-300'>
                Company
              </a>
            </div>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-6'>
            <a
              href='/'
              className='text-base font-medium text-white hover:text-gray-300'>
              Log in
            </a>
            <a
              href='/'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'>
              Start free trial
            </a>
          </div>
        </nav>
      </div>

      {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
      <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'>
        <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
          <div className='px-5 pt-4 flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='banner2'
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600'>
                <span className='sr-only'>Close menu</span>
                {/* <!-- Heroicon name: x --> */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className='pt-5 pb-6'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='main-menu'>
            <div className='px-2 space-y-1' role='none'>
              <a
                href='/'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                role='menuitem'>
                Product
              </a>

              <a
                href='/'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                role='menuitem'>
                Features
              </a>

              <a
                href='/'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                role='menuitem'>
                Marketplace
              </a>

              <a
                href='/'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
                role='menuitem'>
                Company
              </a>
            </div>
            <div role='none' className='mt-6 px-5'>
              <a
                href='/'
                className='block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700'>
                Start free trial
              </a>
            </div>
            <div role='none' className='mt-6 px-5'>
              <p className='text-center text-base font-medium text-gray-500'>
                Existing customer?{' '}
                <a href='/' className='text-gray-900 hover:underline'>
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
