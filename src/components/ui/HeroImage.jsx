function HeroImage ({ image, imgClass = undefined }) {
  if (!image) return null
  return (
    <picture className={imgClass}>
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
}
export default HeroImage
