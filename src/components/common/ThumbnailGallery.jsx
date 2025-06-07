import { useState } from 'react'

function ThumbnailGallery ({ images }) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || {})
  return (
    <div className='thumbnail-gallery'>
      <div className='thumbnail-gallery__preview'>
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          title={selectedImage.title}
        />
      </div>
      <ul className='thumbnail-gallery__list' role='list'>
        {images.map(image => {
          const { id, src, alt, title } = image
          const isSelected = selectedImage.id === id
          return (
            <li
              key={id}
              onClick={() => setSelectedImage(image)}
              className={isSelected ? 'selected' : undefined}
            >
              <img src={src} alt={alt} title={title} loading='lazy' />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default ThumbnailGallery
