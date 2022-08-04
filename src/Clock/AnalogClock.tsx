import React, { useState, useContext } from "react";
import styles from './AnalogClock.module.css'

function AnalogClock() {
    const [hour, setHour] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    const clock = () => {
        let date = new Date();

        let hh = date.getHours() * 30,
            mm = date.getMinutes() * 6,
            ss = date.getSeconds() * 6;

        setHour(`rotateZ(${hh + mm / 12}deg)`);
        setMinutes(`rotateZ(${mm}deg)`);
        setSeconds(`rotateZ(${ss}deg)`);
    };
    setInterval(clock, 1000);

    return (
        <div className={styles.clock__circle}>
            <span className={styles.clock__twelve}></span>
            <span className={styles.clock__three}></span>
            <span className={styles.clock__six}></span>
            <span className={styles.clock__nine}></span>

            <div className={styles.clock__rounder}></div>
            <div className={styles.clock__hour} style={{ transform: hour }}></div>
            <div className={styles.clock__minutes} style={{ transform: minutes }}></div>
            <div className={styles.clock__seconds} style={{ transform: seconds }}></div>
        </div>
    );
}

export default AnalogClock;