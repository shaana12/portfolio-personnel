import React from "react";
import Button from "../components/button";

const Projects: React.FC = () => {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-grey px-4 md:px-8"> 

        {/* Aperçu des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Projet 1 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl txt-black titre mb-2">Projet 1</h3>
            <p className="txt-grey paragraphe">Description du projet 1, une brève présentation du travail réalisé.</p>
          </div>
          {/* Projet 2 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl txt-black titre mb-2">Projet 2</h3>
            <p className="txt-grey paragraphe">Description du projet 2, une brève présentation du travail réalisé.</p>
          </div>
          {/* Projet 3 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl txt-black titre mb-2">Projet 3</h3>
            <p className="txt-grey paragraphe">Description du projet 3, une brève présentation du travail réalisé.</p>
          </div>
          {/* Projet 4 */}
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl txt-black titre mb-2">Projet 4</h3>
            <p className="txt-grey paragraphe">Description du projet 4, une brève présentation du travail réalisé.</p>
          </div>
        </div>

        </div>
    );

}

export default Projects;