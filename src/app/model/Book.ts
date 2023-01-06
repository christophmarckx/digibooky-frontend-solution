export interface Book {
  isbn: string,
  title: string,
  authorFirstname: string,
  authorLastname: string,
  copies: number,
  price: number,
  arrival: string,
  image: string,
  lenderNames: string[],
  author: string
}
