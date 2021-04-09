# extensions
A monorepo for dealing with all hdntecnologiabr's extensions used across repositories

## Publishing
Para publicar uma nova versão de cada package modificado:

- Faça as modificações em um branch própria
- Execute o comando yarn lerna:version
- Faça o push
- Abra o pull request e merge para a branch master
- Acompanhe no github o progresso e deploy para o github package registry, tendo em mente que todas as tags do github que nao existirem serão publicadas.