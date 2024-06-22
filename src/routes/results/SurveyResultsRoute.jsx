import React from "react";
import './SurveyResultsRoute.css';
import { useLoaderData } from "react-router-dom";
import { getAnswers } from "../../utils/answers";
import SurveyResults from "../../modules/survey-results/SurveyResults";
import { useUserContext } from "../../context/user-context/UserContext";
import NotLoggedNotification from "../../modules/notification/NotLoggedNotification";

const SurveyResultsRoute = () => {
  const { surveyType } = useLoaderData();
  const answers = getAnswers(surveyType);

  const { user } = useUserContext();

  if (user == null) {
    return <NotLoggedNotification />;
  }

  return (
    <div className="survey-results-route"> 
      <SurveyResults answers={answers} />
    </div>
  );
};

export default SurveyResultsRoute;
