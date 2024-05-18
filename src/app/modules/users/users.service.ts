import { IUser } from "./users.interface";
import User from "./users.model"

const createUser = async (user:IUser):Promise<IUser |null>=>{
   const createdUser = await User.create(user)
   if (!createdUser) {
     throw Error("User not created")
   }
   return createdUser
}

export const userService = {
    createUser
}