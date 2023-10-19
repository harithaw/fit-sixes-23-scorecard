import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";

function Cam02({ matchData }) {
  const [data, setData] = useState(null);

  useEffect(() => {

    //crop team names if too long
    if (matchData) {
      if (matchData.teamA.length > 7) {
        matchData.teamA = (matchData.teamA.slice(0, 7))
      }
      if (matchData.teamB.length > 8) {
        matchData.teamB = (matchData.teamB.slice(0, 8))
      }
    }
    
    setData(matchData);

  }, [matchData]);

  return (
    <>
      {data &&
        <>
          <div className={style.scoreContainer}>

            <div className={style.pitch}>{data.pitch}</div>

            <div className={style.row1}>

              <div className={style.col1}>
                <span className={style.bowlingTeam}>
                  {data.teamA} v
                </span>
                <span className={style.battingTeam}>
                  {data.teamB}
                </span>
              </div>
              <div div className={style.col2}>
                <div className={style.score}> {data.runs}-{data.wickets} </div>
              </div>

            </div>

            <div className={style.row2}>

              <div className={style.col1}>
                <div className={style.secondary}>Target - {data.target}</div>
              </div>
              <div className={style.col2}>
                <div className={style.secondary}> Overs - {data.overs}</div>

              </div>

            </div>
          </div>
        </>
      }
    </>

  )
}

export default Cam02