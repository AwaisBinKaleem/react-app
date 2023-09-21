import React, { useEffect, useState } from "react";
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
const socket = io(flatURL, config.options);

const useSocketIo = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log(`connected to socket with id: ${socket.id}`);
    });

    socket.on("disconnect", (reason) => {
      console.log(`disconnected to socket: {status:"${reason}"} `);
    });

    // socket.on("connect_error", () => {
    //     // any config;
    //     socket.connect();
    //   })

  }, []);

  return socket
}

export default useSocketIo;
