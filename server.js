
const io = require("socket.io")(3002, {
	cors: {
		origin: "http://localhost:3000"
	}
});

io.on('connect', (socket) =>
{
	console.log(`client:${socket.id} connected`);

	socket.on("sendMessage", (message) =>
	{
		socket.broadcast.emit("distributeMessage", message)
	})
	socket.on('disconnect', function ()
	{
		console.log('Client disconnected.');
	});

});

