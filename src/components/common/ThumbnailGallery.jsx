import { useRef, useState } from 'react'

function ThumbnailGallery ({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || {})
  const buttonRefs = useRef([])

  function checkIndex (index) {
    if (index < 0) {
      return images.length - 1
    }
    if (index > images.length - 1) {
      return 0
    }

    return index
  }
  function handleKeyDown (e, index) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      const nextIndex = checkIndex(index + 1)
      buttonRefs.current[nextIndex]?.focus()
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      const prevIndex = checkIndex(index - 1)
      buttonRefs.current[prevIndex]?.focus()
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedImage(images[index])
    }
  }

  return (
    <div className='thumbnail-gallery'>
      <div className='thumbnail-gallery__preview'>
        <picture>
          {selectedImage?.sizes?.['1200']?.avif && (
            <source
              srcSet={selectedImage.sizes['1200'].avif}
              type='image/avif'
              media='(min-width: 1200px)'
            />
          )}
          {selectedImage?.sizes?.['1200']?.webp && (
            <source
              srcSet={selectedImage.sizes['1200'].webp}
              type='image/webp'
              media='(min-width: 1200px)'
            />
          )}
          {selectedImage?.sizes?.['768']?.avif && (
            <source
              srcSet={selectedImage.sizes['768'].avif}
              type='image/avif'
              media='(min-width: 768px)'
            />
          )}
          {selectedImage?.sizes?.['768']?.webp && (
            <source
              srcSet={selectedImage.sizes['768'].webp}
              type='image/webp'
              media='(min-width: 768px)'
            />
          )}
          {selectedImage?.sizes?.['400']?.avif && (
            <source
              srcSet={selectedImage.sizes['400'].avif}
              type='image/avif'
              media='(max-width: 767px)'
            />
          )}
          {selectedImage?.sizes?.['400']?.webp && (
            <source
              srcSet={selectedImage.sizes['400'].webp}
              type='image/webp'
              media='(max-width: 767px)'
            />
          )}
          <img
            src={
              selectedImage?.src ||
              selectedImage?.sizes?.fallback?.jpg ||
              selectedImage.sizes?.fallback?.webp ||
              selectedImage.sizes?.fallback?.avif
            }
            alt={selectedImage.alt}
            title={selectedImage.title}
          />
        </picture>
      </div>
      <ul className='thumbnail-gallery__list' role='list'>
        {images.map((image, index) => {
          const { id, src, alt, title } = image
          const isSelected = selectedImage.id === id
          return (
            <li key={id}>
              <button
                tabIndex={0}
                ref={currentButton =>
                  (buttonRefs.current[index] = currentButton)
                }
                type='button'
                aria-label={`View image ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                onKeyDown={e => handleKeyDown(e, index)}
                className={
                  isSelected
                    ? 'btn btn--thumbnail selected'
                    : 'btn btn--thumbnail'
                }
              >
                <img
                  src={src}
                  alt={`${alt} - image ${index + 1}`}
                  title={title}
                  loading='lazy'
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ThumbnailGallery
