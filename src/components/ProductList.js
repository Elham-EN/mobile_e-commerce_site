import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';


export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Title name="our" title="products" />
                       <div className="row">
                     {/*function receives the current context value from provider in context.js */}
                           <ProductConsumer>
                               {(value) => {   
                                   //Accessing state property & loop through each product item from
                                   //the current
                                   return value.products.map(product => {
                                  //grab each product data item in array and send as props
                                       return <Product key={product.id} product={product}/>
                                   })
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
               </div>
            </React.Fragment>
        )
    }
}
