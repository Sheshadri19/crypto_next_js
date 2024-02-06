



import { axiosInstance } from '@/Service/AxiosInstance'
import { exchangesl } from '@/TypeScript/exchangeSlug'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import { Endpoint } from '../api/Endpoint'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const singleExchange = () => {

const router=useRouter()

console.log("router",router);


const {slug}=router?.query

console.log("exslug",slug);


const {isLoading,error,data}=useQuery({
    queryKey:['singlexch',[slug]],
    queryFn:async()=>{
        const data=await axiosInstance.get<exchangesl>(
            Endpoint.pageEndpoint.exchangeslug(`${slug}`)
        )

        console.log("single exch",data.data);
        return data.data
        
    }
    
})


  return (
 <>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor:'bisque'}} aria-label="simple table">
        <TableHead sx={{bgcolor:'maroon'}}>
          <TableRow>
     
            <TableCell align="right">Exchange url</TableCell>
            <TableCell align="right">percentTotalVolume</TableCell>
            <TableCell align="right">trading pairs</TableCell>
            <TableCell align="right">Volume USD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
       {/* <TableCell align="right">{data?.}</TableCell> */}
              <TableCell align="right">{data?.data.exchangeUrl}</TableCell>
              <TableCell align="right">{data?.data.percentTotalVolume}</TableCell>
              <TableCell align="right">{data?.data?.tradingPairs}</TableCell>
              <TableCell align="right">{data?.data?.volumeUsd}</TableCell>
            </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
 
 </>
  )
}

export default singleExchange
