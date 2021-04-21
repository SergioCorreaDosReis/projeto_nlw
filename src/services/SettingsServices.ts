import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"


interface ISettingsCreate {
    chat: boolean
    username: string
}

class SettingsService {
    async create({ chat, username }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository)

        //  similar a SELECT * FROM SETTINGS WHERE USERNAME ="USERNAME" LIMIT 1
        const userAlreadyExists = await settingsRepository.findOne({
            username
        })

        if (userAlreadyExists){
            throw new Error("User Already Exists in the Data Base")

        }

        // Criar objeto referenciando a estrutura da tabela
        const settings = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(settings)

        return settings
    }
}

export { SettingsService }