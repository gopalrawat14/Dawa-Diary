<div align="center">
  <img src="public/assets/dawa-diary-logo.png" alt="Dawa Diary Logo" width="120" />
  <h1>🩺 Dawa Diary</h1>
  <p>
    <em>An intuitive, offline-first health record and medication tracker tailored for India.</em>
  </p>

  <!-- Badges -->
  <p>
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-18.x-blue.svg?style=flat-square&logo=react" alt="React" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-5.x-646CFF.svg?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://vercel.com/">
      <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000.svg?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
    </a>
  </p>
</div>

<hr />

## 📖 About The Project

**Dawa Diary** is a comprehensive health management application built to simplify the medical lives of Indian families. Designed with a strong focus on accessibility and localization, it provides a seamless interface for tracking prescriptions, managing daily medication regimens, and asking medical questions in natural **Hinglish** using advanced AI integration.

The application is built **Offline-First**, ensuring that users always have access to their critical medical history, even in areas with poor internet connectivity.

### ✨ Key Features

- **📱 Offline-First Architecture:** Access prescriptions and health history securely without an internet connection.
- **🕒 Interactive Medicine Tracker:** Features visually engaging "Time Pills" to log daily morning, afternoon, and night dosages, along with predictive refill reminders.
- **👨‍👩‍👧‍👦 Family Profiles:** Manage records and medications for multiple dependents under a single account.
- **🤖 Dawa Diary AI (RAG Simulation):** Ask questions about your own medical history (e.g., *"Mera pichla HbA1c test kaisa tha?"*) and receive contextual answers based on your uploaded records.
- **🚑 Emergency QR:** Instantly generate a shareable QR code that summarizes allergies, blood group, and current medications for emergency responders.
- **🌐 Bilingual Support:** Native support for English and Hindi interfaces, togglable from any screen.

## 🛠️ Built With

*   **Frontend:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [React Router DOM (v6)](https://reactrouter.com/)
*   **Styling:** Custom CSS + Responsive Design Tokens
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Backend / AI:** [Vercel Serverless Functions (Node.js)](https://vercel.com/docs/functions) connecting to Anthropic's Claude 3 API.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have Node.js installed on your local development machine.
*   Node.js (v18 or higher recommended)
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gopalrawat14/Dawa-Diary.git
    cd Dawa-Diary
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a local environment file based on the provided example.
    ```bash
    cp .env.example .env.local
    ```
    Open `.env.local` and add your Claude API Key to enable the AI Chat functionality.
    ```env
    VITE_CLAUDE_API_KEY=your_actual_anthropic_api_key_here
    VITE_APP_NAME="Dawa Diary"
    VITE_APP_VERSION=1.0.0
    ```

4.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    *Note: To test the Vercel serverless functions (`/api/chat.js`) locally, you must use the Vercel CLI by running `vercel dev` instead of `npm run dev`.*

## 🌍 Deployment on Vercel

Dawa Diary is pre-configured for seamless deployment to Vercel via the `vercel.json` file.

1. Push your code to your GitHub repository.
2. Log into [Vercel](https://vercel.com/) and create a new project by importing your GitHub repository.
3. Vercel will automatically detect the Vite React configuration.
4. **CRITICAL:** Before deploying, navigate to **Project Settings → Environment Variables** in Vercel.
5. Add the `VITE_CLAUDE_API_KEY` with your actual API key.
6. Click **Deploy**.

Because the API calls run via Serverless Node.js functions in the `/api/` directory, your API keys remain completely secure and hidden from the client's browser.

## 📁 Project Structure

```text
Dawa-Diary/
├── api/                    # Vercel Serverless Functions
│   ├── chat.js             # Claude AI Chat integration handler
│   └── extract-document.js # Document parsing simulation handler
├── public/
│   └── assets/             # Static images, icons, and mock PDFs
├── src/
│   ├── components/         # Reusable UI components & Main Screens
│   ├── App.css             # Global Layout Styles
│   ├── App.tsx             # Application Router Configuration
│   ├── index.css           # Global Design Tokens & Variables
│   └── main.tsx            # React Entry Point
├── .env.example            # Environment variable templates
├── vercel.json             # Vercel Deployment configuration
└── package.json            # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
<div align="center">
  <b>Built with ❤️ for a healthier tomorrow.</b>
</div>
