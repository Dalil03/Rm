
// components/ContactForm.tsx
import { useState, ChangeEvent, FormEvent } from 'react';

// Définir le type des données du formulaire
interface FormData {
  prenom: string;
  nom: string;
  email: string;
  tel: string;
  adresse: string;
  typologie: string;
  description: string;
}

export default function ContactForm() {
  // Initialiser les données du formulaire avec des types
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    adresse: '',
    typologie: '',
    description: '',
  });

  // Gestion du changement dans les champs du formulaire
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Votre message a été envoyé avec succès !');
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          tel: '',
          adresse: '',
          typologie: '',
          description: '',
        });
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l\'envoi.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Envoyer une demande</h2>
      {['prenom', 'nom', 'email', 'tel', 'adresse', 'superficie', 'typologie'].map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 capitalize"
          >
            {field}
          </label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            id={field}
            name={field}
            value={formData[field as keyof FormData]} // TypeScript nécessite de préciser le type de clé
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Envoyer
      </button>
    </form>
  );
}
