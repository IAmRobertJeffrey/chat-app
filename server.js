
const express = require("express")
const PORT = process.env.PORT || 3002;
const app = express()

const server = app.listen(PORT, () =>
{
	console.log("Listening on port: " + PORT);
});

const io = require("socket.io")(server, {

	cors: {
		origin: "https://roberts-chatting.web.app",
		methods: ["GET", "POST"],

	}
});

let users = []

io.on('connect', (socket) =>
{
	console.log(`client:${socket.id} connected`);
	io.to(socket.id).emit("newClient", socket.id);


	socket.on("setName", (username) =>
	{
		let clientName = username
		users.push({ id: socket.id, name: clientName })
		io.emit("distributeName", users)
	})
	socket.on("sendMessage", (message) =>
	{

		io.emit("distributeMessage", message)

	})



	socket.on('disconnect', function ()
	{
		console.log('Client disconnected.');
		users = users.filter((current) => current.id !== socket.id)
		io.emit("distributeName", users)
	});

});
