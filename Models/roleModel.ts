import mongoose, { Document, Schema, Mongoose} from "mongoose";

export interface roleDoc extends Document {
    name: string,
    permission: string
}