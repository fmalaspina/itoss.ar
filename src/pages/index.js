import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    document.body.classList.add('homepage');
    
    const handleScroll = (event) => {
      if (window.scrollY > 60) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout title={`${siteConfig.title}`} description="The Tool for Datacenter Service Management.">
      <main>        
        <Homepage />
      </main>
    </Layout>
  );
}
