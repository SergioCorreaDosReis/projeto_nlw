import express from "express"

// Quando quero importar o arquivo index dentro de uma pasta nao preciso referencia-lo o java script reconhece
// quando estanciamos somente a pasta sem apontar o arquivo index
import "./database"

import { routes } from "./routes"


const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => { console.log("Server is running on port 3333") })

