# AI Gym Tracker Web App

A complete modern AI-powered Gym Workout Tracker Web App with Arabic-first responsive UI, built with React, Vite, Tailwind CSS, Framer Motion, and Chart.js.

## Features

- **Responsive Design**: Mobile-first and fully responsive layout.
- **RTL Support**: Built with an Arabic-first mindset, supporting smooth toggling between English (LTR) and Arabic (RTL).
- **Dark/Light Mode**: Ultra-modern premium design with Glassmorphism effects and Black + Neon Blue palette.
- **AI-Powered Suggestions**: Smart workout recommendations and fitness dashboard.
- **Extensive Exercise Database**: Preloaded with over 100 professional exercises across multiple muscle groups.
- **Workout Sessions**: Track sets, reps, weight, with an integrated rest timer.
- **Progress Analytics**: Visualized data using Chart.js to track your total volume and workout frequency.

## Tech Stack

- React 18
- Vite
- Tailwind CSS v3
- Framer Motion (for smooth animations)
- Chart.js (react-chartjs-2)
- LocalStorage for local data persistence

## Setup & Running Locally

Follow these steps to run the app on your local machine:

1. **Install Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Open Terminal**: Navigate to this project folder `ai-gym-tracker-web`.
3. **Install Dependencies**: Run the following command:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
5. **Open in Browser**: The terminal will display a local URL (usually `http://localhost:5173`). Open it in your browser.

## Deployment to GitHub Pages

To deploy this application to GitHub Pages, follow these instructions:

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. **Create a GitHub Repository**: Go to GitHub, create a new repository, and push your local repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. **Deploy using npm**:
   Ensure `homepage` is set in `package.json` if needed, or rely on `base: './'` in `vite.config.js`. Then run:
   ```bash
   npm run deploy
   ```
   This will build the app and push the `dist` folder to the `gh-pages` branch.
4. **Enable GitHub Pages**: Go to your repository settings on GitHub -> Pages -> Select the `gh-pages` branch as the source and save. Your app will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`.
