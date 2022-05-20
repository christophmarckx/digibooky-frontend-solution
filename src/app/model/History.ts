import {Lending} from "./Lending";

export interface History {
  isbn: string,
  title: string,
  author: string,
  authorFirstname: string,
  authorLastname: string,
  copies: string,
  image: string,
  lendinghistory: Array<Lending>,
}
