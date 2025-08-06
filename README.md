# HappyCake Frontend 🎂

This is the frontend for the **HappyCake** web application, built using Vite + React.

## 🚀 Technologies Used

- **Vite** – Lightning-fast frontend tooling
- **React** – JavaScript library for building UI
- **CSS Modules** – Scoped styling for components
- **Axios** – HTTP client for making API requests
- **Netlify** – Hosting platform for frontend deployment
- **Cloudflare Tunnel** – Used to expose the backend to the frontend

## 📦 Setup

### 1. Clone the repository

```bash
git clone <your-frontend-repo-url>
cd <your-frontend-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a `.env` file in the root folder:

```env
VITE_API_URL=https://api.happycake9821.web.id
```

### 4. Run the frontend

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Deploy to Netlify

- Push to GitHub

- Connect the repo to Netlify

- Make sure VITE_API_URL is set in Netlify's environment variables

- Set build command to npm run build

- Set publish directory to dist
