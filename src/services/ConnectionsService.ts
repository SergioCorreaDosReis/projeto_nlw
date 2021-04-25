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
    // retorna todos os usuarios sem administrador ou seja que ainda não foram atendidos
    async findAllWithoutAdmin() {
        const connections = await this.connectionsRepository.find({
            where: { admin_id: null } ,
            relations: ["user"],
        })
        return connections
    }
    // retorna a conexão por socket_id
    async findBySocketId(socket_id: string) {
        const connection = await this.connectionsRepository.findOne({ 
            socket_id
        })

        return connection
    }

    async updateAdminID(user_id: string, admin_id: string) {
            await this.connectionsRepository.createQueryBuilder().
                update(Connection)
                .set({ admin_id })
                .where("user_id = :user_id", { user_id })
                .execute()
    }
}


export { ConnectionsService }