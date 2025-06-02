import Button from './Button'
import { useGlobalContext } from '../../context'

function SearchBar () {
  const { inputText, setInputText, isSearching, setIsSearching } =
    useGlobalContext()

  return (
    <search className='search-menu'>
      <form className='search-form js-search-bar'>
        <div className='form__wrapper'>
          <label htmlFor='search'>Search for products:</label>
          <input
            id='search'
            name='search'
            type='search'
            value={inputText}
            onInput={e => setInputText(e.target.value)}
          />
          {isSearching ? (
            <Button
              buttonText='Searching...'
              ariaLabel='Search for products'
              type='submit'
              onClick={e => {
                e.preventDefault()
              }}
              isAccent={true}
              isInactive={true}
            ></Button>
          ) : (
            <Button
              buttonText='Search'
              ariaLabel='Search for products'
              type='submit'
              onClick={e => {
                e.preventDefault()
                setIsSearching(true)

                setInterval(() => {
                  setIsSearching(false)
                }, 500)
              }}
              isAccent={true}
            ></Button>
          )}
        </div>
      </form>
    </search>
  )
}
export default SearchBar
