const Services = () => (
  <section id="services" className="bg-gray-50 py-16 px-6 md:px-12">
  <div className="max-w-6xl mx-auto text-center" data-aos="fade-right">
    <h2 className="text-4xl font-bold text-blue-600 mb-10">Our Services</h2>
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Election Campaigns",
          desc: "Craft strong political identities across digital platforms."
        },
        {
          title: "Ad Campaigns",
          desc: "Design and run high-impact, voter-targeted campaigns."
        },
        {
          title: "SEO & Analytics",
          desc: "Boost visibility and track campaign success in real-time."
        }
      ].map((service, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-600 mt-2">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
  
  export default Services;