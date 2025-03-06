# Rwaj Nextjs Task

This repository contains the solution for the **Nextjs Development Challenge** by Rwaj Solutions Inc. The project is structured to meet the challenge's requirements, focusing on clean code, responsiveness, and modularity.

---

## Features

### 1. **Login and Authentication**
- Login page with username and password fields.
- Input validation and redirection to the Home page upon successful login.

### 2. **Register**
- Register page with Mobile number field 

### 3. **Navigation**
- Responsive Navbar for navigation between login and register pages. 

### 4. **Responsive Design**
- Fully responsive interface using **MUI** for styling.
- Layouts adapt seamlessly to desktop and mobile screens.

### 6. **Error Handling**
- Includes a **NotFound** component to handle unknown routes gracefully.

### 7. **Bonus Features** 
- Backend API integration for login and user data fetching.

---


## Project Folder Structure

```
.next/
app/
├── login/
│   ├── page.tsx   
├── register/
│   ├── page.tsx   
│── page.tsx
│── not-found.tsx
│── layout.tsx
│── favicon.ico
│── globals.css
│── favicon.ico
components/
├── Auth/
│   ├── components/
│   │   ├── Login/
│   │   ├── Register/
│   │   └── styles.tsx
│   └── Toast/
hooks/
icons/
Layout/
network/
├── apis/
│   └── axios.ts
node_modules/
Providers/
public/
theme/
├── components/
├── palette/
├── typography/
└── theme.config.tsx
utils/
.env
.eslintrc.json
.gitignore
.prettierignore
.prettierrc
next-env.d.ts
next.config.mjs
package-lock.json
package.json
README.md
tsconfig.json
```


## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm or yarn
- Nextjs (for development server)

### Installation
1. Clone the repository: 
   git clone https://github.com/ProNabowy/Rwaj
   cd Rwaj
2. npm install --force
3. npm run dev
4. http://localhost:3000

## User Credentials

The following users can be used to log in to the application during testing:

```
https://api.escuelajs.co/api/v1/users
```

# Key Libraries Used

- **NextJs**: Frontend library.
- **Typescript**: Frontend library.
- **MUI**: framework for styling.
- **Axios**: HTTP client for API integration.

---

Thank you for reviewing this project! For any feedback or queries, feel free to reach out.
