import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../layout'
import { ConnectSection, BookingSection } from '../sections'
import { usePageLocation } from '../../hooks'

function BaseLayout () {
  const location = usePageLocation()
  const page = location?.split('/')[1] || 'home'
  return (
    <>
      <Header></Header>
      <main data-page={page}>
        <Outlet></Outlet>
        <BookingSection></BookingSection>
        <ConnectSection></ConnectSection>
      </main>
      <Footer></Footer>
    </>
  )
}
export default BaseLayout
