import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Espeleologia = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="espeleologia" className="section">
          <div className="container">
            <h2>Espeleologia</h2>
            <p>
              A espeleologia é a ciência que estuda as cavernas e demais cavidades naturais 
              subterrâneas, sua formação, composição, morfologia, hidrologia, fauna e flora.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Espeleologia;
