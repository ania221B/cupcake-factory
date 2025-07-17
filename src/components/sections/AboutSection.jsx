import { aboutImages } from '../../data'
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
        {aboutImages.map(image => {
          return (
            <picture key={image.id}>
              <source
                srcSet={image.desktop.avif}
                type='image/avif'
                media='(min-width: 912px)'
              />
              <source
                srcSet={image.desktop.webp}
                type='image/webp'
                media='(min-width: 912px)'
              />
              <source
                srcSet={image.tablet.avif}
                type='image/avif'
                media='(min-width: 768px)'
              />
              <source
                srcSet={image.tablet.webp}
                type='image/webp'
                media='(min-width: 768px)'
              />
              <source
                srcSet={image.mobile.webp}
                type='image/avif'
                media='(max-width: 767px)'
              />
              <source
                srcSet={image.mobile.webp}
                type='image/webp'
                media='(max-width: 767px)'
              />
              <img src={image.fallback} alt={image.alt} title={image.title} />
            </picture>
          )
        })}

        <div className='main-content flow' style={{ '--flow-spacer': '2rem' }}>
          {isAboutPage ? (
            <>
              <p className='fw-700'>
                At CupcakeFactory, we’re more than a bakery — we’re
                dream-weavers, flavor-tinkerers, and full-time lovers of all
                things sweet. Nestled in the heart of our imaginary town (and
                somewhere deep in your dessert dreams), we specialize in
                hand-crafted confections that are equal parts indulgent and
                imaginative.
              </p>
              <p>
                From cloud-like cupcakes and perfectly swirled buttercream to
                rich chocolate ganache that melts on your tongue, every treat we
                create is made with heart, whimsy, and just a touch of fairy
                dust. Our recipes blend old-world charm with a pinch of modern
                flair — the kind of sweets that transport you back to childhood
                and make your Instagram feed blush.
              </p>
              <p>
                We believe dessert should be a joyful ritual — not just a bite,
                but a moment. That’s why we pour love into every layer, drizzle,
                and sprinkle. Whether you’re here for a celebratory centerpiece,
                a cozy midweek craving, or a spontaneous sugar adventure,
                CupcakeFactory is your enchanted destination.
              </p>
              <p>
                So grab a fork, take a deep breath (it smells like vanilla and
                cocoa in here), and stay a while. There’s always something fresh
                in the oven — and a little bit of magic in every bite.
              </p>
            </>
          ) : (
            <>
              <p className='fs-500 fw-700'>
                We’re not just bakers — we’re makers of moments. From fluffy
                cupcakes to silky ganache, each treat is hand-crafted with
                heart, whimsy, and a touch of wonder.
              </p>
              <p>
                Whether you’re celebrating something big or just craving
                something sweet, CupcakeFactory is here to turn dessert into
                delight. Step inside our sugar-sprinkled world — there’s always
                something warm in the oven and a little magic in every bite.
              </p>

              <Button
                buttonText={'More about us'}
                path={'/about'}
                isLink={true}
                isLines={true}
                aria-label={'Go to About page'}
              ></Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
export default AboutSection
