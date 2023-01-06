import {Book} from "./Book";
import {Fine} from "./Fine";

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
  lendings: Book[];
  fines: Fine[];
  totalPrice: number;
}
