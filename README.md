# Helpdesk System
email  -  a@b.c        password - 123
## Project Overview
This is a Helpdesk System web application built using React and Vite. The project implements a frontend interface with multiple pages and navigation between them. The application simulates user authentication with a simple login page and provides a dashboard and ticket management features.

## Pages and Components Built So Far
- **Login Page**: Allows users to log in using email and password. The login is simulated with hardcoded credentials (`a@b.c` / `123`). On successful login, users are redirected to the dashboard.
- **Signin Page**: A placeholder page for user registration (implementation details not covered here).
- **Email Page**: A placeholder page for password recovery (linked from the login page).
- **Dashboard Page**: Displays an overview of tickets with statistics such as total tickets, solved tickets, awaiting approval, and in progress.
- **Newticket Page**: Allows users to create new helpdesk tickets.
- **Sidebar, Navbar, Footer**: Layout components used across user pages for navigation and consistent UI.

## Navigation Flow
- The default route (`/`) redirects to the **Login** page.
- From the **Login** page, users can:
  - Log in with valid credentials to access the **Dashboard**.
  - Navigate to **Signin** page via the "Sign Up" link.
  - Navigate to **Email** page via the "Forgot password" link.
- From the **Dashboard**, users can navigate to other user pages such as **Newticket**.
- The **Sidebar** and **Navbar** provide navigation options within the user area.

## Working Buttons and Links
- **Login Page**:
  - **Sign In** button: Validates credentials and navigates to the dashboard on success.
  - **Forgot password** link: Navigates to the Email page.
  - **Sign Up** link: Navigates to the Signin page.
- **Dashboard and other user pages**: Navigation buttons and links in Sidebar and Navbar (assumed functional based on component presence).

## Backend and Frontend Implementation
- **Frontend**:
  - Built with React and Vite.
  - Uses `react-router-dom` for client-side routing.
  - State management for login form inputs and validation.
  - UI styled with Tailwind CSS classes.
- **Backend**:
  - No backend code is included in this project directory.
  - Authentication is simulated on the frontend with hardcoded credentials.
  - Ticket data and other dynamic content are currently static or placeholders.

## Deployment
- The project can be deployed on platforms like Vercel.
- Build command: `vite build`
- Output directory: `dist`
- Connect your GitHub repository to Vercel and follow the deployment steps.



---

This README provides an overview of the current state of the Helpdesk System project, its structure, and usage.
