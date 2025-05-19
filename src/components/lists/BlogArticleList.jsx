import BlogArticleCard from '../ui/BlogArticleCard'

function BlogArticleList ({ list }) {
  return (
    <ul className='articles grid-auto-fit margin-xl padding-0' role='list'>
      {list.map(item => {
        return (
          <li key={item.id} className='flow'>
            <BlogArticleCard item={item}></BlogArticleCard>
          </li>
        )
      })}
    </ul>
  )
}
export default BlogArticleList
