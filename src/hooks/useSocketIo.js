import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";
const config = {
  host: "http://localhost",
  port: "5000",
  options: {
    path: "/socket/",
    // transports : ["websocket", "polling"],
    // extraHeaders: {
    //     "Access-Control-Allow-Originr": "*"
    //   }
  },
};
const flatURL = `${config.host}:${config.port}`;
// const socket = io(flatURL, config.options);

const useSocketIo = () => {
  const socket = useRef(null);
  useEffect(() => {
    socket.current = io(flatURL, config.options);
    socket.current.on("connect", () => {
      console.log(`connected to socket with id: ${socket.current.id}`);
    });

    socket.current.on("disconnect", (reason) => {
      console.log(`disconnected to socket: {status:"${reason}"} `);
    });

    // socket.current.on("connect_error", () => {
    //     // any config;
    //     socket.current.connect();
    //   })

    return () => {
      socket.current.disconnect();
    }
  }, []);

  return socket.current
}

export default useSocketIo;
