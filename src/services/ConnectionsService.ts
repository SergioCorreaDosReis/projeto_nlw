import { getCustomRepository, Repository } from "typeorm"
import { Connection } from "../entities/Connection"
import { ConnectionsRepository } from "../repositories/ConnectionsRepository"

// Cria Interface
interface IConnectionCreate {
    // ? Quer dizer que ele e ocional
    socket_id: string
    user_id: string
    admin_id?: string
    id?: string
}
class ConnectionsService {
    // Atributo private so esta disponivel dentro da classe
    private connectionsRepository: Repository<Connection>

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository)
    }
    // Desestrutura o objeto apartir da interface
    async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
        const connection = this.connectionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        })

        await this.connectionsRepository.save(connection)

        return connection

    }
    // criar metodo fiend
    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id,
        })
        return connection
    }
}


export { ConnectionsService }