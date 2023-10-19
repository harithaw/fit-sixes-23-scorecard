import React from "react";
import { useState, useEffect } from "react";
import { useRef } from 'react';

import Cam02 from "./Cam02.js"
import style from "../styles/camera2.module.css";
import axios from "axios";


function Canvas01() {

    const wsRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [liveScore, setLiveScore] = useState(null);

    useEffect(() => {
    const WEB_SOCKET_URL =
      'wss://bzkg9tjte7.execute-api.ap-south-1.amazonaws.com/production';
    wsRef.current = new WebSocket(WEB_SOCKET_URL);

    wsRef.current.onopen = () => {
      const data = { action: 'sendMessage', message: 'hello server' };
      wsRef.current.send(JSON.stringify(data));
    };

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      if (data.score.length > 0) {
        setIsLoading(false);
        const liveData=data.score
        setLiveScore(liveData);
        setLiveScore(liveData);
        console.log(liveScore);
      }
    };

    wsRef.current.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    wsRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
        if (wsRef.current) {
            wsRef.current.close();
          }
        };
    }, []);


    // const testData1 = { pitch: "P1", teamA: "99x", teamB: "WS02", runs: 184, wickets: 3, target: 385, overs: 9.2 };
    // const testData2 = { pitch: "P2", teamA: "WSO2", teamB: "Virtusaa", runs: 54, wickets: 0, target: 64, overs: 9.2 };
    // const testData3 = { pitch: "P3", teamA: "Virtusa", teamB: "Brocoders", runs: 54, wickets: 0, target: 64, overs: 9.2 };
    // const testData4 = { pitch: "P4", teamA: "Innowise", teamB: "Virtusaa", runs: 54, wickets: 0, target: 64, overs: 9.2 };

    // const [match01, setMatch01] = useState(null);
    // const [match02, setMatch02] = useState(null);
    // const [match03, setMatch03] = useState(null);
    // const [match04, setMatch04] = useState(null);

    // useEffect(() => {
    //     setMatch01(testData1);
    //     setMatch02(testData2);
    //     setMatch03(testData3);
    //     setMatch04(testData4);

    // }, []);

    return(
        <>
            <div className={style.scoreBackgrond}>
                {liveScore && liveScore.map((match, index) => {
                    // <Cam02 matchData={match} key={index} />
        
                })}
            </div>
        </>
    )

}

export default Canvas01;

// const displayScorecard = (liveScore) => {
//     return (
//         liveScore.map((match, index) => {
//             <Cam02 matchData={match} key={index}/>
//         })
//     )
// }