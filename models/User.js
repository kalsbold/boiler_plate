const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{//사용자 이름.
        type:String,
        maxlength:50
    },
    email:{//이메일 아이디.
        type:String,
        trim:true,
        unique:1
    },
    lastname:{//성.
        type:String,
        maxlength:50
    },
    role:{//역할 : 0-일반유저 1-관리자 등등등.
        type:Number,
        default:0
    },
    image:String, //프로필사진
    token:{ //유효성토큰
        type:String
    },
    tokenExp:{//토큰 유효기간.
        type:Number
    }

}) 

const User = mongoose.model('User',userSchema)

module.exports = {User}