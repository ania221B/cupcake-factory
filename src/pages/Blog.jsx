import {
  AboutSection,
  BlogSection,
  CTASection,
  HeroSection,
  PopularPosts,
  ProductFeatureSection
} from '../components/sections'

function Blog () {
  return (
    <>
      <HeroSection title='Blog'></HeroSection>
      <BlogSection></BlogSection>
      <PopularPosts></PopularPosts>
      <AboutSection></AboutSection>
      <ProductFeatureSection></ProductFeatureSection>
      <CTASection></CTASection>
    </>
  )
}
export default Blog
