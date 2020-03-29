import React, { Component } from 'react'
//Grab datas from data.js
import {storeProducts, detailProduct} from './data';
//create new context object and it comes with two component (Provider & Consumer)
const ProductContext = React.createContext();

//Provider Component - provide all the information for all the application
//Consumer Component - not going to have pass props through child component
//instead grad them in our application.

//class base -To make the provider accessible to other components, we need to wrap our app with it 
class ProductProvider extends Component {
    //setup initial state value
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
//this method will be called once in whole lifecycle. Invoked immdediately after a component and all its
//children components have been rendered to the DOM.(Great plcace to interact with DOM)
    componentDidMount () {
        this.setProducts(); //getting copies of these values about, referencing
    }

    setProducts = () => {
        //let products be an empty array
        let tempProducts = [];
        //now want to look through all storeProducts and then as looping through and what i want to
        //do with the item ?. Now each every item is going to be an object because storeProducts is an 
        //array with objects.
        storeProducts.forEach(item => {
            const singleItem = {...item} //expand into mutiple items list
    /*destructuring assignment allows us to tear apart an array or object into individual pieces that 
      we can assign to variables. In here the square brackets [ and ] are used to destructure an array
      by grabbing old value from the product(as we are looping through & going to be more product in this
      array) and add single item*/
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => { //current value of products in the state - get each product item as object
            return {products: tempProducts }
        })
    }

    //get item according to the id
    getItem = (id) => { //passing in the id 
        /*looking in the product array in state. Simple callback function - if the
        item id matches the id we pass in the parameter then we going to return the item */
        const product = this.state.products.find(item => item.id === id)
        return product; //return that specific item
    }

    handleDetail = (id) => {
        const product = this.getItem(id)//whatever product we are getting from this method;
        this.setState(() => { //update detailProduct in the set of state
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        //destructre - whatever products we have in the current state  
        let tempProducts = [...this.state.products]; //give access to all products in the state
        //looking for the index - want particualr product be display in same position
        const index = tempProducts.indexOf(this.getItem(id)) //the value to locate in the array
        const product = tempProducts[index]//Accessing product index in specific position
        //now since we added the actual product to the cart
        product.inCart = true;
        product.count = 1;
        const price = product.price
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts,
                //...this.state.cart - current value
                cart: [...this.state.cart, product] //destructuring everything that is in the cart
            };
        }, 
        () => {
            this.addTotals();
          }
        );
    };

    openModal = (id) => {
        //getting specific product item
        const product = this.getItem(id);
        this.setState(() => {
            return {
                //updating state object property
                modalProduct: product,
                modalOpen: true //pop up the modal
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    increment = (id) => {
        //the tempCart array object contain all current product value in the cart
        let tempCart = [...this.state.cart];//destructuring all the current product inside the cart.
        //returns the value of the first array element that passes a test function
        const selectedProduct = tempCart.find((item) => item.id == id )
        const index = tempCart.indexOf(selectedProduct); 
        const product = tempCart[index]; //contain the specific product
        product.count = product.count + 1;
        product.total = product.count * product.price;
        //this modifying the cart array
        this.setState(() => {return{cart:[...tempCart]}}, () => {this.addTotals()});
    }

    decrement = (id) => {
       //the tempCart array object contain all current product value in the cart
       let tempCart = [...this.state.cart];//destructuring all the current product inside the cart.
       //returns the value of the first array element that passes a test function
       const selectedProduct = tempCart.find((item) => item.id == id )
       const index = tempCart.indexOf(selectedProduct); 
       const product = tempCart[index]; //contain the specific product
       product.count = product.count - 1;
      if (product.count === 0) {
          this.removeItem(id)
      }else {
        product.total = product.count * product.price;
        //this modifying the cart array
        this.setState(() => {return{cart:[...tempCart]}}, () => {this.addTotals()});
      }
    }
    
    //using id to find the remove item id
    removeItem = (id) => {
        let tempProducts = [...this.state.products]; //destructure them. all items
        let tempCart = [...this.state.cart]; //destructure items from the cart when added.
        //only return item that do not match the id in the parameter
        /*Looking for item that does not have the id, so this is going to return the rest 
        of the cart and item is going to be remove from the cart*/
        tempCart = tempCart.filter(item => item.id !== id)
        //filter() method creates an array filled with all array elements that pass a test
        const index = tempProducts.indexOf(this.getItem(id));//giving the specific index of item
        let removedProduct = tempProducts[index]; //contain that specific item based on item id 
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState( () => { //modifying the current state
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {this.addTotals();}) //update addTotals 
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}; //return new state, which cart is empty
        },() => { //callback function 
            //give new original fresh copies of all the objects
            //all modified objects will set to default from data.js
            this.setProducts();
            this.addTotals(); //update the totals
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }

    render() {    
        return (
            //some values, which you can share via value prop our provider component
            <ProductContext.Provider value={{ //object properties
                ...this.state, 
                handleDetail: this.handleDetail, 
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}> 
            {/*returing all childeren within this component*/}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
//const ProductProvider = ProductContext.Provider;
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};


