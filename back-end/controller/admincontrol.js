const asyncHandler = require('express-async-handler');
const adUser = require('../models/admin');
const generateToken = require('../utils/generateToken');

const admin = asyncHandler( async (req ,res )=> {
    const { name,email,phone,gender,loginType,username,password,pic } = req.body;

 const userExits = await adUser.findOne({email});

 if (userExits){
     res.status(400)
     throw new Error("Admin Already exixt");
 }

 const User = await adUser.create({

    name,
    email,
    phone,
    gender,
    loginType,
    username,
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
    username:User.username,
    password:User.password,
    pic:User.pic,
    token: generateToken(adUser._id), 

})
}else{
    res.status(400);
   throw new Error('Error occured!');
}

});



const logadmin = asyncHandler( async (req ,res )=> {
    const {username , password} = req.body;

    const User = await adUser .findOne({username})

    if (User && (await User.matchPassword(password))){
        res.json({
        
            _id:User._id,
            name:User.name,
            email:User.email,
            phone:User.phone,
            gender:User.gender,
            loginType:User.loginType,
            username:User.username,
            password:User.password,
            pic:User.pic,
            token: generateToken(adUser._id)
        
        })
        }else{
            res.status(400);
           throw new Error('Invalid email  or password!');
        }

});

module.exports = {admin ,logadmin};