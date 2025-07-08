import Button from './Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

function QuantityFormControl ({
  quantity,
  onDecrease,
  onIncrease,
  onChange,
  min = 0,
  max = 100
}) {
  return (
    <div className='quantity-form-control'>
      <Button
        buttonText={<FaMinus />}
        ariaLabel='Decrease product quantity in cart'
        onClick={onDecrease}
        isAccent={true}
      ></Button>
      <input
        type='number'
        name='product-quantity'
        id='product-quantity'
        min={min}
        max={max}
        value={quantity}
        onChange={e => {
          const value = Number(e.target.value)
          if (!isNaN(value)) onChange(value)
        }}
      />
      <label htmlFor='product-quantity' className='sr-only'>
        Product count
      </label>
      <Button
        buttonText={<FaPlus />}
        ariaLabel='Increase product quantity in cart'
        onClick={onIncrease}
        isAccent={true}
      ></Button>
    </div>
  )
}
export default QuantityFormControl
