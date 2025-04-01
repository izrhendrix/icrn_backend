import mongoose, { Document, Schema, Mongoose} from "mongoose";

export interface userDoc extends Document {
    name: string,
    lastName: string,
    userName: string, 
    email: string
    address: string, 
    phone: string,
    verified: string
    role: string,
    password: string
    salt: string
}

const userSchema = new Schema({
    name: {type: String},
    lastName: {type: String},
    userName: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String},
    phone: {type: Number},
    verified: {type: String},
    role: {type: String},
    password: {type: String, required: true},
    salt: {type: String, required: true}
},  {
    toJSON: {
        transform(doc, ret){
            delete ret._id,
            delete ret.__v
        }
    }
})

const User = mongoose.model<userDoc>("user", userSchema);

export {User}
