# LumaraCode Task Assessment (Frontend)

This is a **frontend part** of a Full-Stack project built using [Next.js](https://nextjs.org/), which includes a complete authentication system implemented using [NextAuth.js](https://next-auth.js.org/) and data is persisted in a **MongoDB** database. It supports both **email-password login** (credentials login) and **OAuth authentication** with **Google** and **Facebook**. The project also features a protected dashboard route that is accessible only to authenticated users.

The project has been **Deployed on Vercel**. You can access the live website at **[lumaracode-frontend.vercel.app](https://lumaracode-frontend.vercel.app/)**.

## Features

- **Email-Password Authentication**: Users can sign up and log in using their email and password. An email verification system has been implemented using **Nodemailer** to ensure the validity of user accounts.
- **OAuth Login**: Users can log in using their Google or Facebook accounts.
- **Protected Routes**: Certain pages, like the dashboard, are protected and only accessible to logged-in users.
- **Styled with Tailwind CSS**: The project uses [Tailwind CSS](https://tailwindcss.com/) for styling.
- **API Integration**: [Axios](https://axios-http.com/) is used for making API requests.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Email-Password, Google OAuth, Facebook OAuth)
- **Email Verification**: [Nodemailer](https://nodemailer.com/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## Deployment

- The project is Deployed on **[Vercel](https://vercel.com/)** for production.
- Live website: **[lumaracode-frontend.vercel.app](https://lumaracode-frontend.vercel.app/)**
