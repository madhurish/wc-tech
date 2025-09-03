# Firebase Integration Setup Guide

## Step-by-Step Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `wishcoin-tech` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database
1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users
5. Click "Done"

### 3. Get Firebase Configuration
1. Go to Project Settings (gear icon in left sidebar)
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web (</>) icon
4. Register your app with nickname: `wishcoin-web`
5. Copy the Firebase configuration object

### 4. Update Environment Variables
Replace the values in `.env.local` with your actual Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
```

### 5. Set Up Firestore Security Rules (Important!)
1. Go to "Firestore Database" → "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to contact submissions
    match /contact_submissions/{document} {
      allow read, write: if true; // For development - restrict in production
    }
  }
}
```

**⚠️ Security Note:** The above rules allow anyone to read/write. For production, implement proper authentication and security rules.

### 6. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Submit a test message
4. Check Firebase Console → Firestore Database to see the data
5. Use Ctrl+Shift+A (or Cmd+Shift+A on Mac) to open admin panel
6. Click "Load Submissions" to see the data

### 7. Production Security Rules (Recommended)
For production, update your Firestore rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_submissions/{document} {
      // Allow anyone to create submissions
      allow create: if true;
      
      // Only allow authenticated admin users to read/update/delete
      allow read, update, delete: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}
```

## Features Implemented

### Contact Form
- ✅ Submits data to Firebase Firestore
- ✅ Real-time validation
- ✅ Success/error messages
- ✅ Form reset after successful submission

### Admin Panel (Ctrl+Shift+A)
- ✅ View submission count
- ✅ Load and display recent submissions
- ✅ Delete individual submissions
- ✅ Export all submissions as CSV
- ✅ Real-time data updates

### Data Structure
Each contact submission includes:
- `name`: User's name
- `email`: User's email
- `subject`: Message subject
- `message`: Message content
- `timestamp`: Submission date/time
- `status`: Submission status (new, read, replied)
- `ipAddress`: User's IP (if needed)
- `userAgent`: Browser information

## Troubleshooting

### Common Issues:
1. **"Firebase not initialized" error**: Check your environment variables
2. **Permission denied**: Check Firestore security rules
3. **Network errors**: Ensure Firebase project is active
4. **Hydration errors**: Already fixed with client-side checks

### Testing Checklist:
- [ ] Firebase project created
- [ ] Firestore database enabled
- [ ] Environment variables set
- [ ] Security rules configured
- [ ] Contact form submits successfully
- [ ] Admin panel loads submissions
- [ ] CSV export works
- [ ] Individual deletion works

## Next Steps (Optional Enhancements)
1. Add email notifications for new submissions
2. Implement user authentication for admin panel
3. Add submission status management (read/replied)
4. Create email templates for responses
5. Add analytics and reporting features