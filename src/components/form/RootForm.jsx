// import LayoutWrapper from "../layout/LayoutWrapper"
import LayoutWrapper from "../Layout/layoutWrapper.jsx" 
import ContactForm from "./ContactForm"

export default function RootForm() {
const handleContact = (formData) => {
    console.log("Contact form submitted:", formData)
  }

  return (
    <LayoutWrapper>
      <ContactForm
        onSubmit={handleContact}
        title="Contact Us"
        submitLabel="Send Message"
      />
    </LayoutWrapper>
  )
}