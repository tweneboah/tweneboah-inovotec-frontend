import React from 'react';
import EcommerceAppPricing from '../StaticPages/EcommerceAppPricing';
import FAQ from '../StaticPages/FAQ';
import OurClients from '../StaticPages/OurClients';
import OurMission from '../StaticPages/OurMission';
import ProjectsDemo from '../StaticPages/ProjectsDemo';

const EcommerceProject = () => {
  return (
    <>
      <ProjectsDemo />
      <section className='py-12 px-4 bg-gray-900'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-semibold mb-2'>
            Ecommerce Website Demo
          </h2>
          <p className='mb-8 text-gray-400'>
            People learn in a lot of different ways, but experience is the best
            teacher.
          </p>
          <div className='relative' style={{ 'padding-bottom': '56.25%' }}>
            <iframe
              src='https://www.youtube.com/embed/gO8N3L_aERg'
              frameborder='0'
              className='absolute w-full h-full'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen=''></iframe>
          </div>
        </div>
      </section>
      <EcommerceAppPricing />
      <OurClients />
      <FAQ />
    </>
  );
};

export default EcommerceProject;
