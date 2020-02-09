import React from "react";
import {
  Wrapper,
  SectionWrapper,
  CartHeader,
  H4,
  Span,
  Row
} from "../forms/CartForm";

function Checkout() {
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
          <H4>Payment</H4>
        </CartHeader>
        <Row>Row 1</Row>
        <Row>Row 2</Row>
      </SectionWrapper>
    </Wrapper>
  );
}
export default Checkout;
