// import '../App.css';
import React from 'react'
import NewBankForm from './NewBankForm'
import EditBankForm from './EditBankForm'
// const axios = require('axios');




export default function BankView() {



      return (
            <div>
                  <h6> Whole Bank View </h6>
                  <div className='div'>
                        {/* <NewBankForm /> */}
                  </div>
                  <div className='div'>
                        <EditBankForm />
                  </div>
            </div>
      )
}
