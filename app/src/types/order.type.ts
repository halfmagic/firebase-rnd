export enum OrderStatus {
  NOT_STARTED = 10,
  IN_PROGRESS = 11,
  ENDED = 12,
}

export type Order = {
  status: number
  user_address: string
}
