# Jaden Bonnett - Portfolio Website

A modern, full-stack developer portfolio website built with React, Node.js, and Tailwind CSS. Features a beautiful black and purple gradient design with smooth animations and a functional contact form.

## 🚀 Features

### Frontend
- **React 18** with modern hooks and functional components
- **Tailwind CSS** with custom purple gradient theme
- **Framer Motion** for smooth animations and transitions
- **Responsive Design** optimized for desktop and mobile
- **Dark Mode Toggle** with smooth transitions
- **Contact Form** with real-time validation

### Backend
- **Node.js** with Express server
- **Nodemailer** for email functionality
- **CORS** configured for cross-origin requests
- **Input Validation** and error handling
- **Auto-reply** emails to contact form submissions

## 📁 Project Structure

```
/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── DarkModeToggle.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── server.js
│   ├── package.json
│   └── env.example
├── package.json              # Root package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Gmail account (for email functionality)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio-website
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup

#### Backend Configuration
1. Copy the environment example file:
```bash
cd backend
cp env.example .env
```

2. Edit `.env` file with your Gmail credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Important:** For Gmail, you need to use an "App Password" instead of your regular password:
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings → Security → App Passwords
3. Generate an app password for "Mail"
4. Use this password in the `EMAIL_PASS` field

### 4. Run the Application

#### Development Mode (Both Frontend & Backend)
```bash
# From the root directory
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

#### Individual Services
```bash
# Frontend only
npm run client

# Backend only
npm run server
```

## 🎨 Customization

### Colors & Theme
The website uses a custom purple gradient theme. You can modify colors in:
- `frontend/tailwind.config.js` - Custom color palette
- `frontend/src/index.css` - Custom CSS classes

### Content
Update the following files to customize content:
- `frontend/src/components/Hero.jsx` - Name, title, and tagline
- `frontend/src/components/About.jsx` - Bio and skills
- `frontend/src/components/Projects.jsx` - Project details
- `frontend/src/components/ContactForm.jsx` - Contact information

### Projects
Edit the `projects` array in `frontend/src/components/Projects.jsx` to add/remove projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description...",
    tech: ["React", "Node.js"],
    liveDemo: "https://your-demo.com",
    github: "https://github.com/your-username/project",
    emoji: "🚀"
  }
];
```

## 🚀 Deployment

### Frontend (Vercel)

1. **Push to GitHub** and connect your repository to Vercel

2. **Configure Vercel Settings:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - `REACT_APP_BACKEND_URL`: Your backend URL

### Backend (Render)

1. **Create a new Web Service** on Render

2. **Connect your GitHub repository**

3. **Configure Build Settings:**
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Root Directory: `backend`

4. **Environment Variables:**
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your frontend URL

5. **Update CORS Configuration:**
   In `backend/server.js`, update the CORS origin to include your frontend URL:
   ```javascript
   origin: process.env.NODE_ENV === 'production' 
     ? ['https://your-frontend-domain.vercel.app']
     : 'http://localhost:3000'
   ```

### Update Frontend Backend URL

After deploying the backend, update the backend URL in `frontend/src/components/ContactForm.jsx`:

```javascript
const backendUrl = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.onrender.com' 
  : 'http://localhost:5000';
```

## 📧 Email Setup

The contact form sends emails using Gmail SMTP. To set up:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password:**
   - Go to Google Account Settings
   - Security → App Passwords
   - Select "Mail" and generate password
3. **Update `.env` file** with your email and app password

## 🧪 Testing

### Frontend
```bash
cd frontend
npm test
```

### Backend
Test the API endpoints:
```bash
# Health check
curl http://localhost:5000/api/health

# Contact form (replace with your data)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'
```

## 🔧 Available Scripts

### Root Directory
- `npm run dev` - Start both frontend and backend
- `npm run client` - Start frontend only
- `npm run server` - Start backend only
- `npm run install-all` - Install all dependencies

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending:**
   - Check Gmail app password is correct
   - Ensure 2FA is enabled on Google account
   - Verify `.env` file is in backend directory

2. **CORS errors:**
   - Update CORS origin in `backend/server.js`
   - Check frontend URL is correct

3. **Build errors:**
   - Clear node_modules and reinstall
   - Check Node.js version (v16+ required)

4. **Port conflicts:**
   - Change PORT in backend `.env` file
   - Update frontend backend URL accordingly

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help with deployment, feel free to reach out!

---

**Built with ❤️ by Jaden Bonnett** 