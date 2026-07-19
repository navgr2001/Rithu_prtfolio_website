# H.A.N.R. Savindaya Interior Designer Portfolio

Responsive React + TypeScript portfolio website recreated from the provided sample project and customized using the interior design portfolio PDF content and imagery.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion for React
- EmailJS-ready contact form

## Main sections

- Intro cover screen
- Sticky responsive header
- Hero section
- About section
- Project gallery with filters, thumbnails, lightbox, swipe, and zoom support
- Skills section
- Contact section
- Footer

## Beginner setup steps

### 1. Install Node.js
Install Node.js 20 or newer from the official Node.js website.

### 2. Open the project folder
Open this folder in VS Code.

### 3. Install dependencies
Run this in the VS Code terminal:

```bash
npm install
```

This will create a fresh `package-lock.json` on your computer.

### 4. Start the website
Run:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### 5. Build for production
Run:

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

### 6. Preview the production build
Run:

```bash
npm run preview
```

## Where to update content later

- Main designer details: `src/data/content.ts`
- Project content and images: `src/data/content.ts`
- Website colors and responsive styling: `src/styles.css`
- Portfolio images: `public/images/portfolio/`
- Downloadable portfolio PDF: `public/rithu-savindaya-portfolio.pdf`

## Contact form setup

The form is already prepared for EmailJS and reCAPTCHA. Add real keys to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
```

After editing `.env`, restart the development server.
