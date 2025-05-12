
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sachin from '../../assets/img/team/sachin.jpg';
import gulshan from '../../assets/img/team/gulshan.jpg';
import kundan from '../../assets/img/team/kundan.jpg';
import lokesh from '../../assets/img/team/lokesh.jpg';
import sunil from '../../assets/img/team/sunil.jpg';
import client from '../../assets/img/client.jpg';
import bjp1 from '../../assets/img/bjp1.jpg';
import bjp2 from '../../assets/img/bjp2.jpg';
import bjp3 from '../../assets/img/bjp3.jpg';
import bjp4 from '../../assets/img/bjp4.jpg';


const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100">
      <section id="about" className="bg-white py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">About BoostMedia</h1>
    <p className="text-gray-700 text-lg leading-relaxed">
      BoostMedia is India’s premier digital marketing agency focused on political branding and outreach.
      We empower parties like BJP, AAP, Congress, and more with modern strategies.
    </p>
  </div>
</section>
      
      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" data-aos="fade-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white p-2 rounded-xl shadow-lg text-center" data-aos="fade-up">
              <img className="w-52 h-52 rounded-full mx-auto mb-4" src={sachin} alt="Sachin Baghel" />
              <h3 className="text-xl font-semibold text-gray-800">Sachin Baghel</h3>
              <p className="text-gray-600 mb-4">CEO</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Know About More</a>
            </div>

            {/* Software Developer */}
            <div className="bg-white p-2 rounded-lg shadow-lg text-center" data-aos="fade-up">
              <img className="w-52 h-52 rounded-full mx-auto mb-4" src={gulshan} alt="Gulshan Kumia" />
              <h3 className="text-xl font-semibold text-gray-800">Gulshan Kumia</h3>
              <p className="text-gray-600 mb-4">Software Developer</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Know About More</a>
            </div>

            {/* Photographer & Editor */}
            <div className="bg-white p-2 rounded-lg shadow-lg text-center" data-aos="fade-up">
            <img className="w-52 h-52 rounded-full mx-auto mb-4" src={sunil} alt="Gulshan Kumia" />
              <h3 className="text-xl font-semibold text-gray-800">Sunil Kumar Dhaka</h3>
              <p className="text-gray-600 mb-4">Photographer & Editor</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Know About More</a>
            </div>

            {/* Video Editor */}
            <div className="bg-white p-2 rounded-lg shadow-lg text-center" data-aos="fade-up">
              <img className="w-52 h-52 rounded-full mx-auto mb-4" src={kundan} alt="Kundan Kumar" />
              <h3 className="text-xl font-semibold text-gray-800">Kundan Kumar</h3>
              <p className="text-gray-600 mb-4">Video Editor</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Know About More</a>
            </div>

            {/* Graphic Designer */}
            <div className="bg-white p-2 rounded-lg shadow-lg text-center" data-aos="fade-up">
              <img className="w-52 h-52 rounded-full mx-auto mb-4" src={lokesh} alt="Lokesh Kumar" />
              <h3 className="text-xl font-semibold text-gray-800">Lokesh Kumar</h3>
              <p className="text-gray-600 mb-4">Graphic Designer</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Know About More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <img src={bjp1} alt="Client 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <img src={bjp2} alt="Client 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <img src={bjp3} alt="Client 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <img src={bjp4} alt="Client 4" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-12" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Clients</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Client - BJP */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img className="w-32 h-32 mx-auto mb-4" src={client} alt="BJP" />
              <h3 className="text-xl font-semibold text-gray-800">BJP</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
