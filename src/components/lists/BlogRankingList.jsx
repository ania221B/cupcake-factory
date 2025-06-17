import { usePageLocation } from '../../hooks'
import BlogPostCard from '../ui/BlogPostCard'

function BlogRankingList ({ list }) {
  //   const path = usePageLocation()
  //   const isBlogPage = path === '/blog'

  return (
    <ol
      className='articles blog-most-popular grid-auto-fit margin-block-start-64 padding-0'
      role='list'
    >
      {list.map(item => {
        return (
          <li key={item.id} className='flow'>
            <BlogPostCard item={item} variant='ranked'></BlogPostCard>
          </li>
        )
      })}
    </ol>
  )
}
export default BlogRankingList
