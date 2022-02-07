import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
// import { query } from 'express'
// import axios from 'axios'
const axios = require('axios');

export default function NewBankForm() {


      const [typedNumber, setAcctNumber] = useState('');
      const [typedType, setAcctType] = useState('');
      const [typedName, setAcctName] = useState('');
      const [typedBalance, setAcctBalace] = useState('');
      const [accountToBeCreated, setaccountToBeCreated] = useState({});
      const [createdAccount, setCreatedAccount] = useState({});

      // Lets handle a change in form
      const handleChangeNumber = (e) => {
            setAcctNumber(e.target.value);
      }
      // Lets handle a change in form

      const handleChangeType = (e) => {
            setAcctType(e.target.value);
      }
      // Lets handle a change in form

      const handleChangeName = (e) => {
            setAcctName(e.target.value);
      }
      // Lets handle a change in form

      const handleChangeBalance = (e) => {
            setAcctBalace(e.target.value);
      }

      // Lets handle a submit in form
      const handleSubmit = (e) => {
            e.preventDefault();
            // console.log('Hooray, you submitted');
            // console.log(`Account Number: ${typedNumber}`);
            // console.log(`Account Type: ${typedType}`);
            // console.log(`Account Name: ${typedName}`);
            // console.log(`Account Balance: ${typedBalance}`);

            // lets save the state of this to be created           
            setaccountToBeCreated({
                  'accountNumber': `${typedNumber}`,
                  'accountType': `${typedType}`,
                  'accountName': `${typedName}`,
                  'accountBalance': `${typedBalance}`
            });

            createAccount(accountToBeCreated);

      }

      const createAccount = async (accountToBeCreated) => {

            // TODO: fix client side create account, it creates a blank object instead of the filled body params

            const acctQuery = 'http://localhost:3001/create';

            // the first argument is the endpoint, the second argument is what you are sending!
            const res = await axios.post(acctQuery, accountToBeCreated);    

            setCreatedAccount(res.data);

            console.log(res.data);

      }


      // console.log(accountToBeCreated);
      // console.log(createdAccount);



      return (
            <div>
                  <Form.Label> Create a New Account </Form.Label>
                  <Form>
                        <Form.Group className="f1">
                              <Form.Control
                                    htmlFor='accountName'
                                    id='aNumber'
                                    type="number"
                                    placeholder="Enter Account Number"
                                    value={typedNumber}
                                    onChange={handleChangeNumber}
                              />
                              <Form.Control
                                    htmlFor='accountType'
                                    id='aType'
                                    type="text"
                                    placeholder="(Checkings or Savngs)"
                                    value={typedType}
                                    onChange={handleChangeType}
                              />
                              <Form.Control
                                    htmlFor='accountName'
                                    id='aName'
                                    type="text"
                                    placeholder="Enter Account Name"
                                    value={typedName}
                                    onChange={handleChangeName}
                              />
                              <Form.Control
                                    htmlFor='aNewBalance'
                                    id='balance'
                                    type="number"
                                    placeholder="Enter Starting Balance"
                                    value={typedBalance}
                                    onChange={handleChangeBalance}
                              />
                        </Form.Group>

                        <Button
                              htmlFor='f1'
                              type="submit"
                              // value={accountToBeCreated}
                              onClick={handleSubmit}
                        > Click to Submit
                        </Button>
                  </Form>

                  <h6> New Account Number : {createdAccount.accountNumber} </h6>
                  <h6> New Account Type : {createdAccount.accountType} </h6>
                  <h6> New Account Name : {createdAccount.accountName} </h6>
                  <h6> New Account Starting Balance : {createdAccount.accountBalance} </h6>


            </div>

      )

}
