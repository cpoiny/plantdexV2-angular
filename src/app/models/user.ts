export interface User {
  id: number;
  pseudo: string;
  email: string;
  password: string;
  role: number;
  token: string;
}


export interface UserLogin {
  user : User,
  message: string;
}
