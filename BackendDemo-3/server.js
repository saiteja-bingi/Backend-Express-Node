import exp from 'express';
import userApp from './routes/userAPI.js';
import productApp from './routes/productAPI.js';

const app=exp()
const port=8080

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

// add body parser middleware to handle JSON data
app.use(exp.json())

// forward req to specific API
// if path starts with /user-api forward to userAPi
app.use('/user-api',userApp)
// if path starts with /product-api forward to productAPi
app.use('/product-api',productApp)
