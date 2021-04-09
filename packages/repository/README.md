# Repository

Módulo usado para conectar o mongoose ao projeto

## Environment Variables

DATABASE_USER || ''  
DATABASE_PASS || ''  
DATABASE_HOST || '127.0.0.1'  
DATABASE_PORT || '27017'  
DATABASE_NAME || 'gymifie'  
DATABASE_SRV  || false

## Usage
```
import repository from '@hdn/repository'

repository.start()
  .then(() => {
    log.info('Connected to db')
  })
  .catch(e => {
    log.info(`Error connecting to db: ${e}`)
  })
```