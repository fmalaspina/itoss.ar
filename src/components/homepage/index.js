import React from 'react';
import { Banner } from './banner.view';
import { Brands } from './brands.view';
import { Features } from './features.view';

export default function Homepage() {
  return (
    <>
      <Banner />
      <Features />
      <section className="features">
        <div className="container">
          <div className="row">
            <Brands />
          </div>                    
        </div>
      </section>
    </>
  );
}

/*
  <div className='margin-top'><hr className="separator-gray" /></div>
  <section className="features">
    <div className="container">
      <div className="row">
        <Instumentation />
      </div>          
    </div>
  </section> 
*/