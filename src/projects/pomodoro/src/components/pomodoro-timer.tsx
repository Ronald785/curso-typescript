import React, { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import Button from "./button";
import { Timer } from "./timer";

interface Props {
    pomodoroTime: number;
    shorRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = useState(props.pomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1);
    }, 1000);
    return (
        <div className="pomodoro">
            <h2>You are: Working</h2>
            <Timer mainTime={mainTime}></Timer>
            <div className="controls">
                <Button
                    text="Teste"
                    onClick={() => console.log(mainTime)}
                ></Button>
            </div>

            <div className="details">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
}
