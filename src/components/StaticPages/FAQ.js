import React, { useState } from 'react';

const FAQ = () => {
  const [question1, setquestion1] = useState(false);
  const [question2, setquestion2] = useState(false);
  const [question3, setquestion3] = useState(false);
  const [question4, setquestion4] = useState(false);
  const [question5, setquestion5] = useState(false);
  const [question6, setquestion6] = useState(false);
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            <div className='pt-6'>
              <dt className='text-lg'>
                {/* <!-- Expand/collapse question button --> */}

                {/* QUESTION 1 */}
                <button
                  onClick={() => setquestion1(!question1)}
                  className='text-left w-full flex justify-between items-start text-gray-400'>
                  <span className='font-medium text-gray-900'>
                    What&#039;s the best thing about Switzerland?
                  </span>
                  <span className='ml-6 h-7 flex items-center'>
                    {/* <!--
                  Heroicon name: chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                    <svg
                      className={`${
                        question1 ? '-rotate-180' : 'rotate-0'
                      } h-6 w-6 transform`}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className={`${question1 ? 'block' : 'hidden'} mt-2 pr-12 `}>
                <p className='text-base text-gray-500'>
                  I don&#039;t know, but the flag is a big plus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>

            {/* QUESTION 2 */}
            <div className='pt-6'>
              <dt className='text-lg'>
                {/* <!-- Expand/collapse question button --> */}
                <button
                  onClick={() => setquestion2(!question2)}
                  className='text-left w-full flex justify-between items-start text-gray-400'>
                  <span className='font-medium text-gray-900'>
                    How do you make holy water?
                  </span>
                  <span className='ml-6 h-7 flex items-center'>
                    {/* <!--
                  Heroicon name: chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                    <svg
                      className={`${
                        question2 ? '-rotate-180' : 'rotate-0'
                      } h-6 w-6 transform`}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className={`${question2 ? 'block' : 'hidden'} mt-2 pr-12 `}>
                <p className='text-base text-gray-500'>
                  You boil the hell out of it. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Magnam aut tempora vitae odio
                  inventore fuga aliquam nostrum quod porro. Delectus quia
                  facere id sequi expedita natus.
                </p>
              </dd>
            </div>

            {/* QUESTION 3 */}
            <div className='pt-6'>
              <dt className='text-lg'>
                {/* <!-- Expand/collapse question button --> */}
                <button
                  onClick={() => setquestion3(!question3)}
                  className='text-left w-full flex justify-between items-start text-gray-400'>
                  <span className='font-medium text-gray-900'>
                    What&#039;s the best thing about Switzerland?
                  </span>
                  <span className='ml-6 h-7 flex items-center'>
                    {/* <!--
                  Heroicon name: chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                    <svg
                      className={`${
                        question3 ? '-rotate-180' : 'rotate-0'
                      } h-6 w-6 transform`}
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd className={`${question3 ? 'block' : 'hidden'} mt-2 pr-12 `}>
                <p className='text-base text-gray-500'>
                  I don&#039;t know, but the flag is a big plus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quas cupiditate
                  laboriosam fugiat.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
