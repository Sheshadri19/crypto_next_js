export interface exchange {
    data: Daum[]
    timestamp: number
  }
  
  export interface Daum {
    exchangeId: string
    name: string
    rank: string
    percentTotalVolume: string
    volumeUsd: string
    tradingPairs: string
    socket: boolean
    exchangeUrl: string
    updated: number
  }
  