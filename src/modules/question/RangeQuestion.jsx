import React, { useState } from "react";
import "./RangeQuestion.css";

const RangeQuestion = ({ questionText, minValue, maxValue }) => {
  const [selectedGrade, setSelectedGrade] = useState();

  const arr = Array.from(
    { length: maxValue - minValue },
    (_, index) => index + minValue
  );

  const gradesContent = arr?.map((value) => (
    <button
      key={`grade-${value}`}
      className={`question-grade-block${
        selectedGrade === value ? " selected" : ""
      }`}
      onMouseUp={() => setSelectedGrade(value)}
    >
      {value}
    </button>
  ));

  return (
    <div className="range-question">
      <p className="question-title">{questionText}</p>
      <div className="grades-container">{gradesContent}</div>
    </div>
  );
};

export default RangeQuestion;
