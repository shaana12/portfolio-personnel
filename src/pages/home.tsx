import React from "react"; // importation de React
import Button from "../components/button"; //importation du composant Button
import { Link } from "react-router-dom";
import portrait from '../assets/portrait.jpg';
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey"> 

    <div className="container mx-auto flex flex-col md:flex-row item-center justify-center mb-16 ">

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mb-16 min-h-screen">
    <div className="md:w-1/2 p-4 flex items-center justify-center">
        <img src={portrait} alt="Portrait de Shana" className="h-[8(vh] w-full object-cover rounded-3xl" />
    </div>

    <div className="md:w-1/2 p-4 flex flex-col items-center justify-center"> {/* Ajout de flex-col ici */}
        <h1 className="txt-grey titre text-2xl text-center">A propos de moi</h1> {/* Centrer le texte */}
        <br />
        <p className="txt-grey paragraphe text-center">
            Je suis Shana Fortuné, développeuse passionnée par la blockchain et les technologies du web.
            Avec une expertise en React, TypeScript et d'autres technologies modernes, je suis toujours à la 
            recherche de nouveaux défis. Découvrez mon parcours professionnel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem ipsa nemo commodi facilis temporibus doloribus rerum fugiat velit soluta, ducimus, voluptatibus, maiores debitis hic porro deleniti? Quod, provident doloribus!
        </p>
        <br />
        <Button label="En savoir plus" onClick={handleClickAbout} />
    </div>
</div>

    </div>



    <div className="text-center mb-16 mt-16">
        <h2 className="text-2xl txt-grey titre mb-4">Aperçu de mes projets</h2>
        <p className=" txt-grey paragraphe mb-6">
          J'ai travaillé sur divers projets utilisant les dernières technologies, notamment la blockchain,
          le développement front-end avec React, et bien plus encore.
        </p>

        {/* Aperçu des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8">
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