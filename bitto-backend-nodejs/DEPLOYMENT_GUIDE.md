# 🚀 Vercel Deployment Guide for BITO Backend

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Your code should be on GitHub
3. **Vercel CLI** (optional): `npm i -g vercel`

## 🔧 Step-by-Step Deployment

### **Step 1: Prepare Your Repository**

1. **Push your backend code to GitHub**:
   ```bash
   cd bitto-backend-nodejs
   git init
   git add .
   git commit -m "Initial backend commit"
   git remote add origin https://github.com/YOUR_USERNAME/bitto-backend.git
   git push -u origin main
   ```

### **Step 2: Deploy via Vercel Dashboard**

1. **Go to [vercel.com](https://vercel.com) and login**
2. **Click "New Project"**
3. **Import your GitHub repository** (bitto-backend)
4. **Configure the project**:
   - **Framework Preset**: Node.js
   - **Root Directory**: `./` (or leave empty)
   - **Build Command**: Leave empty (Vercel will auto-detect)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

### **Step 3: Set Environment Variables**

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

```
MONGODB_URI=mongodb+srv://bitovoice:Yash1125%40@bitojobs.owhunt6.mongodb.net/bitoworld?retryWrites=true&w=majority&appName=Bitojobs
JWT_SECRET=your-super-secret-jwt-key-here
MAIL_FROM_ADDRESS=noreply@bitoworld.com
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
CORS_ORIGIN=https://your-frontend-domain.vercel.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### **Step 4: Deploy**

1. **Click "Deploy"**
2. **Wait for deployment to complete** (usually 2-3 minutes)
3. **Your API will be available at**: `https://your-project-name.vercel.app`

## 🔗 Update Frontend API URL

After deployment, update your frontend environment variables:

```bash
# In bito-world-frontend-main/.env
VITE_API_BASE_URL=https://your-backend-project-name.vercel.app/api
```

## 📊 Deployment Checklist

- ✅ `vercel.json` created
- ✅ `package.json` has correct main entry point
- ✅ Environment variables configured
- ✅ MongoDB connection string updated
- ✅ CORS settings configured for production
- ✅ Frontend API URL updated

## 🛠️ Troubleshooting

### **Common Issues:**

1. **Build Fails**: Check if all dependencies are in `package.json`
2. **Environment Variables**: Ensure all required env vars are set in Vercel
3. **MongoDB Connection**: Verify connection string is correct
4. **CORS Errors**: Update CORS_ORIGIN to your frontend domain

### **Debug Commands:**

```bash
# Check Vercel logs
vercel logs

# Redeploy
vercel --prod

# Check environment variables
vercel env ls
```

## 🎯 Post-Deployment

1. **Test your API endpoints**:
   ```bash
   curl https://your-backend.vercel.app/api/contact/submit
   ```

2. **Update frontend to use new API URL**

3. **Test admin dashboard login**

4. **Verify form submissions work**

## 📱 Your Deployed Backend

- **URL**: `https://your-project-name.vercel.app`
- **API Base**: `https://your-project-name.vercel.app/api`
- **Health Check**: `https://your-project-name.vercel.app/`

## 🔐 Security Notes

- ✅ JWT_SECRET is set
- ✅ CORS is configured
- ✅ Rate limiting is enabled
- ✅ Helmet security headers are active

---

**🎉 Your backend is now deployed and ready to handle form submissions!** 