function ProductImages ({ images }) {
  const mainImage = images?.[0] || {}
  const secondaryImage = images?.[1] || {}
  return (
    <div className='product-item__img'>
      <picture>
        {mainImage?.formats?.avif && (
          <source srcSet={mainImage.formats.avif} type='image/avif' />
        )}
        {mainImage?.formats?.webp && (
          <source srcSet={mainImage.formats.webp} type='image/webp' />
        )}
        <img
          src={mainImage?.formats?.jpg}
          alt={mainImage?.alt}
          title={mainImage?.title}
          loading='lazy'
        />
      </picture>
      <picture>
        {secondaryImage?.formats?.avif && (
          <source srcSet={secondaryImage.formats.avif} type='image/avif' />
        )}
        {secondaryImage?.formats?.webp && (
          <source srcSet={secondaryImage.formats.webp} type='image/webp' />
        )}
        <img
          src={secondaryImage?.src}
          alt={secondaryImage?.alt}
          title={secondaryImage?.title}
          loading='lazy'
        />
      </picture>
    </div>
  )
}
export default ProductImages
