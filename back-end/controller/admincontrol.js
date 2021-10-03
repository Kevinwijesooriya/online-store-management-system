const asyncHandler = require('express-async-handler');
const adUser = require('../models/admin');
const generateToken = require('../utils/generateToken');

const admin = asyncHandler( async (req ,res )=> {
    const { name,email,phone,gender,loginType,password,pic } = req.body;

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
    token: generateToken(adUser._id), 

})
}else{
    res.status(400);
   throw new Error('Error occured!');
}

});



const logadmin = asyncHandler( async (req ,res )=> {
    const {email , password} = req.body;

    const User = await adUser .findOne({email})

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
            token: generateToken(adUser._id)
        
        })
        }else{
            res.status(400);
           throw new Error('Invalid email  or password!');
        }

});


const alladmin = asyncHandler( async (req ,res )=> {
    adUser.find()
    .then(adUser => res.json(adUser))
    .catch(err => res.status(400).json('Error: ' + err));

 
});


const oneAdmin = asyncHandler( async (req ,res )=> {

    adUser.findById(req.params.id)
    .then(adUser => res.json(adUser))
    .catch(err => res.status(400).json('Error: ' + err));

 
});


const deleteAdmin = asyncHandler( async (req ,res )=> {

    adUser.findByIdAndDelete(req.params.id)
      .then(() => res.json('Admin has been removed.'))
      .catch(err => res.status(400).json('Error: ' + err));

 
});

const updateAdmin = asyncHandler( async (req ,res )=> {

    adUser.findById(req.params.id)
      .then(adUser => {
    
       adUser.name = req.body.name;
       adUser.email =  req.body.email;
       adUser.phone =  req.body.phone;
       adUser.gender  = req.body.gender;
       adUser.loginType  = req.body.loginType;
       adUser.pic  = req.body.pic ;
     

    
  
      adUser.save()
          .then(() => res.json('admin details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));

 
});


  





module.exports = {admin ,logadmin ,alladmin,updateAdmin,deleteAdmin,oneAdmin};