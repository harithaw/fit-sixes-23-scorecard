import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";
import axios from 'axios';

function shortenName(name) {
  const nameParts = name.split(' ');

  let shortenedName = '';

  for (let i = 0; i < nameParts.length; i++) {
    shortenedName += nameParts[i].charAt(0);
  }

  return shortenedName;
}

function Cam02({ matchData }) {

  const [match, setMatch] = useState(null);
  console.log("HELLO", matchData);

  useEffect(() => {
    async function getOngoingMatch() {
      await axios
        .get(
          `https://j1kydf6tp3.execute-api.ap-south-1.amazonaws.com/dev/v1/matches/ongoing`
        )
        .then((res) => {
          setMatch(
            res.data.data.matches.matches.find(
              (obj) => obj.id === matchData.match_id
            )
          )
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
                  {shortenName(match?.team1)} v
                </span>
                <span className={style.battingTeam}>
                  {shortenName(match?.team2)}
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
                <div className={style.secondary}> Overs - {match && match?.scorecard.team1.overs}.0</div>
              </div>
            </div>
          </div>
        </>
        : undefined}
    </>

  )
}

export default Cam02
