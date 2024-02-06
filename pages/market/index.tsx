

import { axiosInstance } from '@/Service/AxiosInstance'
import { Root } from '@/TypeScript/coomonallinterface'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Endpoint } from '../api/Endpoint'
import { marketinter } from '@/TypeScript/marketinterface'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const markets = () => {

    const {isLoading,error,data}=useQuery({
        queryKey:['marketsdata'],
        queryFn:async()=>{
            const data=await axiosInstance.get<marketinter>(
                Endpoint.pageEndpoint.markets
            )

            console.log("markall",data.data.data);
            return data.data.data
            
        }
    })



  return (
 <>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,bgcolor:'lightgray' }} aria-label="simple table">
        <TableHead sx={{bgcolor:'burlywood'}}>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Exchange id </TableCell>
            <TableCell align="right">BaseID</TableCell>
            <TableCell align="right">BaseSymbol</TableCell>
            <TableCell align="right">PriceUSD</TableCell>
            <TableCell align="right">tradesCount 24hr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
          
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rank}
              </TableCell>
              <TableCell align="right">{row.exchangeId}</TableCell>
              <TableCell align="right">{row.baseId}</TableCell>
              <TableCell align="right">{row.baseSymbol}</TableCell>
              <TableCell align="right">{row.priceUsd}</TableCell>
             <TableCell align="right">{row.tradesCount24Hr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
 </>
  )
}

export default markets
