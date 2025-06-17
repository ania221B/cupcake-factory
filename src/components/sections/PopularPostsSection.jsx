import { blogPosts } from '../../data/blogPosts'
import { Button, SectionHeader } from '../common'
import { BlogRankingList } from '../lists'

function PopularPostsSection () {
  return (
    <section className='blog section bg-primary-100 deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader title={'Most popular on the blog'}>
          <Button
            buttonText={'see all'}
            path={'all-posts'}
            isLink={true}
            isLines={true}
            ariaLabel={'View all blog posts'}
          ></Button>
        </SectionHeader>

        <BlogRankingList list={blogPosts}></BlogRankingList>
      </div>
    </section>
  )
}
export default PopularPostsSection
