import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import HomeRoute from "./routes/home/HomeRoute";
import LoginRoute from "./routes/login/LoginRoute";
import SurveyRoute, {
  loader as surveyLoader,
} from "./routes/surveys/SurveyRoute";
import SurveyResultsRoute from "./routes/results/SurveyResultsRoute";
import { getResultsLinks, getSurveysLinks } from "./utils/links";
import SpecificLinks from "./modules/specific-links/SpecificLinks";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/surveys/:surveyId"
        loader={surveyLoader}
        element={<SurveyRoute />}
      />
      <Route
        path="/results/:surveyId"
        loader={surveyLoader}
        element={<SurveyResultsRoute />}
      />
      <Route
        path="/surveys/"
        loader={surveyLoader}
        element={<SpecificLinks listOfLinks={getSurveysLinks()} />}
      />
      <Route
        path="/results"
        loader={surveyLoader}
        element={<SpecificLinks listOfLinks={getResultsLinks()} />}
      />
      <Route path="/login" loader={surveyLoader} element={<LoginRoute />} />
      <Route path="/" loader={surveyLoader} element={<HomeRoute />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
