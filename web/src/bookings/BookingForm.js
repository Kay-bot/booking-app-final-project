import React, { Component } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import {
  BookingWrapper,
  InnerContainer,
  Subheader,
  P,
  BookBtn
} from "../styles/SingLessonStyled";
import styled from "styled-components";
import axios from "axios";

class BookingForm extends Component {
  state = {
    schedules: [],
    selectedOption: null
  };

  componentDidMount() {
    fetch("/schedules") //I need to create end point where schedules belong to a lesson
      .then((response) => response.json())
      .then((json) => {
        this.setState({ schedules: json });
      });
  }

  handleChange = (selectedOption) => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
      // how can I add a schedule to the booking when the schedule is selected
    );
  };

  postNewBooking = (event) => {
    event.preventDefault();
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    const schedule = this.state.selectedOption;
    const booking = {
      status: "Booked",
      title: "Test number 3 - Booking function works",
      cost: 50,
      date: "Fri, 20 Feb",
      cancellation_reason: null,
      refunded: null,
      client_id: "1",
      trainer_id: 2,
      schedule_id: 5,
      lesson_id: 6,
      account_id: 2
    };
    axios
      .post(
        `/bookings`,
        {
          ...booking
        },
        {
          headers: { Authorization: `Bearer ${auth.token}` }
        }
      )
      .then((response) => {
        console.log("Got Booking create response");
        localStorage.setItem("booking", JSON.stringify(response.data));
        // useHistory().push("/checkout");
      })
      .catch((error) => {
        console.log("Got Booking create error!");

        console.log(error);
      });
  };

  render() {
    const scheduleList = this.state.schedules.map((item) => ({
      value: item.date + item.time,
      label: item.date + item.time
    }));

    return (
      <BookingWrapper>
        <InnerContainer>
          <Subheader>Booking button and schedule will be here!</Subheader>
          <FormContain>
            <Bform onSubmit={this.postNewBooking}>
              <InputDiv>
                <Select
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={scheduleList}
                  required
                />
              </InputDiv>
              <BtnDiv>
                <BookBtn primary onClick={this.postNewBooking}>
                  Book
                </BookBtn>
              </BtnDiv>
              <Link to="/cart">
                <br />
                <div primary>View card</div>
              </Link>
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
