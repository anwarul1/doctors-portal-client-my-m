import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import ExceptionalDentalCare from './ExceptionalDentalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <ExceptionalDentalCare></ExceptionalDentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home;
