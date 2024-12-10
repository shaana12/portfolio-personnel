import React from "react";
import Button from "../components/button";

const Projects: React.FC = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-grey px-4 md:px-8"> 

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
        href="https://ideserveit.fr/" // Remplace par l'URL de ton choix
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

        </div>
    );

}

export default Projects;