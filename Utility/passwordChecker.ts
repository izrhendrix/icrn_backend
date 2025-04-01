import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request } from 'express'

//generating salt
export const generateSalt = async () => {
    return await bcrypt.genSalt()
}

//helps to encrypt the password the user provides
export const generatePwd = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt)
}

//need a way to compare the passwords
// Compare passwords correctly
export const comparePwds = async (
    enteredPassword: string, 
    savedPassword: string,
) => {
    // Use bcrypt's built-in compare method instead of manually hashing
    return await bcrypt.compare(enteredPassword, savedPassword)
}
 
//should be enough of a starting point