
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"

// Vamos utilizar a versão 4 por usar numeros aleatorios
import { v4 as uuid } from "uuid"

// Definir as anotations que referenciam a estrutura dastabelas no SQL
@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string

    @Column()
    username: string

    @Column()
    chat: boolean

    @UpdateDateColumn()
    updated_at: Date

    @CreateDateColumn()
    created_at: Date

    // Se o if foir vazio então o id será gerado a parti do metodo uuid
    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { Setting }