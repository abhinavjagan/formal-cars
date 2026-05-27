# Backend - Express.js Server

RESTful API backend for the portfolio website built with Express.js and Node.js.

## Features

- 📧 Contact form email service
- 🔐 Security headers (Helmet)
- 🌐 CORS configuration
- ⏱️ Rate limiting
- 📝 Input validation and sanitization
- 🔄 Dual email notifications (admin & user)

## Quick Start

```bash
npm install
npm run dev
```

Backend runs on [http://localhost:5000](http://localhost:5000)

## Environment Variables

Create `.env.local`:

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email Configuration (Gmail)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=abhinavpolimera@gmail.com
```

### Gmail App Password Setup

1. Enable 2FA on Gmail account
2. Go to [Google Account](https://myaccount.google.com/security)
3. App passwords → Select Mail & Windows Computer
4. Copy 16-character password
5. Use in `EMAIL_PASSWORD`

## API Endpoints

### Health Check
```
GET /health
Response: { status: 'ok', message: 'Backend is running' }
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to work with you..."
}

Response:
{
  "success": true,
  "message": "Email sent successfully"
}

Error Response (400):
{
  "error": "Missing required fields" | "Invalid email format"
}

Error Response (500):
{
  "error": "Failed to send email. Please try again later."
}
```

## Rate Limiting

- Contact form is rate-limited to **5 requests per 15 minutes** per IP
- Returns `429 Too Many Requests` if exceeded

## Security Features

- **Helmet.js** - Sets HTTP headers for security
- **CORS** - Restricted to frontend origin
- **Rate Limiting** - Prevents abuse
- **Input Validation** - Email format checking
- **Input Sanitization** - Removes HTML/script tags
- **Environment Secrets** - No credentials in code

## Error Handling

All errors return JSON responses with appropriate HTTP status codes:

- `400` - Bad Request (validation errors)
- `404` - Not Found
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

## Project Structure

```
backend/
├── src/
│   └── index.js            # Main server file
├── .env.example            # Environment variables template
├── .env.local              # Your local environment (git ignored)
├── package.json
├── Dockerfile
└── README.md
```

## Email Templates

### Admin Notification
Sends to `RECIPIENT_EMAIL` with:
- Contact name, email, subject
- Full message
- Reply-To: user's email

### User Confirmation
Sends to user's email with:
- Thank you message
- Their message echoed back
- Professional closure

## Development

```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start server
```

## Production Deployment

### Build
No build step needed - pure Node.js

### Environment Variables
Set on your hosting platform (Heroku, Railway, etc.):
```
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://yourportfolio.com
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

### Docker
```bash
docker build -t portfolio-backend .
docker run -p 5000:5000 --env-file .env portfolio-backend
```

## Troubleshooting

### Email not sending
- Check Gmail credentials are correct
- Verify App Password (not regular password)
- Check "Less secure apps" if not using 2FA
- Verify ports: 587 or 465

### CORS errors
- Make sure `FRONTEND_URL` matches your frontend origin
- Check browser console for specific CORS error

### Port already in use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows
```

## Dependencies

- **express** - Web framework
- **cors** - Cross-origin requests
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **nodemailer** - Email service
- **dotenv** - Environment variables

## Resources

- [Express.js Docs](https://expressjs.com)
- [Nodemailer Docs](https://nodemailer.com)
- [Helmet.js](https://helmetjs.github.io)
