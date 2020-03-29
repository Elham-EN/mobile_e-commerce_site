import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            //accessng value from context.js by ProductProvider
            <ProductConsumer> 
                {(value) => { 
                    //get the current detailProduct value of the specific item when click on img id.
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/*Title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1 className="text-title">{title}</h1>
                                </div>
                            </div>
                            {/*Product Info*/}
                            <div className="row">
                                {/*Image*/}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="Proudct detail"/>
                                </div>
                                {/*Product Text*/}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h3 className="text-blue">model : {title}</h3>
                                    <h4 className="text-blue mt-3 mb-3 ">
                                        made by : <span>{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        price : <span>$ </span>{price}
                                    </h4>
                                    <p className="text-blue font-weight-bold mt-3 mb-0">
                                        info about product:
                                    </p>
                                    <p className="lead text-muted">{info}</p>
                                    {/*buttons*/}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                               back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled={inCart ? true : false}
                                                         onClick={() => {
                                                             value.addToCart(id)
                                                             value.openModal(id)
                                                             }}>
                                                {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ) ;
                }}
            </ProductConsumer>
        )
    }
}

const ButtonContainer = styled.button `
    background: blueviolet; border: none; color: white; font-size: 1.2rem; border-radius: 0.3em;
    padding: 0.5em; margin-top: 0.5em; margin-right: 1.5em; transition: all 0.5s; text-transform: capitalize;
       &:hover {
           transform: translateX(20px); background: orangered;
       }
       &:focus {
           outline:none;
       }
`
