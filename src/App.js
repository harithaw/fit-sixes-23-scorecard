import Canvas01 from "./pages/Canvas01";
import React from "react";
import { useState, useEffect } from "react";
import { useRef } from 'react';

function App() {

  const wsRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [liveScore, setLiveScore] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("re ren");
  const WEB_SOCKET_URL =
    'wss://bzkg9tjte7.execute-api.ap-south-1.amazonaws.com/production';
  wsRef.current = new WebSocket(WEB_SOCKET_URL);

  wsRef.current.onopen = () => {
    const data = { action: 'sendMessage', message: 'hello server' };
    wsRef.current.send(JSON.stringify(data));
  };

  wsRef.current.onmessage = (event) => {
    console.log("Opened");
    const data = JSON.parse(event.data);
    setCount(prev=>prev+1)
    console.log(data);
    if (data.score.length > 0) {
      // setIsLoading(false);
      const liveData=data.score
      setLiveScore(liveData);
      console.log(count);
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
  },[]);

  return (
    <>
      {/* <Canvas01 /> */}
    </>
  );
}

export default App;
