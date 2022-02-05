let mongoose = require('mongoose');

let BankAccountSchema = mongoose.Schema;



let bankaccount = new BankAccountSchema(

      {
            //this is how you set the schema of how your data will be represented beofre being made in the router
            accountNumber: {
                  type: Number,
                  unique: true // `accountNumber` must be unique
            },
            accountType: String,
            accountName: String,
            accountBalance: Number

      },
      { timestamps: true }


);



module.exports = mongoose.model('MERNAssessment', bankaccount);