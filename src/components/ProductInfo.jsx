const ProductInfo = () => {
  let product = {
    'name':'laptop',
    'price':'1200',
    'availability':'in-stock'
    }
  return (
    <>
    <div>Name : {product.name}</div>
    <div>Price : ${product.price}</div>
    <div>Availability: {product.availability}</div>
    </>
  )
}

export default ProductInfo