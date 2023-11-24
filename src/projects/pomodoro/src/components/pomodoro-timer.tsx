import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import secondsToTime from "../utils/seconds-to-time";

interface Props {
    defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = useState(props.defaultPomodoroTimer);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);
    return (
        <div className="pomodoro">
            <h2>Time: {secondsToTime(mainTime)}</h2>
        </div>
    );
}
