import { Request } from 'express';
import { ApiServiceResponse } from '../../@types/apiServiceResponse';
import { IUser } from '../../models/interfaces/IUser';
import { IContact } from '../../models/interfaces/IContact';
import { IUserContract } from '../../models/interfaces/IUserContact';

export default interface IUserService {
     createUser: (createUserRequest: IUserContract) => Promise<ApiServiceResponse>;
     isEmailExists: (email: string) => Promise<ApiServiceResponse>;
     getUserById: (id: number) => Promise<IUser>;
     changePassword: (req: Request) => Promise<ApiServiceResponse>;
}
