import styled from "styled-components";
import { Link } from "react-router-dom";

// RecipeList styles
export const LessonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LessonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 20%;
  margin: 1%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LessonImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
export const LessonDetailsContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  height: 200px;
`;

export const LessonDetails = styled.p`
  font-weight: ${(props) => (props.light ? "300" : "700")};
  margin: 5px;
`;

export const LessonLink = styled(Link)`
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  color: rgb(70, 70, 70) !important;
`;
