// const reg=require('./Registration')

import reg from './Registration.js'
function myFunc(){
    console.log("Hello world")
}
myFunc()
let ans=reg.checkForUser(101)
console.log(ans)
reg.registerUser()