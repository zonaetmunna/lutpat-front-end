// product interface
interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
};

// auth login interface
export interface IAuthData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}

// types signup data
export interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: number
}
export interface LoginData {
  email: string;
  password: string;
}
