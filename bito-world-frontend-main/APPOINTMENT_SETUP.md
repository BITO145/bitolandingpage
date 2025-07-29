# BITO Appointment Booking System Setup Guide

## Overview
This appointment booking system allows users to book appointments with BITO leaders. The form data is sent to Google Apps Script, which stores it in Google Sheets and sends confirmation emails.

## Setup Instructions

### 1. Create Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the contents of `google-apps-script.js`
4. Save the project with a name like "BITO Appointment System"

### 2. Deploy the Web App

1. Click on "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Execute as**: "Me" (your Google account)
   - **Who has access**: "Anyone" (for public access)
4. Click "Deploy"
5. Copy the Web App URL that is generated

### 3. Update the Frontend Code

1. Open `src/Pages/Appointment.jsx`
2. Find this line:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the Web App URL

### 4. Create Google Sheet

1. Create a new Google Sheet
2. Name it "BITO Appointments" or similar
3. The Apps Script will automatically create the necessary sheets and format them

### 5. Set Up Email Notifications (Optional)

1. In the `google-apps-script.js` file, find this line:
   ```javascript
   const adminEmail = 'admin@bitoworld.in'; // Replace with admin email
   ```
2. Replace with your actual admin email address

### 6. Test the System

1. Run the `setupSpreadsheet()` function in Apps Script to initialize the sheet
2. Test the form by submitting an appointment request
3. Check that data appears in the Google Sheet
4. Verify that confirmation emails are sent

## Features

### Form Fields
- **Personal Information**: Name, Email, Phone, Company, Designation
- **Meeting Details**: Leader selection, Date, Time
- **Purpose**: Predefined options + custom purpose
- **Additional Message**: Optional notes

### Google Apps Script Features
- **Data Storage**: All submissions stored in Google Sheets
- **Email Notifications**: Automatic confirmation emails to users
- **Admin Notifications**: Email alerts for new appointments
- **Dashboard**: Summary statistics and recent appointments
- **Data Validation**: Status tracking (Pending, Confirmed, Cancelled, Completed)

### Leaders Available for Booking
1. Shri Chirag Paswan - Chairman
2. Pravin Kumar - President
3. Amaresh Mishra - Secretary-General
4. Shri Anil Kumar Pratham - IPS (Ex-DGP) Gujarat, Global Advisor
5. Ashish Mishra - BITO Advisor
6. Prabhat Ranjan - BITO Advisor
7. Clr. Jeff Whitton FAICD - Honorary Global Advisor

### Predefined Meeting Purposes
- Business Partnership Discussion
- Investment Opportunities
- Startup Guidance
- Cultural Exchange Programs
- International Trade Consultation
- Policy Discussion
- Networking Opportunity
- Project Collaboration
- Mentorship Session
- Strategic Planning

## Customization Options

### Adding New Leaders
1. Update the `leaders` array in `Appointment.jsx`
2. Add leader information with id, name, role, and image

### Adding New Purposes
1. Update the `predefinedPurposes` array in `Appointment.jsx`
2. Add new purpose options

### Modifying Email Templates
1. Edit the `sendConfirmationEmail()` function in the Apps Script
2. Customize the HTML email template

### Styling Changes
1. Modify `Appointment.css` for visual changes
2. Update colors, fonts, and layout as needed

## Troubleshooting

### Common Issues

1. **Form not submitting**
   - Check that the script URL is correct
   - Ensure the Apps Script is deployed as a web app
   - Check browser console for errors

2. **Emails not sending**
   - Verify Gmail API is enabled in Apps Script
   - Check that admin email is correctly set
   - Ensure proper permissions are granted

3. **Data not appearing in sheet**
   - Run `setupSpreadsheet()` function
   - Check that the sheet name is "Appointments"
   - Verify script has edit permissions on the sheet

### Security Considerations

1. **Rate Limiting**: Consider implementing rate limiting to prevent spam
2. **Data Validation**: Add server-side validation in Apps Script
3. **Access Control**: Restrict who can access the admin dashboard
4. **Data Backup**: Regularly backup the Google Sheet data

## Support

For technical support or customization requests, contact the development team.

---

**Note**: This system is designed to work without a traditional backend server, using Google Apps Script and Google Sheets for data management and email notifications. 