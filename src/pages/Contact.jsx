import { ContactDetailsSection, HeroSection } from '../components/sections'
import ContactSection from '../components/sections/ContactSection'
import { footerLinks } from '../data'

function Contact () {
  const contactDetailsList = footerLinks.find(
    item => item.title === 'contact'
  ).details

  return (
    <>
      <HeroSection title={'Contact us'}></HeroSection>
      <ContactSection></ContactSection>
      <ContactDetailsSection list={contactDetailsList}></ContactDetailsSection>
    </>
  )
}
export default Contact
