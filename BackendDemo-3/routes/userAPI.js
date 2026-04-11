import exp from 'express';

const userApp = exp.Router();

let users=[]

// route to handle get req
userApp.get('/users',(req,res)=>{
    // get users and send res
    res.json({message:"All users",payload:users})
})

// route to send a uesr by id
userApp.get('/users/:id',(req,res)=>{
    // get user by id and send res

    // req.params is used to get the parameters from the request
    // req.params is an object
    // params.id is string  convert into number
    const id=Number(req.params.id)
    const user=users.find(user=>user.id===id)
    if(user!=undefined){
        res.json({message:"User found",payload:user})
    }else{
        res.json({message:"User not found"})
    }
})

// route to handle post req
userApp.post("/user",(req,res)=>{
    // get user from req
    const user=req.body
    // add user to users
    users.push(user)
    // send res
    res.json({message:"User added"})
})

// route to handle put req
userApp.put('/user',(req,res)=>{
    // get modified user from client
    let modUser=req.body
    // get index of user
    let index=users.findIndex(user=>user.id===modUser.id)
    // update user
    users[index]=modUser
    // send res
    res.json({message:"User updated"})
})

// route to handle delete req
userApp.delete('/user',(req,res)=>{
    // get user id from client
    let id=req.body.id
    // remove user from users
    let index=users.findIndex(user=>user.id===id)
    if(index!=-1){
        users.splice(index,1)
        res.json({message:"User deleted"})
    }else{
        res.json({message:"User not found"})
    }
})

export default userApp;

// splice(x,y,z)
// x is index
// y is number of elements to remove
// z is element to add
