import { io } from "../http"

// Criar o promeiro evento
io.on("connect", (socket) => {
    socket.on("client_first_acess", (params) => {
        console.log(params)
    })
})


