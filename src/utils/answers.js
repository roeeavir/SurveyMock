import { SURVEY_TYPES } from "../constants/surveyTypes";
import { getQuestions } from "./questionUtils";

const answers = {
  [SURVEY_TYPES.DEVELOPERS]: getQuestions(SURVEY_TYPES.DEVELOPERS),
  [SURVEY_TYPES.PRODUCT_MANAGERS]: getQuestions(SURVEY_TYPES.PRODUCT_MANAGERS),
};

export const updateAnswers = (surveyType, newAnswers) => {
  const updatedAnswers = [...answers[surveyType]];
  Object.keys(newAnswers)?.forEach((key) => {
    const newAnswer = newAnswers[key];
    let existingAnswer = answers[surveyType]?.[key];
    if (!existingAnswer) return;
    if (existingAnswer?.count == null) {
      existingAnswer.count = 0;
      existingAnswer.value = 0;
    }
    const updatedAnswer = {
      ...existingAnswer,
      count: existingAnswer.count + 1,
    };

    updatedAnswer.value =
      (existingAnswer.count * existingAnswer.value + newAnswer?.value) /
      updatedAnswer.count;

    updatedAnswers[key] = updatedAnswer;
  });
  answers[surveyType] = updatedAnswers;
};

export const getAnswers = (surveyType) => {
    return answers[surveyType];
}