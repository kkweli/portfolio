// EmailJS Configuration using environment variables
export const emailjsConfig = {
  // Service ID from environment variables
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_chy7zkx',
  
  // Template ID from environment variables  
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  
  // Public Key from environment variables
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Validation to ensure all required environment variables are set
if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
  console.warn('EmailJS configuration incomplete. Please set all environment variables.');
}