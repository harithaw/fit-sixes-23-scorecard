import React from "react";
import { useState, useEffect } from "react";

import Cam02 from "./Cam02.js"
import style from "../styles/camera2.module.css";


function Canvas01() {
    const testData1 = { pitch: "P1", teamA: "99x", teamB: "WS02", runs: 184, wickets: 3, target: 385, overs: 9.2 };
    const testData2 = { pitch: "P2", teamA: "WSO2", teamB: "Virtusaa", runs: 54, wickets: 0, target: 64, overs: 9.2 };
    const testData3 = { pitch: "P3", teamA: "Virtusa", teamB: "Brocoders", runs: 54, wickets: 0, target: 64, overs: 9.2 };
    const testData4 = { pitch: "P4", teamA: "Innowise", teamB: "Virtusaa", runs: 54, wickets: 0, target: 64, overs: 9.2 };

    const [match01, setMatch01] = useState(null);
    const [match02, setMatch02] = useState(null);
    const [match03, setMatch03] = useState(null);
    const [match04, setMatch04] = useState(null);

    useEffect(() => {
        setMatch01(testData1);
        setMatch02(testData2);
        setMatch03(testData3);
        setMatch04(testData4);

    }, []);

    return(
        <>
            <div className={style.scoreBackgrond}>
                <Cam02 matchData={match01}/>
                <Cam02 matchData={match02}/>
                <Cam02 matchData={match03}/>
                <Cam02 matchData={match04}/>
            </div>
        </>
    )

}

export default Canvas01