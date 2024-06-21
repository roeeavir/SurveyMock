import React from "react";
import "./SurveyResults.scss";

const SurveyResults = ({ answers }) => {
  const answersContent = answers?.map((answer, index) => (
    <tr key={answer?.questionText}>
    <td>{index + 1}</td>
    <td>{answer?.questionText}</td>
    <td>{answer?.value ?? "N/A"}</td>
    <td>{answer?.count ?? "N/A"}</td>
  </tr>
  ));

  return (
    <table className="survey-results-table">
      <tr>
        <th>מספר</th>
        <th>שאלה</th>
        <th>ניקוד ממוצע</th>
        <th>מספר הצבעות</th>
      </tr>
      {answersContent}
    </table>
  );
};

export default SurveyResults;
