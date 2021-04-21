import { Router } from "express"
import { SettingsControllers } from "./controllers/SettingsControllers"
import { UsersController} from "./controllers/UsersController"
import { MessagesController} from "./controllers/MessagesController"

const routes = Router()

const settingsControllers = new SettingsControllers()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings",settingsControllers.create)
routes.post("/users", usersController.create)
routes.post("/messages", messagesController.create)

export { routes }
