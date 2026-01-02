// Email service using EmailJS
// You need to sign up at https://www.emailjs.com/ and get your keys

interface EmailData {
  formType: string;
  [key: string]: any;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // EmailJS configuration - Replace with your actual keys
    const SERVICE_ID = 'service_novuss'; // Replace with your EmailJS service ID
    const TEMPLATE_ID = 'template_novuss'; // Replace with your EmailJS template ID  
    const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

    // Format email content based on form type
    let emailContent = '';
    
    switch (data.formType) {
      case 'product-request':
        emailContent = `
🏥 NEW PRODUCT REQUEST - NOVUSS MedTech

📋 EQUIPMENT DETAILS:
• Category: ${data.category}
• Product Name: ${data.productName}
• Description: ${data.description}
• Quantity: ${data.quantity}
• Budget Range: ${data.budgetRange || 'Not specified'}
• Uploaded File: ${data.uploadedFile || 'None'}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Institution: ${data.institutionName}
• City: ${data.city}
• Phone: ${data.phoneNumber}
• Email: ${data.email}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      case 'rental-request':
        emailContent = `
🏥 NEW RENTAL REQUEST - NOVUSS MedTech

📋 RENTAL DETAILS:
• Product: ${data.productName}
• Duration: ${data.rentalDuration}
• Start Date: ${data.startDate}
• Address: ${data.address}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Phone: ${data.phoneNumber}
• Email: ${data.email}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      case 'repair-request':
        emailContent = `
🏥 NEW REPAIR REQUEST - NOVUSS MedTech

📋 REPAIR DETAILS:
• Equipment: ${data.productName}
• Other Equipment: ${data.otherProduct || 'N/A'}
• Problem Description: ${data.machineInfo}
• Assessment Date: ${data.when}
• Location: ${data.where}
• Contact Person: ${data.who}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Phone: ${data.phoneNumber}
• Email: ${data.email}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      case 'demo-request':
        emailContent = `
🏥 NEW DEMO REQUEST - NOVUSS MedTech

📋 DEMO DETAILS:
• Product Category: ${data.product}
• Date: ${data.date}
• Time Slot: ${data.timeSlot}
• Company: ${data.company || 'Not specified'}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      case 'quote-request':
        emailContent = `
🏥 NEW QUOTE REQUEST - NOVUSS MedTech

📋 QUOTE DETAILS:
• Product: ${data.productName}
• Quantity: ${data.quantity}
• Additional Notes: ${data.note || 'None'}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Phone: ${data.phoneNumber}
• Email: ${data.email || 'Not provided'}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      case 'contact-form':
        emailContent = `
🏥 NEW CONTACT MESSAGE - NOVUSS MedTech

📋 MESSAGE DETAILS:
• Company: ${data.company || 'Not specified'}
• Message: ${data.message}

👤 CONTACT INFORMATION:
• Name: ${data.name}
• Email: ${data.email}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
        break;

      default:
        emailContent = `
🏥 NEW FORM SUBMISSION - NOVUSS MedTech

📋 FORM DATA:
${Object.entries(data).map(([key, value]) => `• ${key}: ${value}`).join('\n')}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
    }

    // For now, we'll use a simple fetch to a mock endpoint
    // In production, replace this with actual EmailJS implementation
    console.log('Email would be sent:', emailContent);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return true; // Return true for success
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Instructions for setting up EmailJS:
/*
1. Go to https://www.emailjs.com/ and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables like {{message}}, {{from_name}}, etc.
4. Get your Service ID, Template ID, and Public Key
5. Replace the placeholder values above
6. Install EmailJS: npm install @emailjs/browser
7. Replace the mock implementation with actual EmailJS calls

Example EmailJS implementation:
import emailjs from '@emailjs/browser';

const result = await emailjs.send(
  SERVICE_ID,
  TEMPLATE_ID,
  {
    message: emailContent,
    to_email: 'novussmedtechindustries@gmail.com',
    from_name: data.name || 'NOVUSS Website',
    reply_to: data.email || 'noreply@novuss.com'
  },
  PUBLIC_KEY
);
*/