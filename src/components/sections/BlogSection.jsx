import { blogPreviews } from '../../data/blogPreviews'
import { Button, SectionHeader } from '../common'
import BlogArticleList from '../lists/BlogArticleList'

function BlogSection () {
  return (
    <section className='blog section deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader title={`What's new on the blog`}>
          <Button
            buttonText={'visit blog'}
            path={'blog'}
            isLink={true}
            isLines={true}
          ></Button>
        </SectionHeader>

        <BlogArticleList list={blogPreviews}></BlogArticleList>
      </div>
    </section>
  )
}
export default BlogSection
