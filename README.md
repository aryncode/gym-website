# Gym Website - MERN Stack Project

This project is a modern, responsive Gym Website built using the MERN stack (MongoDB, Express.js, React, and Node.js). It features a contact form that allows users to send messages directly to the owner's email via a backend API.

## **Technologies Used**

### **Frontend**
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Toastify**: For beautiful, customizable toast notifications.
- **React Spinners**: For loading indicators.

### **Backend**
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Nodemailer**: A module for Node.js to allow easy email sending.
- **Dotenv**: For managing environment variables.
- **CORS**: For handling Cross-Origin Resource Sharing.

---

## **Code Explanation**

### **Backend: `app.js`**
The entry point of the backend server.

- **Lines 1-4**: Importing necessary modules (`express`, `cors`, `dotenv`, and a custom `sendEmail` utility).
- **Lines 6-7**: Initializing the Express app and a router.
- **Line 9**: Loading environment variables from `config.env`.
- **Lines 11-15**: Configuring CORS to allow requests only from the specified `FRONTEND_URL` with POST methods and credentials.
- **Lines 17-18**: Middleware to parse JSON and URL-encoded request bodies.
- **Lines 20-43**: The POST route `/send/mail`:
    - **Line 21**: Extracts `name`, `email`, and `message` from the request body.
    - **Lines 22-27**: Validates that all fields are filled.
    - **Lines 28-35**: Calls the `sendEmail` function with the recipient's email (owner), subject, message, the sender's email, and the sender's name.
    - **Lines 35-38**: Sends a success response if the email is sent.
    - **Lines 39-42**: Handles errors and sends a 500 status code.
- **Line 45**: Tells Express to use the defined router.
- **Lines 48-50**: Starts the server on the port specified in environment variables.

### **Backend: `utils/sendEmail.js`**
A utility function to handle email logic using Nodemailer.

- **Line 3**: Defines an asynchronous `sendEmail` function that takes an `options` object.
- **Lines 4-12**: Creates a Nodemailer transporter using Gmail's SMTP service and credentials from environment variables.
- **Lines 13-18**: Configures `mailOptions` including the sender, recipient, subject, and the body of the email (which includes the user's message and their email address).
- **Line 19**: Sends the email using `transporter.sendMail()`.

### **Frontend: `Contact.jsx`**
The contact form component.

- **Lines 1-4**: Importing React hooks, `toast` for notifications, `axios` for API calls, and `BeatLoader` for loading state.
- **Lines 7-10**: Using `useState` to manage form inputs (`name`, `email`, `message`) and a `loading` state.
- **Lines 12-32**: The `onSubmit` function:
    - **Line 13**: Prevents default form submission.
    - **Line 14**: Sets `loading` to `true`.
    - **Lines 15-26**: Makes a POST request to the backend with form data. On success, it shows a toast, resets the form, and stops loading.
    - **Lines 27-31**: Catches errors, displays an error toast, and stops loading.
- **Lines 34-87**: The JSX structure:
    - **Line 40**: A form with an `onSubmit` handler.
    - **Lines 44, 59, 74**: Input fields for Name, Email, and Message, each with `value`, `onChange`, and `required` attributes.
    - **Lines 79-84**: A submit button that is disabled when `loading` is true and shows a spinner instead of text.

---

## **Getting Started**

### **Prerequisites**
- Node.js installed on your machine.
- A Gmail account with an **App Password** (if using Gmail for SMTP).

### **Installation**

1. **Backend Setup**:
   ```bash
   cd BACKEND
   npm install
   ```
   - Create a `config.env` file in the `BACKEND` folder with the following variables:
     ```env
     PORT=4000
     FRONTEND_URL=http://localhost:5173
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SERVICE=gmail
     SMTP_MAIL=your-email@gmail.com
     SMTP_PASSWORD=your-app-password
     ```

2. **Frontend Setup**:
   ```bash
   cd FRONTEND/gymapp
   npm install
   ```

### **Running the Project**

1. **Start Backend**:
   ```bash
   cd BACKEND
   npm run dev
   ```

2. **Start Frontend**:
   ```bash
   cd FRONTEND/gymapp
   npm run dev
   ```
