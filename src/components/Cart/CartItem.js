import React from 'react'

export default function CartItem({item, value}) {//destrucring and get props
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
       <div className="row my-2 text-capitalize text-center">
           <div className="col-10 mx-auto col-lg-2">
               <img src={img} alt="Product" style={{width:"5rem", height: "5rem"}} className="img-fluid"/>
           </div>
           <div className="col-10 mx-auto col-lg-2 my-lg-4">
               <span className="d-lg-none">product : </span>{ title}
           </div>
           <div className="col-10 mx-auto col-lg-2 my-lg-4">
               <span className="d-lg-none">price : </span>{ price}
           </div>
           <div className="col-10 mx-auto col-lg-2 my-1  my-lg-4">
               <div className="d-flex justify-content-center">
                   <div>
                      <span className="btn btn-danger mx-1" onClick={() => decrement(id)}>
                          -
                      </span>
                      <span className="btn btn-warning mx-1">{count}</span>
                      <span className="btn btn-primary mx-1" onClick={() => increment(id)}>
                          +
                      </span>
                   </div>
               </div>
           </div>
           <div className="col-10 mx-auto col-lg-2 my-lg-4">
               <div className="cart-icon" onClick={() => removeItem(id)}>
                   <i className="fas fa-trash"></i>
               </div>
           </div>
           <div className="col-10 mx-auto col-lg-2 my-lg-4">
               <strong>item total : $ {total}</strong>
           </div>
       </div>
    );
}
 