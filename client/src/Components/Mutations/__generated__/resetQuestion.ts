/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resetQuestion
// ====================================================

export interface resetQuestion_resetQuestion_answers {
  __typename: "SongAnswer";
  id: string;
}

export interface resetQuestion_resetQuestion {
  __typename: "SongQuestion";
  id: string;
  answers: resetQuestion_resetQuestion_answers[];
}

export interface resetQuestion {
  resetQuestion: resetQuestion_resetQuestion;
}

export interface resetQuestionVariables {
  questionId: string;
}
