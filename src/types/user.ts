// types/user.ts or inside the same file
export interface IUserAddress {
    phone_number?: string;
    country?: string;
    district_name?: string;
    city?: string;
    street_address?: string;
  }
  
  export interface IUser {
    avatar: string;
    username: string;
    email: string;
    role: string;
    gender?: string;
    isActive: boolean;
    address?: IUserAddress;
  }
  