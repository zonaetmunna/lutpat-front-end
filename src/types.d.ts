
// product interface
interface IProduct {
  _id?: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number;
  store: string;
  createdAt?: string;
  quantity?: number;
};


// auth login interface
export interface IAuthData {
  name: string;
  email: string;
  phone: string;
  _id: string;
  role: string;
  status: string;
  token: string;
}

// types signup data
export interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: string;
  status?: string;
  profileImage?: FileList;
}
export interface LoginData {
  email: string;
  password: string;
}


// store
export interface Store {
  _id: string;
  name: string;
  email: string;
  image: string;
  status: string;
  location: string;
  owner: string;
  __v: number;
}

export interface ResponseData {
  error: boolean;
  data: Store[];
  message: string | null;
  token: string | null;
}

export interface StoreResponse {
  error: boolean;
  data: Store;
  message: string | null;
  token: string | null;
}

export interface StoreDataForm {
  name: string;
  location: string;
  status: string;
}


// category
export interface Category {
  _id?: string;
  name: string;
  _v?: string;
}

export interface ResponseCategories {
  error: boolean;
  data: Store[];
  message: string | null;
  token: string | null;
}

export interface ResponseCategory {
  error: boolean;
  data: Category;
  message: string | null;
  token: string | null;
}

// order
interface IOrder {
  userId: IAuthData._id;
  products: IProduct._id[] | IProduct._id;
  shippingInformation: OrderData;
  totalAmount: Number;
  status?: ["pending", "verified", "delivered", "rejected"];
  createdAt?: Date;
}

interface IOrderTotalData {
  message: string;
  error: boolean;
  data: IOrder[];
}

interface IOrderSingle {
  message: string;
  error: boolean;
  data: IOrder;
}


interface OrderData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  zip: number;
  paymentMethod: string;
}