// import React from "react";
// import Select from "react-select";

// const qty = [
//   { value: 1, label: 1 },
//   { value: 2, label: 2 },
//   { value: 3, label: 3 },
//   { value: 4, label: 4 },
//   { value: 5, label: 5 },
//   { value: 6, label: 6 },
//   { value: 7, label: 7 },
//   { value: 8, label: 8 },
//   { value: 9, label: 9 },
//   { value: 10, label: 10 }
// ];
// export default class CartItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quantity: 1,
//       selectedOption: null
//     };
//   }
//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption }, () =>
//       console.log(`Option selected:`, this.state.selectedOption)
//     );
//   };
//   render() {
//     const { selectedOption } = this.state;
//     return (
//       <div className="card" style={{ marginBottom: "10px" }}>
//         <div className="card-body">
//           <div>
//             <Select
//               value={selectedOption}
//               onChange={this.selectedOption}
//               options={qty}
//             />
//           </div>

//           <span className="card-text text-success">
//             <small>Quantity: </small>
//             {this.state.quantity}
//           </span>
//           <button
//             className="btn btn-sm btn-warning float-right"
//             onClick={() => this.props.remove(this.state.quantity)}
//           >
//             Remove from cart
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
