
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Endpoint } from '../api/Endpoint';
import { axiosInstance } from '@/Service/AxiosInstance';
import { rateall } from '@/TypeScript/rateallinterface';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { singRate } from '@/TypeScript/ratesinginterface';
import { Dialog } from '@mui/material';
import { log } from 'console';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  
  width: 500,
  
  bgcolor: 'lightblue',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};

const index = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['ratedata'],
    queryFn: async () => {
      const responsedata = await axiosInstance.get<rateall>(
        Endpoint.pageEndpoint.allrate
      )
      console.log("rateall", responsedata?.data?.data);
      return responsedata?.data?.data

    }
  })


  // single rate details

  const [singlerate, setSingleRate] = React.useState(null)
  console.log('id', singlerate);


  const { data: rateDetails } = useQuery({
    queryFn: async () => {
      const res = await axiosInstance.get<singRate>(
        Endpoint.pageEndpoint.ratesingle(singlerate)
      )
      console.log("singRate Response ", res.data.data);
      return res?.data?.data
    },
    queryKey: ['singleraa',singlerate ],
    enabled: !!singlerate
  })
  console.log(rateDetails);



  // Modal 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modalFunc = (id: any) => {
    setSingleRate(id)

    handleOpen()
  }
  return (
    <div>
   
            <>
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">currencySymbol</TableCell>
            <TableCell align="right">rateUsd</TableCell>
            <TableCell align="right">type</TableCell>
    
          </TableRow>
        </TableHead> 
        <TableBody>
          {data?.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Button onClick={() => modalFunc(`${row?.id}`)}>{row.id}</Button>
              </TableCell>
              <TableCell align="right"> <Button onClick={() => modalFunc(`${row?.id}`)}>{row.currencySymbol}</Button></TableCell>
              <TableCell align="right"> <Button onClick={() => modalFunc(`${row?.id}`)}>{row.rateUsd}</Button></TableCell>
              <TableCell align="right"> <Button onClick={() => modalFunc(`${row?.id}`)}>{row.type}</Button></TableCell>
         
         
            </TableRow>
            
          ))}
        </TableBody>            

      </Table>
    </TableContainer>
  
            </>
        
      <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} borderRadius={'15%'} >
                  <Typography id="modal-modal-title" variant="h6" component="h2" align='center' fontWeight={'bold'}>
                    Rate details
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:'jusify', bgcolor:'grey'}}>
                <table>
                  <th>
                    <tr>ID  : <td>{rateDetails?.id}</td></tr><hr />
                    <tr>Symbol : <td>{rateDetails?.symbol}</td></tr><hr />
                    <tr>Currency symbol : <td>{rateDetails?.currencySymbol}</td></tr><hr />
                    <tr>Type : <td>{rateDetails?.type}</td></tr>
                    <tr>Rate USD : <td>{rateDetails?.rateUsd}</td></tr>
                  </th>
               
                 
                </table>
                  </Typography>
                </Box>
              </Modal>
     
    </div>
  )
}

export default index
