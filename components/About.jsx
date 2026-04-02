import { motion } from 'framer-motion';
import resume from '@/data/resume.json';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">About Me</h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-8">
            I am a passionate learner and aspiring professional with a strong interest in Data Science and Artificial Intelligence. I enjoy exploring how data can be transformed into meaningful insights and how AI can solve real-world problems. I am continuously building my skills in programming, data analysis, and modern AI technologies to grow as a future AI Engineer.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
              <div className="mb-6 flex justify-center">
                <img
                  src="/MUET.jpeg"
                  alt="MUET University"
                  className="w-20 h-20 object-contain rounded-lg border-2 border-emerald-400 shadow-lg"
                />
              </div>
              {resume.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="mb-6 p-4 bg-gray-800 rounded-lg border-l-4 border-emerald-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-white">{edu.degree}</h4>
                  <p className="text-emerald-400">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href={`mailto:${resume.email}`} className="text-emerald-400 font-bold hover:underline">{resume.email}</a>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href={`tel:${resume.phone}`} className="text-emerald-400 font-bold hover:underline">{resume.phone}</a>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a href={resume.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">abdulqayoomm897-ui</a>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Abdul Qayoom Mangi</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
