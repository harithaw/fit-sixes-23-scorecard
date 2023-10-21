import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";
import axios from 'axios';
import { useRef } from 'react';

function Cam02({ matchData }) {
  const wsRef = useRef(null);

  const [match, setMatch] = useState(null);

    const [liveScore, setLiveScore] = useState(null);

    useEffect(() => {
        const WEB_SOCKET_URL = 'wss://socketsbay.com/wss/v2/5/518d5516a7d3bbb045f17787384cc6b8/';
        wsRef.current = new WebSocket(WEB_SOCKET_URL);

        wsRef.current.onopen = () => {
            const data = { action: 'sendMessage', message: 'hello server' };
            wsRef.current.send(JSON.stringify(data));

            console.log("WebSocket connected")
        };

        wsRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("socketData",data)
            if (data) {
                setMatch(data);
                console.log("near set",liveScore)
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

    useEffect(() => {
        console.log("liveScore state", liveScore);
    }, [liveScore]);

  const testMatch = {
    team1: "99X",
    team2: "Cambio",
    scorecard: {
      team1: {
        marks: 50,
        wickets: 3,
        overs: 1,
        balls: 3
      },
      team2: {
        marks: 35,
        wickets: 4,
        overs: 2,
        balls: 0
      }
    },
    overs: 5,
    pitch_no: 1
  }

  useEffect(() => {
    console.log("match state", match)
  }, [match])

  

  // const [data, setData] = useState(null);

  // useEffect(() => {

  //   //crop team names if too long
  //   if (matchData) {
  //     if (matchData.teamA.length > 7) {
  //       matchData.teamA = (matchData.teamA.slice(0, 7))
  //     }
  //     if (matchData.teamB.length > 8) {
  //       matchData.teamB = (matchData.teamB.slice(0, 8))
  //     }
  //   }

  //   setData(matchData);

  // }, [matchData]);

  return (
    <>
      {match ?
        <>
          <div className={style.scoreContainer}>

            {/* <div className={style.pitch}>P{match && match?.pitch_no}</div> */}

            <div className={style.row1}>

              <div className={style.col1}>
                <span className={style.bowlingTeam}>
                  {match?.team1} v
                </span>
                <span className={style.battingTeam}>
                  {match?.team2}
                </span>
              </div>
              <div div className={style.col2}>
                <div className={style.score}> {match && match?.scorecard.team1.marks} - {match && match?.scorecard.team1.wickets} </div>
              </div>

            </div>

            <div className={style.row2}>

              <div className={style.col1}>
                <div className={style.secondary}>{match.scorecard.team2.marks !==0 ? <div> Target : {match?.scorecard.team2.marks}</div> : <div>First Innings</div>}</div>
              </div>
              <div className={style.col2}>
                <div className={style.secondary}> Overs - {match && match?.overs}</div>
              </div>
            </div>
          </div>
        </>
      : undefined}
    </>

  )
}

export default Cam02