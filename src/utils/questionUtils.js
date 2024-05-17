export const getQuestions = () => {
  return [
    {
      questionText: "כיצד תדרגו את רמת התיעוד בקוד של הספק",
      minValue: 1,
      maxValue: 10,
    },
    {
      questionText:
        "עד כמה הקוד של הספק עושה שימוש בטכנולוגיות חדשות, במידת האפשר (es6, net core, standard )",
      minValue: 1,
      maxValue: 10,
    },
    {
      questionText: "עד כמה הקוד נותן מענה לדרישות האפיון?",
      minValue: 1,
      maxValue: 10,
    },
    {
      questionText:
        "מה מידת ההקפדה של הספק על ביזור פונקציות בקוד? (הימנעות ממתודות מרובות שורות, והפרדת לוגיקה בין מתודות ייעודיות)",
      minValue: 1,
      maxValue: 10,
    },
    { questionText: "עד כמה הקוד של הספק מובן ונוח לקריאה?", minValue: 1, maxValue: 5 },
    { questionText: "עד כמה הקוד של הספק כתוב באופן יעיל? (סיבוכיות זמן ריצה אופטימלי, חיסכון במשאבי זיכרון וכיו\"ב)", minValue: 1, maxValue: 10 },
    { questionText: "באיזו מידה תמליץ על שירותי הספק עבור פיתוח מוצרים עתידיים?", minValue: 1, maxValue: 10 },
    { questionText: "האם היתה לך אינטראקציה עם עובדי הספק ? (אדיבות, קשב, מקצועיות, מענה מהיר/איטי לבעיות, מענה יעיל/לא יעיל לבעיות,  ועוד) ", minValue: 1, maxValue: 10 },
    { questionText: "עד כמה שעות הפיתוח היו יעילות ביחס לתמורה/לתוצאה?", minValue: 1, maxValue: 10 },
    { questionText: "מקצועיות המפתח הספציפי/צוות הפיתוח שהוקצה לעבודת הפיתוח?", minValue: 1, maxValue: 10 },
    { questionText: "מקצועיות המפתח/צוות הפיתוח שהוקצה לטיפול בבעיות/תקלות?", minValue: 1, maxValue: 10 },
  ];
};
