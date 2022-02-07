import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useState } from 'react'
// import { query } from 'express'
// import axios from 'axios'
const axios = require('axios');

export default function EditBankForm() {

      const [accountToBeChanged, setAccountToBeChanged] = useState({});
      const [accountToBeChangedID, setAccountToBeChangedID] = useState('');
      const [accountToBeChangedAmount, setAccountToBeChangedAmount] = useState('');
      const [accountToBeChangedType, setAccountToBeChangedType] = useState('');

      const Withdraw = async (accountToBeChangedID, accountToBeChangedAmount) => {

            const acctQuery = 'http://localhost:3001/withdraw/:id';

            // the first argument is the endpoint, the second argument is what you are sending!
            const res = await axios.put(acctQuery, accountToBeChangedID ,accountToBeChangedAmount);    

            console.log(res.data);


      }

      const Deposit = async (accountToBeChangedID, accountToBeChangedAmount) => {

            const acctQuery = 'http://localhost:3001/deposit/:id';

            // the first argument is the endpoint, the second argument is what you are sending!
            const res = await axios.put(acctQuery, accountToBeChangedID ,accountToBeChangedAmount);    

            console.log(res.data);


      }


      const handleChangeID = (e) => {
            setAccountToBeChangedID(e.target.value);

      }

      const handleChangeAmount = (e) => {
            setAccountToBeChangedAmount(e.target.value);

      }

      const handleChangeType = (e) => {
            setAccountToBeChangedType(e.target.value);

      }

      const handleSubmit = (e) => {
            e.preventDefault();
            // console.log('Hooray, you submitted');
            // console.log(`Account Number: ${typedNumber}`);
            // console.log(`Account Type: ${typedType}`);
            // console.log(`Account Name: ${typedName}`);
            // console.log(`Account Balance: ${typedBalance}`);

            // lets save the state of this to be created           
            setAccountToBeChanged({
                  'accountNumber': `${accountToBeChangedID}`,
                  'accountType': `${accountToBeChangedType}`,
                  'accountBalance': `${accountToBeChangedAmount}`
            });

      }

console.log(accountToBeChanged);
// console.log(`Id is : ${accountToBeChangedID}`);
// console.log(`Amount is : ${accountToBeChangedAmount}`);
console.log(`Deposit or Withdrawal : ${accountToBeChangedType}`);

      return (
            <div>
                  <Form>
                        <Form.Label> Edit Your Account </Form.Label>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalID">
                              <Form.Label column sm={2}>
                                    Enter your account's Unique ID
                              </Form.Label>
                              <Col sm={10}>
                                    <Form.Control type="text" placeholder="Account ID" value={accountToBeChangedID} onChange={handleChangeID}/>
                              </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCurrency">
                              <Form.Label column sm={2}>
                                    Enter Deposit/Withdrawal Amount
                              </Form.Label>
                              <Col sm={10}>
                                    <Form.Control type="number" placeholder="Currency Total" value={accountToBeChangedAmount} onChange={handleChangeAmount}/>
                              </Col>
                        </Form.Group>
                        <fieldset>
                              <Form.Group as={Row} className="mb-3">
                                    <Form.Label as="legend" column sm={2}>
                                          Please select weather you are Depositing or Witdrawing.
                                    </Form.Label>
                                    <Col sm={10}>
                                          <Form.Check
                                                type="radio"
                                                label="Deposit"
                                                value={Deposit}
                                                onChange={handleChangeType}
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                          />
                                          <Form.Check
                                                type="radio"
                                                label="Withdrawal"
                                                value={Withdraw}
                                                onChange={handleChangeType}
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                          />

                                    </Col>
                              </Form.Group>
                        </fieldset>


                        <Form.Group as={Row} className="mb-3">
                              <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit" onSubmit={handleSubmit}>Finish Transaction . . .</Button>
                              </Col>
                        </Form.Group>
                  </Form>
            </div>
      )
}
