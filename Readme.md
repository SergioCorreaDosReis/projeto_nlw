## 💻 Projeto

Esse projeto é minha versão pessoal da semana NLW 5ª Edição, é uma aplicação backend de Chat de mensgame instanea utilizando WebSocket para realizar comunicação


## 🚀 Tecnologias
Esse repositorio é minha versão de estudo pessoal da maratona Discover 2 da Rocket Seat!

Nesse projeto utilizei as tecnologias 
- NodeJs
- JavaScript
- TypeScript
- TypeORM
- SQLite


## Como reproduzir o projeto
`*EM DESENVOLVIMENTO...quando finalizar o projeto atualizo com os comandos necessarios!`


É necessario ter NodeJs instalado na maquina no caso utilizei a versão `v15.12.0`.



# Help de construção do projeto  Step By Step

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

Comando para executar a migrations / Ou seja criar as tabelas e estruturas de banco caso nao existam
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

Iniciar Projeto
```
yarn dev
```

### Mapear entidades dentro o ormconfig.json
`"entities": ["./src/entities/**.ts"],`

Comando para criar migrations Users
```
yarn typeorm migration:create -n CreateUsers
```

Executa denovo comando para criar migrations para criar nova migrations
```
yarn typeorm migration:run
```

Comando para criar migrations Messages
```
yarn typeorm migration:create -n CreateMessages
```

## WS - WebSocket
Socket.IO é uma biblioteca JavaScript para aplicativos da web em tempo real. 

Permite comunicação bidirecional em tempo real entre clientes e servidores da Web. 

Ele tem duas partes: uma biblioteca do lado do cliente que é executada no navegador e uma biblioteca do lado do servidor para o Node.js.

Fonte: `Wikipedia`

Para instalar a biblioteca socket.io
```
yarn add socket.io
```
Instalar as tipagens do socket.io como dependencias de Desenvolvimento:
```
yarn add @types/socket.io -D
```
Instalar modulo EJS
```
yarn add ejs