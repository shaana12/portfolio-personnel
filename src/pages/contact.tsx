import React, { useState } from "react";
import Button from "../components/button";

const Contact: React.FC = () => {
    // État pour les champs du formulaire
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        console.log("Données du formulaire:", formData);
        // Ici, tu peux ajouter le code pour envoyer les données à ton serveur ou API
        setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
    };

    return (
        <div className="bg-grey p-8 min-h-screen flex flex-col items-center">
            <h1 className="txt-grey titre text-2xl mb-4">Contactez-moi</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-grey text-sm font-bold mb-2" htmlFor="name">
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
                    <label className="block text-grey text-sm font-bold mb-2" htmlFor="email">
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
                    <label className="block text-grey text-sm font-bold mb-2" htmlFor="message">
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
                <Button label="Envoyer" type="submit" onClick={() => console.log('Form submitted!')} />
            </form>
        </div>
    );
};

export default Contact;
