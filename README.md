# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## How to write css in REACT

- CSS Plano
- SASS
- Modulos CS
- Librerias de Componentes
- Framework CSS
- Styled Components

## Que son los componentes en REACT

Componentes siempre inician con mayusculas. function App(){} es un componente. Se pueden pasar componentes con props. Los componentes son html y javascript en el mismo espacio.
React utiliza componentes para la creación de aplicaciones y sitios web. Un componente puede tener la extensión .jsx o .tsx; 
- jsx es javascript
- tsx es typescript

Un componente tiene 2 propositos: Ser reutilizable o separar la funcionalidad.

Un componente siempre debe tener un return

## Que es JSX 

Es una extesnion del lenguaje desarrollada por Meta.

Parece JS, pero muestra codigo HTML. Es un lenguaje de Templates/Vistas, que muestra HTML pero tiene todas las funciones de Javascript.

### Reglas en JSX

Si un elemento HTML tiene una etiqueta de apetura, deberá tener también la de cierre. Hay que cerrarlas con />. El return debe haber un solo elemento en el nivel máximo (No puede retornar 2 parrafos por ejemplo) -> Se solucionaría con un Div

Fargment es un componente que evita la creación de Divs innecesarios. También se puede utilizar <> </> 

En React, debes usar className en lugar de class para asignar clases CSS a un elemento. Esto se debe a que class es una palabra reservada en JavaScript, y React utiliza JSX (JavaScript XML), que es una extensión de JavaScript.

## React Hooks

Al igual que los componentes, son importantes. Son la base de React. Nos van a permitir ejecutar diferentes funciones de React en mis componentes. React tiene Hooks por defecto pero podemos crear los nuestros.

Ej:
-useState
-useEffect
-useContext

### Reglas

-Se recomienda que esten en la parte superior de los componentes.
-No se deben agregar dentro de condicionales o return
-Para modificarse el state se debe utilizar la funcion de la derecha

### useState

La pieza central de React. Variable con información relevante en una aplicación. Algunas veces se ocupa en un componente especifico o se pueden compartir. Es la interacción de un usuario con el sitio Ej: Un usuario autenticado o no
``
import { useState } from "react"

const [customer, setCustomer] = useState({}); -> Valor inicial
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false); -> Más clara, el modal inicia en false.
``

### useEffect

Siempre es un callback, que despendiendo como lo declare va a realizar diferentes acciones.

import { useEffect } from "react"

``
useEffect(() => {
    console.log("El componente esta listo");
}, [])
``

Se ejecuto automaticamente cuando el componente esta listo, es un buen lugar para colocar código para consultar una API o LocalStorage. Debido a que le podemos pasar una dependencia (State) va a estar escuchando los cambios, así que se puede actualizar el componente cuando eso suceda. Dependiendo de lo que le pasemos va a hacer algo distinto

import { useEffect } from "react"

useEffect(() => {
    console.log("El componente esta listo");
},[])

Las dependencias van dentro de "[]", cada vez que cambie (Ej: Auth) se ejecutará nuevamente

``
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if(auth){
            console.log("Logeado")
        }
        else{
            console.log("Deslogeado")
        }
    },[auth]) 

    setTimeout(() => {
        setAuth(true)
    }, 3000);
``

Primero muestra Deslogeado y luego de 3 segundos Logeado

## Diferencia entre Statements y Expresiones

Statements son instrucciones para hacer algo. If, Error, While, For, Variables, etc

Expresiones producen un valor nuevo. Ternario, Array Method que genere un nuevo Array o .map genera un nuevo arreglo.

## Props

Forma de compartir información entre componentes. Los componentes utilizan props para comunicarse entre ellos. Los props son similares a los atributos HTML, pero se les puede pasar arreglos, objetos o funciones.

Solamente se le puede pasar del Padre al Hijo.

´´
<Header nombreProp= {datos /state o funciones} />
´´
o
´´
<Users users={users} setUsers={setUsers} title="Listado Usuarios"/>
´´

-- ABRIENDO LLAVES PODEMOS PONER CÓDIGO DE JAVESCRIPT --