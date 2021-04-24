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
        const { user_id } =  params

        const allMessages = await messagesService.listByUser(user_id)

        callback(allMessages)
    })
})