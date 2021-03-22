## Get started

```
node-api <app-name>
```

```
cd app-name && yarn
```

Create databases
```
sequelize db:create
NODE_ENV=test sequelize db:create
```


## Generating a model

```
$ sequelize model:generate --name Book --attributes title:string
```
