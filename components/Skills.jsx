import { motion } from 'framer-motion';
import resume from '@/data/resume.json';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-emerald-400 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg border border-emerald-400/30"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Programming</h3>
            <div className="space-y-3">
              {resume.skills.programming.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-emerald-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI/ML Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg border border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI / ML</h3>
            <div className="space-y-3">
              {resume.skills.aiml.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-emerald-400 text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full"
                      style={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '90%' : '70%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-700 p-6 rounded-lg border border-purple-400/30"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.tools.map((tool, idx) => (
                <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/50">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
