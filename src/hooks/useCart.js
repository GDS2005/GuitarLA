import { useState, useEffect } from 'react'
import { useMemo } from 'react'
import { db } from '../../data/db'

export const useCart = () => {
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

    {/* useMemo */}
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    {/*Itera cada elemento del array con: reduce (total,item) => que_queremos_hacer, valor_inicial)*/}
    const totalCart = useMemo(() => cart.reduce ((total, product) => total + (product.quantity * product.price), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        totalCart
    }
}

