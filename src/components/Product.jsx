{/*En este caso se podría aplicar Destructing directamente para evitar tener que poner props.price -> Poniendo Product ({price}) y poniendo price*/}
export default function Product ({product, addToCart}) {

{/* Se puede aplicar un segundo Destructing */}
const {id, name, description, price, image} = product

    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="This product image" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">$ {price}</p>
                    <button type="button" className="btn btn-dark w-100" onClick={() => {addToCart(product)}}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}