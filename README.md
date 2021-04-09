# extensions
A monorepo for dealing with all gymifie's extensions used across repositories

## Publishing
Para publicar uma nova versão de cada package modificado:

- Faça as modificações em um branch própria
- Faça o PR e merge com a branch master
- Faça checkout na master com o comando
```
git checkout master
```
- Execute o comando
```
yarn lerna:version
```
- O último comando fará push das tags no git
- Abra o pull request e merge para a branch master
- Acompanhe no github o progresso e deploy para o github package registry, tendo em mente que todas as tags do github que nao existirem serão publicadas.