module.exports = (server) => {
    const
        io = require('socket.io')(server),
        moment = require('moment')

    let searches = []

    // when the page is loaded in the browser the connection event is fired
    io.on('connection', socket => {

        // on making a connection - load in the content already present on the server
        socket.emit('refresh-searches', searches)

        socket.on('add-search', search => {

            searches.push(search)
            io.emit('refresh-searches', searches)

        })

    })



    return io
}
