import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch],
  );

  return (
    <div className="timer">{`${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`}</div>
  );
}

export default Timer;
