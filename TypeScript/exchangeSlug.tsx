export interface exchangesl {
    data: Data
    timestamp: number
  }
  
  export interface Data {
    id: string
    name: string
    rank: string
    percentTotalVolume: string
    volumeUsd: string
    tradingPairs: string
    socket: boolean
    exchangeUrl: string
    updated: number
  }
  