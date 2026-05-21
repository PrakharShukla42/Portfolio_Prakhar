# Modern Developer Portfolio

A premium, modern, and highly animated developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Node.js.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS v3, Framer Motion, React Icons
- **Backend**: Node.js, Express.js, Nodemailer

## Project Structure
- `/client`: Frontend React application.
- `/server`: Backend Express application for handling the contact form.

## Setup Instructions

### 1. Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Create a `.env` file in the `server` directory.
   - Add the following variables (update with your real email credentials if you want to use the email sending functionality):
     ```env
     PORT=5000
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_app_password
     RECEIVER_EMAIL=your_email@gmail.com
     ```
4. Start the server:
   ```bash
   node index.js
   # Or use nodemon for development
   ```

### 2. Frontend Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization
- **Theme**: You can customize the colors and fonts in `client/tailwind.config.js`.
- **Data**: Update the component files in `client/src/components` to replace the dummy text with your actual information, projects, and achievements.

## Deployment
- **Frontend**: Deploy the `/client` directory to Vercel, Netlify, or any other static hosting platform. Make sure to set the build command to `npm run build` and output directory to `dist`. Update the backend API URL in `Contact.tsx` before deploying.
- **Backend**: Deploy the `/server` directory to Render, Railway, or Heroku. Make sure to set the environment variables in your hosting provider's dashboard.
