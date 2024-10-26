import React, { useState } from "react";
import Button from "../components/button";
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    // Déclaration des constantes pour les identifiants EmailJS
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

    // État pour les champs du formulaire
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",  // Ajout du champ "sujet"
        message: "",
    });

    // Gérer les changements dans les champs du formulaire
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Gérer la soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêcher le rechargement de la page

        // Envoi de l'e-mail via EmailJS
        emailjs.send(
            serviceID,         // Utilisation du service ID
            templateID,       // Utilisation du Template ID
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,  // Ajout du sujet ici
                message: formData.message,
            },
            publicKey          // Utilisation de la Public Key
        )
        .then((result) => {
            console.log('E-mail envoyé !', result.text);
        })
        .catch((error) => {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        });

        // Réinitialiser le formulaire
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="bg-grey p-8 min-h-screen flex flex-col items-center">
            <h1 className="txt-grey titre text-2xl mb-4">Contactez-moi</h1>
            <br />
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className=" paragraphe block text-grey text-sm font-bold mb-2" htmlFor="name">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className=" paragraphe block text-grey text-sm font-bold mb-2" htmlFor="email">
                        Adresse e-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className=" paragraphe block text-grey text-sm font-bold mb-2" htmlFor="subject">
                        Sujet
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"   // Assurez-vous que le name correspond à la variable dans le template
                        value={formData.subject}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className=" paragraphe block text-grey text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <Button label="Envoyer" type="submit" />
            </form>
        </div>
    );
};

export default Contact;
