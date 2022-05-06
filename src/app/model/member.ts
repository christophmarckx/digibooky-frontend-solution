import {Book} from "./Book";

export interface Member {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  inss: string;
  password: string;
  street: string;
  streetnumber: string;
  postcode: string;
  city: string;
  lendings: Array<Book>;
  fine: string;
}
