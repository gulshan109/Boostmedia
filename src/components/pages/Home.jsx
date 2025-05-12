import React from 'react';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center" data-aos = "fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Boost Media</h1>
        <p className="text-lg md:text-xl mb-6">Digital Marketing Solutions to Amplify Your Political Reach</p>
        <a
          href="#services"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Boost Media is a full-service digital marketing agency helping political parties like BJP, AAP, Congress, and TMC
          enhance their digital presence and connect with millions of voters through cutting-edge campaigns.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Social Media Management', icon: '📱' },
            { title: 'SEO & Google Ads', icon: '🔍' },
            { title: 'Video Production', icon: '🎬' },
            { title: 'Graphic Design', icon: '🎨' },
            { title: 'Political Campaign Strategy', icon: '🧠' },
            { title: 'Analytics & Reports', icon: '📊' },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Boost Media?</h2>
        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-lg text-left text-gray-700">
          <li>✅ Data-driven campaign strategies</li>
          <li>✅ Political niche experience</li>
          <li>✅ In-house creative team</li>
          <li>✅ Real-time performance tracking</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-6 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Campaign?</h2>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
