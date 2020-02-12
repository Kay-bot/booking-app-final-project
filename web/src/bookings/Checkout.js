import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  SectionWrapper,
  CartHeader,
  H4,
  Span,
  Row
} from "../forms/CartForm";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { lessons: [], qty: 1 };
  }

  componentDidMount() {
    // let cart = localStorage.getItem("cart");
    // if (!cart) return; //to change the endpoint to /booking/:lesson_id
    // axios.get(`/booking/:lesson_id`).then((booking) => {
    //   let total = 0;
    //   for (var i = 0; i < booking.length; i++) {
    //     total += booking[i].cost * qty;
    //   }
    //   this.setState({ booking, total });
    // });
  }

  postPayment = () => {
    axios
      .post("/lesson_payments")
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  render() {
    // if (!isLoggedIn()) return <Redirect to="/login" />;
    const { lessons } = this.state;

    return (
      <Wrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Your Class</H4>
          </CartHeader>
          <Row>
            {/* {lessons.map((item, index) => (
              <div key={index}>
                <p>
                  {item.title} <small> (quantity: {1})</small>
                  <span>${1 * item.cost}</span>
                </p>
                <hr />
              </div>
            ))}
            <hr /> */}
          </Row>
          <Row></Row>
        </SectionWrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Your Details</H4>
          </CartHeader>
          <Row>Row 1</Row>
          <Row>Row 2</Row>
        </SectionWrapper>
        <SectionWrapper>
          <CartHeader>
            <H4>Payment</H4>
          </CartHeader>
          <Row>
            {/* {lessons.length ? (
              <div>
                <h4>
                  <small>Total Amount:</small>
                  <span>${total}</span>
                </h4>
                <hr />
              </div>
            ) : (
              ""
            )} */}
          </Row>
          <Row>
            {/* {!lessons.length ? <h3>No item on the cart</h3> : ""}
            {lessons.length ? (
              <button onClick={this.postPayment}>Pay</button>
            ) : (
              ""
            )}
            <Link to="/">
              <button>Cancel</button>
            </Link>
            <br />
            <br />
            <br /> */}
          </Row>
        </SectionWrapper>
      </Wrapper>
    );
  }
}
export default Checkout;
