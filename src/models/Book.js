import { Schema, model } from "mongoose";

export const BookSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true,
        },
        author: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Book = model('Book', BookSchema)

export default Book