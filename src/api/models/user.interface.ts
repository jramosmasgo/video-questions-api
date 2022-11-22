export interface IUser {
  _id?: string;
  firebaseId: string;
  name: string;
  email: string;
  loginType: string;
  verified: boolean;
}
