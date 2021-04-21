
import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

// Vamos utilizar a versão 4 por usar numeros aleatorios
import { v4 as uuid } from "uuid"

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string

    @Column()
    admin_id: string

    @Column()
    text: string

    // Importa usuario comk join com coluna user_id
    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: User

    @Column()
    user_id: string


    @CreateDateColumn()
    created_at: Date

    // Se o id for vazio então o id será gerado a partir do metodo uuid
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}


export { Message }

