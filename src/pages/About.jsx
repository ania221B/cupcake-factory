import {
  AboutSection,
  CTASection,
  HeroSection,
  ProductFeatureSection,
  TestimonialSection
} from '../components/sections'

function About () {
  return (
    <>
      <HeroSection title={`About us`}></HeroSection>
      <AboutSection></AboutSection>
      <ProductFeatureSection></ProductFeatureSection>
      <TestimonialSection></TestimonialSection>
      <CTASection></CTASection>
    </>
  )
}
export default About
