# 🚀 Deployment Guide - Portfolio Website

This guide will help you deploy your full-stack portfolio website with the frontend on Vercel and backend on Render.

## 📋 Prerequisites

- GitHub repository with your code
- Vercel account (free)
- Render account (free)
- Gmail account (for email functionality)

## 🖥️ Frontend Deployment (Vercel)

### 1. Prepare Your Repository
Make sure your code is pushed to GitHub with the following structure:
```
/
├── frontend/          # React frontend
├── backend/           # Node.js backend
└── README.md
```

### 2. Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

### 3. Set Environment Variables

1. **Go to Project Settings → Environment Variables**
2. **Add the following variable:**
   - **Name**: `VITE_BACKEND_URL`
   - **Value**: `https://portfolio-site-dis6.onrender.com`
   - **Environment**: Production, Preview, Development

3. **Redeploy the project**

### 4. Get Your Vercel URL
After deployment, note your Vercel URL (e.g., `https://your-project.vercel.app`)

## ⚙️ Backend Deployment (Render)

### 1. Deploy to Render

1. **Go to [Render](https://render.com)** and sign in
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `portfolio-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Environment**: Node

### 2. Set Environment Variables

1. **Go to Environment → Environment Variables**
2. **Add the following variables:**
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   NODE_ENV=production
   ```

### 3. Gmail Setup (for Email Functionality)

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password:**
   - Go to Google Account Settings → Security
   - Click "App Passwords"
   - Select "Mail" and generate password
3. **Use this password** in the `EMAIL_PASS` environment variable

## 🔧 CORS Configuration

### Update Backend CORS
In your `backend/server.js`, update the CORS configuration with your actual Vercel URL:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-actual-vercel-url.vercel.app']
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));
```

### Redeploy Backend
After updating CORS, redeploy your backend on Render.

## ✅ Testing Your Deployment

### 1. Test Frontend
- Visit your Vercel URL
- Check that the portfolio loads correctly
- Test the dark mode toggle

### 2. Test Contact Form
- Fill out the contact form
- Submit and check for success message
- Verify emails are sent (check your Gmail)

### 3. Test Backend API
```bash
# Health check
curl https://portfolio-site-dis6.onrender.com/api/health

# Contact form test
curl -X POST https://portfolio-site-dis6.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello!"}'
```

## 🔄 Environment Variables Summary

### Frontend (Vercel)
```
VITE_BACKEND_URL=https://portfolio-site-dis6.onrender.com
```

### Backend (Render)
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
NODE_ENV=production
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check that your Vercel URL is in the backend CORS configuration
   - Ensure the backend is deployed and running

2. **Email Not Sending**
   - Verify Gmail credentials are correct
   - Check that 2FA is enabled and app password is generated
   - Check Render logs for errors

3. **Frontend Not Loading**
   - Verify environment variables are set in Vercel
   - Check build logs for errors
   - Ensure the root directory is set to `frontend`

4. **Backend Not Starting**
   - Check Render logs for startup errors
   - Verify all dependencies are in `package.json`
   - Ensure start command is correct

### Useful Commands

```bash
# Test backend locally
cd backend
npm install
npm start

# Test frontend locally
cd frontend
npm install
npm start

# Check environment variables
echo $VITE_BACKEND_URL
```

## 📞 Support

If you encounter issues:
1. Check the logs in Vercel and Render dashboards
2. Verify all environment variables are set correctly
3. Test the API endpoints directly
4. Check the browser console for frontend errors

---

**Your portfolio website should now be fully deployed and functional!** 🎉 