import {Book} from "./Book";

export interface Member {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  inss: string;
  password: string;
  street: string;
  streetnumber: string;
  postcode: string;
  city: string;
  lendings: Array<Book>;
  fines: number;
  totalPrice: number;
}
