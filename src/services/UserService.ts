import httpStatus from 'http-status';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import UserDao from '../dao/UserDao';
import IUserService from './contracts/IUserService';
import ResponseHandler from '../helper/ResponseHandler';
import ContactDao from '../dao/ContactDao';
import { roleConstant, userConstant } from '../config/constant';
import { logger } from '../config/logger';
import { IUserContract } from '../models/interfaces/IUserContact';

export default class UserService implements IUserService {
     private userDao: UserDao;

     private contactDao: ContactDao;

     constructor() {
          this.userDao = new UserDao();
          this.contactDao = new ContactDao();
     }

     createUser = async (createUserRequest: IUserContract) => {
          try {
               let message = 'Successfully Registered the account! Please Verify your email.';

               if (await this.userDao.isEmailExists(createUserRequest.email)) {
                    return ResponseHandler.returnError(
                         httpStatus.BAD_REQUEST,
                         'Email already taken'
                    );
               }

               if (createUserRequest.password === undefined) {
                    return ResponseHandler.returnError(
                         httpStatus.BAD_REQUEST,
                         'Password is required!'
                    );
               }

               const userRequest = {
                    email: createUserRequest.email.toLowerCase(),
                    role_id: roleConstant.GUEST,
                    password: bcrypt.hashSync(createUserRequest.password, 8),
                    status: userConstant.STATUS_ACTIVE,
                    email_verified: userConstant.EMAIL_VERIFIED_FALSE,
               };

               let userData = await this.userDao.create(userRequest);

               if (!userData) {
                    message = 'Registration Failed! Please Try again.';

                    return ResponseHandler.returnError(httpStatus.BAD_REQUEST, message);
               }

               const contactRequest = {
                    user_id: userData.dataValues.id,
                    first_name: createUserRequest.first_name,
                    last_name: createUserRequest.last_name,
               };

               await this.contactDao.create(contactRequest);

               userData = userData.toJSON();

               delete userData.password;

               return ResponseHandler.returnSuccess(httpStatus.CREATED, message, userData);
          } catch (e) {
               logger.error(e);

               return ResponseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
          }
     };

     isEmailExists = async (email: string) => {
          const message = 'Email found!';

          if (!(await this.userDao.isEmailExists(email))) {
               return ResponseHandler.returnError(httpStatus.BAD_REQUEST, 'Email not Found!!');
          }

          return ResponseHandler.returnSuccess(httpStatus.OK, message);
     };

     getUserById = async (id: number) => this.userDao.findOneByWhere({ id });

     changePassword = async (req: Request) => {
          try {
               const { password, confirm_password, old_password } = req.body;

               let message = 'Password Successfully Updated!';
               const statusCode = httpStatus.OK;

               if (req.userInfo === undefined) {
                    return ResponseHandler.returnError(
                         httpStatus.UNAUTHORIZED,
                         'Please Authenticate!'
                    );
               }

               let user = await this.userDao.findOneByWhere({ id: req.userInfo.id });

               if (!user) {
                    return ResponseHandler.returnError(httpStatus.NOT_FOUND, 'User Not found!');
               }

               if (password !== confirm_password) {
                    return ResponseHandler.returnError(
                         httpStatus.BAD_REQUEST,
                         'Confirm password not matched'
                    );
               }

               const isPasswordValid = await bcrypt.compare(old_password, user.password);

               user = user.toJSON();

               delete user.password;

               if (!isPasswordValid) {
                    message = 'Wrong old Password!';

                    return ResponseHandler.returnError(httpStatus.BAD_REQUEST, message);
               }

               const updateUser = await this.userDao.updateWhere(
                    { password: bcrypt.hashSync(password, 8) },
                    { uuid: user.uuid }
               );

               if (updateUser) {
                    return ResponseHandler.returnSuccess(
                         httpStatus.OK,
                         'Password updated Successfully!',
                         {}
                    );
               }

               return ResponseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Password Update Failed!'
               );
          } catch (e) {
               console.log(e);
               return ResponseHandler.returnError(
                    httpStatus.BAD_REQUEST,
                    'Password Update Failed!'
               );
          }
     };
}
