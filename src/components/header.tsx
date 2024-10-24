// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Header: React.FC = () => {
  return (
    <header className="bg-grey p-8"> {/* Couleur de fond et padding */}
      <div className="container mx-auto flex justify-between items-center"> {/* Centrer le contenu */}
        <h1 className="titre txt-black text-2xl">SF</h1> {/* Titre du site */}
        <nav>
          <ul className="flex space-x-8"> {/* Espacement entre les liens */}
            <li>
              <Link to="/" className="paragraphe txt-black hover:text-white">Accueil</Link> {/* Lien vers Accueil */}
            </li>
            <li>
              <Link to="/about" className="paragraphe txt-black hover:text-white">À Propos</Link> {/* Lien vers À Propos */}
            </li>
            <li>
              <Link to="/projects" className="paragraphe txt-black hover:text-white">Mes projets</Link> {/* Lien vers À Propos */}
            </li>
            <li>
            <Button label="Me contacter" onClick={() => console.log('Clicked!')} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;








// ---- VERSION RESPONSIVE ---- 

// // src/components/Header.tsx
// import React, { useState } from 'react'; // Importer useState pour gérer l'état
// import { Link } from 'react-router-dom';

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture du menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Inverser l'état du menu
//   };

//   return (
//     <header className="bg-gray-800 p-4"> {/* Couleur de fond et padding */}
//     <div className="container mx-auto flex justify-between items-center"> {/* Conteneur principal */}
//     <h1 className="text-white text-2xl font-bold">Mon Portfolio</h1> {/* Titre du site */}
    
//     {/* Bouton hamburger pour mobile */}
//     <button 
//       onClick={toggleMenu} 
//       className="text-white md:hidden focus:outline-none" // Masquer le bouton sur les écrans moyens et grands
//     >
//       {isOpen ? '✕' : '☰'} {/* Afficher un X si ouvert, sinon un hamburger */}
//     </button>

//     {/* Navigation */}
//     <nav className={`absolute md:static bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px] md:top-0'} md:flex md:items-center w-full md:w-auto`}>
//       <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
//         <li>
//           <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
//         </li>
//         <li>
//           <Link to="/about" className="text-gray-300 hover:text-white">À Propos</Link>
//         </li>
//       </ul>
//     </nav>
//   </div>
// </header>
// );
// };

// export default Header;




