import { Component } from 'react';
import "../App.css"

class OrderList extends Component {

  render() {

    const total = this.props.order.reduce((total, item) => total + Number(item.price), 0);

    const listOrder = this.props.order.map((product, index) =>(
      <div className = "orders" key={index}>
          <p>{product.name}</p>
          <p>{`$${Number(product.price/100)}`}</p>
          <div onClick= {() => this.props.removeOrderItem(product)}>X</div>
      </div>
    ));

    return (
      <div className="orderList">
        <h1>Order</h1>
        <h1>total Price: {`$${total/100}`}</h1>
        <div>{listOrder}</div>
      </div>
    );
  }
}

export default OrderList
