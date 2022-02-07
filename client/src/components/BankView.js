// import '../App.css';
import React from 'react'
import NewBankForm from './NewBankForm'
import EditBankForm from './EditBankForm'
import AllAccounts from './AllAccounts'
// const axios = require('axios');




export default function BankView() {



      return (
            <div>
                  <h3> Welcome to Banky </h3>
                  <br></br>
                  <div className='div'>
                        <AllAccounts />
                  </div>
                  <br></br>
                  <div className='div'>
                        <NewBankForm />
                  </div>
                  <br></br>
                  <div className='div'>
                        <EditBankForm />
                  </div>
            </div>
      )
}
