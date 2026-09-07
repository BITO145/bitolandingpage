#!/bin/bash

echo "🚀 BITO Backend Deployment Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the bitto-backend-nodejs directory"
    exit 1
fi

echo "✅ Found package.json"

# Check if vercel.json exists
if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found. Please create it first."
    exit 1
fi

echo "✅ Found vercel.json"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set environment variables in Vercel dashboard"
echo "2. Update frontend API URL"
echo "3. Test your endpoints"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions" 