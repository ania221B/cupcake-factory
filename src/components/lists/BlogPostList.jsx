import { usePageLocation } from '../../hooks'
import BlogPostCard from '../ui/BlogPostCard'

function BlogPostList ({ list }) {
  const path = usePageLocation()
  const isBlogPage = path === '/blog'

  return (
    <ul
      className={
        isBlogPage
          ? 'articles blog-featured margin-block-start-64 padding-0'
          : 'articles grid-auto-fit margin-block-start-64 padding-0'
      }
      role='list'
    >
      {list.map(item => {
        return (
          <li key={item.id} className='flow'>
            <BlogPostCard item={item}></BlogPostCard>
          </li>
        )
      })}
    </ul>
  )
}
export default BlogPostList
