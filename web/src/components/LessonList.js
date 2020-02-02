import React from "react";
import LessonCard from "../components/LessonCard";
import { LessonContainer } from "../styles/LessonHomeStyle";

const LessonList = (props) => {
  return (
    <div>
      {/* <LessonContainer>
        {props.lessons.map((item, key) => (
          <LessonCard
            image={item["image"]}
            title={item["title"]}
            duration={item["duration"]}
            cost={item["cost"]}
            language={item["language"]}
            level={item["level"]}
            key={key}
          />
        ))}
      </LessonContainer> */}
    </div>
  );
};

export default LessonList;
