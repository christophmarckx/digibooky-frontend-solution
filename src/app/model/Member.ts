import {Fine} from "./Fine";
import {Lending} from "./Lending";

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
  lendings: Lending[];
  fines: Fine[];
  totalPrice: string;
}
