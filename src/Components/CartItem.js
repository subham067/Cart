import React from 'react'

function CartItem({ data, RemoveCart, increaseStock }) {
    return (
        <>
            <div class="box mx-auto">

                <div className="box-img"><img src={data.image} alt="" /></div>

                <div class="content">
                    <h3>{data.title.split(" ")[0] + data.title.split(" ")[1] + " " + data.title.split(" ")[2]} </h3>
                    <span class="price">${data.price}/-</span>
                    <span class="quantity"><button className="btn-sm btn-success" onClick={() => increaseStock(data, 1)}>+</button>
                        <button className="btn-sm  px-3">{data.stock}</button>
                        <button className="btn-sm btn-danger px-2" onClick={() => { if (data.stock < 2) { } else { increaseStock(data, -1) } }}>-</button></span>
                </div>
                <i class="fas fa-trash" onClick={() => RemoveCart(data)}></i>
            </div>
            <hr />
        </>
    )
}

export default CartItem