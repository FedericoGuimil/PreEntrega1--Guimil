import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <Link to={"/detail/"+product.id} className="item">
        <img className="item-img" src= {product.image} alt="" />
        <p className="item-text">{product.name}</p>
        <p className="item-text">Precio: ${product.price}</p>
    </Link>
  )
}

export default Item