[**Purpose and Scope:**

This document provides a comprehensive overview of the bookstore project, a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) technology stack. The system implements a digital bookstore with user authentication, book catalog management, and course offerings.

For detailed information about the frontend component architecture, see Frontend Architecture. For backend API implementation details, see Backend Architecture. For development environment setup, see Development Setup.

**System Architecture:**

The bookstore project follows a traditional client-server architecture with clear separation between frontend and backend services. The system consists of two main applications: a React-based frontend and an Express-based backend API server.

*High-Level Architecture*

![image](https://github.com/user-attachments/assets/ebafdd2c-1f35-4e8c-be00-76b6c96041e8)

Sources: Frontend/src/main.jsx, Frontend/package.json, Backend/package.json

*Application Entry Points*

The system initialization follows a specific bootstrap sequence starting from the React application entry point.

![image](https://github.com/user-attachments/assets/2f54595c-f745-4318-8768-8f49bfc7390a)

Sources: Frontend/src/main.jsx:8-16

**Technology Stack:**

The application leverages modern web development technologies organized into distinct layers with specific responsibilities.

*Frontend Technology Matrix*

| Category       | Technology       | Version | Purpose                        |
|----------------|------------------|---------|--------------------------------|
| Core Framework | react            | 19.1.0  | UI component library           |
| Build System   | vite             | 6.3.5   | Development server and bundler |
| Routing        | react-router-dom | 7.6.2   | Client-side navigation         |
| Styling        | tailwindcss      |	4.1.7   | Utility-first CSS framework    |
| UI Components  | daisyui          | 5.0.40  | Pre-built component library    |
| HTTP Client    | axios            | 1.10.0  | API communication              |
| Authentication | jwt-decode	      | 4.0.0   |	JWT token handling             |
| Forms	         | react-hook-form  | 7.58.0  | Form state management          |
| Notifications  | react-hot-toast  | 2.5.2   | Toast notifications            |
| Icons          | lucide-react     | 0.515.0	| Icon library                   |
| Animations     | aos              | 2.3.4   | Scroll-based animations        |
| Carousel       | react-slick      | 0.30.3  | Image/content carousels        |

Sources: Frontend/package.json:12-26

*Backend Technology Matrix*

|Category           | Technology   | Version | Purpose                           |
|-------------------|--------------|-------- |-----------------------------------|
| Runtime           | node.js	     | -       | JavaScript runtime                |
| Framework         | express	     | 5.1.0   | Web application framework         |
| Database          | mongoose	   | 8.16.0  | MongoDB object modeling           |
| Authentication    | jsonwebtoken | 9.0.2   | JWT token generation/verification |
| Password Security | bcrypt       | 6.0.0   | Password hashing                  |
| CORS              | cors	       | 2.8.5   | Cross-origin resource sharing     |
| Environment       | dotenv       | 16.5.0  | Environment variable management   |
| Development       | nodemon      | 3.1.10  | Auto-restart development server   |

Sources: Backend/package.json:21-28

**Project Structure:**

The codebase is organized into two primary directories representing the frontend and backend applications, each with its own dependency management and build configuration.

*Repository Organization*

![image](https://github.com/user-attachments/assets/e43caadc-737c-48d1-81d6-7b9488cc1bd2)

Sources: Frontend/package.json, Backend/package.json, Frontend/src/main.jsx

**Key Integration Points:**

The frontend and backend communicate through well-defined API endpoints with JWT-based authentication managing user sessions and authorization.

*Authentication Flow*

The authentication system integrates React context management with JWT tokens for persistent user sessions.

![image](https://github.com/user-attachments/assets/2e8294c8-f53d-4ffb-a8bc-8863b8da9325)

Sources: Frontend/src/main.jsx:9-15, Frontend/src/context/AuthProvider

The system architecture emphasizes modularity and separation of concerns, with the React frontend handling user interface and state management while the Express backend manages data persistence and business logic through RESTful API endpoints.](https://deepwiki.com/SyedYusuf013/bookStoreProject)
