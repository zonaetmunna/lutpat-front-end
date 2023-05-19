// --------------products--------------//
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

interface ApiResponseData {
  data: IProduct[];
  message: string;
  error: boolean;
}

interface ApiResponseSingle {
  data: IProduct;
  message: string;
  error: boolean;
}

interface GetProductsQueryParams {
  category?: Category | string;
  search?: string;
  page?: number;
  limit?: number;
}

// ------------------account-------------//

interface authInitState {
  user: IAuthData | null;
  isLoading: true | false,
  isError: true | false,
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
};

// auth login interface
export interface IAuthData {
  _id: string;
  name: string;
  email: string;
  phone: string;
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


// ---------------store or shop--------------//
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


// --------------category--------------//
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


//-------------cart------------//

interface ICartState {
  cart: IProduct[];
  shippingOption: string;
  shippingCost: number;
  discountCode: string;
  subtotal: number;
  total: number;
  billingAddress: IBillingAddress
}

interface IBillingAddress {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  zip?: number;
}


// ----------wishlist-------//
interface IWishlistState {
  wishlist: IProduct[];
}


// ---------order-------------//

/* interface IOrder {
  userId?: IAuthData._id;
  products?: IProduct._id[] | IProduct._id;
  shippingInformation?: OrderData;
  totalAmount?: Number;
  status?: ["pending", "verified", "delivered", "rejected"];
  createdAt?: Date;
} */

interface IOrderTotalData {
  message?: string;
  error?: boolean;
  data?: PaymentOrder[];
}

interface IOrderSingle {
  message?: string;
  error?: boolean;
  data?: PaymentOrder;
}


// -------------------
interface OrderProduct {
  productId: string;
  quantity: number;
}

interface PaymentInfo {
  method: string;
  stripePayment: {
    transactionId: string;
    status: string;
  };
  bkashPayment?: {
    transactionId: string;
    status: string;
  };
}

interface PaymentOrder {
  _id?: string;
  userId?: string;
  products: OrderProduct[];
  billingAddress: IBillingAddress;
  status?: string;
  totalAmount: number;
  paymentInfo: PaymentInfo;
}

