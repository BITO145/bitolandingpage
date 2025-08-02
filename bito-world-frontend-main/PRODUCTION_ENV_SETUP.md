# 🚨 URGENT: Production Environment Variable Setup

## ❌ **Current Issue**
Your live site `https://bitoworld.in` is trying to access `http://localhost:3000/api/membership/submit` instead of your deployed backend.

**Error**: CORS blocked - trying to access localhost from production domain

---

## ✅ **Solution: Set Environment Variable in Vercel**

### **Step 1: Go to Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Login to your account
3. Find your frontend project (bito-world-frontend-main)

### **Step 2: Add Environment Variable**
1. Click on your project
2. Go to **Settings** tab
3. Click on **Environment Variables** in the left sidebar
4. Click **Add** button

### **Step 3: Add This Environment Variable**
```
Name: VITE_API_BASE_URL
Value: https://bitolandingpage-iyhj.vercel.app/api
Environment: Production
```

### **Step 4: Redeploy**
1. After adding the environment variable
2. Go to **Deployments** tab
3. Click **Redeploy** on your latest deployment
4. Or push a new commit to trigger automatic deployment

---

## 🔧 **Alternative: Update vercel.json**

If you prefer to set it in code, update your `vercel.json`:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination":"/"
        }
    ],
    "env": {
        "VITE_API_BASE_URL": "https://bitolandingpage-iyhj.vercel.app/api"
    }
}
```

---

## 🧪 **Test After Deployment**

1. **Test Contact Form**: Go to `https://bitoworld.in/contact-us`
2. **Test Membership Form**: Go to `https://bitoworld.in/membership`
3. **Test Appointment Form**: Go to `https://bitoworld.in/appointment`

**Expected**: Forms should now work without CORS errors

---

## 📊 **Current Status**

- ✅ **Local Development**: Working (uses localhost:3000)
- ❌ **Production**: Broken (trying to use localhost:3000)
- ✅ **Backend**: Deployed and working
- ❌ **Frontend**: Missing environment variable

---

## 🎯 **Quick Fix**

**Option 1 (Recommended)**: Add environment variable in Vercel dashboard
**Option 2**: Update vercel.json and redeploy

**Both will fix the CORS issue!** 🎉 