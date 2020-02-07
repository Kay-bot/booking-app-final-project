import React from "react";
import {
  Wrapper,
  SectionWrapper,
  CartHeader,
  H4,
  Span,
  Row
} from "../forms/CartForm";

function Cart() {
  //To right some shit here
  return (
    <Wrapper>
      <SectionWrapper>
        <CartHeader>
          <H4>Your Class</H4>
        </CartHeader>
        <Row>Row 1</Row>
        <Row>Row 2</Row>
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
          <H4>Confirm Booking</H4>
        </CartHeader>
        <Row>Row 1</Row>
        <Row>Row 2</Row>
      </SectionWrapper>
    </Wrapper>
  );
}
export default Cart;
