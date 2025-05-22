import { usePageLocation } from '../../hooks'
import BlogArticleCard from '../ui/BlogArticleCard'

function BlogArticleList ({ list }) {
  const path = usePageLocation()
  const isBlogPage = path === '/blog'

  return (
    <ul
      className={
        isBlogPage
          ? 'articles blog-featured margin-xl padding-0'
          : 'articles grid-auto-fit margin-xl padding-0'
      }
      role='list'
    >
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
