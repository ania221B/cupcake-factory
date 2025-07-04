import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { BlogPostFull } from '../components/ui'
import { Breadcrumb } from '../components/common'

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
        <div className='container'>
          <Breadcrumb
            items={[
              { label: 'home', path: '/' },
              { label: 'blog', path: '/blog' },
              { label: 'all blog posts', path: '/blog/all-posts' },
              { label: `${currentPost.title}`, path: null }
            ]}
          ></Breadcrumb>
        </div>
        <BlogPostFull item={currentPost}></BlogPostFull>
      </section>
    </>
  )
}
export default SinglePostPage
