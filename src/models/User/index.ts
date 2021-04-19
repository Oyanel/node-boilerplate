import { Schema, model, Model } from "mongoose";
import { validatePassword, validateUsername } from "./validate";
import { IUser } from "./IUser";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            validate: { validator: validateUsername, msg: "Invalid username" },
        },
        password: {
            type: String,
            unique: true,
            validate: { validator: validatePassword, msg: "Invalid password" },
        },
    },
    { timestamps: true }
);

export const User: Model<IUser> = model("User", UserSchema);
