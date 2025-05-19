import { Button } from '../components/common'
import { SocialMediaList } from '../components/lists'
import {
  HeroSection,
  AboutSection,
  BestsellersSection,
  ProductFeatureSection,
  TestimonialSection,
  BlogSection,
  CTASection
} from '../components/sections'
import { heroImages } from '../data'

function Home () {
  return (
    <>
      <HeroSection
        title={'Discover the most delightful of sweets & treats!'}
        additionalContent={true}
        image={heroImages.home}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          suscipit impedit fuga, velit porro blanditiis rem sunt accusantium
          ipsa voluptatem.
        </p>
        <div className='hero__buttons even-columns'>
          <Button
            buttonText={'Go to store'}
            path={'store'}
            isLink={true}
            isAccent={true}
          ></Button>
          <Button
            buttonText={'Visit blog'}
            path={'blog'}
            hasArrow={true}
            isInvisible={true}
            isLink={true}
          ></Button>
        </div>

        <SocialMediaList></SocialMediaList>
      </HeroSection>

      <AboutSection></AboutSection>

      <BestsellersSection></BestsellersSection>

      <ProductFeatureSection></ProductFeatureSection>

      <TestimonialSection></TestimonialSection>

      <BlogSection></BlogSection>

      <CTASection></CTASection>
    </>
  )
}
export default Home
