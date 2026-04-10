//Module

function checkForUser(id){
    console.log("Checking for users")
    if(id==100) return "Yes"
    else return "No"
}

function registerUser(){
    console.log("Registering user")
}
// module.exports={
//     checkForUser,
//     registerUser
// }

export default {checkForUser,registerUser}