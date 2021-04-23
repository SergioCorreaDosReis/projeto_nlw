import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";


class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {
        // Verificar se Usuario Existe no banco de Dados

        const userExists = await this.usersRepository.findOne({
            email
        })
        // Se Existir, retorna o user
        if (userExists) {
            return userExists
        }
        // Se não existir , slava no BD
        const user = this.usersRepository.create({
            email
        })
        await this.usersRepository.save(user)

        return user
    }
    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });

        return user;
    }
}

export { UsersService }