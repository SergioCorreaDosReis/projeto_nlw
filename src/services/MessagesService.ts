import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

// Cria Interface
interface IMessagesCreate {
    // ? Quer dizer que ele e ocional
    admin_id?: string
    text: string
    user_id: string
}

class MessagesService {
    // Atributo private so esta disponivel dentro da classe
    private messagesRepository: Repository<Message>

    constructor(){
    this.messagesRepository = getCustomRepository(MessagesRepository)        
    }

    

    // Desestrutura o objeto apartir da interface
    async create({admin_id, text, user_id}: IMessagesCreate) {
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })
        await this.messagesRepository.save(message)

        return message
    }
    // Buscar todas as mensagens do usuario
    async listByUser(user_id: string){
        // Ao contratio de .finOne o .fin retorna uma lista e não um unico item
        const list = await this.messagesRepository.find({
            where: {user_id},
            // relation passa o qual relacionamento dentro do entity[Message.ts] 
            // que deseja trazer as informações no entidade user, parecido com JOIN SQL 
            relations: ["user"]
        })
        return list
    }
}

export { MessagesService }