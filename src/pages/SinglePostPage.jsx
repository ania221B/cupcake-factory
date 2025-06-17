import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { BlogPostFull } from '../components/ui'

function SinglePostPage () {
  const { postSlug } = useParams()
  const { headerHeight, allPosts } = useGlobalContext()

  const currentPost = allPosts.find(post => post.slug === postSlug)
  return (
    <>
      <section
        className='section blog-post-full'
        style={{ '--header-height': `${headerHeight}px` }}
      >
        <BlogPostFull item={currentPost}></BlogPostFull>
      </section>
    </>
  )
}
export default SinglePostPage
