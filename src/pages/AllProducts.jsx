import { UnderConstruction } from '../components/common'
import { ProductList } from '../components/lists'
import { HeroSection } from '../components/sections'
import { products } from '../data'

function AllProducts () {
  return (
    <>
      <HeroSection title='All Products Go Here'></HeroSection>
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
            <aside className='products__filter-menu'>
              <header>
                <h3>Filter products</h3>
              </header>
              <form
                id='product-filters'
                className='product-filters js-product-filters'
              >
                <fieldset data-filter='roast' className='flow'>
                  <legend>Type</legend>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='cakes' id='cakes' />
                    <label htmlFor='cakes'>Cakes</label>
                  </div>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='cookies' id='cookies' />
                    <label htmlFor='cookies'>Cookies</label>
                  </div>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='pastries' id='pastries' />
                    <label htmlFor='pastries'>Pastries</label>
                  </div>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='desserts' id='desserts' />
                    <label htmlFor='desserts'>Desserts</label>
                  </div>
                </fieldset>

                <fieldset data-filter='type' className='flow'>
                  <legend>Tag</legend>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='bestseller' id='bestseller' />
                    <label htmlFor='bestseller'>Bestseller</label>
                  </div>
                  <div className='product-filters__control-wrapper'>
                    <input
                      type='checkbox'
                      name='new-arrival'
                      id='new-arrival'
                    />
                    <label htmlFor='new-arrival'>New Arrival</label>
                  </div>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='sale' id='sale' />
                    <label htmlFor='sale'>Sale</label>
                  </div>
                </fieldset>

                <fieldset data-filter='availability' className='flow'>
                  <legend>Availability</legend>
                  <div className='product-filters__control-wrapper'>
                    <input type='checkbox' name='availability' id='in-stock' />
                    <label htmlFor='availability'>In stock</label>
                  </div>
                </fieldset>
                <fieldset data-filter='price' className='flow'>
                  <legend>Price</legend>
                  <div className='price-inputs'>
                    <div className='product-filters__control-wrapper'>
                      <input
                        type='number'
                        name='price-min'
                        id='price-min'
                        min='0'
                        max='20'
                        defaultValue='0'
                        className='js-price-min'
                      />
                      <label htmlFor='price-min'>Min price</label>
                    </div>
                    <div className='product-filters__control-wrapper'>
                      <input
                        type='number'
                        name='price-max'
                        id='price-max'
                        min='0'
                        max='20'
                        defaultValue='20'
                        className='js-price-max'
                      />
                      <label htmlFor='price-max'>Max price</label>
                    </div>
                  </div>
                </fieldset>
              </form>
              <button
                type='button'
                aria-label='Resets all filtering applied'
                className='btn btn--card reset-button js-reset-btn'
                data-button='primary'
              >
                Reset All
              </button>
            </aside>
            <search className='search-menu'>
              <form className='search-form js-search-bar'>
                <div className='form__wrapper'>
                  <label htmlFor='search'>Search for products:</label>
                  <input
                    id='search'
                    name='search'
                    type='search'
                    className='js-search'
                  />
                  <button
                    type='submit'
                    className='btn btn--card'
                    data-button='primary'
                  >
                    Search
                  </button>
                </div>
              </form>
            </search>
            <div className='item-area'>
              {/* <div className='spinner-wrapper js-spinner-wrapper'>
                <button type='button' className='button spinner js-spinner'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='48'
                    viewBox='0 0 24 24'
                  >
                    <g>
                      <circle
                        cx='12'
                        cy='2.5'
                        r='1.5'
                        fill='currentColor'
                        opacity='.14'
                      />
                      <circle
                        cx='16.75'
                        cy='3.77'
                        r='1.5'
                        fill='currentColor'
                        opacity='.29'
                      />
                      <circle
                        cx='20.23'
                        cy='7.25'
                        r='1.5'
                        fill='currentColor'
                        opacity='.43'
                      />
                      <circle
                        cx='21.5'
                        cy='12'
                        r='1.5'
                        fill='currentColor'
                        opacity='.57'
                      />
                      <circle
                        cx='20.23'
                        cy='16.75'
                        r='1.5'
                        fill='currentColor'
                        opacity='.71'
                      />
                      <circle
                        cx='16.75'
                        cy='20.23'
                        r='1.5'
                        fill='currentColor'
                        opacity='.86'
                      />
                      <circle cx='12' cy='21.5' r='1.5' fill='currentColor' />
                      <animateTransform
                        attributeName='transform'
                        calcMode='discrete'
                        dur='0.75s'
                        repeatCount='indefinite'
                        type='rotate'
                        values='0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12'
                      />
                    </g>
                  </svg>
                </button>
              </div> */}

              <ProductList list={products}></ProductList>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AllProducts
