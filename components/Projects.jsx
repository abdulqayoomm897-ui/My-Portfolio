import { motion } from 'framer-motion';
import projects from '@/data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-emerald-400 transition group hover:shadow-lg hover:shadow-emerald-500/20"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300 filter group-hover:brightness-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-400 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-400/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a href={project.link} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 px-4 rounded text-center transition">
                    View
                  </a>
                  <a href={project.github} className="flex-1 border border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-bold py-2 px-4 rounded text-center transition">
                    {project.github.includes('gitlab') ? 'GitLab' : 'GitHub'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
