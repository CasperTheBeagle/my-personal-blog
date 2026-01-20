import { Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-200 py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="font-medium text-brown-600">Get in touch</span>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-brown-600 rounded-full text-white hover:bg-brown-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="p-2 bg-brown-600 rounded-full text-white hover:bg-brown-500 transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="p-2 bg-brown-600 rounded-full text-white hover:bg-brown-500 transition-colors">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <a href="/" className="text-brown-600 font-medium underline underline-offset-4 hover:text-brown-500">
          Home page
        </a>
      </div>
    </footer>
  );
};

export { Footer };