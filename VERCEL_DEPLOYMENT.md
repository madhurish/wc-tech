# Vercel Deployment Guide - Quick Fix

## 🚨 Issue Fixed: Environment Variables

The deployment failed because Vercel was looking for secrets that don't exist. Here's the corrected approach:

## ✅ Step-by-Step Vercel Deployment

### 1. Push Your Code to GitHub
```bash
git add .
git commit -m "Fix Vercel deployment configuration"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **IMPORTANT**: Add these environment variables in the Vercel dashboard:

   Go to Project Settings → Environment Variables and add:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyDWyxLX_IwwdrKkysaqG0kn1-AfmQDICBE
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = wishcointech.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID = wishcointech
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = wishcointech.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 927740141086
   NEXT_PUBLIC_FIREBASE_APP_ID = 1:927740141086:web:72cad2c1c0313cac59180f
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = G-V6DDTJT3J8
   ```

5. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
# Enter: AIzaSyDWyxLX_IwwdrKkysaqG0kn1-AfmQDICBE

vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
# Enter: wishcointech.firebaseapp.com

vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID
# Enter: wishcointech

vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
# Enter: wishcointech.firebasestorage.app

vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
# Enter: 927740141086

vercel env add NEXT_PUBLIC_FIREBASE_APP_ID
# Enter: 1:927740141086:web:72cad2c1c0313cac59180f

vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
# Enter: G-V6DDTJT3J8

# Deploy to production
vercel --prod
```

### 3. Update Firebase Security Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: `wishcointech`
3. Go to "Firestore Database" → "Rules"
4. Replace with this production-ready rule:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_submissions/{document} {
      // Allow anyone to create new contact submissions
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'subject', 'message', 'timestamp', 'status']) &&
                      request.resource.data.name is string &&
                      request.resource.data.email is string &&
                      request.resource.data.subject is string &&
                      request.resource.data.message is string &&
                      request.resource.data.timestamp is timestamp &&
                      request.resource.data.status == 'new';
      
      // Allow read access (for admin panel)
      allow read: if true;
      
      // Disable updates and deletes for now
      allow update: if false;
      allow delete: if false;
    }
  }
}
```

5. Click "Publish"

### 4. Test Your Deployment

1. **Test Contact Form:**
   - Go to your deployed site
   - Fill out and submit the contact form
   - Check Firebase Console → Firestore Database for the new document

2. **Test Admin Panel:**
   - Press `Ctrl+Shift+A` (or `Cmd+Shift+A` on Mac)
   - Click "Load Submissions"
   - Verify you can see the submitted data

3. **Test CSV Export:**
   - In admin panel, click "Download CSV"
   - Verify the file downloads with your data

## 🎯 Custom Domain Setup (Optional)

1. In Vercel dashboard → "Domains"
2. Add your domain: `wishcoin.tech`
3. Update your DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🔧 Troubleshooting

### If deployment still fails:
1. **Check Environment Variables**: Make sure all 7 Firebase variables are set in Vercel
2. **Check Build Logs**: Look for specific error messages in Vercel dashboard
3. **Test Locally**: Run `npm run build` locally to check for build errors

### If contact form doesn't work:
1. **Check Browser Console**: Look for Firebase errors
2. **Verify Firestore Rules**: Make sure rules are published
3. **Check Network Tab**: Verify Firebase requests are being made

## ✅ Success Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] All 7 environment variables added to Vercel
- [ ] Deployment successful
- [ ] Firestore rules updated
- [ ] Contact form submits successfully
- [ ] Admin panel loads data
- [ ] CSV export works
- [ ] Custom domain configured (optional)

Your Firebase-integrated contact form should now be live and working! 🎉