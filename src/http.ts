import express from "express"
import { createServer } from "http"
import { Server, Socket } from "socket.io"
import path from "path"

// Quando quero importar o arquivo index dentro de uma pasta nao preciso referencia-lo o java script reconhece
// quando estanciamos somente a pasta sem apontar o arquivo index
import "./database"
import { routes } from "./routes"

const app = express()

// Define onde estão os caminhos publicos, para que possam ser acessados pelo browser
app.use(express.static(path.join(__dirname, "..", "public")))
// Define diretorio de views comon public tambem
app.set("views", path.join(__dirname, "..", "public"))
// Define a engine
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

// Rota de Teste
app.get("/pages/client", (req, res) => {
    return res.render("html/client.html")
})
app.get("/pages/admin", (req, res) => {
    return res.render("html/admin.html")
})

const http = createServer(app) // Criando protocolo http
const io = new Server(http) // Criando protocolo ws WebSocket

// Primeiro acesso ao websocket é feito pelo connection, primeiro protocolo
io.on("connection", (socket: Socket) => {
    console.log("Se conectou", socket.id)
})

app.use(express.json())

app.use(routes)

export { http, io}