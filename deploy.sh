#!/bin/bash

# 🚀 One-Command Deploy Script for Vibe Generator

echo "🌈 Deploying Vibe Generator to Vercel..."
echo ""
echo "Step 1: Authenticating with Vercel..."
npx vercel login

echo ""
echo "Step 2: Deploying to production..."
npx vercel --prod

echo ""
echo "✨ Deployment complete! Your Vibe Generator is live!"
echo ""

