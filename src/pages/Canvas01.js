import React from "react";
import { useState, useEffect } from "react";
import { useRef } from 'react';

import Cam02 from "./Cam02.js"
import style from "../styles/camera2.module.css";

function Canvas01() {
    const wsRef = useRef(null);

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
            if (data.score.length > 0) {
                setLiveScore(data.score);
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

    return (
        <>
            {liveScore &&
                <div className={style.scoreBackgrond}>
                {liveScore?.map((match, index) => {
                    return <Cam02 matchData={match} key={index}/>
                })}
            </div>
            }

            {/* {liveScore &&
                 <Cam02 matchData={liveScore[0]} />
            } */}
        </>
    )

}

export default Canvas01