import taza1 from '../assets/fotos/taza1.jpg'
import taza2 from '../assets/fotos/taza2.jpg'
import taza3 from '../assets/fotos/taza3.jpg'
import taza4 from '../assets/fotos/taza4.jpg'
import remera1 from '../assets/fotos/remera1.jpg'
import remera2 from '../assets/fotos/remera2.jpeg'
import remera3 from '../assets/fotos/remera3.jpg'
import remera4 from '../assets/fotos/remera4.jpg'
import cd1 from '../assets/fotos/cd1.jpg'
import cd2 from '../assets/fotos/cd2.jpg'
import cd3 from '../assets/fotos/cd3.jpg'
import cd4 from '../assets/fotos/cd4.jpg'


const products = [
    {
      id: "T1",
      name: "Taza The Beatles",
      description: "",
      image: taza1,
      price: 8000,
      stock: 3,
      category: "tazas"
    },
    {
      id: "T2",
      name: "Taza Charly",
      description: "",
      image: taza2,
      price: 8000,
      stock: 2,
      category: "tazas"
    },
    {
      id: "T3",
      name: "Taza Airbag",
      description: "",
      image: taza3,
      price: 8000,
      stock: 1,
      category: "tazas"
    },
    {
      id: "T4",
      name: "Taza Megadeth",
      description: "",
      image: taza4,
      price: 8000,
      stock: 3,
      category: "tazas"
    },
    {
      id: "R1",
      name: "Remera RHCP",
      description: "",
      image: remera1,
      price: 15000,
      stock: 10,
      category: "remeras"
    },
    {
      id: "R2",
      name: "Remera Peal Jam",
      description: "",
      image: remera2,
      price: 15000,
      stock: 10,
      category: "remeras"
    },
    {
      id: "R3",
      name: "Remera Michael Jackson",
      description: "",
      image: remera3,
      price: 15000,
      stock: 10,
      category: "remeras"
    },
    {
      id: "R4",
      name: "Remera Black Sabath",
      description: "",
      image: remera4,
      price: 15000,
      stock: 10,
      category: "remeras"
    },
    {
      id: "C1",
      name: "CD Gustavo Cerati",
      description: "",
      image: cd1,
      price: 10000,
      stock: 1,
      category: "cds"
    },
    {
      id: "C2",
      name: "CD Spinetta",
      description: "",
      image: cd2,
      price: 10000,
      stock: 1,
      category: "cds"
    },
    {
      id: "C3",
      name: "CD Soda Stereo",
      description: "",
      image: cd3,
      price: 10000,
      stock: 1,
      category: "cds"
    },
    {
      id: "C4",
      name: "CD The Cure",
      description: "",
      image: cd4,
      price: 10000,
      stock: 1,
      category: "cds"
    },
    

  ]

  const getProducts = () => {
    return new Promise( (resolve, reject) => {
      setTimeout(()=>{
        resolve(products)
      }, 2000)
    })
  }

  export { getProducts }