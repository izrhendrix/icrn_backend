import express, { Request, Response } from "express";
import { User} from "../Models/userModel";
import { generateSalt, generatePwd, comparePwds } from "../Utility/passwordChecker";



export const userSignUp =  async (req: Request, res: Response) => {
    const {userName, email, password} = req.body;

    //check to see if email already exists before signup

    const checkemail = await User.findOne({email: email});
    if(checkemail){
         res.json({message: "Email address already exists"});
         return
    }

    const saltGen = await generateSalt()
    const salt = await generatePwd(password, saltGen)

    const userCreating = await User.create({
        userName: userName,
        email: email,
        password: password,
        salt:salt
    })

    if(userCreating){
        res.json(userCreating);
        return
    }else{
         res.json("problem creating user")
         return
    }
    //res.send(userName)
} 


export const userLogin = async (req:Request, res: Response) => {
    const {email, password} = req.body;
    
    console.log(password);
    const checkemail = await User.findOne({email: email});

    console.log(checkemail);

    //check password provided against what I have in the DB
    if(checkemail){
        const validateInput = await comparePwds(password, checkemail.salt);
        //const validateInput = password === checkemail.password;
        console.log(validateInput);

        if(validateInput){
            res.status(201).json({message: "user logged in"})
            return
        }
    }
    res.status(400).json({message: "invalid login information"})
}