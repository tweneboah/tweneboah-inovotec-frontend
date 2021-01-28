import React from 'react';
import { Link } from 'react-router-dom';

import Divider from './Divider';

const CallToAction = () => {
  return (
    <div class='bg-indigo-700'>
      <div class='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 class='text-3xl font-extrabold text-white sm:text-4xl'>
          <span class='block'>Do you have any project</span>
          <span class='block mb-3'>We can help you with?</span>
          <Divider />
        </h2>
        <p class='mt-4 text-lg leading-6 text-indigo-200 '>
          If you don't have any project in mind just tell us your business idea
          and we will help how to increase productivity of your company.
        </p>
        <Link
          to='/project-request'
          class='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto'>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
