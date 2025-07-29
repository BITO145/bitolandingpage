// Google Apps Script Code for Appointment Form
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Appointments') || spreadsheet.insertSheet('Appointments');
    
    // Prepare the row data
    const rowData = [
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone,
      data.company || '',
      data.designation || '',
      data.selectedLeaderName,
      data.selectedLeaderRole,
      data.date,
      data.time,
      data.purpose,
      data.customPurpose || '',
      data.message || '',
      data.status,
      data.timestamp
    ];
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Designation',
        'Leader Name',
        'Leader Role',
        'Preferred Date',
        'Preferred Time',
        'Purpose',
        'Custom Purpose',
        'Message',
        'Status',
        'Submission Time'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.getRange(1, 1, 1, headers.length).setBackground('#b17d49');
      sheet.getRange(1, 1, 1, headers.length).setFontColor('white');
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send confirmation email (optional)
    sendConfirmationEmail(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Appointment request submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing appointment:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Failed to process appointment request'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendConfirmationEmail(data) {
  try {
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #b17d49 0%, #8b5a2b 100%); color: white; padding: 20px; text-align: center;">
          <h2>BITO Appointment Request</h2>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h3>Hello ${data.name},</h3>
          
          <p>Thank you for submitting your appointment request with Bihar International Trade Organization (BITO).</p>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4>Appointment Details:</h4>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Leader:</strong> ${data.selectedLeaderName} - ${data.selectedLeaderRole}</li>
              <li><strong>Date:</strong> ${data.date}</li>
              <li><strong>Time:</strong> ${data.time}</li>
              <li><strong>Purpose:</strong> ${data.purpose}</li>
              ${data.company ? `<li><strong>Company:</strong> ${data.company}</li>` : ''}
              ${data.designation ? `<li><strong>Designation:</strong> ${data.designation}</li>` : ''}
            </ul>
          </div>
          
          <p>We will review your request and contact you shortly to confirm the appointment details.</p>
          
          <p>If you have any questions, please don't hesitate to contact us.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              BITO Team<br>
              Bihar International Trade Organization
            </p>
          </div>
        </div>
      </div>
    `;
    
    // Send email to the user
    GmailApp.sendEmail(
      data.email,
      'BITO Appointment Request Confirmation',
      'Your appointment request has been received.',
      {
        htmlBody: emailTemplate,
        name: 'BITO Appointment System'
      }
    );
    
    // Send notification to admin (optional)
    const adminEmail = 'admin@bitoworld.in'; // Replace with admin email
    const adminSubject = 'New Appointment Request - ' + data.name;
    const adminBody = `
      New appointment request received:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.company || 'N/A'}
      Designation: ${data.designation || 'N/A'}
      Leader: ${data.selectedLeaderName}
      Date: ${data.date}
      Time: ${data.time}
      Purpose: ${data.purpose}
      Message: ${data.message || 'N/A'}
    `;
    
    GmailApp.sendEmail(adminEmail, adminSubject, adminBody);
    
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

// Function to set up the spreadsheet with proper formatting
function setupSpreadsheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Appointments') || spreadsheet.insertSheet('Appointments');
  
  // Clear existing data
  sheet.clear();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Phone',
    'Company',
    'Designation',
    'Leader Name',
    'Leader Role',
    'Preferred Date',
    'Preferred Time',
    'Purpose',
    'Custom Purpose',
    'Message',
    'Status',
    'Submission Time'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#b17d49');
  headerRange.setFontColor('white');
  headerRange.setHorizontalAlignment('center');
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  // Add data validation for Status column
  const statusValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Pending', 'Confirmed', 'Cancelled', 'Completed'], true)
    .setAllowInvalid(false)
    .build();
  
  sheet.getRange(2, 14, 1000, 1).setDataValidation(statusValidation);
  
  console.log('Spreadsheet setup completed successfully!');
}

// Function to create a summary dashboard
function createDashboard() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const appointmentsSheet = spreadsheet.getSheetByName('Appointments');
  const dashboardSheet = spreadsheet.getSheetByName('Dashboard') || spreadsheet.insertSheet('Dashboard');
  
  // Clear dashboard
  dashboardSheet.clear();
  
  // Get appointment data
  const data = appointmentsSheet.getDataRange().getValues();
  const headers = data[0];
  const appointments = data.slice(1);
  
  // Calculate statistics
  const totalAppointments = appointments.length;
  const pendingAppointments = appointments.filter(row => row[13] === 'Pending').length;
  const confirmedAppointments = appointments.filter(row => row[13] === 'Confirmed').length;
  const completedAppointments = appointments.filter(row => row[13] === 'Completed').length;
  
  // Create dashboard content
  const dashboardData = [
    ['BITO Appointment Dashboard'],
    [''],
    ['Total Appointments', totalAppointments],
    ['Pending', pendingAppointments],
    ['Confirmed', confirmedAppointments],
    ['Completed', completedAppointments],
    [''],
    ['Recent Appointments'],
    ['Name', 'Leader', 'Date', 'Time', 'Status']
  ];
  
  // Add recent appointments (last 10)
  const recentAppointments = appointments.slice(-10).reverse();
  recentAppointments.forEach(row => {
    dashboardData.push([
      row[1], // Name
      row[6], // Leader Name
      row[8], // Date
      row[9], // Time
      row[13] // Status
    ]);
  });
  
  // Set dashboard data
  const range = dashboardSheet.getRange(1, 1, dashboardData.length, Math.max(...dashboardData.map(row => row.length)));
  range.setValues(dashboardData);
  
  // Format dashboard
  dashboardSheet.getRange(1, 1, 1, 1).setFontSize(18).setFontWeight('bold');
  dashboardSheet.getRange(3, 1, 4, 2).setBackground('#f0f0f0');
  dashboardSheet.getRange(8, 1, 1, 5).setFontWeight('bold').setBackground('#b17d49').setFontColor('white');
  
  // Auto-resize columns
  dashboardSheet.autoResizeColumns(1, 5);
  
  console.log('Dashboard created successfully!');
} 