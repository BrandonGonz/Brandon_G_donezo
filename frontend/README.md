# 📝 Donezo Frontend

Donezo is a simple task management app built with React, Supabase for authentication and data storage, and Prisma/Express on the backend.

## 🚀 Getting Started

To run the frontend locally and connect it with your Supabase instance, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/donezo-frontend.git
cd donezo-frontend
```

2. Configure environment variables
   - Go to your Supabase dashboard.
   - Copy your Project URL and Anon Key from the project settings.
    ```cp .env.example .env```
Open the new `.env` file and update it like this:

`env`
`Copy`
`Edit`
`VITE_SUPABASE_URL=https://your-project.supabase.co`
`VITE_SUPABASE_ANON_KEY=your-anon-key`

3. Install dependencies
    Copy
    Edit
    `npm install`

4. Start the development server
    Copy
    Edit
    `npm run dev`
    Once running, the app should be available at `http://localhost:5173`.

🔐 Authentication
    Users log in via Supabase Auth.
    JWTs are attached to API requests to protect backend routes.
    Middleware verifies tokens before allowing todo creation or deletion.

## 🧠 Features Implemented

- ✅ User login (via Supabase)
- ✅ Secure creation of todos (JWT-authenticated)
- ✅ Delete todo functionality
- ✅ Middleware-protected backend route
- ✅ Axios client that attaches access token to all requests

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Authentication & Database:** Supabase
- **Backend:** Express.js, Prisma, PostgreSQL

