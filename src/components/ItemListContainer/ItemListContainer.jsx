import "./itemlistcontainer.scss"

const ItemListContainer = ({saludo}) => {
  return (
    <div className="itemlistcontainer">
      <h1>{saludo}</h1>
    </div>
  )
}

export default ItemListContainer