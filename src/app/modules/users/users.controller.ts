import { Request, Response } from "express";
import { IUser } from "./users.interface";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { userService } from "./users.service";



const createUser = catchAsync(
    async (req: Request, res: Response) => {
      const { user } = req.body;
      const result = await userService.createUser(user);
  
      sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully!',
        data: result,
      });
    }
  );

export const UserController = {
    createUser
}