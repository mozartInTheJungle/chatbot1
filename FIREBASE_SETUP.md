# Firebase Setup Guide

## Prerequisites
1. A Firebase project (create one at https://console.firebase.google.com/)
2. Your existing DeepSeek API key

## Environment Variables

Add these environment variables to your `.env` file:

```bash
# DeepSeek API Configuration
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

## Firebase Project Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name and follow setup wizard

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" authentication
3. Enable "Google" authentication (optional but recommended)

### 3. Enable Firestore Database
1. Go to "Firestore Database" → "Create database"
2. Choose "Start in test mode" for development
3. Select a location close to your users

### 4. Get Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" → "Web"
4. Register your app and copy the configuration

### 5. Security Rules (Optional)
For production, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /chatSessions/{sessionId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## Features Added

### ✅ Authentication
- Email/password sign up and sign in
- Google OAuth sign in
- User session management
- Protected routes

### ✅ Chat History
- Save all conversations to Firestore
- Load previous chat sessions
- Edit chat session titles
- Delete chat sessions
- Real-time updates

### ✅ User Experience
- Beautiful login/signup forms
- Chat history sidebar
- User profile display
- Responsive design
- Dark mode support

## Deployment

### Vercel Environment Variables
Add all environment variables to your Vercel project:
1. Go to Vercel Dashboard → Your Project → Settings
2. Add environment variables under "Environment Variables"
3. Redeploy your project

### Firebase Security
For production deployment:
1. Update Firestore security rules
2. Enable proper authentication methods
3. Set up proper CORS if needed 