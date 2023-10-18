import React from "react";
import { useState, useEffect } from "react";
import style from "../styles/camera.module.css";

//https://v1.slashapi.com/cabeteam/pgsql/QtpENDhOJS/fitsixes/1

function Cam01() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://v1.slashapi.com/cabeteam/pgsql/QtpENDhOJS/fitsixes/1'
      );
      const newData = await response.json();
      newData.data.teamb = newData.data.teamb.substring(0, 3);
      setData(newData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();
    console.log(data);

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={style.scoreContainer}>
        <div className={style.title}>
          <div className={style.teams}>
            <div className={style.bowlingTeam}>99x v</div>
            <div className={style.battingTeam}>CAM</div>
          </div>
          <div className={style.target}>Target: 56</div>
        </div>
        <div div className={style.score}>
          <div className={style.runs}>17-0</div>
          <div className={style.overs}>1.4</div>
        </div>
      </div>
    </>

  )
}

export default Cam01