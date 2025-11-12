import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Galeria = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="galeria" className="section section-gallery">
          <div className="container">
            <h2>Galeria</h2>
            <p>Explore nossas expedições através de imagens.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Galeria;
