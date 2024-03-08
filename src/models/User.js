import { Schema, model } from "mongoose";

export const UserSchema = new Schema(
    {
        name: {
            type: String,
            require: false
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            enum: ["user", "admin", "super_admin"],
            default: "user"
        },
        favouriteBooks: [ //Relacion. Va dentro de un array porque hay muchos libros favoritos
            {
                type: Schema.Types.ObjectId,
                ref: 'Book'
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)

export default User