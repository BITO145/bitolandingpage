# Vercel Deployment Guide

## Backend Deployment to Vercel

### 1. Prerequisites
- Vercel account
- MongoDB Atlas database (already configured)
- Git repository

### 2. Environment Variables Setup

In your Vercel dashboard, add these environment variables:

```
MONGODB_URI=mongodb+srv://bitovoice:Yash1125%40@bitojobs.owhunt6.mongodb.net/bitoworld?retryWrites=true&w=majority&appName=Bitojobs
JWT_SECRET=bito_world_jwt_secret_key_2024
JWT_EXPIRE=24h
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

### 3. Deployment Steps

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy:**
   ```bash
   cd bitto-backend-nodejs
   vercel
   ```

3. **Set Environment Variables:**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add all the variables listed above

### 4. API Endpoints

After deployment, your API will be available at:
- `https://your-project-name.vercel.app`

### 5. Test Deployment

Test the health check endpoint:
```bash
curl https://your-project-name.vercel.app
```

Should return: `Bitto World Node.js API is running.`

### 6. Frontend Configuration

Update your frontend environment variables:
```
VITE_API_BASE_URL=https://your-project-name.vercel.app/api
```

### 7. Admin Dashboard Access

- URL: `https://your-frontend-domain.vercel.app/admin-dashboard`
- Email: `admin@bitoworld.com`
- Password: `admin123`

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error:**
   - Check if MongoDB Atlas IP whitelist includes Vercel IPs
   - Verify connection string is correct

2. **CORS Errors:**
   - Update CORS_ORIGIN with your frontend domain
   - Ensure frontend URL is correct

3. **JWT Errors:**
   - Verify JWT_SECRET is set correctly
   - Check token expiration settings

### Support:
- Check Vercel logs in dashboard
- Monitor MongoDB Atlas logs
- Test endpoints with Postman or curl 