import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';

import ProductList from './components/ProductList.js'
import ProductOrder from './components/ProductOrder.js'
import OrderList from './components/OrderList.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      order: [],

    };

    this.addOrderItem = this.addOrderItem.bind(this);
    this.removeOrderItem = this.removeOrderItem.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/menu/')
      .then(response => response.json())
      .then(data => this.setState({productList:  data}));
  }


  addOrderItem(newEntry){
    let orderCopy=[...this.state.order];
    // console.log(newEntry)
    orderCopy.push(newEntry);
    this.setState({
    order: orderCopy,
    });

  }

  removeOrderItem(removedEntry){
    let orderCopy=[...this.state.order];
    // console.log(removedEntry.id)
    const index = orderCopy.indexOf(removedEntry);
    // console.log(removedEntry)
    orderCopy.splice(index,1);
    this.setState({
    order: orderCopy,
    });
  }

  submitOrder(customer) {
    const subtotal = this.state.order.reduce((total, item) => total + item.price, 0);
    const order = {...customer, product: this.state.order, subtotal};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(order),
    }

    fetch('/api/v1/orders/', options)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {

    return (
      <>
      <ProductOrder  submitOrder={this.submitOrder} />
      <section className="main">
        <ProductList addOrderItem={this.addOrderItem} productList={this.state.productList} />
        <OrderList removeOrderItem={this.removeOrderItem} order={this.state.order}/>
      </section>
      </>
    );
  }
}

export default App;
