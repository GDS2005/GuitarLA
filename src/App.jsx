import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { db } from '../data/db'


function App() {
    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        //Si localStorageCart tiene algo, sino setea
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    //Le damos el valor de la base de datos a data.
    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    //Sincroniza en localStorage cada vez que se modifique cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(product) {
        const itemExists = cart.findIndex((item) => item.id === product.id)
        if(itemExists >= 0){
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        }else{
            product.quantity = 1
            setCart(prevCart => [...prevCart, product])
        }
        saveLocalStorage()
    }    

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(product => product.id !== id))
    }

    function increaseQuantity(id){
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS){
                return {
                    ...item,
                    quantity: item.quantity +1 
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS){
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
        <>
            <Header 
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                clearCart={clearCart}
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
