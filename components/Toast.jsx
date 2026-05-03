import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ message, type = 'success', isVisible, onClose }) {
  const bgColor = type === 'success' ? 'bg-emerald-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✕';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-6 right-6 ${bgColor} text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3`}
        >
          <span className="text-xl font-bold">{icon}</span>
          <p className="font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
