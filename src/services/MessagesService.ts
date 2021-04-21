import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepository";

// Cria Interface
interface IMessagesCreate {
    // ? Quer dizer que ele e ocional
    admin_id?: string
    text: string
    user_id: string
}

class MessagesService {
    // Desestrutura o objeto apartir da interface
    async create({admin_id, text, user_id}: IMessagesCreate) {
        const messagesRepository = getCustomRepository(MessagesRepository)

        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        })
        await messagesRepository.save(message)

        return message
    }
}

export { MessagesService }