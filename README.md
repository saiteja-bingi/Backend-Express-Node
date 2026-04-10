# Backend - Express - Node

## Steps to create backend using NodeJS

### 1. Generate package.json
```
npm init -y
```

### 2. Install and import express module
```
npm install express
```

### 3. Create HTTP server
- Change type in package.json from `commonjs` to `module`
- Assign port number

### 4. Create API (Application Programming Interface)
- API is a set of rules that allows different software applications to communicate with each other.

#### API contains routes:

Syntax:
app.get('path', req handler)
app.post('path', req handler)
app.put('path', req handler)
app.delete('path', req handler)

### 5. Prepare Client Request using REST client or Postman
- Create a file which acts like React  
- It must contain requests  

### 6. Install nodemon
```
npm install -g nodemon
```

- Nodemon helps to restart the server automatically when we make changes in the code  
- We don't have to restart the server manually  
```
nodemon server.js
```

### Notes
- Don't make changes while nodemon is running

- Add body parser middleware to handle JSON data
app.use(express.json())


### Middlewares
middleware is a function that is called before the request handler

#### why it is used?
- to validate the request
- to modify the request
- to send the response

#### Syntax
app.use(middleware)

#### Example
```
app.use((req,res,next)=>{
    console.log("Middleware")
    next()
})
```

### two types of middleware
1. custom middleware
2. inbuilt middleware

#### custom middleware(Application-level middleware)
```
app.use((req,res,next)=>{
    console.log("Middleware")
    next()
})
```

#### inbuilt middleware
```
app.use(express.json())
```

### using middlware
// use middleware1 for all get req
// route level middleware
```
app.get('/users', middleware1, (req, res) => {
    res.json({message:"All users", payload: users})
})
```

// application level middleware
```
app.use(middleware1) // use middleware1 for all req
```