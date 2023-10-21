import React from "react";
import { useState, useEffect } from "react";
import { useRef } from 'react';

import Cam02 from "./Cam02.js"
import style from "../styles/camera2.module.css";

function Canvas01() {
    return (
        <>
            <div className={style.scoreBackgrond}>
            <Cam02 matchData={null} />
            </div>
           
        </>
    )

}

export default Canvas01