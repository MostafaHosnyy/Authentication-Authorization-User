const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
const {auth, isUser,isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);


router.get("/user", auth, isUser, (req,res) => { 
    res.json({
        success:true,
        message:'Welcome to the Protected route for Users',
    });
} );

router.get("/admin", auth, isAdmin, (req,res) => {
    res.json({
        success:true,
        message:'Welcome to the Protected route for Admin',
    });
});


module.exports = router;