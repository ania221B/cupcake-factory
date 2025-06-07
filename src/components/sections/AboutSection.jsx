import { usePageLocation } from '../../hooks'
import { Button, SectionHeader } from '../common'

function AboutSection () {
  const path = usePageLocation()
  const isAboutPage = path === '/about'
  const isHomePage = path === '/'
  return (
    <section
      className={
        isHomePage ? 'about section' : 'about section deco deco--diamond'
      }
    >
      <div className='container columns-one-one'>
        <SectionHeader
          subtitle='About Us'
          title='Welcome to CupcakeFactory - a chocolate wonderland, where magic
            happens & creates the most delightful of treats!'
        ></SectionHeader>
        <img
          src='src/assets/images/pexels-pixelperfectmom-18186418.jpg'
          alt='Pink Cookie Cake With Cherries'
          title='Photo by Karina Kungla: Pink Cookie Cake With Cherries'
        />
        <img
          src='src/assets/images/pexels-pixelperfectmom-18296426.jpg'
          alt='White Chocolate Cheesecake With Cherry Jam'
          title='Photo by Karina Kungla: White Chocolate Cheesecake With Cherry Jam'
        />

        <img
          src='src/assets/images/pexels-pixelperfectmom-18254932.jpg'
          alt='Red Velvet Cake With Caramelised Peanuts, Raspberries And Cream Cheese Frosting'
          title='Photo by Karina Kungla: Red Velvet Cake With Caramelised Peanuts, Raspberries And Cream Cheese Frosting'
        />

        <div className='main-content flow' style={{ '--flow-spacer': '2rem' }}>
          <p className='fs-500 fw-700'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            facilis consectetur, fuga sequi molestiae accusamus assumenda quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel
            numquam beatae repellendus corporis. Nulla, earum laudantium,
            mollitia neque cum repellat nostrum.
          </p>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim.
          </p>

          {isAboutPage ? (
            <>
              <p className='fw-700'>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              </p>
              <p>
                {' '}
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus.
              </p>
              <p>
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh.
              </p>
            </>
          ) : (
            <Button
              buttonText={'More about us'}
              path={'/about'}
              isLink={true}
              isLines={true}
              aria-label={'Go to About page'}
            ></Button>
          )}
        </div>
      </div>
    </section>
  )
}
export default AboutSection
