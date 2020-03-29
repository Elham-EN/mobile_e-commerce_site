import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-dark py-2 px-sm-5 bg-dark">
              <div className="container-fluid ">
                 <div className="child-1 row col-sm-1">  
                    <Link to="/"> {/*Pointing to homepage*/}
                        <span className="icon-1">
                           <i className="fas fa-h-square navbar-brand"></i>
                        </span>
                    </Link>
                 </div>
                 <div className="child-2 row col-sm-3">
                    <ul className="navbar-nav">
                       <li className="nav-item text-capitalize">
                           <Link to="/" className="nav-link">
                               products
                           </Link>
                       </li>
                    </ul>
                 </div>
                 <div className="child-3 row col-sm-4">
                    <span className="icon-2">
                       <i className="fas fa-mobile-alt"></i>
                       <p className="para1">Razon Tech</p>
                    </span>
                 </div>
                 <div className="child-4 row col-sm-2 col-12">
                    <Link to="/cart">
                       <ButtonContainer >
                          <span className="mr-3">
                             <i className="fas fa-cart-plus"/>
                          </span>
                         <span>my cart</span>
                       </ButtonContainer>
                    </Link>
                 </div>
             </div>
        </NavWrapper>
        )
    }
}

// Styled-Components
const ButtonContainer = styled.button `
       display: flex;
       text-transform: capitalize;
       font-size: 1.4em;
       background: transparent;
       color: white;
       border: none;
       text-decoration: none;
       transition: all 0.5s;
       &:hover {
           transform: translateX(20px)
       }
       &:focus {
           outline:none;
       }
`

const NavWrapper = styled.nav `
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3em;
        transition: all 0.5s;
       &:hover {
           color: orangered !important;
       }
    }

    .icon-1 i {
        font-size:3em;
        color: white;
        padding: 0;
        margin: 0;
        transition: all 0.5s;
        &:hover {
            transform: translateX(20px);
        }
    }

    .icon-2 {
        display: flex;
    }

    .icon-2 i {
        font-size:3em;
        color: white;
        padding-top: 0.2em;
    }

    .para1 {
        color: white;
        font-size: 1.6em;
        align-self: center;
        padding-top: 0.4em;
        font-family: 'Permanent Marker', cursive;
        margin-left: 0.6em;
    }

    @media only screen and (max-width: 600px) {
        .container-fluid {
            display: grid;
        }

        .child-1, .child-2, .child-3, child-4 {
            justify-self: center;
        }

        .para1 {
            
            padding-right: 5em;
            font-size: 1.2em;
        }

        .icon-2 {
            display: none;
        }
    }   
    
`
