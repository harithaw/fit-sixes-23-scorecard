import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";
import axios from 'axios';

function Cam02({ matchData }) {

  const [match, setMatch] = useState(null);

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
    async function getOngoingMatch() {
      await axios
      .get(
        `https://v1.slashapi.com/sd/pgsql/TsoVbS8v5m/match_data`
      )
      .then((res) => {
        const data = (res.data.data.find((obj) => obj.id === matchData.match_id));
        const json = JSON.parse(data.match_info)
        setMatch(json);
      })
      .catch((err) => { });
    }

    getOngoingMatch()

    // setMatch(testMatch)
  }, [matchData,])



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

            <div className={style.pitch}>P{match && match?.pitch_no}</div>

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
                <div className={style.secondary}>Target - XX</div>
              </div>
              <div className={style.col2}>
                <div className={style.secondary}> Overs - {match && match?.overs}.0</div>
              </div>
            </div>
          </div>
        </>
      : undefined}
    </>

  )
}

export default Cam02