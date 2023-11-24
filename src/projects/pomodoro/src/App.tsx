import React from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
    return (
        <div className="container">
            <PomodoroTimer
                pomodoroTime={15000}
                shorRestTime={300}
                longRestTime={900}
                cycles={4}
            />
        </div>
    );
}

export default App;
