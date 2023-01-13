export interface Fine {
  amount: string,
  fineType: FineType,
  bookTitle: string

}

export enum FineType {
  DAMAGE = "damage",
  OVERDUE = "overdue"
}
