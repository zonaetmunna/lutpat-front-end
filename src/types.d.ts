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

// auth interface
/* interface IUserData {
  name: string;
  email: string;
  id: string;
  role: string;
  status: string;
  token: string;
}; */
// types signup data
interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: number
}
interface loginData {
  email: string;
  password: string;
}
