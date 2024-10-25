// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  // État pour contrôler l'ouverture du menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverser l'état du menu
  };

  const closeMenu = () => {
    setIsOpen(false);  // Fermer le menu
  };

  const goContact = () => {
    
  }

  return (
    <header className="bg-grey p-8 relative"> {/* Header positionné en relatif */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="titre txt-black text-2xl">SF</h1> {/* Titre du site */}

        {/* Bouton du menu pour petits écrans */}
        <Button
          label={isOpen ? '✖' : '☰'} 
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        />

        {/* Menu principal visible seulement sur grand écran */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="paragraphe txt-black hover:text-white">Accueil</Link>
          <Link to="/about" className="paragraphe txt-black hover:text-white">À Propos</Link>
          <Link to="/projects" className="paragraphe txt-black hover:text-white">Mes projets</Link>
          <Button label="Me contacter" onClick={() => console.log('Clicked!')} />
        </nav>

        {/* Menu mobile en position absolue pour afficher sous le header */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-grey shadow-lg flex flex-col space-y-4 p-4 md:hidden">
            <Link to="/" className="paragraphe txt-black hover:text-white" onClick={closeMenu}>Accueil</Link>
            <Link to="/about" className="paragraphe txt-black hover:text-white" onClick={closeMenu}>À Propos</Link>
            <Link to="/projects" className="paragraphe txt-black hover:text-white" onClick={closeMenu}>Mes projets</Link>
            <Link to="/contact"> {/* Lien vers la page de contact */}
                <Button label="Me contacter" onClick={() => { toggleMenu(); }} />
              </Link>
          </nav>
        )}
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




