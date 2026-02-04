import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useQuiz();

  const currentQuestion = questions[index];

  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options currentQuestion={currentQuestion} />
    </div>
  );
}

export default Question;
