import { axiosInstance } from "@/Service/AxiosInstance";
import { Root } from "@/TypeScript/coomonallinterface";
import { dataTagSymbol, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router"
import { Endpoint } from "./api/Endpoint";
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import { assetSlug } from "@/TypeScript/assetsluginterface";
import { marketslug } from "@/TypeScript/marketsluginterface";
import { historySlug } from "@/TypeScript/historysluginterface";


const singleAssets=()=>{

    const router=useRouter()

    console.log(router);

    const {slug}=router?.query
    console.log("id",slug)

    // assest single data
    const {isLoading,error,data}=useQuery({
        queryKey:['singleassets',[slug]],
        queryFn:async()=>{
            const res =await axiosInstance.get<assetSlug>(
                Endpoint.pageEndpoint.singleAssets(`${slug}`)
            )

            console.log("singas",res?.data.data);
            return res.data.data
            
        }
    })

// history data slug

const {isPending,error:err,data:his}=useQuery({
    queryKey:['singlehis',[slug]], 
    queryFn:async()=>{
        const hisdata=await axiosInstance.get<historySlug>(
            Endpoint.pageEndpoint.history(`${slug}`)
        )

        console.log("histry slug",hisdata?.data.data);
        return hisdata?.data?.data
        
    }
})

console.log("his",his);


//    market data slug
const {isLoading:load,error:erro,data:mark}=useQuery({
    queryKey:['markets',[slug]],
    queryFn:async()=>{
        const data=await axiosInstance.get<marketslug>(
            Endpoint.pageEndpoint.marketslug(`${slug}`)
        )
       console.log("market slug",data.data.data);
       return data.data.data
    }
})



 
return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
           <Paper elevation={10}>
     <TableContainer >
      <Table sx={{ minWidth: 650, color:'blue'}} aria-label="simple table">
        <TableHead sx={{bgcolor:'cadetblue'}}>
          <TableRow >
            <TableCell>Name ⇅ </TableCell>
            <TableCell align="right" >Price ⇅</TableCell>
            <TableCell align="right">24h▾ Change ⇅ </TableCell>
            <TableCell align="right"> 24h Volume ⇅</TableCell>
            <TableCell align="right">Market Cap ⇅</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
         <TableCell>{data?.name}</TableCell>
            <TableCell align="right" >{data?.priceUsd}</TableCell>
            <TableCell align="right">{data?.changePercent24Hr}</TableCell>
            <TableCell align="right"> {data?.volumeUsd24Hr}</TableCell>
            <TableCell align="right">{data?.marketCapUsd}</TableCell>

            </TableRow>
   
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
        </Grid>
        </Grid>
    </Box>

{/* history slug */}

<Box sx={{ width: '100%',marginTop:'70px' }} >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'maroon'}}>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">PriceUSD</TableCell>
            <TableCell align="right">Time</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {his?.map((row) => (
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row?.date}
              </TableCell>
              <TableCell align="right">{row.priceUsd}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid> 



        {/* Market slug */}
        <Grid item xs={6}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'aqua'}}>
          <TableRow >
            <TableCell align="right" >baseId</TableCell>
            <TableCell align="right">Price USD</TableCell>
            <TableCell align="right">Base Symbol</TableCell>
            <TableCell align="right">Exchange ID</TableCell>
            <TableCell align="right">Volumeused24h</TableCell>
            <TableCell align="right">VolumePercent </TableCell>
         
         
          </TableRow>
        </TableHead>
        <TableBody>
          {mark?.map((ele) => (
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {ele.baseId}
              </TableCell>
              <TableCell align="right">{ele.priceUsd}</TableCell>
              <TableCell align="right">{ele.baseSymbol}</TableCell>
              <TableCell align="right">{ele.exchangeId}</TableCell>
              <TableCell align="right">{ele.volumeUsd24Hr}</TableCell>
              <TableCell align="right">{ele.volumePercent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
     
      </Grid>
    </Box>
    
    </>
)
    
}

export default singleAssets