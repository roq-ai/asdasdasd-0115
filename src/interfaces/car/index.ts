import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  type: string;
  location: string;
  availability?: boolean;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];

  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  location?: string;
}
