import { io } from "../http"
import { ConnectionsService } from "../services/ConnectionsService"
import { UsersService } from "../services/UsersService"
import { MessagesService } from "../services/MessagesService"


io.on("connect", async (socket) => {
    const connectionsService = new ConnectionsService()
    const messagesService = new MessagesService()

    // listagem de usuarios sem conexão
    const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin()

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin)

    // quando tem retorno dentro de uma função utiliza-se o callback
    socket.on("admin_list_messages_by_user", async (params, callback) => {
        const { user_id } = params

        const allMessages = await messagesService.listByUser(user_id)

        callback(allMessages)
    })

    socket.on("admin_send_message", async (params) => {
        const { user_id, text } = params

        await messagesService.create({
            text,
            user_id,
            admin_id: socket.id
        })

        const { socket_id } = await connectionsService.findByUserId(user_id)

        // Envia evento de envio de mensagem para usuario
        io.to(socket_id).emit("admin_send_to_client", {
            text,
            socket_id: socket.id
        })
    })
})