# Production Deployment Guide

## 🚀 Quick Start - Choose Your Platform

### Option 1: Vercel (Recommended for Next.js)

#### Prerequisites:
- GitHub account
- Vercel account (free tier available)

#### Steps:
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Firebase integration"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDWyxLX_IwwdrKkysaqG0kn1-AfmQDICBE
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=wishcointech.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=wishcointech
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=wishcointech.firebasestorage.app
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=927740141086
     NEXT_PUBLIC_FIREBASE_APP_ID=1:927740141086:web:72cad2c1c0313cac59180f
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-V6DDTJT3J8
     ```
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - In Vercel dashboard, go to "Domains"
   - Add your custom domain (wishcoin.tech)
   - Update DNS records as instructed

---

### Option 2: Netlify

#### Prerequisites:
- GitHub account
- Netlify account (free tier available)

#### Steps:
1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables in Netlify dashboard (same as Vercel)
   - Click "Deploy site"

---

### Option 3: Firebase Hosting

#### Prerequisites:
- Firebase CLI installed: `npm install -g firebase-tools`

#### Steps:
1. **Login to Firebase:**
   ```bash
   firebase login
   ```

2. **Initialize Firebase Hosting:**
   ```bash
   firebase init hosting
   ```
   - Select your project: `wishcointech`
   - Public directory: `out` (for static export)
   - Configure as single-page app: Yes
   - Overwrite index.html: No

3. **Build and Deploy:**
   ```bash
   npm run build
   npm run export
   firebase deploy
   ```

---

## 🔒 Firebase Security Setup

### 1. Update Firestore Rules:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `wishcointech`
3. Go to "Firestore Database" → "Rules"
4. Replace with the rules from `firestore.rules` file
5. Click "Publish"

### 2. Enable App Check (Recommended):
1. In Firebase Console, go to "App Check"
2. Click "Get started"
3. Register your web app
4. Add App Check to your code (optional but recommended)

---

## 🌐 Custom Domain Setup

### For Vercel:
1. In Vercel dashboard → "Domains"
2. Add domain: `wishcoin.tech`
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. In Netlify dashboard → "Domain management"
2. Add custom domain: `wishcoin.tech`
3. Update DNS records as shown in Netlify

---

## 📊 Production Monitoring

### 1. Firebase Analytics:
- Already configured in your Firebase project
- View analytics in Firebase Console → "Analytics"

### 2. Error Monitoring:
Add Sentry for error tracking (optional):
```bash
npm install @sentry/nextjs
```

### 3. Performance Monitoring:
- Vercel: Built-in analytics
- Netlify: Built-in analytics
- Firebase: Performance monitoring available

---

## 🔧 Environment Variables

### Required for Production:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDWyxLX_IwwdrKkysaqG0kn1-AfmQDICBE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=wishcointech.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=wishcointech
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=wishcointech.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=927740141086
NEXT_PUBLIC_FIREBASE_APP_ID=1:927740141086:web:72cad2c1c0313cac59180f
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-V6DDTJT3J8
```

---

## 🚨 Security Checklist

- [ ] Firestore rules updated for production
- [ ] Environment variables set in hosting platform
- [ ] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Security headers configured
- [ ] Admin panel access restricted
- [ ] Firebase project settings reviewed

---

## 📱 Testing Production

### 1. Test Contact Form:
- Submit a test message
- Check Firebase Console for data
- Verify admin panel works (Ctrl+Shift+A)

### 2. Test Admin Panel:
- Open admin panel with keyboard shortcut
- Load submissions
- Test CSV export
- Test individual deletion

### 3. Performance Test:
- Use Google PageSpeed Insights
- Test on mobile devices
- Check Core Web Vitals

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional):
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check environment variables
   - Verify Firebase configuration
   - Check for TypeScript errors

2. **Contact Form Not Working:**
   - Verify Firestore rules
   - Check browser console for errors
   - Ensure Firebase project is active

3. **Admin Panel Not Loading:**
   - Check if client-side rendering is working
   - Verify Firebase permissions
   - Check network requests in DevTools

4. **Domain Not Working:**
   - Verify DNS records
   - Check SSL certificate
   - Wait for DNS propagation (up to 48 hours)

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify Firebase Console for data
3. Test in incognito mode
4. Check hosting platform logs

Your Firebase-integrated contact form is now ready for production! 🎉