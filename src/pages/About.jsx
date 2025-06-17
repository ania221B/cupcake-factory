import {
  AboutSection,
  HeroSection,
  OurTeamSection,
  ProductFeatureSection,
  TestimonialSection
} from '../components/sections'

function About () {
  return (
    <>
      <HeroSection title={`About us`}></HeroSection>
      <AboutSection></AboutSection>
      <OurTeamSection></OurTeamSection>
      <ProductFeatureSection></ProductFeatureSection>
      <TestimonialSection></TestimonialSection>
    </>
  )
}
export default About
