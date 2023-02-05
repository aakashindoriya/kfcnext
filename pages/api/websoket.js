import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('Socket.IO starting')
    const io = new Server(res.socket.server)
    io.on('connection', (socket) => {
      console.log('Socket.IO connected')
      socket.on('disconnect', () => {
        console.log('Socket.IO disconnected')
      })
      
      socket.on('response', (data) => {
        console.log('data' , 'jknjn')
      } )
      socket.on('message', msg => {
        socket.broadcast.emit('order', msg)
        console.log('data' , msg)
      })
    })
    res.socket.server.io = io
  }
  res.end()
}

export default SocketHandler