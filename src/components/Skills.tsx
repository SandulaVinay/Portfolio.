
const Skills = () => {
  const skills = [
    {
      icon: '📊',
      title: 'Power BI Development',
      description: 'Creating interactive dashboards and reports'
    },
    {
      icon: '🗄️',
      title: 'SQL & Data Modeling',
      description: 'Database design and complex query optimization'
    },
    {
      icon: '⚡',
      title: 'DAX Programming',
      description: 'Advanced calculations and data analysis'
    },
    {
      icon: '🔄',
      title: 'Data Transformation',
      description: 'ETL processes and data pipeline development'
    },
    {
      icon: '📈',
      title: 'Qlik Development',
      description: 'Interactive visualizations and business intelligence'
    },
    {
      icon: '🐍',
      title: 'Python Programming',
      description: 'Data analysis, automation, and scripting'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
