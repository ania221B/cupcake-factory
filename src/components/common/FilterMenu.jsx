import { useGlobalContext } from '../../context'
import Button from './Button'

function FilterMenu () {
  const {
    initialFilters,
    filters,
    setFilters,
    makeCapitalizedText,
    priceError
  } = useGlobalContext()
  function handleChange (e) {
    const typeNames = Object.keys(filters.type)

    if (e.target.name === 'price-min' || e.target.name === 'price-max') {
      setFilters(prevFilters => ({
        ...prevFilters,
        [makeCapitalizedText(e.target.name)]: parseFloat(e.target.value)
      }))
    } else if (e.target.name === 'rating') {
      setFilters(prevFilters => ({
        ...prevFilters,
        [e.target.name]: parseFloat(e.target.value)
      }))
    } else if (typeNames.includes(e.target.name)) {
      setFilters(prevFilters => ({
        ...prevFilters,
        type: { ...prevFilters.type, [e.target.name]: e.target.checked }
      }))
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [e.target.name]: e.target.checked
      }))
    }
  }
  return (
    <aside className='products__filter-menu'>
      <header>
        <h3>Filter products</h3>
      </header>
      <form id='product-filters' className='product-filters'>
        <fieldset data-filter='roast' className='flow'>
          <legend>Type</legend>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='cake'
              id='cake'
              checked={filters.type.cake}
              onChange={handleChange}
            />
            <label htmlFor='cake'>Cake</label>
          </div>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='cookie'
              id='cookie'
              checked={filters.type.cookie}
              onChange={handleChange}
            />
            <label htmlFor='cookie'>Cookie</label>
          </div>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='pastry'
              id='pastry'
              checked={filters.type.pastry}
              onChange={handleChange}
            />
            <label htmlFor='pastry'>Pastry</label>
          </div>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='dessert'
              id='dessert'
              checked={filters.type.dessert}
              onChange={handleChange}
            />
            <label htmlFor='dessert'>Dessert</label>
          </div>
        </fieldset>

        <fieldset data-filter='type' className='flow'>
          <legend>Tag</legend>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='bestseller'
              id='bestseller'
              checked={filters.bestseller}
              onChange={handleChange}
            />
            <label htmlFor='bestseller'>Bestseller</label>
          </div>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='newArrival'
              id='newArrival'
              checked={filters.newArrival}
              onChange={handleChange}
            />
            <label htmlFor='newArrival'>New Arrival</label>
          </div>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='sale'
              id='sale'
              checked={filters.sale}
              onChange={handleChange}
            />
            <label htmlFor='sale'>Sale</label>
          </div>
        </fieldset>

        <fieldset data-filter='availability' className='flow'>
          <legend>Availability</legend>
          <div className='product-filters__control-wrapper'>
            <input
              type='checkbox'
              name='availability'
              id='availability'
              checked={filters.availability}
              onChange={handleChange}
            />
            <label htmlFor='availability'>In stock</label>
          </div>
        </fieldset>
        <fieldset data-filter='rating' className='flow'>
          <legend>Minimum Rating</legend>
          <div className='product-filters__control-wrapper'>
            <input
              id='min-rating'
              name='rating'
              type='number'
              min='0'
              max='5'
              step='0.1'
              value={filters.rating}
              onChange={handleChange}
            />
            <label htmlFor='min-rating'>Stars</label>
          </div>
        </fieldset>
        <fieldset data-filter='price' className='flow'>
          <legend>Price</legend>
          <div className='price-inputs'>
            <div
              className={
                priceError
                  ? 'product-filters__control-wrapper error'
                  : 'product-filters__control-wrapper'
              }
            >
              <input
                type='number'
                name='price-min'
                id='price-min'
                min={initialFilters.priceMin}
                max={initialFilters.priceMax}
                value={filters.priceMin}
                onChange={handleChange}
              />
              <label htmlFor='price-min'>Min price</label>
            </div>
            <div
              className={
                priceError
                  ? 'product-filters__control-wrapper error'
                  : 'product-filters__control-wrapper'
              }
            >
              <input
                type='number'
                name='price-max'
                id='price-max'
                min={initialFilters.priceMin}
                max={initialFilters.priceMax}
                value={filters.priceMax}
                onChange={handleChange}
              />
              <label htmlFor='price-max'>Max price</label>
            </div>
          </div>
          {priceError && <div className='error-message'>{priceError}</div>}
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
