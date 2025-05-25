
const Services = () => {
  const services = [
    {
      icon: '🗄️',
      title: 'SQL',
      description: 'Database design, optimization, and complex query development'
    },
    {
      icon: '📊',
      title: 'Power BI',
      description: 'Interactive dashboards, reports, and business intelligence solutions'
    },
    {
      icon: '📈',
      title: 'Qlik',
      description: 'Data visualization, analytics, and interactive reporting solutions'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={scrollToContact}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                Click to get in touch →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
