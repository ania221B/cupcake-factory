import image1Fallback from '../assets/images/about/img1.jpg'
import image1MobileAvif from '../assets/images/about/img1-400.avif'
import image1MobileWebp from '../assets/images/about/img1-400.webp'
import image1TabletAvif from '../assets/images/about/img1-768.avif'
import image1TabletWebp from '../assets/images/about/img1-768.webp'
import image1DesktopAvif from '../assets/images/about/img1-1200.avif'
import image1DesktopWebp from '../assets/images/about/img1-1200.webp'
import image2Fallback from '../assets/images/about/img2.jpg'
import image2MobileAvif from '../assets/images/about/img2-400.avif'
import image2MobileWebp from '../assets/images/about/img2-400.webp'
import image2TabletAvif from '../assets/images/about/img2-768.avif'
import image2TabletWebp from '../assets/images/about/img2-768.webp'
import image2DesktopAvif from '../assets/images/about/img2-1200.avif'
import image2DesktopWebp from '../assets/images/about/img2-1200.webp'
import image3Fallback from '../assets/images/about/img3.jpg'
import image3MobileAvif from '../assets/images/about/img3-400.avif'
import image3MobileWebp from '../assets/images/about/img3-400.webp'
import image3TabletAvif from '../assets/images/about/img3-768.avif'
import image3TabletWebp from '../assets/images/about/img3-768.webp'
import image3DesktopAvif from '../assets/images/about/img3-1200.avif'
import image3DesktopWebp from '../assets/images/about/img3-1200.webp'

export const aboutImages = [
  {
    id: 'image-1',
    alt: 'Pink Cookie Cake With Cherries',
    title: 'Photo by Karina Kungla: Pink Cookie Cake With Cherries',
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
    alt: 'White Chocolate Cheesecake With Cherry Jam',
    title: 'Photo by Karina Kungla: White Chocolate Cheesecake With Cherry Jam',
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
    alt: 'Red Velvet Cake With Caramelised Peanuts, Raspberries And Cream Cheese Frosting',
    title:
      'Photo by Karina Kungla: Red Velvet Cake With Caramelised Peanuts, Raspberries And Cream Cheese Frosting',
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
