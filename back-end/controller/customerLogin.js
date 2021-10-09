const asyncHandler = require('express-async-handler');
const cusUser = require('../models/customer');
const generateToken = require('../utils/generateToken');


const customer = asyncHandler( async (req ,res )=> {
    const { name,email,phone,gender,loginType,password,pic } = req.body;

 const userExits = await cusUser.findOne({email});

 if (userExits){
     res.status(400)
     throw new Error("Customer Already exixt");
 }

 const User = await cusUser.create({

    name,
    email,
    phone,
    gender,
    loginType,
    password,
    pic,


 })



 if (User){
res.status(201).json({

    _id:User._id,
    name:User.name,
    email:User.email,
    phone:User.phone,
    gender:User.gender,
    loginType:User.loginType,
    password:User.password,
    pic:User.pic,
    token: generateToken(cusUser._id), 

})
}else{
    res.status(400);
   throw new Error('Error occured!');
}

});



const logcustomer = asyncHandler( async (req ,res )=> {
    const {email , password} = req.body;

    const User = await cusUser.findOne({email})

    if (User && (await User.matchPassword(password))){
        res.json({
        
            _id:User._id,
            name:User.name,
            email:User.email,
            phone:User.phone,
            gender:User.gender,
            loginType:User.loginType,
            password:User.password,
            pic:User.pic,
            token: generateToken(cusUser._id)
        
        })
        }else{
            res.status(400);
           throw new Error('Invalid email  or password!');
        }

});

const updateUserProfile = asyncHandler( async (req ,res )=> {
      const user = await cusUser.findById(req.user.id);

if(user){

    user.name = req.body.name || user.name;
    user.email =  req.body.email || user.email;
    user.phone =  req.body.phone || user.phone;
    user.gender  = req.body.gender || user.gender;
    user.loginType  = req.body.loginType || user.loginType;
    user.pic  = req.body.pic || user.pic;

    if (req.body.password){
        user.password  = req.body.password;

    }
    const udateUser = await user.save();

    res.json({

        _id:udateUser._id,
        name:udateUser.name,
        email:udateUser.email,
        phone:udateUser.phone,
        gender:udateUser.gender,
        loginType:udateUser.loginType,
        password:udateUser.password,
        pic:udateUser.pic,
        token: generateToken(udateUser._id),

    });

}else
{
  res.status(404);
  throw new Error ("User not found");

}

});
module.exports = {customer ,logcustomer, updateUserProfile };