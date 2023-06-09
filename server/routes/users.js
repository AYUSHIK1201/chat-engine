const express = require('express');
const Router = express.Router();
Router.use(express.json());
Router.use(express.urlencoded({extended:false}));
const user = require('../models/userschema');
const multer = require('multer');
const bcrypt = require('bcrypt');
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads');
    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toISOString().replace(/[-T:\.Z]/g, "") + file.originalname);
    }
});

const upload=multer({storage:storage});


Router.route('/userslogin')
.post((req,res)=>{
    user.findOne({email:req.body.Email}).then((result)=>{
        if(!result){
             res.status(204).json({"status":"NO such user exists"})
        }
        else{
            bcrypt.compare(req.body.Password,result.password,(err,flag)=>{
                if(!flag){
                    res.status(401).json({"status":"Invalid credentials"});
                }
                else{
                    res.status(200).json({"status":"Login success","userinfo":result});
                }

            })
        }
    })
    

})
Router.route('/register')
.post(upload.single('userImage'), async (req,res)=>{
    try{
        await user.create({
            email:req.body.email,
            password:await bcrypt.hash(req.body.password,10),
            display_name:req.body.name,
            profile_photo:req.file.path
        })
        res.status(200).json({"status":"record inserted"});


    }catch(err){
       res.status(400).json({"status":"some error"});
    }
   
    

    

})


module.exports = Router;