import mongoose, {Schema} from 'mongoose';

export interface UserInterface{
    _id: {
        type: mongoose.Types.ObjectId
    }
    name: String;
    email: String;
    password: String;
}

const userSchema = new Schema<UserInterface>({});

const UserModel = mongoose.model<UserInterface>("User", userSchema);

export default UserModel;