function BlogArticleCard ({ item }) {
  const { title, preview, articleImage, imageDesc, authorImage, author } = item
  return (
    <article className='article'>
      <div className='article__img'>
        <img src={articleImage} alt={imageDesc} />
      </div>

      <div className='article__content flow'>
        <header className='flow'>
          <dl className='article__metadata'>
            <div>
              <dt className='sr-only'>Published on:</dt>
              <dd>May 20, 2025</dd>
            </div>

            <div>
              <dt className='sr-only'>Reading time:</dt>
              <dd>4 min read</dd>
            </div>
          </dl>
          <h3 className='article__title'>{title}</h3>
        </header>

        <p>{preview}</p>

        <a
          href=''
          className='btn btn--invisible btn--arrow btn--left'
          aria-label={`Read ${title} in full`}
        >
          <span>Read More</span>
          <span>&#8594;</span>
        </a>
      </div>

      <footer className='article__footer deco deco--separator-short'>
        <div className='article__footer-img'>
          <img src={authorImage} alt={author} />
        </div>

        <p>{author}</p>
      </footer>
    </article>
  )
}
export default BlogArticleCard
