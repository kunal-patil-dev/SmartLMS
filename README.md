# Smart LMS - AI Powered Learning Management System 🎓

An **AI-Powered Learning Management System (LMS)** built with the **MERN stack** and modern web technologies. This platform enhances learning experiences with AI-driven course discovery, seamless authentication, secure payments, and intuitive dashboards for both students and instructors.

---

## 🚀 Features

- **AI-Powered Smart Search**: Integrated with **Google Gemini API** for quick and accurate course discovery.
- **Secure Authentication**: Google OAuth login for a seamless and safe user experience.
- **Payments Integration**: Razorpay payment gateway with real-time payment status tracking.
- **Student & Instructor Dashboards**:
  - Students: Track course progress, access purchased content.
  - Instructors: Manage and monitor courses and student performance.
- **State Management**: Efficient global state handling using **Redux Toolkit**.
- **Responsive UI**: Fully modern, accessible, and responsive design across devices.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux Toolkit
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB

**Integrations:**
- Google Gemini API (AI Search)
- Razorpay (Payments)
- Google OAuth (Authentication)

---

## 📂 Project Structure

```bash
smart-lms/
├── frontend/              # Frontend (React + Redux Toolkit + Tailwind)
├── backedn/              # Backend (Node.js + Express)
├── configs/             # Config files (DB, APIs, etc.)
├── routes/              # Express routes
├── models/              # MongoDB models
├── controllers/         # Business logic
├── .env                 # Environment variables
└── README.md            # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/smart-lms.git
cd smart-lms
```

2. **Install dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. **Set up environment variables**
Create a `.env` file in the **server/** directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GEMINI_API_KEY=your_gemini_api_key
```

4. **Run the application**
```bash
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
```

App will be running on:
- **Frontend** → `http://localhost:5173`
- **Backend** → `http://localhost:5000`

## 👨‍💻 Author

**Kunal Patil**  
🔗 [LinkedIn](https://linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)

---

✨ *Smart LMS combines AI with education to make learning more personalized and efficient!*
