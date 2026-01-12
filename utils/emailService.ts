import emailjs from '@emailjs/browser';

// Configuration EmailJS
// Vous devez remplacer ces valeurs par vos propres IDs EmailJS
// Créez un compte gratuit sur https://www.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  service?: string;
  formType?: string; // 'hero', 'contact', 'service-detail'
}

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  try {
    // Vérifier que EmailJS est configuré
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS n\'est pas configuré. Veuillez ajouter les variables d\'environnement.');
      console.error('Pour configurer EmailJS:');
      console.error('1. Créez un compte sur https://www.emailjs.com/');
      console.error('2. Créez un service email (Gmail, Outlook, etc.)');
      console.error('3. Créez un template email');
      console.error('4. Ajoutez les IDs dans un fichier .env:');
      console.error('   VITE_EMAILJS_SERVICE_ID=votre_service_id');
      console.error('   VITE_EMAILJS_TEMPLATE_ID=votre_template_id');
      console.error('   VITE_EMAILJS_PUBLIC_KEY=votre_public_key');
      return false;
    }

    // Initialiser EmailJS avec la clé publique
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Préparer les paramètres du template
    const templateParams = {
      to_email: 'hello@corisdigital.com', // Email de destination
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Non renseigné',
      message: formData.message || 'Aucun message',
      service: formData.service || 'Non spécifié',
      form_type: formData.formType || 'Formulaire',
      reply_to: formData.email,
    };

    // Envoyer l'email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      console.log('Email envoyé avec succès!', response);
      return true;
    } else {
      console.error('Erreur lors de l\'envoi de l\'email:', response);
      return false;
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

