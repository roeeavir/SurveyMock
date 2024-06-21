import React from "react";
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

  return <SurveyResults answers={answers} />;
};

export default SurveyResultsRoute;
