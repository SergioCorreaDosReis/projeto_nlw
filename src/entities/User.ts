
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"

// Vamos utilizar a versão 4 por usar numeros aleatorios
import { v4 as uuid } from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    id: string

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date

    // Se o id for vazio então o id será gerado a partir do metodo uuid
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { User }