import React, { Component } from "react";
import Select from "react-select";
import Axios from "axios";
import {
  BookingWrapper,
  InnerContainer,
  Subheader,
  P,
  BookBtn
} from "../styles/SingLessonStyled";
import styled from "styled-components";

const options = [
  {
    value: "Mon 10 Feb, 3pm-5pm, (Potts Point, Sydney)",
    label: "Mon 10 Feb, 3pm-5pm, (Potts Point, Sydney)"
  },
  {
    value: "Tue 11 Feb, 3pm-5pm, (Potts Point, Sydney)",
    label: "Tue 11 Feb, 3pm-5pm, (Potts Point, Sydney)"
  },
  {
    value: "Wed 11 Feb, 3pm-5pm, (Potts Point, Sydney)",
    label: "Wed 11 Feb, 3pm-5pm, (Potts Point, Sydney)"
  }
];

class BookingForm extends Component {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <BookingWrapper>
        <InnerContainer>
          <Subheader>Booking button and schedule will be here!</Subheader>
          <FormContain>
            <formBform>
              <diInputDiv>
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={options}
                />
              </diInputDiv>
              <BtnDiv>
                <BookBtn primary>Book</BookBtn>
              </BtnDiv>
              <Pdiv>
                <P>Free to cancel (with 5 days notice)</P>
                <P>Book at least 24 hours before each date</P>
              </Pdiv>
            </formBform>
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
  text-align: center;
  top: -3px;
`;

export const Pdiv = styled.div`
  margin-top: 14px;
  line-height: 5px;
`;
