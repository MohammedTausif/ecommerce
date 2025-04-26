const signIn =async (req, res)=>{

    const {username, password} = req.body;

  const existingUser =  userModel.find({username})

  if(!existingUser){
    return res.status(403).json({
        message: "Invalid Username or User DOesn't Exist"
    })
  }
  else if (existingUser){
    const passwordMatch = userModel.find({password})
    if(!passwordMatch){
        return res.status(403).json({
            message: "Wrong Password"
        })
    }
    const token = "Random";
    res.json({
        message: "Successfully Signed In"
    })
  }



}

const SignUp = async(req, res)=>{
 const {username, password, firstName} = req.body;
 const existingUser = userModel.find({username})

 if(existingUser){
    return res.json({
        message: "User with this username already exist "
    })

    const CreateUser = userModel.create ({
        username,
        password,
        firstName
    })
    res.json({
        message: "user craeted ",
        res: CreateUser.firstName
    })
 }
}