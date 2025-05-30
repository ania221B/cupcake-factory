import { useState } from 'react'
import Button from './Button'
import { products } from '../../data'
import { useGlobalContext } from '../../context'

function SearchBar () {
  const [inputText, setInputText] = useState('')
  const { filterProducts } = useGlobalContext()

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
          <Button
            buttonText='Search'
            ariaLabel='Search for products'
            type='submit'
            onClick={e => {
              e.preventDefault()
              filterProducts(inputText)
              setInputText('')
            }}
            isAccent={true}
          ></Button>
        </div>
      </form>
    </search>
  )
}
export default SearchBar
