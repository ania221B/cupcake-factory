function BlogArticleCard ({ item }) {
  const { title, preview } = item
  return (
    <article className='article'>
      <h3 className='article__title'>{title}</h3>
      <p>{preview}</p>
      <a
        href=''
        className='btn btn--invisible btn--arrow btn--left'
        aria-label={`Read ${title} in full`}
      >
        <span>Read More</span>
        <span>&#8594;</span>
      </a>
    </article>
  )
}
export default BlogArticleCard
