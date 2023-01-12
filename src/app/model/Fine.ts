export interface Fine {
  amount: number,
  fineType: FineType;
}

export enum FineType {
  DAMAGE = "damage",
  OVERDUE = "overdue"
}
