/** Fill in verified contact details here when the business provides them. */
export const contact = {
  phone: "+91 9544735252",
  whatsapp: "+91 9562731161",
  email: "ilaratravers@gmail.com",
  location: "VP Tower, MG Rd, near Chakkara Bazaar Road, Fort Road, Kasaragod, Keralam 671121, India",
};

export const whatsappUrl = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`
  : null;