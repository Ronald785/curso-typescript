import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import Button from "./button";
import { Timer } from "./timer";

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
            <h2>You are: Working</h2>
            <Timer mainTime={mainTime}></Timer>
            <Button text="Teste" onClick={() => console.log(mainTime)}></Button>
        </div>
    );
}
