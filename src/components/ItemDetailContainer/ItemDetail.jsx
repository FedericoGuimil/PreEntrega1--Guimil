const ItemDetail = ( {product} ) => {
  return (
    <div className="itemdetail">
      <div className="itemdetail-container">
        <img className="itemdetail-img" src={product.image} alt="" />
        <div className="itemdetail-text">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <p>Stock disponible: {product.stock}</p>
        </div>
      </div>
        
    </div>
  )
}

export default ItemDetail