import { blogPosts } from '../../data/blogPosts'
import { usePageLocation } from '../../hooks'
import { Button, SectionHeader } from '../common'
import BlogPostList from '../lists/BlogPostList'

function BlogSection () {
  const path = usePageLocation()
  const isBlogPage = path === '/blog'

  return (
    <section className='blog section deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader title={`What's new on the blog`}>
          {isBlogPage ? (
            <Button
              buttonText={'see all'}
              path={'all-posts'}
              isLink={true}
              isLines={true}
              ariaLabel={'View all blog posts'}
            ></Button>
          ) : (
            <Button
              buttonText={'visit blog'}
              path={'blog'}
              isLink={true}
              isLines={true}
            ></Button>
          )}
        </SectionHeader>

        <BlogPostList list={blogPosts}></BlogPostList>
      </div>
    </section>
  )
}
export default BlogSection
