import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsServices"



class SettingsControllers {
    async create(req: Request, res: Response) {
        // Desestrutura o body
        const { chat, username } = req.body

        const settingsService = new SettingsService()

        // Dentro do Try colocamos o caminho de sucesso
        try {
            const settings = await settingsService.create({ chat, username })

            /**
             * Retorna JSON com Resultado do Insert, para funcionar é necessario ir no aquivo:
             * server.ts e incluir a linh a abaixo senão o postman ou outro ferramenta não conseue gerar o retorno via JSON
             * 
             * app.use(express.json())
             */
            return res.json(settings)

            // Dentro  catch colocamos o que fazer se der erro
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }

    }
    async findByUserName(req: Request, res: Response){
        const { username } = req.params

        const settingsService = new SettingsService()
        
        const settings = await settingsService.findByUserName(username)
    
        return res.json(settings)
    }
    async update(req: Request, res: Response){
        const { username } = req.params
        const { chat } = req.body

        const settingsService = new SettingsService()
        
        const settings = await settingsService.update(username, chat)
    
        return res.json(settings)
    }


}

export { SettingsControllers }