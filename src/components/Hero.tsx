
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Power BI Developer',
    'Data Analyst',
    'SQL Expert',
    'Business Intelligence Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent animate-fade-in">
            Transforming Data into Visual Insights
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I'm a{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {titles[currentTitle]}
              </span>
              <span className="absolute -right-1 top-0 w-0.5 h-full bg-blue-600 animate-pulse"></span>
            </span>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Fuelled by curiosity and driven by data, I specialize in transforming complexity into clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/SandulaVinay/BI/blob/main/Vinay-Sandula-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border-2 border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:scale-105"
            >
              Download CV
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
