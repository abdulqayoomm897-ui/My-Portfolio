import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Solutions',
    description: 'Custom machine learning models, computer vision applications, and intelligent systems for real-world problems.',
    icon: '🤖'
  },
  {
    title: 'Mobile App Development',
    description: 'Responsive and modern mobile applications built with cutting-edge technologies and best practices.',
    icon: '📱'
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable business insights with advanced analytics and visualization.',
    icon: '📊'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-700/50 backdrop-blur border border-emerald-400/30 rounded-lg p-6 hover:border-emerald-400 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
