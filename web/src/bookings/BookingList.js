import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BookingList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] };
  }

  componentDidMount() {
    axios.get(`/bookings`).then((res) => {
      this.setState({ bookings: res.data });
      console.log(res);
    });
  }

  render() {
    const bookingList = this.state.bookings.map((item, key) => (
      <div key={key}>
        <Link to={`/bookings/${item.id}`}>
          <li>
            {item.id}&nbsp;
            {item.status} &nbsp;
            {item.title} &nbsp;
            {item.date} &nbsp; Cost: ${item.cost} AUD
          </li>
        </Link>
      </div>
    ));
    return (
      <div>
        <h3>List of all bookings</h3>
        <hr />
        <ul>{bookingList}</ul>
        <hr />
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <Link to="/cart">
          <button style={{ marginRight: "10px" }}>View Cart</button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default BookingList;
