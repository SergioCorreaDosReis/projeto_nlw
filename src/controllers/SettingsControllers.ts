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

        return res.json(settings)

    }

}

export { SettingsControllers }