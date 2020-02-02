import React from "react";
import {
  LessonImage,
  LessonCardContainer,
  LessonDetailsContainer,
  LessonDetails,
  LessonLink
} from "../styles/LessonHomeStyle";

function LessonCard(props) {
  return (
    <LessonCardContainer>
      <LessonLink to={`/lesson/${props.lessonId}`}>
        <LessonImage src={props.image} />
        <LessonDetailsContainer>
          <LessonDetails {...props.title} />
          <LessonDetails {...props.duration} />
          <LessonDetails {...props.cost} />
          <LessonDetails {...props.langquage} />
          <LessonDetails {...props.level} />
        </LessonDetailsContainer>
      </LessonLink>
    </LessonCardContainer>
  );
}

export default LessonCard;
