import React from "react";
import RangeQuestion from "../../modules/question/RangeQuestion";
import { getQuestions } from "../../utils/questionUtils";

const SurveyRoute = ({ questions }) => {
  questions = getQuestions();

  return (
    <div>
      {questions?.map((question) => (
        <RangeQuestion
          key={question?.questionText}
          questionText={question?.questionText}
          minValue={question.minValue}
          maxValue={question.maxValue}
        />
      ))}
    </div>
  );
};

export default SurveyRoute;
