import React from "react";
import "./SurveyForm.scss";
import RangeQuestion from "../questions/RangeQuestion";
import { getQuestions } from "../../utils/questionUtils";

const SurveyForm = ({ questions }) => {
  questions = getQuestions();
  const isFormFull = false;

  return (
    <form className="survey-form">
      {questions?.map((question) => (
        <RangeQuestion
          key={question?.questionText}
          questionText={question?.questionText}
          minValue={question.minValue}
          maxValue={question.maxValue}
        />
      ))}
      <input
        className={`submit-button${isFormFull ? " full" : ""}`}
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default SurveyForm;
