import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera1.module.css";

function Cam01() {
  const testData = { pitch: 1, teamA: "99x", teamB: "Cambio", runs: 184, wickets: 3, target: 385, overs: 9.2 };
  const [data, setData] = useState(testData);


  return (
    <>
      {data &&
        <div className={style.scoreContainer}>
          <div className={style.title}>
            <div className={style.teams}>
              <div className={style.bowlingTeam}>{data.teamA} v</div>
              <div className={style.battingTeam}>CAM</div>
            </div>
            <div className={style.target}>Target: {data.target}</div>
          </div>
          <div div className={style.score}>
            <div className={style.runs}>{data.runs}-{data.wickets}</div>
            <div className={style.overs}>{data.overs}</div>
          </div>
        </div>
      }
    </>

  )
}

export default Cam01