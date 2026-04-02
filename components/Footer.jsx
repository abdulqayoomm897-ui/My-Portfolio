export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 mb-4">© {currentYear} Abdul Qayoom Mangi. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          <a href="https://www.linkedin.com/in/abdulqayoommangi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition font-semibold">LinkedIn</a>
          <a href="https://github.com/abdulqayoomm897-ui" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition font-semibold">GitHub</a>
          <a href="https://wa.me/923103250815" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition font-semibold">WhatsApp</a>
          <a href="mailto:abdulqayoomm897@gmail.com" className="text-gray-400 hover:text-emerald-400 transition font-semibold">Email</a>
        </div>
        <p className="text-xs text-gray-600">Made with ❤️ by Abdul Qayoom Mangi</p>
      </div>
    </footer>
  );
}
