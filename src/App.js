import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default'
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
//Fragments lets you group a list of children without adding extra nodes to the DOM
      <React.Fragment>
        <Navbar /> {/*Navbar should be shown in every page*/}
        <Switch> {/*Grouping the routes */}
          {/*For Homepage use Slash Foward only and component attribute in fact point to 
          the component, where we want this route to go. In this case we looking for ProductList*/}
          <Route exact path='/' component = {ProductList} />
          <Route path='/details' component = {Details} />
          <Route path='/cart' component = {Cart} />
          <Route component = {Default} /> {/*if router cannot match the path then display Default*/}
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}


export default App;
 