import { Router } from "express"
import { SettingsControllers } from "./controllers/SettingsControllers"
import { UsersController} from "./controllers/UsersController"

const routes = Router()

const settingsControllers = new SettingsControllers()

const usersController = new UsersController()

routes.post("/settings",settingsControllers.create)

routes.post("/users", usersController.create)

export { routes }
