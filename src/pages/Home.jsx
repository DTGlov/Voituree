import React from 'react';
import Nav from '../components/Navbar/Nav';
import Hero from '../components/Hero/Hero';
import FirstSection from '../components/FirstSection/FirstSection';
import SecondSection from '../components/SecondSection/SecondSection';
import ThirdSection from '../components/ThirdSection/ThirdSection';
import TopCars from '../components/TopCars/TopCars';
import Footer from '../components/Footer/Footer';



function Home() {

    const toTop = () => {
        if (window.scrollY === 0) {
            return
        }
    }
    window.addEventListener('scroll',toTop)
    console.log(toTop)
    return (
      <div>
        <Nav />
        <Hero />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <TopCars />
        <Footer />
      </div>
    );
}

export default Home
