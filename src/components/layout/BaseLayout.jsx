import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../layout'
import { ConnectSection, BookingSection } from '../sections'
import { usePageLocation } from '../../hooks'
import ScrollToTop from './ScrollToTop'

function BaseLayout () {
  const location = usePageLocation()
  const page = location?.split('/')[1] || 'home'
  const isBookATable = location === '/book-a-table'
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Header></Header>
      <main data-page={page}>
        <Outlet></Outlet>
        {!isBookATable && <BookingSection></BookingSection>}
        <ConnectSection></ConnectSection>
      </main>
      <Footer></Footer>
    </>
  )
}
export default BaseLayout
