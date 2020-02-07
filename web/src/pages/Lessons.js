import React, { Component } from "react";
import StyledHero from "../styles/StyledHero";
import {
  LessonContainer,
  LessonCardContainer,
  LessonDetailsContainer,
  LessonLink,
  LessonImage,
  LessonDetails
} from "../styles/LessonHomeStyle";
import "../styles/pagination.css";
import Axios from "axios";
import styled from "styled-components";

class Lessons extends Component {
  state = {
    count: 0,
    page: 0,
    lessons: []
  };

  handlePrevious = (e) => {
    e.preventDefault();
    const newPage = Math.max(0, this.state.page - 1);
    Axios.get("/lessons", { params: { page: newPage } }).then((result) => {
      this.setState({
        count: result.data.count,
        page: newPage,
        lessons: result.data.lessons
      });
    });
  };

  currentPage = () => this.state.page;

  totalPages = () => Math.floor(this.state.count / 3);

  handleNext = (e) => {
    e.preventDefault();
    const newPage = Math.min(this.state.count, this.state.page + 1);
    console.log("New page: " + newPage);
    Axios.get("/lessons", { params: { page: newPage } }).then((result) => {
      this.setState({
        count: result.data.count,
        page: newPage,
        lessons: result.data.lessons
      });
    });
  };
  componentDidMount() {
    Axios.get("/lessons").then((result) => {
      this.setState({
        lessons: result.data.lessons,
        page: 0,
        count: result.data.count
      });
    });
  }

  render() {
    const lessonList = this.state.lessons.map((item, key) => (
      <LessonCardContainer key={key}>
        <LessonLink to={`/lessons/${item.id}`}>
          <LessonImage src={item.url} />
          <LessonDetailsContainer>
            <LessonDetails>
              <b>{item.title}</b>
            </LessonDetails>
            <LessonDetails>
              <b>Cost:</b> ${item.cost} AUD
            </LessonDetails>
          </LessonDetailsContainer>
        </LessonLink>
      </LessonCardContainer>
    ));
    const box = {
      padding: "100px",
      position: "reletive"
    };
    const box2 = {
      margin: "0",
      position: "absolute",
      top: "90%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    };
    return (
      <div style={box}>
        <StyledHero>
          <h1>Upcoming Lessons in 2020</h1>
        </StyledHero>

        <LessonContainer>{lessonList}</LessonContainer>
        <div style={box2}></div>
        <div className="page-container">
          {this.currentPage() > 0 ? (
            <a href="#" onClick={this.handlePrevious}>
              Previous
            </a>
          ) : (
            <div>Previous</div>
          )}
          <div className="page-total">
            Total: {this.state.count}, page {this.currentPage()} of
            {this.totalPages()}
          </div>
          {this.currentPage() < this.totalPages() ? (
            <a href="#" onClick={this.handleNext}>
              Next
            </a>
          ) : (
            <div>Next</div>
          )}
        </div>
      </div>
    );
  }
}

export default Lessons;
