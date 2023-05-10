const mongoose =require('mongoose');
const validateEmail=(email)=>{
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
const user_schema= new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    password:{
        type:String,
        required:true
    },
    display_name:{
        type:String,
        required:true
    },
    profile_photo:{
        type:String,
        required:false

    },
},{
    timestamps:true
});

const users = mongoose.model('users',user_schema);
module.exports=users;