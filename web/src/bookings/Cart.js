// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";
// import axios from "axios";

// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { booking: [], total: 0 };
//   }
//   componentDidMount() {
//     let cart = localStorage.getItem("cart");
//     if (!cart) return;
//     axios.get("/booking/:id").then((booking) => {
//       let total = 0;
//       for (var i = 0; i < booking.length; i++) {
//         total += booking[i].cost * booking[i].qty;
//       }
//       this.setState({ booking, total });
//     });
//   }
//   removeFromCart = (booking) => {
//     let booking = this.state.lessons.filter((item) => item.id !== booking.id);
//     let cart = JSON.parse(localStorage.getItem("cart"));
//     delete cart[lesson.id.toString()];
//     localStorage.setItem("cart", JSON.stringify(cart));
//     let total = this.state.total - booking.qty * booking.cost;
//     this.setState({ booking, total });
//   };
//   clearCart = () => {
//     localStorage.removeItem("cart");
//     this.setState({ booking: [] });
//   };
//   render() {
//     const { booking, total } = this.state;
//     return (
//       <div>
//         <h3>Cart</h3>
//         {booking.map((item, index) => (
//           <CartItem item={booking} remove={this.removeFromCart} key={index} />
//         ))}
//         {booking.length ? (
//           <div>
//             <h4>
//               <small>Total Amount: </small>
//               <span>${total}</span>
//             </h4>
//             <hr />
//           </div>
//         ) : (
//           ""
//         )}
//         {!booking.length ? <h3>No item on the cart</h3> : ""}
//         <Link to="/checkout">
//           <button>Checkout</button>
//         </Link>
//         <button onClick={this.clearCart} style={{ marginRight: "10px" }}>
//           Clear Cart
//         </button>
//         <br />
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default Cart;
