import React from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                pomodoroTime={10}
                shorRestTime={2}
                longRestTime={5}
                cycles={2}
            />
        </div>
    );
}

export default App;
