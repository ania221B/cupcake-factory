import image1Fallback from '../assets/images/store/img1.jpg'
import image1MobileAvif from '../assets/images/store/img1-400.avif'
import image1MobileWebp from '../assets/images/store/img1-400.webp'
import image1TabletAvif from '../assets/images/store/img1-768.avif'
import image1TabletWebp from '../assets/images/store/img1-768.webp'
import image1DesktopAvif from '../assets/images/store/img1-1200.avif'
import image1DesktopWebp from '../assets/images/store/img1-1200.webp'
import image2Fallback from '../assets/images/store/img2.jpg'
import image2MobileAvif from '../assets/images/store/img2-400.avif'
import image2MobileWebp from '../assets/images/store/img2-400.webp'
import image2TabletAvif from '../assets/images/store/img2-768.avif'
import image2TabletWebp from '../assets/images/store/img2-768.webp'
import image2DesktopAvif from '../assets/images/store/img2-1200.avif'
import image2DesktopWebp from '../assets/images/store/img2-1200.webp'
import image3Fallback from '../assets/images/store/img3.jpg'
import image3MobileAvif from '../assets/images/store/img3-400.avif'
import image3MobileWebp from '../assets/images/store/img3-400.webp'
import image3TabletAvif from '../assets/images/store/img3-768.avif'
import image3TabletWebp from '../assets/images/store/img3-768.webp'
import image3DesktopAvif from '../assets/images/store/img3-1200.avif'
import image3DesktopWebp from '../assets/images/store/img3-1200.webp'

export const storeImages = [
  {
    id: 'image-1',
    alt: 'Pink Cake with Flowers',
    title: 'Photo by Gabriela Medeiros Chaves: Pink Cake with Flowers',
    fallback: image1Fallback,
    mobile: {
      avif: image1MobileAvif,
      webp: image1MobileWebp
    },
    tablet: {
      avif: image1TabletAvif,
      webp: image1TabletWebp
    },
    desktop: {
      avif: image1DesktopAvif,
      webp: image1DesktopWebp
    }
  },
  {
    id: 'image-2',
    alt: 'Different flavoured macarons on plate surrounded by flowers',
    title: 'Photo by Diana Light',
    fallback: image2Fallback,
    mobile: {
      avif: image2MobileAvif,
      webp: image2MobileWebp
    },
    tablet: {
      avif: image2TabletAvif,
      webp: image2TabletWebp
    },
    desktop: {
      avif: image2DesktopAvif,
      webp: image2DesktopWebp
    }
  },
  {
    id: 'image-3',
    alt: 'Chocolate Cake With Pink Rose On Top',
    title: 'Photo by Lina Kivaka: Chocolate Cake With Pink Rose On Top',
    fallback: image3Fallback,
    mobile: {
      avif: image3MobileAvif,
      webp: image3MobileWebp
    },
    tablet: {
      avif: image3TabletAvif,
      webp: image3TabletWebp
    },
    desktop: {
      avif: image3DesktopAvif,
      webp: image3DesktopWebp
    }
  }
]
