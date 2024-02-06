import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, Modal, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/Service/AxiosInstance";
import { Root } from "@/TypeScript/coomonallinterface";
import { Endpoint } from "./api/Endpoint";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const {isLoading,error,data}=useQuery({
  queryKey:['Assets'],
  queryFn:async()=>{
    const data=await axiosInstance.get<Root>(
      Endpoint.pageEndpoint.getAllAssets
    )
    console.log("allAss", data.data);

    return data.data
    
  }
})





  return (
    <>
    <Paper elevation={10}>
     <TableContainer >
      <Table sx={{ minWidth: 650, color:'blue'}} aria-label="simple table">
        <TableHead style={{color:'blue'}} >
          <TableRow >
            <TableCell>Name ⇅ </TableCell>
            <TableCell align="right" >Price ⇅</TableCell>
            <TableCell align="right">24h▾ Change ⇅ </TableCell>
            <TableCell align="right"> 24h Volume ⇅</TableCell>
            <TableCell align="right">Market Cap ⇅</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((item,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
         <TableCell><Link href={`/${item.id}`} style={{textDecoration:'none'}}>{item.name}</Link>  </TableCell>
            <TableCell align="right" ><Link href={`/${item.id}`} style={{textDecoration:'none'}}>{item.priceUsd}</Link></TableCell>
            <TableCell align="right"><Link href={`/${item.id}`} style={{textDecoration:'none'}}>{item.changePercent24Hr}</Link></TableCell>
            <TableCell align="right"> <Link href={`/${item.id}`} style={{textDecoration:'none'}}>{item.volumeUsd24Hr}</Link></TableCell>
            <TableCell align="right"><Link href={`/${item.id}`} style={{textDecoration:'none'}}>{item.marketCapUsd}</Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </>
  );
}
