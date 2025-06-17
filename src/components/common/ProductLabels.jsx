function ProductLabels ({ bestseller, newArrival, sale }) {
  return (
    <>
      {bestseller && <span className='label bestseller-label'>Bestseller</span>}
      {newArrival && <span className='label new-arrival-label'>New</span>}
      {sale && <span className='label sale-label'>Sale</span>}
    </>
  )
}
export default ProductLabels
