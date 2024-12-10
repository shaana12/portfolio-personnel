import React from "react"; // importation de React
import Button from "../components/button"; //importation du composant Button
import { Link } from "react-router-dom";
import portrait from '../assets/Capture d’écran 2024-12-10 à 15.26.12.png';
import { useNavigate } from "react-router-dom";

// Déclaration de la page Home
// React.FC signifie que ce composant est une fonction React

const Home: React.FC = () => {

    const navigate = useNavigate();

    // Fonction de gestion du clic qui redirige vers la page "projects"
    const handleClickProjects = () => {
        navigate("/projects"); // Redirection vers la route "/projects"
    };

    const handleClickAbout = () => {
        navigate("/about"); // Redirection vers la route "/projects"
    };
    
    return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row item-center justify-center mb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mb-16 min-h-screen">
          <div className="md:w-1/2 p-4 flex items-center justify-center">
            <img src={portrait} alt="Portrait de Shana" className="h-[80vh] w-full object-cover rounded-3xl" />
          </div>

          <div className="md:w-1/2 p-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">À propos de moi</h1>
            <p className="text-gray-700 text-center text-lg mb-6">
              Je suis Shana Fortuné, développeuse passionnée par la blockchain et les technologies du web.
              Avec une expérience en React, TypeScript et d'autres technologies modernes, je suis toujours à la recherche de nouveaux défis.
            </p>
            <Button label="En savoir plus" onClick={handleClickAbout} />
          </div>
        </div>
      </div>



    {/* Section Projets */}
    <div className="text-center mb-16 mt-16 px-4">
        <h2 className="text-3xl text-gray-800 font-bold mb-4">Aperçu de mes projets</h2>
        <p className="text-gray-600 mb-6 text-lg">
          J'ai travaillé sur divers projets utilisant les dernières technologies, notamment la blockchain, le développement front-end avec React, et bien plus encore.
        </p>

        {/* Aperçu des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8">
          {/* Projet 1 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold txt-black mb-2">Portfolio personnel</h3>
            <p className="txt-grey mb-4">Ce projet à pour but de me présenter, en mettat en avant mes compétences et mes projets</p>
            <a
        href="https://github.com/shaana12" // Remplace par l'URL de ton choix
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Sécurise l'ouverture d'un nouvel onglet
        className="text-blue-500 hover:underline "
      >
        Voir le projet
      </a>
          </div>
          {/* Projet 2 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold txt-black  mb-2">YDI</h3>
            <p className="txt-grey mb-4 ">Site vitrine pour un formateur trading/marchés financiers</p>
            <a
        href="https://ideserveit.fr/" // Remplace par l'URL de ton choix
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Sécurise l'ouverture d'un nouvel onglet
        className="text-blue-500 hover:underline "
      >
        Voir le projet
      </a>
          </div>
          {/* Projet 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold txt-black  mb-2">JMC</h3>
            <p className="txt-grey mb-4"><span className="text-orange-400">Projet en cours</span> Site pour une association qui aide les mamans célibaires et les enfants au Congo</p>
            <a
        href="https://shaana12.github.io/association/" // Remplace par l'URL de ton choix
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Sécurise l'ouverture d'un nouvel onglet
        className="text-blue-500 hover:underline "
      >
        Voir le projet
      </a>
          </div>
          {/* Projet 4 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-bold txt-black  mb-2">Typescript-to-Rust</h3>
            <p className="txt-grey mb-4"><span className="text-orange-400">Projet en cours</span> Générateur de Rust à partir de Typescript</p>
            <a
        href="https://github.com/Bencooo/Typescript-to-Rust" // Remplace par l'URL de ton choix
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Sécurise l'ouverture d'un nouvel onglet
        className="text-blue-500 hover:underline "
      >
        Voir le projet
      </a>
          </div>
        </div>

        {/* Bouton "En savoir plus" pour la section Projets */}
        <div className="mt-6">
          <Link to="/projects">
          <Button label="En savoir plus" onClick={handleClickProjects} />
          </Link>
        </div>
      </div>
    
    </div>

    );
};

export default Home;