import socketio from 'socket.io-client'

const socket = socketio('http://192.168.1.6:3333', {
  autoConnect: false,
})


function subscripeNewDevs(subscripeFunction) {
  console.log('enviando new-dev')
  socket.on('new-dev', subscripeFunction)
}


function connect(latitude, longitude, techs) {
  console.log('conectando no socket')
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect()

}

function disconnect() {
  if (socket.connected) {
    socket.disconnect()
  }
}


export {
  connect,
  disconnect,
  subscripeNewDevs,
}