// Create a HTTP server
import exp from 'express'
const app=exp()
const port=8080;
// port number can be anything which is not used by any other applications
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

// Create a USER API

// route to handle GET request
app.get('/users',(req,res)=>{
    // send response to client
    res.json({message:'GET request received'})
})

// route to handle POST request
app.post('/users',(req,res)=>{
    // send response to client
    res.json({message:'POST request received'})
})

// route to handle PUT request
app.put('/users',(req,res)=>{
    // send response to client
    res.json({message:'PUT request received'})
})

// route to handle DELETE request
app.delete('/users',(req,res)=>{
    // send response to client
    res.json({message:'DELETE request received'})
})
