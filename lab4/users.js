//We use in memory database
let users =[
    {id:1,name:'Aman Yadav', mob:'46545xxxxx', email:'aman.example@gmail.com'},
    {id:1,name:'AmeyYadav', mob:'46885xxxxx', email:'amey.example@gmail.com'},
]

let nextId =3;

export const getUsers =() => users; //export is used to import somewhere else

export const addUser =(user)=>{
    user.id =nextId++;
    users.push(user);
    return user;
};