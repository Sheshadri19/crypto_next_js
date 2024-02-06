import { axiosInstance } from '@/Service/AxiosInstance'
import { exchange } from '@/TypeScript/exchangeinterface'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Endpoint } from '../api/Endpoint'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'



const index = () => {
const {isLoading,error,data}=useQuery({
  queryKey:['exchangedata'],
  queryFn:async()=>{
    const data=await axiosInstance.get<exchange>(
      Endpoint.pageEndpoint.exchanged
    )

    console.log("exch",data.data);
    return data.data
    
  }
})

  return (
<>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, bgcolor:'bisque'}} aria-label="simple table">
        <TableHead sx={{bgcolor:'maroon'}}>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">percentTotalVolume</TableCell>
            <TableCell align="right">trading pairs</TableCell>
            <TableCell align="right">exchange url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((row) => (
            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
        <TableCell align="right"> <Link href={`/exchange/${row.exchangeId}`  }>{row.name}</Link></TableCell>
        <TableCell align="right"><Link href={`/exchange/${row.exchangeId}`}>{row.rank}</Link></TableCell>
              <TableCell align="right"><Link href={`/exchange/${row.exchangeId}`}>{row.percentTotalVolume}</Link></TableCell>
              <TableCell align="right"><Link href={`/exchange/${row.exchangeId}`}>{row.tradingPairs}</Link></TableCell>
              <TableCell align="right"><Link href={`/exchange/${row.exchangeId}`}>{row.exchangeUrl}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</>
  )
}

export default index
