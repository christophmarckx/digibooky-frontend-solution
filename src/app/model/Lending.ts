import {Book} from "./Book";
import {Lender} from "./Lender";

export interface Lending {
  id: string
  lender: Lender,
  book: Book
  start: string,
  dueDate: string
}
