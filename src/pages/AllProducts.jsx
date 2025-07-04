import { Link, useParams } from 'react-router-dom'
import { Breadcrumb, FilterMenu, SearchBar } from '../components/common'
import { ProductList } from '../components/lists'
import { HeroSection } from '../components/sections'
import { useGlobalContext } from '../context'
import { makeCapitalizedText, pluralizeCategory } from '../utils'
import { useEffect } from 'react'

function AllProducts () {
  const { category } = useParams()
  const { filteredProducts, setCurrentCategory } = useGlobalContext()
  const productCategory = pluralizeCategory(category)

  useEffect(() => {
    setCurrentCategory(category || null)
  }, [category])

  return (
    <>
      <HeroSection
        title={category ? makeCapitalizedText(productCategory) : 'All Products'}
      ></HeroSection>
      <section className='section products'>
        <div className='page-wrapper'>
          <div className='catalog-grid'>
            {/* <header className='char-limit-3 flow'>
              <h2 className='heading'>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              </h2>
              <p>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus.
              </p>
            </header> */}

            {category && (
              <Breadcrumb
                items={[
                  { label: 'home', path: '/' },
                  { label: 'store', path: '/store' },
                  { label: 'all products', path: '/store/all-products' },
                  { label: `${productCategory}`, path: null }
                ]}
              ></Breadcrumb>
            )}
            <FilterMenu></FilterMenu>
            <SearchBar></SearchBar>

            <div className='item-area'>
              <ProductList list={filteredProducts}></ProductList>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AllProducts
