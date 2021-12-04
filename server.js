
const io = require("socket.io")(3002, {
	cors: {
		origin: "http://localhost:3000"
	}
});

let messages = []

io.on('connect', (socket) =>
{
	console.log(`client:${socket.id} connected`);

	socket.on("sendMessage", (message) =>
	{
		messages.push(message)
		console.log(messages);
		io.emit("distributeMessage", message)

	})

	socket.on("fetchMessages", () =>
	{
		io.emit("sendMessages", messages)
	})

	socket.on('disconnect', function ()
	{
		console.log('Client disconnected.');
	});

});

