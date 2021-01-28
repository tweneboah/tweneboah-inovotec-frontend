import React from 'react';
import programmingSVG from '../../images/programming.svg';
import DeliveryPromo from './DeliveryPromo';
const HomeBanner = () => {
  return (
    <>
      <div className='min-h-screen bg-green-900'>
        <div className='relative overflow-hidden'>
          <main>
            <div className='pt-10 bg-green-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
              <div className='mx-auto max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
                  <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                    <div className='lg:py-24'>
                      <a
                        href='/'
                        className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                        <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                          We're hiring
                        </span>
                        <span className='ml-4 text-sm'>
                          Visit our careers page
                        </span>
                        {/* <!-- Heroicon name: chevron-right --> */}
                        <svg
                          className='ml-2 w-5 h-5 text-gray-500'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'>
                          <path
                            fill-rule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </a>
                      <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                        <span className='block'>A better way to</span>
                        <span className='block text-indigo-400'>
                          ship web apps
                        </span>
                      </h1>
                      <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui Lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat.
                      </p>
                      <div className='mt-10 sm:mt-12'>
                        <form
                          action='/'
                          className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                          <div className='sm:flex'>
                            <div className='min-w-0 flex-1'>
                              <label for='email' className='sr-only'>
                                Email address
                              </label>
                              <input
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'
                              />
                            </div>
                            <div className='mt-3 sm:mt-0 sm:ml-3'>
                              <button
                                type='submit'
                                className='block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900'>
                                Start free trial
                              </button>
                            </div>
                          </div>
                          <p className='mt-3 text-sm text-gray-300 sm:mt-4'>
                            Start your free 14-day trial, no credit card
                            necessary. By providing your email, you agree to our{' '}
                            <a href='/' className='font-medium text-white'>
                              terms or service
                            </a>
                            .
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                      {/* <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ --> */}
                      <img
                        className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                        src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                        alt='babber3'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- More main page content here... --> */}
          </main>
        </div>
      </div>
      <DeliveryPromo />
      <section class='py-12 px-4 text-center'>
        <h2 class='text-4xl mb-2 leading-tight font-semibold font-heading'>
          How to get Dunder Mifflined?
        </h2>
        <p class='text-gray-400'>
          Let’s open a new chapter of your paper adventure!
        </p>
        <div class='flex flex-wrap items-center -mx-8 mt-12 mb-2'>
          <div class='lg:w-1/3 px-8 mb-8'>
            <img class='w-1/2 mx-auto mb-8 h-32' src={programmingSVG} alt='' />
            <h3 class='text-2xl mb-4 font-semibold font-heading'>
              <span class='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
                1
              </span>
              <span>Contact our Sales</span>
            </h3>
            <p class='text-gray-400'>
              During the phone call we will be able to present you all details
              of cooperation, pricing and special offers, suited for your
              company.
            </p>
          </div>
          <div class='lg:w-1/3 px-8 mb-8'>
            <img class='w-1/2 mx-auto mb-8 h-32' src={programmingSVG} alt='' />
            <h3 class='text-2xl mb-4 font-semibold font-heading'>
              <span class='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
                2
              </span>
              <span>Sign the documents</span>
            </h3>
            <p class='text-gray-400'>
              We can also talk during business meeting, or visit your office
              anytime you want! Our employees will provide proper contracts.
            </p>
          </div>
          <div class='lg:w-1/3 px-8 mb-8'>
            <img class='w-1/2 mx-auto mb-8 h-32' src={programmingSVG} alt='' />
            <h3 class='text-2xl mb-4 font-semibold font-heading'>
              <span class='inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full'>
                3
              </span>
              <span>Wait for delivery!</span>
            </h3>
            <p class='text-gray-400'>
              You don’t buy a pig... or shall I say a paper in a poke. The
              supplies will be delivered to your company every first Monday of
              the month.
            </p>
          </div>
        </div>
        <div>
          <a
            class='inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow'
            href='#'>
            Learn more
          </a>
        </div>
      </section>
      {/* pa */}
      <section
        style={{
          backgroundImage:
            'url(' +
            'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' +
            ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        class='bg-hero-pattern'>
        <div class='pt-32 pb-24 flex relative'>
          <div class='absolute inset-0 bg-black opacity-50'></div>
          <div class='z-10 w-full px-8 md:px-24 text-center text-white'>
            <h2 class='text-4xl mb-2 font-semibold font-heading'>
              The real business is done on paper.
            </h2>
            <p class='mb-8'>
              Many beautiful things couldn’t ever appear without paper.
            </p>
            <div class='flex flex-wrap align-center -mx-4'>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'></path>
                </svg>
                <h3 class='text-xl font-heading'>High durability</h3>
              </div>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'></path>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'></path>
                </svg>
                <h3 class='text-xl font-heading'>Versatility</h3>
              </div>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
                </svg>
                <h3 class='text-xl font-heading'>Variety</h3>
              </div>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path>
                </svg>
                <h3 class='text-xl font-heading'>Value-based price</h3>
              </div>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'></path>
                </svg>
                <h3 class='text-xl font-heading'>Performance</h3>
              </div>
              <div class='w-1/2 lg:w-1/6 px-4 mb-6'>
                <svg
                  class='text-white w-10 h-10 mx-auto mb-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
                <h3 class='text-xl font-heading'>Long lasting</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
