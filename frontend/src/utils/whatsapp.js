/**
 * Formats a phone number and message into a valid WhatsApp click-to-chat URL.
 * Excludes leading zeros, spaces, brackets, hyphens, or plus symbols from the phone number.
 * URL-encodes the message to preserve formatting like spacing and line breaks.
 */
export const buildDynamicWhatsAppLink = (config) => {
  // Strip any non-digit character
  const cleanPhone = config.phoneNumber.replace(/[^0-9]/g, '');
  
  let formattedMessage = `Hello Mayura Academy, I am ${config.studentName}.\n`;
  formattedMessage += `I would like to gather more details regarding the ${config.courseName} program.`;
  
  if (config.specificInquiry && config.specificInquiry.trim() !== '') {
    formattedMessage += `\nSpecifically, I would like to inquire about: ${config.specificInquiry}`;
  }
  
  const encodedMessage = encodeURIComponent(formattedMessage);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};
