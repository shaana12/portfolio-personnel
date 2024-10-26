import React from "react";
import Button from "../components/button";
import cv from '../assets/cv.png';

const About: React.FC = () => {
    return (
        <div className="bg-grey min-h-screen p-8 flex flex-col items-center"> {/* Conteneur principal */}
        
            {/* Section d'introduction */}
            <div className="text-center mb-8 max-w-2xl mt-10">
                <h1 className="txt-grey titre text-2xl mb-4">A propos de moi</h1>
                <p className="txt-grey paragraphe">
                    Je suis Shana Fortuné, développeuse passionnée par la blockchain et les technologies du web.
                    Avec une expertise en React, TypeScript et d'autres technologies modernes, je suis toujours à la
                    recherche de nouveaux défis. Découvrez mon parcours professionnel.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem ipsa nemo commodi facilis temporibus doloribus rerum fugiat velit soluta, ducimus, voluptatibus, maiores debitis hic porro deleniti? Quod, provident doloribus!
                </p>
            </div>

            {/* Section du CV */}
            <div className="w-full max-w-4xl text-center mt-8">
                <h2 className="txt-grey titre text-2xl mb-4">Mon CV</h2>
                <img src={cv} alt="CV Shana Fortuné" className="w-full h-auto object-contain rounded-3xl" />
            </div>

        </div>
    );
}

export default About;
