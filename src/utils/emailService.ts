import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_xmvimt1';
const EMAILJS_TEMPLATE_ID = 'template_1wlvt4m';
const EMAILJS_PUBLIC_KEY = 'Ao4_f7ePcPOCn6ZVI';

interface EmailData {
  formType: string;
  [key: string]: any;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Format email content based on form type
    let emailContent = '';
    let subject = '';
    
    switch (data.formType) {
      case 'product-request':
        subject = '🏥 NEW PRODUCT REQUEST - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW RENTAL REQUEST - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW REPAIR REQUEST - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW DEMO REQUEST - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW QUOTE REQUEST - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW CONTACT MESSAGE - NOVUSS MedTech';
        emailContent = `
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
        subject = '🏥 NEW FORM SUBMISSION - NOVUSS MedTech';
        emailContent = `
📋 FORM DATA:
${Object.entries(data).map(([key, value]) => `• ${key}: ${value}`).join('\n')}

⏰ Submitted: ${new Date().toLocaleString('en-IN')}
        `;
    }

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: 'novussmedtechindustries@gmail.com',
        subject: subject,
        message: emailContent,
        from_name: data.name || 'NOVUSS Website',
        reply_to: data.email || 'noreply@novuss.com'
      },
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result.text);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};