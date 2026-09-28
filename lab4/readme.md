# NPM Project

1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API

### Representational State Transfer (REST)

- majorly backend server return only data not html file
- REST API uses (get, post, put, patch, delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman, thunder client, echo api etc

If App crased occur----then address already use ::: 3000 --start vs code once again 
### Get

### run "npm i"to include all the required contents
- then use npm run dev

###### Request Type
1. Get- Get all , get by id 
Get: /api/products (it shows all products at once)
Get: /api/products/101(It shows only one product whose id is 101)
2. Post- /api/products and data will be shared byu eco api body section
3. Put/Patch(patch means Little but change/update)(Put means complete change like more than 50% ): /api/products/201
4. Delete: /api/products/101

#### Exported function can be imported by other programm.