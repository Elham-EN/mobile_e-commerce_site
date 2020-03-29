import React, { Component } from 'react' 
import styled from 'styled-components'; //Styled Component
import {ProductConsumer} from '../context'; //Context API
import {Link} from 'react-router-dom'; //Router

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct; //current product when clicked
                    if (!modalOpen) { //if modal should close
                        return null;
                    }
                    else {
                        return (
                          <ModalContainer>
                             <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-5">
                                        <h5>item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : ${price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                going to checkout
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                          </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div `
     position: fixed; top: 0;  left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.3);
     display: flex; align-items: center; justify-content: center;
     #modal {
         background: white;
     }
`
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
