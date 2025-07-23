import { nanoid } from 'nanoid'
import {
  calculateReadingTime,
  getDateTimeString,
  getFormatedDate
} from '../../utils'

function BlogPostFull ({ item }) {
  const {
    title,
    date,
    postImages,
    authorImage,
    authorImageTitle,
    author,
    authorBio,
    sections
  } = item

  return (
    <article className='article--full page-wrapper' data-wrapper='x-small'>
      <header className='article--full__header flow'>
        <dl>
          <dt className='sr-only'>Published on:</dt>
          <dd>
            <time dateTime={getDateTimeString(date)}>
              {getFormatedDate(date)}
            </time>
          </dd>
        </dl>

        <dl>
          <dt className='sr-only'>Reading time:</dt>
          <dd>{`${calculateReadingTime(sections)} min read`}</dd>
        </dl>
        <h2 className='article--full__title page-title'>{title}</h2>
        <p>
          by <span>{author}</span>
        </p>
      </header>

      <div className='article--full__img'>
        {postImages.map(image => {
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
      </div>

      <div className='article--full__content'>
        {sections.map(section => {
          if (section.sectionType === 'quote') {
            return (
              <blockquote className='quote'>
                <p className='quote-text'>{section.quoteText}</p>
                <footer>— {section.quoteAuthor}</footer>
              </blockquote>
            )
          }

          return (
            <section key={nanoid()} className='flow'>
              <h3>{section.sectionTitle}</h3>
              <p>{section.sectionText}</p>
              {section.bullets && (
                <ul>
                  {section.bullets.map(bullet => (
                    <li key={nanoid()}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          )
        })}
      </div>

      <footer className='article--full__footer footer deco deco--separator-short'>
        <div className='article--full__footer-img'>
          <img src={authorImage} alt={author} title={authorImageTitle} />
        </div>

        <div className='flow'>
          <h4>{author}</h4>
          <p>{authorBio}</p>
        </div>
      </footer>
    </article>
  )
}
export default BlogPostFull
