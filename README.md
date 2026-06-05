# Blog Platform API

A robust RESTful API built with Node.js, Express, and MongoDB for managing a dynamic blogging platform. This backend supports user authentication, blog creation, and a commenting system, fully optimized for cloud deployment.

---

DEMO

Frontend : https://blog-platform-mu-lovat.vercel.app/

Backend : https://blog-platform-hqxg.onrender.com

## 🚀 Features

* **User Authentication:** Secure registration and login powered by `bcryptjs` and JSON Web Tokens (JWT).
* **Blog Management:** Full CRUD operations for creating, reading, updating, and deleting blog posts.
* **Commenting System:** Interactive thread capabilities allowing users to engage on posts.
* **Production Ready:** Configured with proper CORS policies, dynamic port binding, and secure cloud environment variable management.

---

## 🛠️ Tech Stack

* **Runtime Environment:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB & Mongoose ODM
* **Security:** JSON Web Tokens (JWT) & BcryptJS

---

## 📦 Installation & Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Harish171262/blog-platform.git](https://github.com/Harish171262/blog-platform.git)
    cd blog-platform/blog-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the root of the `blog-backend` directory and add your configurations:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

---

## 🌐 API Endpoints

### Authentication
