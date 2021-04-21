import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"


class SettingsControllers {
    async create(req: Request, res: Response) {
        // Desestrutura o body
        const { chat, username } = req.body
        const settingsRepository = getCustomRepository(SettingsRepository)

        // Criar objeto referenciando a estrutura da tabela
        const settings = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(settings)
        /**
         * Retorna JSON com Resultado do Insert, para funcionar é necessario ir no aquivo:
         * server.ts e incluir a linh a abaixo senão o postman ou outro ferramenta não conseue gerar o retorno via JSON
         * 
         * app.use(express.json())
         */
        return res.json(settings)

    }

}

export { SettingsControllers }