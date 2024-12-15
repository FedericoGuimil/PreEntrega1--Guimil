import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="appcontainer">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"Bienvenidos a Mix Laser"} /> }/>
          <Route path="/category/:idCategory" element={ <ItemListContainer saludo={"Bienvenidos a Mix Laser"} /> } />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer/>} />

          <Route path="*" element={<div>Error 404 - Page not found</div>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
