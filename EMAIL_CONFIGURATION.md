# Configuration de l'envoi d'email

Tous les formulaires du site sont maintenant configurés pour envoyer les données par email à l'adresse `hello@corisdigital.com`.

## Configuration EmailJS

Pour activer l'envoi d'email, vous devez configurer EmailJS (service gratuit jusqu'à 200 emails/mois).

### Étapes de configuration :

1. **Créer un compte EmailJS**
   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit

2. **Créer un service email**
   - Dans le tableau de bord EmailJS, allez dans "Email Services"
   - Cliquez sur "Add New Service"
   - Choisissez votre service email (Gmail, Outlook, etc.)
   - Suivez les instructions pour connecter votre compte email
   - Notez le **Service ID** (ex: `service_xxxxx`)

3. **Créer un template email**
   - Allez dans "Email Templates"
   - Cliquez sur "Create New Template"
   - Utilisez ce modèle de template :

```
Sujet : Nouveau formulaire depuis votre site - {{form_type}}

Corps du message :

Bonjour,

Vous avez reçu une nouvelle soumission de formulaire depuis votre site web.

Type de formulaire : {{form_type}}
Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Service demandé : {{service}}
Message : {{message}}

---
Cet email a été envoyé depuis le formulaire de contact de votre site web.
```

   - Dans les paramètres du template, configurez :
     - **To Email** : `hello@corisdigital.com`
     - **From Name** : `{{from_name}}`
     - **Reply To** : `{{reply_to}}`
   - Notez le **Template ID** (ex: `template_xxxxx`)

4. **Obtenir la clé publique**
   - Allez dans "Account" > "General"
   - Notez votre **Public Key** (ex: `xxxxxxxxxxxxx`)

5. **Configurer les variables d'environnement**
   - Créez un fichier `.env` à la racine du projet
   - Ajoutez les lignes suivantes :

```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

   - Remplacez `votre_service_id`, `votre_template_id`, et `votre_public_key` par les valeurs obtenues dans les étapes précédentes

6. **Redémarrer le serveur de développement**
   - Arrêtez le serveur (Ctrl+C)
   - Relancez avec `npm run dev`

## Formulaires configurés

Les formulaires suivants envoient maintenant des emails :
- **Formulaire Hero** (page d'accueil)
- **Formulaire Contact** (section contact)
- **Formulaires ServiceDetailPage** (pages de services : SEO, Marketing, CRM/ERP, E-commerce, Product Design)

## Variables disponibles dans le template EmailJS

- `{{to_email}}` : Email de destination (hello@corisdigital.com)
- `{{from_name}}` : Nom de l'expéditeur
- `{{from_email}}` : Email de l'expéditeur
- `{{phone}}` : Téléphone (si renseigné)
- `{{message}}` : Message (si renseigné)
- `{{service}}` : Service demandé
- `{{form_type}}` : Type de formulaire (hero, contact, service-detail)
- `{{reply_to}}` : Email pour répondre

## Notes importantes

- Le service EmailJS gratuit permet jusqu'à 200 emails/mois
- Pour plus d'emails, vous pouvez passer à un plan payant
- Les emails sont envoyés depuis EmailJS, pas directement depuis votre serveur
- Si EmailJS n'est pas configuré, les formulaires afficheront un message d'erreur dans la console mais continueront de fonctionner (sans envoyer d'email)

