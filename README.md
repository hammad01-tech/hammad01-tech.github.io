# Hammad Hamza Portfolio

A responsive, dark, editorial-style portfolio built with plain HTML, CSS and JavaScript.

## 1. Open the project

Open the folder in VS Code.

## 2. Add your photo

Create/use:

assets/profile.png

Put your professional cutout portrait there. The CSS automatically applies a subtle grayscale treatment.

## 3. Run locally

Option A: install the VS Code "Live Server" extension and click "Go Live".

Option B: from Git Bash inside this folder:

python -m http.server 5500

Then open http://localhost:5500

## 4. Connect the contact form

The form uses AJAX/fetch and Formspree.

1. Create a free form at https://formspree.io/
2. Create a new form.
3. Copy the form ID.
4. Open script.js.
5. Replace:

https://formspree.io/f/YOUR_FORM_ID

with your real endpoint.

Do NOT put passwords, API secret keys or private credentials in frontend JavaScript.

## 5. Edit content

Most portfolio content is already populated from the information supplied for this project. Search index.html for:
- Hammad Hamza
- email
- LinkedIn
- project descriptions
- placeholder metrics

## 6. Deploy with GitHub Pages

In Git Bash:

git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hammad-portfolio.git
git push -u origin main

On GitHub:
Settings → Pages → Deploy from a branch → main → / (root) → Save

Your site will then be published by GitHub Pages.

## Important
The supplied reference image is used as the visual direction: dark background, oversized typography, rounded frame, monochrome editorial visual, orange CTA and strong spacing. It is not used as the actual website image because it is a screenshot/reference rather than a clean portrait asset.
