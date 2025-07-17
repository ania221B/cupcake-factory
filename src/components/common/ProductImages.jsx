function ProductImages ({ images }) {
  const mainImage = images?.[0] || {}
  const secondaryImage = images?.[1] || {}
  return (
    <div className='product-item__img'>
      <picture>
        {/* Desktop */}
        {mainImage?.sizes?.['1200']?.avif && (
          <source
            srcSet={mainImage.sizes['1200'].avif}
            type='image/avif'
            media='(min-width: 1200px)'
          />
        )}
        {mainImage?.sizes?.['1200']?.webp && (
          <source
            srcSet={mainImage.sizes['1200'].webp}
            type='image/webp'
            media='(min-width: 1200px)'
          />
        )}

        {/* Tablet */}
        {mainImage?.sizes?.['768']?.avif && (
          <source
            srcSet={mainImage.sizes['768'].avif}
            type='image/avif'
            media='(min-width: 768px)'
          />
        )}
        {mainImage?.sizes?.['768']?.webp && (
          <source
            srcSet={mainImage.sizes['768'].webp}
            type='image/webp'
            media='(min-width: 768px)'
          />
        )}

        {/* Mobile */}
        {mainImage?.sizes?.['400']?.avif && (
          <source
            srcSet={mainImage.sizes['400'].avif}
            type='image/avif'
            media='(max-width: 767px)'
          />
        )}
        {mainImage?.sizes?.['400']?.webp && (
          <source
            srcSet={mainImage.sizes['400'].webp}
            type='image/webp'
            media='(max-width: 767px)'
          />
        )}

        <img
          src={mainImage?.src}
          alt={mainImage?.alt}
          title={mainImage?.title}
          loading='lazy'
        />
      </picture>

      <picture>
        {/* Desktop */}
        {secondaryImage?.sizes?.['1200']?.avif && (
          <source
            srcSet={secondaryImage.sizes['1200'].avif}
            type='image/avif'
            media='(min-width: 1200px)'
          />
        )}
        {secondaryImage?.sizes?.['1200']?.webp && (
          <source
            srcSet={secondaryImage.sizes['1200'].webp}
            type='image/webp'
            media='(min-width: 1200px)'
          />
        )}

        {/* Tablet */}
        {secondaryImage?.sizes?.['768']?.avif && (
          <source
            srcSet={secondaryImage.sizes['768'].avif}
            type='image/avif'
            media='(min-width: 768px)'
          />
        )}
        {secondaryImage?.sizes?.['768']?.webp && (
          <source
            srcSet={secondaryImage.sizes['768'].webp}
            type='image/webp'
            media='(min-width: 768px)'
          />
        )}

        {/* Mobile */}
        {secondaryImage?.sizes?.['400']?.avif && (
          <source
            srcSet={secondaryImage.sizes['400'].avif}
            type='image/avif'
            media='(max-width: 767px)'
          />
        )}
        {secondaryImage?.sizes?.['400']?.webp && (
          <source
            srcSet={secondaryImage.sizes['400'].webp}
            type='image/webp'
            media='(max-width: 767px)'
          />
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
