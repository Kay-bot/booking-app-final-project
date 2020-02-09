import React, { Component } from "react";
import Select from "react-select";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import {
  BookingWrapper,
  InnerContainer,
  Subheader,
  P,
  BookBtn
} from "../styles/SingLessonStyled";
import styled from "styled-components";

class BookingForm extends Component {
  state = {
    schedules: []
  };

  componentDidMount() {
    fetch("/schedules")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ schedules: json });
      });
  }

  handleChange = (schedules) => {
    this.setState({ schedules }, () =>
      console.log(`Option selected:`, this.state.schedules)
    );
  };

  handleClick = () => {
    console.log("I'm clicked");
    //Intend to redirect to /cart
  };

  render() {
    const scheduleList = this.state.schedules.map((schedule) => (
      <li>
        {schedule.date}, {schedule.time}
      </li>
    ));
    return (
      <BookingWrapper>
        <InnerContainer>
          <Subheader>Booking button and schedule will be here!</Subheader>
          <FormContain>
            <div>{scheduleList}</div>
            <Bform>
              <InputDiv>
                <Select
                  value={this.state.schedules}
                  onChange={this.handleChange}
                  options={scheduleList}
                />
              </InputDiv>
              <BtnDiv>
                <BookBtn primary onClick={this.handleClick}>
                  Book
                </BookBtn>
              </BtnDiv>
              <Pdiv>
                <P>Free to cancel (with 5 days notice)</P>
                <P>Book at least 24 hours before each date</P>
              </Pdiv>
            </Bform>
          </FormContain>
        </InnerContainer>
      </BookingWrapper>
    );
  }
}

export default BookingForm;

export const FormContain = styled.div`
  position: relative;
  display: block;
`;

export const Bform = styled.form`
  display: block;
  margin-top: 0em;
`;

export const InputDiv = styled.div`
  padding-right: 120px;
  display: block;
`;

export const BtnDiv = styled.div`
  position: absolute;
  top: -14px;
  right: 0;
`;

export const Pdiv = styled.div`
  margin-top: 20px;
  line-height: 20px;
`;
