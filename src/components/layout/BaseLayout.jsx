import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../layout'
import { ConnectSection, BookingSection } from '../sections'
import { usePageLocation } from '../../hooks'
import ScrollToTop from './ScrollToTop'
import SkipToMain from './SkipToMain'

function BaseLayout () {
  const location = usePageLocation()
  const isBookATable = location === '/book-a-table'
  let page

  if (/^\/store\/[^/]+$/.test(location)) {
    page = 'product'
  } else if (/^\/blog\/[^/]+$/.test(location)) {
    page = 'blog-post'
  } else if (location.startsWith('/store')) {
    page = 'store'
  } else if (location.startsWith('/blog')) {
    page = 'blog'
  } else {
    page = location?.split('/')[1] || 'home'
  }

  return (
    <>
      <SkipToMain></SkipToMain>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <main id='main-content' data-page={page}>
        <Outlet></Outlet>
        {!isBookATable && <BookingSection></BookingSection>}
        <ConnectSection></ConnectSection>
      </main>
      <Footer></Footer>
    </>
  )
}
export default BaseLayout
