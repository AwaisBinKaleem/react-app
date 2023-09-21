import React, { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
const config = {
  host: "ws://localhost",
  port: "5000",
  options: {
    path: "/socket/socket.io",
    // transports : ["websocket", "polling"],
    // extraHeaders: {
    //     "Access-Control-Allow-Originr": "*"
    //   }
  },
};
const flatURL = `${config.host}/${config.port}`;

const useSocketIo = () => {
  const socket = useMemo(() => {
    return io(flatURL, config.options);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("disconnect", (reason) => {
      console.log(socket.id);
    });

    // socket.on("connect_error", () => {
    //     // any config;
    //     socket.connect();
    //   })

  }, []);

  return {
    socket
  };
}

export default useSocketIo;
