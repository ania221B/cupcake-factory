import {
  AboutSection,
  BlogSection,
  CTASection,
  HeroSection,
  PopularPostsSection,
  ProductFeatureSection
} from '../components/sections'

function Blog () {
  return (
    <>
      <HeroSection title='Blog'></HeroSection>
      <BlogSection></BlogSection>
      <PopularPostsSection></PopularPostsSection>
      <AboutSection></AboutSection>
      <ProductFeatureSection></ProductFeatureSection>
      <CTASection></CTASection>
    </>
  )
}
export default Blog
