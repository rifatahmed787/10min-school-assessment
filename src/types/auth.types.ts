
export interface IAddress {
  id: string;
  street_address: string;
  city: string;
  postal_code: string;
  country: string;
  phone_number: string;
  district_name: string;
}
export interface IUser {
  id?: string;
  email?: string;
  username: string;
  hasVerifiedEmail?: boolean;
  role?: "SUPERADMIN"|"ADMIN" | "USER";
  gender?:"Male"|"Female"|"Others";
  avatar: string;
  phoneNumber?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
  address:IAddress;
  isActive:boolean;
}

//auth slice types
export interface IAuthState {
  isLoggedIn: boolean;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

/*auth register type*/
// user register types
export interface IRegister {
  username: string;
  email: string;
  avatar: string;
  password: string;
  gender:"Male" |"Female" | "Others" ;
  role:"ADMIN"|"SUPERADMIN";
}

export interface IRegisterData {
  user_details?: IUser | null;
  email: string | null;
  error: string;
  accessToken?: string | null;
  refreshToken?: string | null;
}
export interface IRegisterRes {
  status?: boolean;
  message: string;
  data?: IRegisterData;
  refreshToken?: string | null;
}

/* login api start */
export interface ILoginArgs {
  email: string;
  password: string;
  deviceToken: string | null;
}

export interface ILoginData {
  user_details?: IUser | null;
  accessToken?: string | null;
  refreshToken?: string | null;
}

export interface ILoginRes {
  success:boolean;
  message: string;
  data?: ILoginData;
}

export interface ILoginAction {
  type: string;
  payload: {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  };
}

export interface IGetUserDetailsRes {
  id: string;
  userName: string;
  email: string;
  avatar: string;
}


