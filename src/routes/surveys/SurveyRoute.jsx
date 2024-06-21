import React from "react";
import { useLoaderData } from "react-router-dom";
import SurveyForm from "../../modules/survey-form/SurveyForm";
import { getQuestions } from "../../utils/questionUtils";
import { SURVEY_TYPES } from "../../constants/surveyTypes";
import { useUserContext } from "../../context/user-context/UserContext";
import NotLoggedNotification from "../../modules/notification/NotLoggedNotification";

export async function loader(data) {
  return { surveyType: SURVEY_TYPES[data?.params?.surveyId?.toUpperCase()] };
}

const SurveyRoute = () => {
  const { surveyType } = useLoaderData();

  const { user } = useUserContext();

  if (user == null) {
    return <NotLoggedNotification />;
  }

  const questions = getQuestions(surveyType);

  return <SurveyForm questions={questions} surveyType={surveyType} />;
};

export default SurveyRoute;
