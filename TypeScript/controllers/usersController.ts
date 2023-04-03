import { Request, Response } from "express";
import UserModel, { UserInterface } from "../models/userModel";

export const findAllUsers =async (req:Request<UserInterface>, res: Response) => {
    const {limit ='10', skip = '0'}= req.query;
    // console.log(req.body);
    
    const result: UserInterface[] = await UserModel.find({}).limit(Number(limit)).skip(Number(skip));
    res.json(result);
}

export const findUserById =async (req:Request, res: Response) => {
    const {_id} = req.params;
    const result: UserInterface | null = await UserModel.findById(_id);
    res.json(result);
}

export const createUser = async (req: Request<UserInterface>, res: Response) => {
  const newUser  = await UserModel.create<UserInterface>(req.body);
  console.log(newUser);
  console.log(req.body);
  
  res.json(newUser);
};

export const deleteUser =async (req:Request, res:Response) => {
    const result = await UserModel.findByIdAndDelete(req.params);
    res.json(result);
}

export const updateUser = async (req:Request, res:Response) => {
    const result = await UserModel.findByIdAndUpdate(req.params,req.body, {new:true});
    res.json(result);
}