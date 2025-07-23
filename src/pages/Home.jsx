import { Button } from '../components/common'
import { SocialMediaList } from '../components/lists'
import {
  HeroSection,
  AboutSection,
  BestsellersSection,
  ProductFeatureSection,
  TestimonialSection,
  BlogSection
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
          Step into a world where every bite brings joy and every treat tells a
          story. From handcrafted cakes to delicate macarons, our bakery is
          devoted to creating sweets that are as beautiful as they are
          delicious. Whether you're celebrating a special moment or simply
          craving something sweet, you'll find just the right indulgence waiting
          for you here.
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
    </>
  )
}
export default Home
