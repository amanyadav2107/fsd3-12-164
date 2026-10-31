#### Express
- Fast, unoponionated, minimalist web framework for nOde.js

1. Create project folder(lab5)
2.  Create two folder(frontend, backend)in root(lab5)
3. Open terminal and reach to backend by 

```
cd..
cd lab5
cd backend
```
4, type `npm init -y`
5. install nodemon `npm i nodemon -d`
6. install express `npm i express`
7. update backend/package.json
   - change type `type:"module"`
   - change script 
   ```
   script:{
    "start":"node app.js",
    "dev":"nodemon prg1.js"
   }
   ```

8. add `lab5/backend/node_modules` to .gitignore
9. create `prg1.js` in backend
10. write the script below to start expe=ress server   
    
    ```
    import express from "express";

    const app = express();

    app.get("/",(req, res)=>{
    res.send("Hello Express")
    })



    //this line must be last line 
    app.listen(4444,()=>console.log("prg1 is running at 4444"));

    ```
    
#### Static Import
    - In express we can add any static HTML pages with the help of express.static method
    - Express support middle where, when we have to execute some functions before server execution then we use middle Ware 
    app.use always apply to insert any middle Ware

