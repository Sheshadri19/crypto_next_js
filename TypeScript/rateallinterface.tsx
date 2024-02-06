export interface rateall {
  data: Daum[]
  timestamp: number
}

export interface Daum {
  id: string
  name: string
  symbol: string
  currencySymbol?: string
  type: string
  rateUsd: string
  exchangeId: string
  rank:string 
  volumeUsd:string
  percentTotalVolume:string

  
}