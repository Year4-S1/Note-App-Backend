
const User = require("../../models/user-model");
const express = require("express");
const bcrypt = require("bcrypt");
const { json } = require("express/lib/response");

const editPassword = async (req, res) => {

    const token = req.body.token;

    let password = req.body.newPassword;

    console.log(req.body);

    const user = await User.findOne({ token });

    const validatePassword = await bcrypt.compare(req.body.oldPassword, user.password);

    console.log(validatePassword);


    if (validatePassword) {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        User.findOneAndUpdate({ token: req.body.token }, { $set: { password: password } }, { upsert: false }, function (err, result) {
            if (err) {
                res.send(500, body)
            }
            else {
                res.send(200, result);
            }
        });
    }

    else{
        res.status(500).json({ message: "Passwords doesn't match"});

    }
    // await User.findOne({token:req.body.token})
    //     .then((data) => {
    //         res.status(200).send({ data: data });
    //     })
    //     .catch((error) => {
    //         res.status(500).send({ error: error.message });
    //     });


    // await User.findOneAndUpdate(
    //     { token: req.body.token },
    //     {
    //       $set: {
    //         //userId: req.body.userId,
    //         password: req.body.password,
    //         //categoryColor: req.body.categoryColor,
    //       },
    //     }
    //     //{ upsert: true }
    //   )
    //     .then((data) => {
    //       res.status(200).send({ data: data });
    //     })
    //     .catch((error) => {
    //       res.status(500).send({ error: error.message });
    //     });


}

module.exports = {
    editPassword
}