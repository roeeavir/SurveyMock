import React, { useState } from "react";
import "./RangeQuestion.scss";

const RangeQuestion = ({
  questionText,
  minValue,
  maxValue,
  onChange,
  questionIndex,
}) => {
  const [selectedGrade, setSelectedGrade] = useState();

  const handleChange = (value) => {
    if (selectedGrade === value) {
      value = null;
    }
    setSelectedGrade(value);
    onChange(value, questionIndex);
  };

  const arr = Array.from(
    { length: maxValue - minValue + 1 },
    (_, index) => index + minValue
  );

  const gradesContent = arr?.map((value) => (
    <button
      key={`grade-${value}`}
      className={`question-grade-block${
        selectedGrade === value ? " selected" : ""
      }`}
      onClick={() => handleChange(value)}
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
