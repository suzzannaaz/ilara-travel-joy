/** Fill in verified contact details here when the business provides them. */
export const contact = {
  phone: "",
  whatsapp: "",
  email: "",
  location: "Kasaragod, Kerala, India",
};

export const whatsappUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
  : null;