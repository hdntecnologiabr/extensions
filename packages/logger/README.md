# `logger`

Módulo usado para logs da aplicação

## Usage backend

```
import log from '@hdn/logger');
log.info('message')
```

## Usage frontend
![image](https://user-images.githubusercontent.com/11022437/83800772-67748100-a67e-11ea-9aa8-d34c5388099f.png)
![browserErrors](https://user-images.githubusercontent.com/11022437/83800810-74917000-a67e-11ea-8495-c45629a26599.gif)

## Variáveis de Ambiente
NODE_END(default = development) -> usado para o formato do log (json para production e color para outros ambientes)
LOG_LEVEL(default = silly) -> usado para identificar qual nível de mensagem logar

## Levels
- silly -> debug on frontend (equals console.debug on browser)
- info
- warn
- error

## TODO
[] Make dynamic import for frontent or node based on client environment
