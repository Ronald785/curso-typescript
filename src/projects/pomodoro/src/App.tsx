import React from "react";
import { PomodoroTimer } from "./components/pomodoro-timer";

function App() {
    return (
        <div className="App">
            <PomodoroTimer defaultPomodoroTimer={15000} />
        </div>
    );
}

export default App;
