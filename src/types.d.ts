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