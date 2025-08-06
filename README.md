# Donezo Full Stack Application

## Backend

The backend is very simple. It connects to Supabase using Prisma (which is allowed and (documented)[https://supabase.com/partners/integrations/prisma] how to do).
There is no authentication being handled here, only Authorization.

For more information on the backend, please look at the README in the backend folder 


## Frontend

The frontend is a React Single Page Application. It connects to Supabase via it's Authentication service and does have a Supabase Client initialized.

For more information on the frontend, please look at the readme in the frontend folder

## What I Worked On

This project was set up and built from scratch, including both backend and frontend. Key contributions include:

- ⚙️ Set up the backend with Express, Prisma, and PostgreSQL
- 🔧 Connected the frontend to Supabase for authentication and data storage
- 🛠️ Debugged and resolved a 500 error on the `/todos` POST route
- 🔐 Integrated Supabase JWT token authentication in the backend using custom middleware
- ✅ Verified protected routes using Postman and Supabase access tokens
- 🧱 Implemented the delete functionality for todos on the frontend
- 🧪 Ensured all database writes were tied to authenticated users using Prisma and Supabase
