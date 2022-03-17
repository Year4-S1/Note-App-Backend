const User = require("../../models/user-model");
const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const auth = require("../../middleware/auth");
const { use } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");
const https = require('https');


let body;
let email
var user = "";



const registration = async(req, res) => {

    if (req.body) {
        body = req.body;
        email = body.email;


        const existingUser = await User.findOne({ email })

        // console.log(exports.get)


        if (existingUser) {
            const validatePassword = await bcrypt.compare(body.password, existingUser.password);
            if (validatePassword) {
                res.status(200).json({ message: "Valid password" });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            sendOtp(email);
            res.status(200).json({ message: "OTP Sent" });


        }
    }
}



var otp;

const generateOtp = async => {
    otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    console.log(otp);
}



const sendOtp = async (email) => {
    generateOtp();

    https.get('https://dinuka.info/bixchat/bixchat-email.php?to=' + email + '&sub=otp verification&msg=please use this OTP ' + otp + '&host=mail.bixchat.xyz&from=notes@bixchat.xyz&psw=LakeRoad@123', (resp) => {
        let data = '';

        

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;


        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {

            if (data.includes('Message has been sent successfully')) {
                console.log("Email sent");
            }
            else{
                return(resp.statusCode);
            }


        });
        

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

}

const verify = async (req,res) => {
    
        if(req.body.otp==otp){
                otp==='';
            user = new User(body);
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);

            const token = jwt.sign(
                {
                    user_id: user._id, email
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "2h",
                }

            );


            user.token = token;

            await user
                .save()
                .then((data) => {
                    res.status(200).send({ message: 'Registration Successfull' });
                    otp = '';
                }
                )
                .catch((error) => {
                    res.status(500).send({ error: error.message })
                })
        }
        else{
            res.status(500).send({ message: 'OTP incorrect' })
        }

        
 
}




module.exports = {
    registration,
    sendOtp,
    verify
}