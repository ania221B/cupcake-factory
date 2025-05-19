import { Button } from '../common'

function AboutSection () {
  return (
    <section className='about section'>
      <div className='container d-grid'>
        <header className='flow'>
          <h2 className='section__subtitle ff-secondary'>About Us</h2>
          <p className='section__title ff-secondary clr-neutral-500'>
            Welcome to CupcakeFactory - a chocolate wonderland, where magic
            happens and creates the most delightful of treats!
          </p>
        </header>
        <img
          src='assets/about-1-pexels-karley-saagi.jpg'
          alt=''
          title='Photo by Karley Saagi'
        />
        <img
          src='assets/about-2-pexels-karley-saagi.jpg'
          alt=''
          title='Photo by Karley Saagi'
          className='height-limit'
        />
        <img
          src='assets/about-3-pexels-karley-saagi.jpg'
          alt=''
          title='Photo by Karley Saagi'
          className='width-limit'
        />
        <div className='body flow'>
          <p className='fw-500'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            facilis consectetur, fuga sequi molestiae accusamus assumenda quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
            numquam beatae repellendus corporis. Nulla, earum laudantium,
            mollitia neque cum repellat nostrum.
          </p>
          {/* <a href='#' className='btn btn--lines bg-animation'>
            More About Us
          </a> */}
          <Button
            buttonText={'More about us'}
            path={'about'}
            isLink={true}
            isLines={true}
            aria-label={'Go to About page'}
          ></Button>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
