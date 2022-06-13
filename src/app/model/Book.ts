export interface Book {
  isbn: string,
  title: string,
  authorFirstname: string,
  authorLastname: string,
  author: string,
  copies: number,
  price: number,
  arrival: string,
  image: string,
  dueDate: string
  lenderNames: Array<string>,
  lendingId: string
}
