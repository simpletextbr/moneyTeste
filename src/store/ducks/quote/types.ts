export enum QuoteTypes {
  LOAD_REQUEST = '@quote/LOAD_REQUEST',
  LOAD_SUCESS = '@quote/LOAD_SUCESS',
  LOAD_FAILURE = '@quote/LOAD_FAILURE',
  ADD_FAVORITE = '@quote/ADD_FAVORITE',
}

export interface IIntradayPrices{
  minute: string,
  average: number
}

export interface IQuote{
  symbol: string
  companyName: string
  openTime: number,
  open: number,
  closeTime: number,
  close: number,
  latestPrice: number
  change: number,
  changePercent: number,
  logotipo: string,
  prices: IIntradayPrices[],
}

export interface QuoteState {
 readonly data: IQuote[];
 readonly load: boolean;
 readonly error: boolean;
}

