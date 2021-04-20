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