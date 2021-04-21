# Help de inicialização de Projeto

Criando package.json
```
npm init -v
```

Instalando Servidor Express
```
npm add express
```

Instala dependencias de desenvolvimento
```
npm i --save-dev @types/express
```

## TypeScript somente será utilizado no ambiente de desenvolvimento

Adicionando TypeScript como dependencia de desenvolvimento 
```
npm add typescript -D
```

Para criar o arquivo de configuração do typescript (tsconfig.json)
```
yarn tsc --init
ou
npx tsc --init
```

Entrar no arquivo tsconfig.json e alterar a configuração "strict" para false, para retirar a verificação adicional na aplicação
```
"strict": false,  
```

Instalar tradutor para node biblioteca (ts-node-dev)
```
yarn add ts-node-dev -D
```

Comando para incluir dependencias de desenvolviment
```
yarn add ts-node-dev -D
```

Para executar o programador execute
```
yarn dev
``` 

## KNEX.JS - Um construtor de Query SQL para Javascripts
Compativel com diversos tipos de BDs

Intalar o KNEX.JS
```
npm install knex --save
```

# Installation
Install the npm package:
```
npm install typeorm --save
```
You need to install reflect-metadata shim:
```
npm install reflect-metadata --save
```
and import it somewhere in the global place of your app (for example in app.ts):
```
import "reflect-metadata";
```
You may need to install node typings:
```
npm install @types/node --save-dev
```
Install a database driver:
for SQLite
```
npm install sqlite3 --save
```

# Migrations
As migrations são basicamente um genrenciamento um historico de tudo que esta sendo criada relacionada ao Banco de Dados.

Por exemplo estruturas de tabelas, fluxo de cadastros etc.

Importante dentro do arquivo ```ormconfig.json```  na parte "migrations": 

Deve colocar o conteúdo dento de [] senão ele cria o migrations na raiz do diretório `./`
```json
{...
    "migrations": ["./src/database/migrations/**.ts"],
...
}
```

Comando para criar migrations Settings
```
yarn typeorm migration:create -n CreateSettings
```

Comando para executar a migrations
```
yarn typeorm migration:run
```

Comando para executar a migrations
```
yarn typeorm migration:revert
```
## Iniciar  a migration, ou seja criar as tabelas
```yarn
 yarn typeorm migration:run
 ```

Entrar dentro de arquivo `tsconfig.json` e descomentar os trechos:
/* Experimental Options */
```
"experimentalDecorators": true, 
"emitDecoratorMetadata": true,  
 ```

 Configurar o uuid pelo projeto
```
yarn add uuid
```
Como essa biblioteca tem tipagens, devo adicionar como depencia de desenvolvimento
```
yarn add @types/uuid -D
```

### Mapear entidades dentro o ormconfig.json

