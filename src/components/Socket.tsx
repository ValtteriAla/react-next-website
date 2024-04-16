import { useEffect, useState } from 'react';
import io from "socket.io-client"

type Payload = {
    page_visit_count: number
  };
  

export default function Socket() {
    let socket;
    const [data, setData] = useState<Payload>()
    useEffect(() => { 
        const connection = initSocket()
        return () => {
            console.log("closed connection")
            connection.close();
          };

    }, [])
    
    const initSocket = () => {
      
      fetch('/api/socket')
      socket = io()
    

      socket.on('connect', () => {
        console.log('connected')
      })

      socket.on("data", (data: any) => {
        console.log("received data, ", data)
        setData(data)
      })

      return socket
    }

    return (<div>{data && (data.page_visit_count)}</div>)
}
