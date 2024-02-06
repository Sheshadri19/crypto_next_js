
export const Endpoint={
    pageEndpoint:{
        getAllAssets:'/v2/assets',
        singleAssets:(id:any)=>`/v2/assets/${id}`,
        markets:'/v2/markets',
        history:(id:any)=>`/v2/assets/${id}/history?interval=d1`,
        marketslug:(id:any)=>`/v2/assets/${id}/markets`,
        exchanged:`/v2/exchanges`,
        exchangeslug:(id:any)=>`/v2/exchanges/${id}`,
        allrate:'/v2/rates',
        ratesingle:(id:any)=>`/v2/rates/${id}`


    }
}
