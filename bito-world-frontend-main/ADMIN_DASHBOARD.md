# Admin Dashboard - Form Response Management

## Overview
The admin dashboard provides a centralized place to view and manage all form submissions from your website. It includes both appointment requests and contact form submissions.

## Features

### 1. Appointment Management
- View all appointment requests
- Update appointment status (Pending, Confirmed, Cancelled, Completed)
- Delete appointments
- See detailed information including:
  - Customer details (name, email, phone)
  - Selected leader and their role
  - Appointment date and time
  - Purpose and custom messages
  - Admin notes

### 2. Contact Form Management
- View all contact form submissions
- Update submission status (Unread, Read, Replied)
- Delete submissions
- See detailed information including:
  - Customer details (name, email)
  - Message content
  - Admin notes

## Access
- URL: `/admin-dashboard`
- Requires admin authentication
- Redirects to `/admin-login` if not authenticated

## API Endpoints

### Appointments
- `GET /api/appointment/admin/all` - Get all appointments
- `GET /api/appointment/admin/:id` - Get specific appointment
- `PUT /api/appointment/admin/:id/status` - Update appointment status
- `DELETE /api/appointment/admin/:id` - Delete appointment

### Contact Forms
- `GET /api/contact/admin/all` - Get all contact submissions
- `GET /api/contact/admin/:id` - Get specific contact submission
- `PUT /api/contact/admin/:id/status` - Update contact status
- `DELETE /api/contact/admin/:id` - Delete contact submission

## Setup Instructions

### Backend Setup
1. Create a `.env` file in the backend directory using `.env.example` as template
2. Add your MongoDB connection string
3. Configure JWT secret and email settings
4. Install dependencies: `npm install`
5. Start the server: `npm start`

### Frontend Setup
1. Set the `VITE_API_BASE_URL` environment variable to your backend URL
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Database Models

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  message: String (required),
  status: String (enum: ['unread', 'read', 'replied']),
  adminNotes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  selectedLeader: String (required),
  leaderName: String (required),
  leaderRole: String (required),
  date: Date (required),
  time: String (required),
  purpose: String (required),
  customPurpose: String,
  message: String,
  status: String (enum: ['pending', 'confirmed', 'cancelled', 'completed']),
  adminNotes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Security
- All admin endpoints require JWT authentication
- Admin routes are protected with middleware
- CORS is configured for security
- Rate limiting is implemented

## Deployment
- Backend can be deployed to Vercel or any Node.js hosting platform
- Frontend can be deployed to Vercel, Netlify, or any static hosting
- Ensure environment variables are properly configured in production 