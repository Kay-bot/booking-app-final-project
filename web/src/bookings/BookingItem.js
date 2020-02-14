// import React from "react";
// export default class ProductItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { quantity: 1 };
//   }
//   handleInputChange = (event) =>
//     this.setState({ [event.target.name]: event.target.value });
//   addToCart = () => {
//     let cart = localStorage.getItem("cart")
//       ? JSON.parse(localStorage.getItem("cart"))
//       : {};
//     let id = this.props.booking.id.toString();
//     cart[id] = cart[id] ? cart[id] : 0;
//     let qty = cart[id] + parseInt(this.state.quantity);
//     if (this.props.booking.available_quantity < qty) {
//       cart[id] = this.props.booking.available_quantity;
//     } else {
//       cart[id] = qty;
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//   };
//   render() {
//     const { booking } = this.props;
//     return (
//       <div className="card" style={{ marginBottom: "10px" }}>
//         <div className="card-body">
//           <h4 className="card-title">{booking.title}</h4>
//           <p className="card-text">{booking.date}</p>
//           <h5 className="card-text">
//             <small>price: </small>${booking.cost}
//           </h5>
//           <span className="card-text">
//             <small>Available Quantity: </small>
//             {booking.available_quantity}
//           </span>
//           {booking.available_quantity > 0 ? (
//             <div>
//               <button
//                 className="btn btn-sm btn-warning float-right"
//                 onClick={this.addToCart}
//               >
//                 Add to cart
//               </button>
//               <input
//                 type="number"
//                 value={this.state.quantity}
//                 name="quantity"
//                 onChange={this.handleInputChange}
//                 className="float-right"
//                 style={{
//                   width: "60px",
//                   marginRight: "10px",
//                   borderRadius: "3px"
//                 }}
//               />
//             </div>
//           ) : (
//             <p className="text-danger"> No booking for this class </p>
//           )}
//         </div>
//       </div>
//     );
//   }
// }
