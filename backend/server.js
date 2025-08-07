const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
console.log('Setting up CORS middleware...');
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://portfolio-site-zeta-one-30.vercel.app', 'https://portfolio-frontend.vercel.app', 'https://jadenbonnett.vercel.app']
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
};
console.log('CORS options:', corsOptions);

app.use(cors(corsOptions));
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
  next();
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validation function
const validateContactData = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email address');
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  return errors;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('=== CONTACT FORM REQUEST RECEIVED ===');
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  console.log('Origin:', req.headers.origin);
  
  try {
    const { name, email, message } = req.body;
    console.log('Extracted form data:', { name, email, message });
    
    // Validate input
    const validationErrors = validateContactData({ name, email, message });
    console.log('Validation errors:', validationErrors);
    
    if (validationErrors.length > 0) {
      console.log('Validation failed, returning error');
      return res.status(400).json({
        success: false,
        message: validationErrors.join(', ')
      });
    }
    
    // Check if email credentials are configured
    console.log('Checking email credentials...');
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please contact the administrator.'
      });
    }
    
    // Create email transporter
    console.log('Creating email transporter...');
    const transporter = createTransporter();
    console.log('Email transporter created successfully');
    
    // Email content
    console.log('Preparing email content...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8b5cf6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `
    };
    console.log('Email content prepared:', mailOptions);
    
    // Send email
    console.log('Attempting to send email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to admin');
    
    // Send auto-reply to the person who contacted you
    console.log('Preparing auto-reply email...');
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for reaching out - Jaden Bonnett',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">Thank you for your message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to check out my projects or connect with me on social media.</p>
          <p>Best regards,<br>Jaden Bonnett</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This is an automated response. Please don't reply to this email.
          </p>
        </div>
      `
    };
    console.log('Auto-reply email prepared:', autoReplyOptions);
    
    console.log('Attempting to send auto-reply email...');
    await transporter.sendMail(autoReplyOptions);
    console.log('Auto-reply email sent successfully');
    
    console.log('=== CONTACT FORM SUCCESS ===');
    res.json({
      success: true,
      message: 'Message sent successfully!'
    });
    
  } catch (error) {
    console.error('=== CONTACT FORM ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    
    // Check if it's a nodemailer error
    if (error.code) {
      console.error('Nodemailer error code:', error.code);
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check request received');
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    emailConfigured: !!process.env.EMAIL_USER,
    corsOrigins: corsOptions.origin
  });
});

// Test contact endpoint (for debugging)
app.post('/api/contact-test', (req, res) => {
  console.log('=== CONTACT TEST ENDPOINT ===');
  console.log('Request body:', req.body);
  console.log('Request headers:', req.headers);
  
  res.json({
    success: true,
    message: 'Test endpoint working',
    receivedData: req.body,
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log('=== SERVER STARTUP ===');
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`CORS origins: ${JSON.stringify(corsOptions.origin)}`);
  console.log('Available endpoints:');
  console.log('  - GET  /api/health');
  console.log('  - POST /api/contact');
  console.log('=== SERVER READY ===');
}); 