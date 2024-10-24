import React from "react";
import Button from "../components/button";

const About: React.FC = () => {
    return(
        <div className="h-screen p-4 flex flex-col items-center justify-center"> {/* Ajout de flex-col ici */}
        <h1 className="txt-grey titre text-2xl text-center">A propos de moi</h1> {/* Centrer le texte */}
        <br />
        <p className="txt-grey paragraphe text-center">
            Je suis Shana Fortuné, développeuse passionnée par la blockchain et les technologies du web.
            Avec une expertise en React, TypeScript et d'autres technologies modernes, je suis toujours à la 
            recherche de nouveaux défis. Découvrez mon parcours professionnel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem ipsa nemo commodi facilis temporibus doloribus rerum fugiat velit soluta, ducimus, voluptatibus, maiores debitis hic porro deleniti? Quod, provident doloribus!
        </p>
    </div>
    );
}

export default About;