const User = require("../../models/user-model");
const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const auth = require("../../middleware/auth");
const { use } = require("bcrypt/promises");
const jwt = require("jsonwebtoken");
const axios = require('axios');


let body;
let email
var user = "";



const registration = async (req, res) => {

    if (req.body) {
        body = req.body;
        email = body.email;


        const existingUser = await User.findOne({ email })

        // console.log(exports.get)

        const token = jwt.sign(
            {
                user_id: user._id, email
            },
            process.env.JWT_KEY,
            {
                expiresIn: "2h",
            }

        );

        

        if (existingUser) {
            existingUser.token = token;
            const validatePassword = await bcrypt.compare(body.password, existingUser.password);
            if (validatePassword) {
                res.status(200).json({ message: "Valid password", token:existingUser.token });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            sendOtp(email).then(data => {


                if (data.includes('Message has been sent successfully')) {
                    console.log('includes');

                    res.status(200).json({ message: "OTP Sent" }).end;
                }
                else{
                    res.status(400).json({ message: "Failed to send OTP" }).end;

                }

            })


        }
    }
}



var otp;

const generateOtp = async => {
    otp = Math.random();
    otp = Math.floor(otp*899999 + 100000)
    console.log(otp);
}



const sendOtp = async (email) => {
    generateOtp();

    const url = 'https://dinuka.info/bixchat/bixchat-email.php?to=' + email + '&sub=otp verification&msg=please use this OTP ' + otp + '&host=mail.bixchat.xyz&from=notes@bixchat.xyz&psw=LakeRoad@123';

    const promise = axios.get(url)

    const dataPromise = promise.then((response) => response.data)

    return dataPromise;

}

const verify = async (req, res) => {

    if (req.body.otp == otp) {
        otp === '';
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
                res.status(200).send({ message: 'Registration Successfull', token:user.token});
                otp = '';
                
            }
            )
            .catch((error) => {
                res.status(500).send({ error: error.message })
            })
    }
    else {
        res.status(500).send({ message: 'OTP incorrect' })
    }



}




module.exports = {
    registration,
    sendOtp,
    verify
}