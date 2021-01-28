import React from 'react';

const Profile = () => {
  return (
    <div className='divide-y divide-gray-200'>
      <div className='pb-6'>
        <div className='bg-indigo-700 h-24 sm:h-20 lg:h-28'></div>
        <div className='-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15'>
          <div>
            <div className='-m-1 flex'>
              <div className='inline-flex rounded-lg overflow-hidden border-4 border-white'>
                <img
                  className='flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48'
                  src='https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='mt-6 sm:ml-6 sm:flex-1'>
            <div>
              <div className='flex items-center'>
                <h3 className='font-bold text-xl text-gray-900 sm:text-2xl'>
                  Ashley Porter
                </h3>
                <span className='ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full'>
                  <span className='sr-only'>Online</span>
                </span>
              </div>
              <p className='text-sm text-gray-500'>@ashleyporter</p>
            </div>
            <div className='mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3'>
              <button
                type='button'
                className='flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1'>
                Message
              </button>
              <button
                type='button'
                className='flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Call
              </button>
              <span className='ml-3 inline-flex sm:ml-0'>
                <div className='relative inline-block text-left'>
                  <button
                    id='options-menu'
                    type='button'
                    className='inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <span className='sr-only'>Open options menu</span>
                    {/* <!-- Heroicon name: dots-vertical --> */}
                    <svg
                      className='h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'>
                      <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                    </svg>
                  </button>

                  {/* <!--
                          Dropdown panel, show/hide based on dropdown state.

                          Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                          Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        --> */}
                  <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                    <div
                      className='py-1'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='options-menu'>
                      <a
                        href='/'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        View profile
                      </a>
                      <a
                        href='/'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        role='menuitem'>
                        Copy profile link
                      </a>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-5 sm:px-0 sm:py-0'>
        <dl className='space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0'>
          <div className='sm:flex sm:px-6 sm:py-5'>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
              Bio
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2'>
              <p>
                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
                praesent. Gravida in tempus feugiat netus enim aliquet a, quam
                scelerisque. Dictumst in convallis nec in bibendum aenean arcu.
              </p>
            </dd>
          </div>
          <div className='sm:flex sm:px-6 sm:py-5'>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
              Location
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2'>
              New York, NY, USA
            </dd>
          </div>
          <div className='sm:flex sm:px-6 sm:py-5'>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
              Website
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2'>
              ashleyporter.com
            </dd>
          </div>
          <div className='sm:flex sm:px-6 sm:py-5'>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
              Birthday
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2'>
              <time datetime='1982-06-23'>June 23, 1982</time>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Profile;
