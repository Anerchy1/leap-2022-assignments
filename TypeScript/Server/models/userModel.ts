import mongoose, {Document, Schema, Types} from 'mongoose';

export interface UserInterface extends Document<Types.ObjectId> {
    name: String;
    email: String;
    password: String;
}

const userSchema = new Schema<UserInterface>({name: {type: String, required: true}, email: {type: String, required: true, unique: true}, password: {type: String, required: true},});

const UserModel = mongoose.model<UserInterface>("User", userSchema);

export default UserModel;