import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { lessons: [], total: 0 };
  }
  componentDidMount() {
    let cart = localStorage.getItem("cart");
    if (!cart) return;
    axios.get("/booking/:lesson_id").then((lesson) => {
      let total = 0;
      for (var i = 0; i < lesson.length; i++) {
        total += lesson[i].price * lesson[i].qty;
      }
      this.setState({ lesson, total });
    });
  }
  removeFromCart = (lesson) => {
    let lessonList = this.state.lessons.filter((item) => item.id !== lesson.id);
    let cart = JSON.parse(localStorage.getItem("cart"));
    delete cart[lesson.id.toString()];
    localStorage.setItem("cart", JSON.stringify(cart));
    let total = this.state.total - lesson.qty * lesson.cost;
    this.setState({ lesson, total });
  };
  clearCart = () => {
    localStorage.removeItem("cart");
    this.setState({ lessons: [] });
  };
  render() {
    const { lessons, total } = this.state;
    return (
      <div>
        <h3>Cart</h3>
        {lessons.map((lesson, index) => (
          <CartItem lesson={lesson} remove={this.removeFromCart} key={index} />
        ))}
        {lessons.length ? (
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
        {!lessons.length ? <h3>No item on the cart</h3> : ""}
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
