// Email service using Formspree
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkogqpz'; // Replace with your actual Formspree form ID

export interface FormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  formType: 'contact' | 'product-request' | 'repair-service' | 'rental-inquiry';
  [key: string]: any;
}

export const sendEmail = async (formData: FormData): Promise<boolean> => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: getEmailSubject(formData.formType),
        message: formatEmailBody(formData),
        _replyto: formData.email,
        ...formData
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

const formatEmailBody = (data: FormData): string => {
  let body = `New ${data.formType.replace('-', ' ')} submission:\n\n`;
  
  Object.entries(data).forEach(([key, value]) => {
    if (key !== 'formType' && value) {
      body += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}\n`;
    }
  });
  
  body += `\nSubmitted at: ${new Date().toLocaleString()}`;
  return body;
};

const getEmailSubject = (formType: string): string => {
  const subjects = {
    'contact': 'New Contact Form Submission - NOVUSS MedTech',
    'product-request': 'New Product Request - NOVUSS MedTech',
    'repair-service': 'New Repair Service Request - NOVUSS MedTech',
    'rental-inquiry': 'New Rental Inquiry - NOVUSS MedTech'
  };
  return subjects[formType as keyof typeof subjects] || 'New Form Submission - NOVUSS MedTech';
};