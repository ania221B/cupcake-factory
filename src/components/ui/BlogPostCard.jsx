import {
  getFormatedDate,
  getDateTimeString,
  calculateReadingTime
} from '../../utils'
import { Button } from '../common'

function BlogPostCard ({ item, variant = 'unranked' }) {
  const {
    title,
    excerpt,
    slug,
    date,
    postImage,
    imageDesc,
    authorImage,
    author,
    sections
  } = item

  return (
    <article className='article'>
      <div className='article__img'>
        <img src={postImage} alt={imageDesc} />
      </div>

      <div className='article__content flow'>
        <header className='flow'>
          <div className='article__metadata'>
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
          </div>
          <h3 className='article__title'>{title}</h3>
        </header>

        <p>{excerpt}</p>

        {variant === 'unranked' ? (
          <Button
            buttonText='Read More'
            ariaLabel={`Read ${title} in full`}
            path={`/blog/${slug}`}
            isLink={true}
            hasArrow={true}
            isInvisibleWithArrow={true}
          ></Button>
        ) : (
          <Button
            buttonText='Read More'
            ariaLabel={`Read ${title} in full`}
            path={`/blog/${slug}`}
            isLink={true}
            hasArrow={true}
            isInvisible={true}
          ></Button>
        )}
      </div>

      <footer className='article__footer footer deco deco--separator-short'>
        <div className='article__footer-img'>
          <img src={authorImage} alt={author} />
        </div>

        <p>{author}</p>
      </footer>
    </article>
  )
}
export default BlogPostCard
