import React from "react";
import "./SurveyResults.scss";
import { useLoaderData } from "react-router-dom";
import { getAnswers } from "../../utils/answers";

const SurveyResults = () => {
  const { surveyType } = useLoaderData();
  const answers = getAnswers(surveyType);

  return (
    <div className="survey-results">
      Average survey results:
      <ul>
        {answers?.map((answer) => (
          <li key={answer?.questionText}>
            {answer?.questionText}{" "}
            <span style={{ fontWeight: "600" }}>{answer?.value ?? "N/A"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyResults;
