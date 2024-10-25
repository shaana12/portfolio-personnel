import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-grey txt-black paragraphe py-6 md:flex-column">
          <div className="container mx-auto flex flex-col md:flex-column justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="txt-black titre font-bold">SF</h1>
              <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
              </div>
              <div>
              <li>07 57 50 04 91</li>
              <li>shana.fortune129@gmail.com</li>
              </div>
          </div>
        </footer>
    );
}

export default Footer;



