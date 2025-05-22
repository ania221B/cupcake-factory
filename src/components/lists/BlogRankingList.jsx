import { usePageLocation } from '../../hooks'
import BlogArticleCard from '../ui/BlogArticleCard'

function BlogRankingList ({ list }) {
  //   const path = usePageLocation()
  //   const isBlogPage = path === '/blog'

  return (
    <ol
      className='articles blog-most-popular grid-auto-fit margin-xl padding-0'
      role='list'
    >
      {list.map(item => {
        return (
          <li key={item.id} className='flow'>
            <BlogArticleCard item={item}></BlogArticleCard>
          </li>
        )
      })}
    </ol>
  )
}
export default BlogRankingList
