import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { query } from 'express'
// import axios from 'axios'
const axios = require('axios');


export default function AllAccounts() {

      const [allAccounts, setAllAccts] = useState([]);

      function createData(id, accountName, accountType, accountBalance) {
            return { id, accountName, accountType, accountBalance };
      }

      const rows = [
            // createData('testid', 'testName', 'testType', 'testBalance'),
            // createData(allAccounts[0], 237, 9.0, 37, 4.3),
            // createData('Eclair', 262, 16.0, 24, 6.0),
            // createData('Cupcake', 305, 3.7, 67, 4.3),
            // createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

      const getAllAccts = async () => {

            const allAccts = 'http://localhost:3001/';

            // the first argument is the endpoint, the second argument is what you are sending!
            const res = await axios.get(allAccts);

            setAllAccts(res.data);

            // console.log(res.data);

      }

      console.log(allAccounts)


      return <div>
            <h6> Show all current accounts </h6>
            <Button
                  htmlFor='f1'
                  type="submit"
                  // value={accountToBeCreated}
                  onClick={getAllAccts}
            > Click to Show All Customers
            </Button>

            {/* {allAccounts.map(acct => <div>Account ID: {acct.accountNumber} Account Name: "{acct.accountName}" Account Type: "{acct.accountType}" Account Balance: {acct.accountBalance}</div>)} */}


            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                              <TableRow>
                                    <TableCell>Account ID</TableCell>
                                    <TableCell align="right">Account #</TableCell>
                                    <TableCell align="right">Account Holder</TableCell>
                                    <TableCell align="right">Type</TableCell>
                                    <TableCell align="right">Balance</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {allAccounts.map((allAccounts) => (
                                    <TableRow
                                          key={allAccounts._id}
                                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                          <TableCell component="th" scope="row">
                                                {allAccounts._id}
                                          </TableCell>
                                          <TableCell align="right">{allAccounts.accountNumber}</TableCell>
                                          <TableCell align="right">{allAccounts.accountName}</TableCell>
                                          <TableCell align="right">{allAccounts.accountType}</TableCell>
                                          <TableCell align="right">${allAccounts.accountBalance}</TableCell>
                                    </TableRow>
                              ))}
                        </TableBody>
                  </Table>
            </TableContainer>

      </div>;
}
