import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [], total: 1 };
  }
  componentDidMount() {
    let booking = localStorage.getItem("booking");
    if (!booking) return;
    axios.get("/bookings/:id").then((item) => {
      let total = 0;
      for (var i = 0; i < item.length; i++) {
        total += item[i].cost * item[i].qty;
      }
      this.setState({ booking, total });
    });
  }
  removeFromCart = (booking) => {
    let itemInCart = this.state.bookings.filter(
      (item) => item.id !== booking.id
    );
    let removeBooking = JSON.parse(localStorage.getItem("booking"));
    delete removeBooking[booking.id.toString()];
    localStorage.setItem("booking", JSON.stringify(booking));
    let total = this.state.total - booking.qty * booking.cost;
    this.setState({ booking, total });
  };
  clearCart = () => {
    localStorage.removeItem("itemInCart");
    this.setState({ booking: [] });
  };
  render() {
    const { booking, total } = this.state;
    return (
      <div>
        <h3>Cart</h3>
        {booking.map((item, index) => (
          <CartItem item={booking} remove={this.removeFromCart} key={index} />
        ))}
        {booking.length ? (
          <div>
            <h4>
              <small>Total Amount: </small>
              <span>${total}</span>
            </h4>
            <hr />
          </div>
        ) : (
          ""
        )}
        {!booking.length ? <h3>No item on the cart</h3> : ""}
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <button onClick={this.clearCart} style={{ marginRight: "10px" }}>
          Clear Cart
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Cart;
