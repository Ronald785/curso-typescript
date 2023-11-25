import React, { useEffect, useState } from "react";
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
    const [timeCounting, setTimeCounting] = useState(false);
    const [working, setWorking] = useState(false);

    useEffect(() => {
        if (working) document.body.classList.add("working");
    }, [working]);

    useInterval(
        () => {
            setMainTime(mainTime - 1);
        },
        timeCounting ? 1000 : null,
    );

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
    };
    return (
        <div className="pomodoro">
            <h2>You are: Working</h2>
            <Timer mainTime={mainTime}></Timer>
            <div className="controls">
                <Button text="Work" onClick={() => configureWork()}></Button>
                <Button
                    text="Teste"
                    onClick={() => console.log(mainTime)}
                ></Button>
                <Button
                    text={timeCounting ? "Play" : "Pause"}
                    onClick={() => setTimeCounting(!timeCounting)}
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
