import { blogPreviews } from '../../data/blogPreviews'
import { Button, SectionHeader } from '../common'
import { BlogRankingList } from '../lists'

function PopularPosts () {
  return (
    <section className='blog section bg-primary-100 deco deco--diamond'>
      <div className='container flow'>
        <SectionHeader title={'Most popular on the blog'}>
          <Button
            buttonText={'see all'}
            isLink={true}
            isLines={true}
            ariaLabel={'View all blog posts'}
          ></Button>
        </SectionHeader>

        <BlogRankingList list={blogPreviews}></BlogRankingList>
      </div>
    </section>
  )
}
export default PopularPosts
