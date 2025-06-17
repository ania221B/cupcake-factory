import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../layout'
import { ConnectSection, CTASection } from '../sections'
import { usePageLocation } from '../../hooks'

function BaseLayout () {
  const location = usePageLocation()
  const page = location?.split('/')[1] || 'home'
  return (
    <>
      <Header></Header>
      <main data-page={page}>
        <Outlet></Outlet>
        <CTASection></CTASection>
        <ConnectSection></ConnectSection>
      </main>
      <Footer></Footer>
    </>
  )
}
export default BaseLayout
