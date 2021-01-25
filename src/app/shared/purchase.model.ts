export interface MyPurchases {
  id?: number;
  name: string;
  quantity: number;
  status: number;
  
}

export enum MyPurchasesStatus {
  new,
  bought
}

