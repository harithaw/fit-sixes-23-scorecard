import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera2.module.css";

function Cam02() {
  const testData = { pitch: 1, teamA: "99x", teamB: "Cambio", runs: 184, wickets: 3, target: 385, overs: 9.2 };
  const [data, setData] = useState(testData);


  return (
    <>
      {data &&
        <div className={style.scoreBackgrond}>
          <div className={style.scoreContainer}>

            <div className={style.pitch}>P1</div>

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
        </div>

      }
    </>

  )
}

export default Cam02