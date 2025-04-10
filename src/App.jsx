import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { db } from '../data/db'


function App() {
    //Le damos el valor de la base de datos a data.
    const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const itemExists = cart.findIndex((item) => item.id === product.id)
        if(itemExists >= 0){
            console.log("Ya existe, agregando otro.")
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        }else{
            console.log("No existe, agregando...")
            product.quantity = 1
            setCart(prevCart => [...prevCart, product])
        }
    }    

    return (
        <>
            <Header 
                cart={cart}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5"> 
                    {/* En este caso, podemos hacer que el arrow function tenga el return implicito poniendo () => () en vez de () => {return}*/}
                    {data.map((product) => (
                        <Product 
                            key = {product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))} 
                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
