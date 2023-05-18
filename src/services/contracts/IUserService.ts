import { Request } from 'express';
import { ApiServiceResponse } from '../../@types/apiServiceResponse';
import { IUser } from '../../models/interfaces/IUser';
import { IRegisterRequest } from '../../controllers/Requests/IRegisterRequest';

export default interface IUserService {
     createUser: (registerRequest: IRegisterRequest) => Promise<ApiServiceResponse>;
     isEmailExists: (email: string) => Promise<ApiServiceResponse>;
     getUserById: (id: number) => Promise<IUser>;
     changePassword: (req: Request) => Promise<ApiServiceResponse>;
}
