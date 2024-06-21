import React, { useState } from "react";
import "./SurveyForm.scss";
import RangeQuestion from "../questions/RangeQuestion";
import { updateAnswers } from "../../utils/answers";
import { useNavigate } from "react-router-dom";

const SurveyForm = ({ questions, surveyType }) => {
  const [answers, setAnswers] = useState({});

  const navigate = useNavigate();

  const answerCount = Object.keys(answers)?.length;
  const isFormFull = false;

  const onAnswerChangeHandler = (value, index) => {
    const updatedAnswers = { ...answers };
    if (value == null) {
      delete updatedAnswers[index];
    } else {
      updatedAnswers[index] = {
        value: value,
        questionText: questions[index]?.questionText,
      };
    }

    setAnswers(updatedAnswers);
  };

  const onSubmit = () => {
    updateAnswers(surveyType, answers);
    console.log("Sumbitted survey");
    alert("הצבעתך נשמרה במערכת");
    navigate("/");
  };

  const submitClassNameExtension = `${isFormFull ? " full" : ""}${
    answerCount > 0 ? "" : " disabled"
  }`;

  return (
    <form className="survey-form">
      {questions?.map((question, index) => (
        <RangeQuestion
          key={question?.questionText}
          questionText={question?.questionText}
          questionIndex={index}
          onChange={onAnswerChangeHandler}
          minValue={question.minValue}
          maxValue={question.maxValue}
        />
      ))}
      <input
        className={`submit-button${submitClassNameExtension}`}
        type="submit"
        value="Submit"
        onClick={onSubmit}
      />
    </form>
  );
};

export default SurveyForm;
