import React from 'react'

function Product({ d,AddtoCart }) {
    return (
        <div className="card shadow-box m-2" style={{ width: "19rem" }}>

            <div className="card-body text-center  ">
                <div className="card-img-box" >
                    <img src={d.image} class="card-img-p " alt="..." />
                </div>
                <h3 className="card-title mt-2 product-name">{d.title.split(" ")[0] +" " + d.title.split(" ")[1] +" " + d.title.split(" ")[2]}</h3>
                <h5 className="card-text ">
                    $ {d.price}
                </h5>
                <a href="#" className="btn btn-primary w-100" onClick={()=> AddtoCart(d)}>
                    Add To Cart
                </a>

            </div>
        </div>

    )
}

export default Product