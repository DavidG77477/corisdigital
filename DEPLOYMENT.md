# Instructions de déploiement

## Étape 1 : Pousser le code sur GitHub

Le code a été committé localement. Pour le pousser sur GitHub, vous devez vous authentifier.

### Option 1 : Utiliser un Personal Access Token (PAT) - Recommandé

1. **Créer un Personal Access Token sur GitHub :**
   - Allez sur https://github.com/settings/tokens
   - Cliquez sur "Generate new token" > "Generate new token (classic)"
   - Donnez un nom (ex: "Coris Digital Deployment")
   - Sélectionnez les permissions : `repo` (tout cocher dans la section repo)
   - Cliquez sur "Generate token"
   - **IMPORTANT :** Copiez le token immédiatement (il ne sera plus visible après)

2. **Pousser le code :**
   ```bash
   git push -u origin main
   ```
   - Quand GitHub demande votre nom d'utilisateur, entrez : `DavidG77477`
   - Quand GitHub demande votre mot de passe, utilisez le **Personal Access Token** (pas votre mot de passe GitHub)

### Option 2 : Utiliser SSH (Alternative)

Si vous préférez utiliser SSH :

1. **Vérifier si vous avez une clé SSH :**
   ```bash
   ls -al ~/.ssh
   ```

2. **Si vous n'avez pas de clé SSH, en créer une :**
   ```bash
   ssh-keygen -t ed25519 -C "votre_email@example.com"
   ```
   - Appuyez sur Entrée pour accepter l'emplacement par défaut
   - Créez une phrase secrète (ou laissez vide)

3. **Ajouter la clé SSH à GitHub :**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - Copiez le contenu affiché
   - Allez sur https://github.com/settings/keys
   - Cliquez sur "New SSH key"
   - Collez la clé et sauvegardez

4. **Changer l'URL remote pour SSH :**
   ```bash
   git remote set-url origin git@github.com:DavidG77477/corisdigital.git
   ```

5. **Pousser le code :**
   ```bash
   git push -u origin main
   ```

## Étape 2 : Déployer sur Vercel

Une fois le code poussé sur GitHub :

1. **Aller sur Vercel :**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet :**
   - Cliquez sur "Add New..." > "Project"
   - Sélectionnez le repository `DavidG77477/corisdigital`
   - Cliquez sur "Import"

3. **Configurer le projet :**
   - **Framework Preset :** Vite (détecté automatiquement)
   - **Root Directory :** `./` (par défaut)
   - **Build Command :** `npm run build` (par défaut)
   - **Output Directory :** `dist` (par défaut)

4. **Variables d'environnement (optionnel - pour EmailJS) :**
   Si vous avez configuré EmailJS, ajoutez ces variables dans "Environment Variables" :
   - `VITE_EMAILJS_SERVICE_ID` = votre_service_id
   - `VITE_EMAILJS_TEMPLATE_ID` = votre_template_id
   - `VITE_EMAILJS_PUBLIC_KEY` = votre_public_key

5. **Déployer :**
   - Cliquez sur "Deploy"
   - Vercel va automatiquement construire et déployer votre site
   - Une fois terminé, vous recevrez une URL (ex: `corisdigital.vercel.app`)

6. **Domaine personnalisé (optionnel) :**
   - Dans les paramètres du projet sur Vercel
   - Allez dans "Domains"
   - Ajoutez votre domaine personnalisé

## Notes importantes

- ✅ Le fichier `.env` n'est pas dans le repository (dans `.gitignore`)
- ✅ Le dossier `node_modules` n'est pas dans le repository
- ✅ Le dossier `dist` n'est pas dans le repository (généré lors du build)
- ⚠️ Si vous utilisez EmailJS, configurez les variables d'environnement sur Vercel
- ⚠️ Vercel rebuild automatiquement à chaque push sur la branche `main`

## Commandes utiles

```bash
# Vérifier le statut Git
git status

# Voir les commits
git log --oneline

# Voir la configuration remote
git remote -v

# Pousser les changements
git push origin main

# Ajouter de nouveaux fichiers
git add .
git commit -m "Description des changements"
git push origin main
```

