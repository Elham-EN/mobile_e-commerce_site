import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        //Extracting values of each item from product, accessible from props 
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                  <ProductConsumer>  
                    {value => (
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                           <Link to="/details">
                              <img src={img} alt="product" className="card-img-top"/>
                           </Link>
                           <button className="cart-btn" disabled={inCart ? true : false}
                                   onClick={() => {
                                       value.addToCart(id)
                                       value.openModal(id)
                                   }}>
                               {inCart ? ( //if true - looking card paragraph
                                    <p className="text-capitalize mb-0" disabled>
                                       {""}
                                       in cart
                                    </p>
                                  ) : ( //if false - icon of cart
                                    <i className="fas fa-cart-plus" />
                                )}
                            </button>
                        </div>
                    ) }
                  </ProductConsumer>
                    {/*card footer*/} 
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-start mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

//Type-checking our props
Product.protoTypes =  {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    })
}

//Access any class within the ProductWrapper
const ProductWrapper = styled.div `
   .card {
       border-color: transparent; transition: all 0.3s linear;
   }
   .card-footer {
       background:transparent; border-top: transparent; transition: all 0.3s linear;
   }
   &:hover {
       .card {
           border: 0.04rem soild rgba(0,0,0,0.2); box-shadow: 5px 2px 5px 2px rgba(0,0,0,0.2);
       }
       .card-footer {
           background: rgba(247,247,247);
       }
   }
   .img-container {
       position: relative; overflow: hidden; background: whitesmoke;
   }
   .card-img-top {
       transition: all 0.5s linear;
   }
   .img-container:hover .card-img-top{
       transform: scale(1.5);
   }
   .cart-btn {
       position: absolute; bottom: 0; right: 0; padding: 0.2rem 0.4rem;
       background: var(--lightBlue); border: none; color: var(--mainWhite);
       font-size: 1.4rem; border-radius: 0.7rem 0 0 0; transform: translate(100%, 100%);
       transition: all 0.5s linear;
   }
   .img-container:hover .cart-btn {
       transform: translate(0, 0);
       cursor: pointer;
   }
`