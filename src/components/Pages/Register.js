import React from 'react';

const Register = () => {
  return (
    <div class='flex flex-wrap justify-center items-center -mx-4 ml-2 -mb-4 md:mb-0'>
      <div class='w-full  md:w-1/2 px-4 mb-4 md:mb-0'>
        <div class='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <img
              class='h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 class='mt-6 text-3xl font-extrabold text-gray-900'>
              Apply for job
            </h2>
          </div>

          <div class='mt-8'>
            <div>
              <div class='mt-6 relative'>
                <div
                  class='absolute inset-0 flex items-center'
                  aria-hidden='true'>
                  <div class='w-full border-t border-gray-300'></div>
                </div>
                <div class='relative flex justify-center text-sm'>
                  <span class='px-2 bg-white text-gray-500'>
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div class='mt-6'>
              <form action='#' method='POST' class='space-y-6'>
                <div>
                  <label
                    for='first name'
                    class='block text-sm font-medium text-gray-700'>
                    First Name
                  </label>
                  <div class='mt-1'>
                    <input
                      id='first name'
                      name='first name'
                      type='text'
                      autocomplete='First Name'
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    for='Last Name'
                    class='block text-sm font-medium text-gray-700'>
                    Last Name
                  </label>
                  <div class='mt-1'>
                    <input
                      id='first name'
                      name='first name'
                      type='text'
                      autocomplete='Last Name'
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    for='email'
                    class='block text-sm font-medium text-gray-700'>
                    Email Address
                  </label>
                  <div class='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='text'
                      autocomplete='email'
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    for='email'
                    class='block text-sm font-medium text-gray-700'>
                    Applying as
                  </label>
                  <div class='mt-1'>
                    <div>
                      <select
                        id='job'
                        name='job'
                        class='mt-1 block w-full pl-3 border pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                        <option>Web App Developer</option>
                        <option>Mobile App Developer</option>
                        <option selected>Web Designer</option>
                        <option>Graphic Designer</option>
                        <option>Video Editor</option>
                        <option>Social Media Marketing</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for='email'
                    class='block text-sm font-medium text-gray-700'>
                    Your Skills
                  </label>
                  <div class='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='text'
                      autocomplete='email'
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    for='email'
                    class='block text-sm font-medium text-gray-700'>
                    Briefly describe yourself
                  </label>
                  <div class='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='text'
                      autocomplete='email'
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div class='space-y-1'>
                  <label
                    for='password'
                    class='block text-sm font-medium text-gray-700'>
                    Password
                  </label>
                  <div class='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autocomplete='current-password'
                      required
                      class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div class='flex items-center justify-between'>
                  <div class='flex items-center'>
                    <input
                      id='remember_me'
                      name='remember_me'
                      type='checkbox'
                      class='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                    <label
                      for='remember_me'
                      class='ml-2 block text-sm text-gray-900'>
                      Remember me
                    </label>
                  </div>

                  <div class='text-sm'>
                    <a
                      href='#'
                      class='font-medium text-indigo-600 hover:text-indigo-500'>
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class='w-full md:w-1/2 px-4 mb-4 md:mb-0'>
        {/* Col 2 */}
        <section class='py-16 px-4'>
          <div class='text-center'>
            <span class='text-indigo-600 font-semibold'>From the CEO</span>
            <h2 class='text-3xl text-center mt-2 mb-12 font-semibold font-heading'>
              Benefit of Joining us
            </h2>
          </div>
          <div class='flex flex-wrap max-w-5xl -mx-4 md:mx-auto -mb-8'>
            <div class='w-full md:w-full px-4 mb-8'>
              <div class='h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow'>
                <h3 class='text-2xl mb-3'>High durability</h3>
                <p>
                  Forget about paper jams with our increased stability product.
                  Ideal for high-quality printing and photocopying.
                </p>
              </div>
            </div>
            <div class='w-full md:w-full px-4 mb-8'>
              <div class='h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow'>
                <h3 class='text-2xl mb-3'>Versatility</h3>
                <p>
                  Multi-functional paper for various office needs. Snow-white
                  sheets will shine bright like diamond for many years.
                </p>
              </div>
            </div>
            <div class='w-full md:w-full px-4 mb-8'>
              <div class='h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow'>
                <h3 class='text-2xl mb-3'>Value-based price</h3>
                <p>
                  The best combination of quality and economy comes with our
                  paper. The offer includes wides ranges of density.
                </p>
              </div>
            </div>
            <div class='w-full md:w-full px-4 mb-8'>
              <div class='h-full p-6 bg-white rounded border-t-4 border-indigo-500 shadow'>
                <h3 class='text-2xl mb-3'>Variety</h3>
                <p>
                  The offer includes paper in wide range of density and sizes.
                  Ideal for high-quality printing and photocopying.
                </p>
              </div>
            </div>
          </div>
          <div class='text-center mt-12'>
            <a
              class='inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded'
              href='#'>
              Sign up for free
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
