import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm"


class UsersService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository)
        // Verificar se Usuario Existe no banco de Dados

        const userExists = await usersRepository.findOne({
            email
        })
        // Se Existir, retorna o user
        if (userExists) {
            return userExists
        }
        // Se não existir , slava no BD
        const user = usersRepository.create({ 
            email
        })
        await usersRepository.save(user)
        
        return user
    }
}

export { UsersService }