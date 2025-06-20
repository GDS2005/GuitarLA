# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Proyecto desarrollado con **React** + **Vite**.

## 🚀 Requisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v16.0 o superior)
- npm (incluido con Node) o yarn

## 🔧 Instalación

1. Clona el repositorio:

    git clone https://github.com/tu-usuario/.git
    cd .git

2. Instala las dependencias:

    npm install
    # o
    yarn install

3. Ejecutar el programa

    npm run build
    # o
    yarn build


## Notas 2

Se pueden crear Hooks personalizados para organizar el código. Por ejemplo; useAuth.js, para esto debemos crear primero una carpeta hooks en src 


CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

## Typescript

La diferencia con el javascript tradicional es que agrega un sistema de tipos estático a Javascript, lo que permite detectar errores y proporciona herramientras de desarroll más solidas.

### Ventajas

Permite especificar los tipos de variable, parámetros de función, valores de retorno y más. Esto brinda la capacidad de realizar comprobaciones de tipos durante la compilación y deetectar posibles errores antes de que el código se ejecute.

