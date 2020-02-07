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
        <CartHeader>Your Class</CartHeader>
      </SectionWrapper>
      <SectionWrapper>
        <CartHeader>Your Details</CartHeader>
      </SectionWrapper>
      <SectionWrapper>
        <CartHeader>Confirm Booking</CartHeader>
      </SectionWrapper>
    </Wrapper>
  );
}
export default Cart;
