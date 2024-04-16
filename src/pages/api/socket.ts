import { Server } from "Socket.IO";
import { createClient } from "@/utils/supabase/server";

const handleUpdates = (payload: any, socket: any) => {
  socket.emit("data", payload.new);
};

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
    console.log(res.socket.server.io.engine.clientsCount);
  } else {
    console.log("Socket is initializing");
    const supabase = createClient();
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    supabase
      .channel("Test")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "Test" },
        (payload) => {
          handleUpdates(payload, io);
        }
      )
      .subscribe();

    // Handle connections/disconnections
    io.on("connection", (socket) => {
      // First user joins a channel that is empty -> Subsribe to realtime db
      if (supabase.getChannels().length === 0) {
        console.log("resubscribe to supabase");
        supabase
          .channel("Test")
          .on(
            "postgres_changes",
            { event: "UPDATE", schema: "public", table: "Test" },
            (payload) => {
              handleUpdates(payload, io);
            }
          )
          .subscribe();
      }

      socket.join("asd");

      socket.on("disconnect", async () => {
        console.log("disconnected client");
        const sockets = await io.in("asd").fetchSockets();

        // Last user -> Leave from realtime db
        if (sockets.length === 0) {
          supabase.removeAllChannels();
        }
      });
    });
  }
  res.end();
};

export default SocketHandler;
