
import React, {  useState } from 'react'
import './bootstrap.css';
import './App.css';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import swal from 'sweetalert';
import {ProductData} from './ProductData'

function App() {

  let AllProduct = ProductData;
  const [CartProduct, setCartProduct] = useState([])
  const [Totalprice, setTotalprice] = useState(0)

  function AddtoCart(item) {
    let pCart = false;
    CartProduct.filter(a => {
      if (a.id == item.id) {
        pCart = true;
      }
    })
    if (pCart === true) {
      swal("The product was already added to your Cart", "", "warning")
    } else {
      let CartItem = {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        stock: 1
      }
      setCartProduct(p => [...p, CartItem])
      calculatePrice([...CartProduct, CartItem])
    }
  }
  function RemoveCart(item) {
    const Iremove = CartProduct.filter((efw) => {
      return efw !== item;
    })
    setCartProduct(Iremove)
    calculatePrice([...Iremove])
  }

  function increaseStock(item, i) {

    let totalArrI = [...CartProduct]


    totalArrI.map((a) => {
      if (a.id == item.id) {
        const Iremove = totalArrI.filter((efw) => {
          return efw !== a;
        })

        let newItem = {
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          stock: item.stock + i
        }
        setCartProduct([...Iremove, newItem])
        calculatePrice([...Iremove, newItem])
      }
      // calculatePrice()
    })



  }

  function calculatePrice(a) {
    let totalcost = 0
    a.map((d) => {

      let num = Number(d.price)

      totalcost = totalcost + (num * Number(d.stock))

    })
    setTotalprice(totalcost)
  }
  return (
    <>
      <NavBar CartProduct={CartProduct} RemoveCart={RemoveCart} Totalprice={Totalprice} increaseStock={increaseStock} />

      <h1 className='text-center my-2'>Your Product</h1>
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {AllProduct.map((d) => <Product key={d.id} d={d} AddtoCart={AddtoCart} />)}
        </div>

      </div>
     
    </>
  );
}

export default App;
