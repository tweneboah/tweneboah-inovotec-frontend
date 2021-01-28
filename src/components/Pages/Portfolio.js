import React from 'react';
import CallToAction from './CallToAction';

const Portfolio = () => {
  return (
    <>
      <section class='py-12 px-4'>
        <h2 class='text-4xl text-center mb-4 font-semibold font-heading'>
          Portfolio
        </h2>
        <p class='max-w-2xl mb-8 mx-auto text-center text-gray-400 leading-relaxed'>
          View samples of our curated projects recently made that woow our
          customers.
        </p>

        <div class='flex flex-wrap -mx-4 -mb-8'>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
          <div class='md:w-1/3 px-4 mb-8'>
            <img
              class='rounded shadow'
              src='https://images.pexels.com/photos/1684161/pexels-photo-1684161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
            />
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Portfolio;
