import SortingMenu from '../components/common/SortingMenu'
import { BlogPostList } from '../components/lists'
import { HeroSection } from '../components/sections'
import { useGlobalContext } from '../context'

function AllBlogPosts () {
  const { sortedPosts } = useGlobalContext()
  return (
    <>
      <HeroSection title='All Blog Posts go here'></HeroSection>
      <section>
        <div className='page-wrapper all-posts'>
          <SortingMenu></SortingMenu>
          <div className='item-area'>
            <BlogPostList list={sortedPosts}></BlogPostList>
          </div>
        </div>
      </section>
    </>
  )
}
export default AllBlogPosts
