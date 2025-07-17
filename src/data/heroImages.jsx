import homeFallback from '../assets/images/hero/home-hero.jpg'
import homeMobileAvif from '../assets/images/hero/home-hero-400.avif'
import homeMobileWebp from '../assets/images/hero/home-hero-400.webp'
import homeTabletAvif from '../assets/images/hero/home-hero-768.avif'
import homeTabletWebp from '../assets/images/hero/home-hero-768.webp'
import homeDesktopAvif from '../assets/images/hero/home-hero-1200.avif'
import homeDesktopWebp from '../assets/images/hero/home-hero-1200.webp'
import contactFallback from '../assets/images/hero/contact-hero.jpg'
import contactMobileAvif from '../assets/images/hero/contact-hero-400.avif'
import contactMobileWebp from '../assets/images/hero/contact-hero-400.webp'
import contactTabletAvif from '../assets/images/hero/contact-hero-768.avif'
import contactTabletWebp from '../assets/images/hero/contact-hero-768.webp'
import contactDesktopAvif from '../assets/images/hero/contact-hero-1200.avif'
import contactDesktopWebp from '../assets/images/hero/contact-hero-1200.webp'
import construction from '../assets/images/construction.svg'

export const heroImages = {
  home: {
    id: 'home',
    alt: 'Chocolate cake with pink frosting',
    title: 'Photo by Gabriela Medeiros Chaves: Indulgent Chocolate Cake',
    fallback: homeFallback,
    mobile: {
      avif: homeMobileAvif,
      webp: homeMobileWebp
    },
    tablet: {
      avif: homeTabletAvif,
      webp: homeTabletWebp
    },
    desktop: {
      avif: homeDesktopAvif,
      webp: homeDesktopWebp
    }
  },
  contact: {
    id: 'contact',
    alt: 'Triple Chocolate Cheesecake With Berries',
    title:
      'Photo by minchephoto photography: Drip cake with strawberry topping',
    fallback: contactFallback,
    mobile: {
      avif: contactMobileAvif,
      webp: contactMobileWebp
    },
    tablet: {
      avif: contactTabletAvif,
      webp: contactTabletWebp
    },
    desktop: {
      avif: contactDesktopAvif,
      webp: contactDesktopWebp
    }
  },
  underConstruction: {
    id: 'underConstruction',
    alt: 'Webpage under construction',
    title: 'Tools graphics',
    src: construction
  }
}
