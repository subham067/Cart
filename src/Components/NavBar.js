import React, { useEffect, useRef, useState } from 'react'
import CartItem from './CartItem'

function NavBar({ CartProduct, RemoveCart, Totalprice, increaseStock }) {
  const navRef = useRef(null)
  const CartRef = useRef(null)
  const [totalProduct, setTotalProduct] = useState([])


  useEffect(() => {
    let AllPrice = CartProduct.map(d => d.title)
    AllPrice.sort();
    let FAllData = []
    AllPrice.map(p => {
      CartProduct.map(d => {
        if (p == d.title) {
          FAllData.push(d)
        }

      })

    })
    const letters = new Set([...FAllData]);
    let LLFAllData = [...letters.values()]
    setTotalProduct(LLFAllData)
  }, [CartProduct])
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm" >
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            Shopping
          </a>
          <div className="navbar-toggler border-0 navBtn">
            <button
              className=""
              type="button"
              onClick={() => navRef.current.classList.toggle("show")}>
              <span className="navbar-toggler-icon" />
            </button>
            <button className='text-center my-auto mx-2' onClick={() => CartRef.current.classList.toggle("active")}><i class="fa fa-shopping-cart " aria-hidden="true"></i></button>

          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navRef}>
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cart
                </a>
              </li>

            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className='text-center my-auto ml-2 shopping-cart-btn px-2 d-sm-none d-lg-block' onClick={() => CartRef.current.classList.toggle("active")}><i class="fa fa-shopping-cart " aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
        <div class="shopping-cart  " ref={CartRef}>
          {CartProduct == "" ? <h1 className='text-danger text-center'>Please Add Product</h1> :
            <>
              {totalProduct.map((data) => <CartItem key={data.id} data={data} RemoveCart={RemoveCart} increaseStock={increaseStock} />)}
              <div class="total"> total : ${Totalprice.toFixed(2)}/- </div>
              <a href="#" class="btn btn-primary">checkout</a>
            </>}
        </div>
      </nav>
    </>
  )
}

export default NavBar