import express from "express"

const app = express()

/** METODODS QUE VAMOS UTILIZAR NO PROJETO
 *  GET     - Buscas
 *  POST    - Criação 
 *  PUT     - Alteração
 *  DELETE  - Deleta
 *  PATCH   - Altera uma informação especifica
 */

// Criando rota de GET 
app.get("/",(req,res) => {
    // return res.send("Ola NLW 05")
    return res.json({
        message:"Ola NLW 05"
    })
})

app.post("/users", (req,res) => {
    return res.json({
        message: "Usuario salvo com sucesso!👍😁"
    })
})



app.listen(3333, () => {console.log("Server is running on port 3333")})

