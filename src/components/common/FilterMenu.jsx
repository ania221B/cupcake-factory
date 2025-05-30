import Button from './Button'

function FilterMenu () {
  return (
    <aside className='products__filter-menu'>
      <header>
        <h3>Filter products</h3>
      </header>
      <form id='product-filters' className='product-filters js-product-filters'>
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
            <input type='checkbox' name='new-arrival' id='new-arrival' />
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

      <Button
        buttonText='Reset All'
        ariaLabel='Resets all filtering applied'
        onClick={() => console.log('Filters were reset')}
        isAccent={true}
      ></Button>
    </aside>
  )
}
export default FilterMenu
