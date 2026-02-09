
export interface ContactPerson {
  name: string;
  role: string;
  phone?: string;
  email: string;
}

export interface RouteInfo {
  country: string;
  flag: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
