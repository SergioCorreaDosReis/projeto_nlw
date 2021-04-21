
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

// Vamos utilizar a versão 4 por usar numeros aleatorios
import { v4 as uuid } from "uuid"

// Definir as anotations 
@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    chat: string

    @UpdateDateColumn()
    updated_at: Date

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Setting }