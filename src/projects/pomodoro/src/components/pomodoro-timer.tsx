import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/use-interval";
import Button from "./button";
import { Timer } from "./timer";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require("../sounds/bell-start.mp3");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require("../sounds/bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

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
    const [resting, setResting] = useState(false);

    useEffect(() => {
        if (working) document.body.classList.add("working");
        if (resting) document.body.classList.remove("working");
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
        setResting(false);
        setMainTime(props.pomodoroTime);
        audioStartWorking.play();
    };

    const configureRest = (long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);

        if (long) setMainTime(props.longRestTime);
        else setMainTime(props.shorRestTime);

        audioStopWorking.play();
    };
    return (
        <div className="pomodoro">
            <h2>You are: Working</h2>
            <Timer mainTime={mainTime}></Timer>
            <div className="controls">
                <Button text="Work" onClick={() => configureWork()}></Button>
                <Button
                    text="Rest"
                    onClick={() => configureRest(false)}
                ></Button>
                <Button
                    className={!working && !resting ? "hidden" : ""}
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
