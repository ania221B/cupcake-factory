import { useGlobalContext } from '../../context'

function SortingMenu () {
  const { sortBy, setSortBy } = useGlobalContext()
  return (
    <div className='all-posts__sorting-menu'>
      <label htmlFor='posts-sorting' className='all-posts__label'>
        Sort articles:
      </label>
      <div className='all-posts__select-wrapper'>
        <select
          name='posts-sorting'
          value={sortBy}
          id='posts-sorting'
          onChange={e => setSortBy(e.target.value)}
          className='all-posts__select'
        >
          <option value='newest'>Newest first</option>
          <option value='oldest'>Oldest first</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
      </div>
    </div>
  )
}
export default SortingMenu
