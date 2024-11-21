# Career Counseling Website

This project is a Career Counseling website designed to provide personalized career advice, guidance, and resources to users. It offers a user-friendly platform where individuals can access various counseling services to make informed decisions about their career paths.

## 🌐 Live Site URL
[Live Demo](https://your-live-site-url.com)

## 🔗 GitHub Repository
[GitHub Repository Link](https://github.com/your-username/career-counseling-website)

## 📋 Features
1. **Authentication System**: Email and password-based registration and login, Google authentication, password validation, and protected routes.
2. **Service Listings**: Displays various career counseling services with detailed information fetched from JSON data.
3. **Private Routes**: Access to detailed service information is restricted to logged-in users only. User info persists on reload using Firebase authentication.
4. **Dynamic Feedback**: Users can leave comments/feedback on service pages, viewable without page refresh.
5. **User Profile Management**: Logged-in users can update their name and photo. Implemented using Firebase’s `updateProfile()` method.

## 📜 Technologies Used
- **Frontend**: React, React Router, Tailwind CSS, Daisy UI, Swiper Slider
- **Backend & Authentication**: Firebase
- **State Management**: React Context API
- **Notifications**: React-Toastify
- **API Data Hosting**: imgbb for image hosting

## 📅 Project Summary
### **Pages & Components**:
- **Navbar**: Displays user details, login/logout options, and navigation links.
- **Home Page**:
  - **Slider**: A three-slide responsive slider implemented using Swiper.
  - **Services Section**: Lists various services with information like name, category, price, counselor, etc.
  - **Additional Sections**: Two additional custom sections to enhance user experience.
- **Service Details Page** (Protected Route): Shows detailed service info, allows users to add comments/feedback.
- **User Profile Page** (Protected Route): Displays user details with an option to edit and update them.
- **404 Page**: Custom error page for invalid routes.
- **Forget Password**: Functional forget password page with redirection to email for reset.

