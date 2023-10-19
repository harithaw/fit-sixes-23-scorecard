import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";
import axios from 'axios';

function Cam02({ matchData }) {
  const [match, setMatch] = useState();
  useEffect(() => {
    getOngoingMatch();
  }, [matchData]);

  const getOngoingMatch = () => {
    axios
      .get(
        `${
          process.env.REACT_APP_API_DEV_BASE_URL ||
          `https://mqempuran2.execute-api.ap-south-1.amazonaws.com/prod/v1`
        }/matches/ongoing`
      )
      .then((res) => {
        console.log(res);
        setMatch(
          res.data.data.matches.matches.find(
            (obj) => obj.id === matchData.match_id
          )
        );
      })
      .catch((err) => {});
  };

  return (
    <>
      {true &&
        <>
          <div className={style.scoreContainer}>

            <div className={style.pitch}>P1</div>

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
                <div className={style.score}> {match?.scorecard.team1.marks || 0} - {match?.scorecard.team1.wickets || 0} </div>
              </div>

            </div>

            <div className={style.row2}>

              <div className={style.col1}>
                <div className={style.secondary}>Target - 100 </div>
              </div>
              <div className={style.col2}>
                <div className={style.secondary}> ({match?.overs}.0) </div>

              </div>

            </div>
          </div>
        </>
      }
    </>

  )
}

export default Cam02