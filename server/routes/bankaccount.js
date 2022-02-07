var express = require('express');
var router = express.Router();
const bankaccountModel = require('../model/BankAccountSchema');


// Our route test endpoint
router.get('/test', function (req, res, next) {
      res.send('Hello from you bank router, please use /withdraw, /deposit, or /create to proceeed to your designated service !');
      console.log('Hello from you bank router, please use /withdraw, /deposit, or /create to proceeed to your designated service !');

});

//Endpoint for Geting all accounts
router.get('/', function (req, res, next) {

      bankaccountModel.find((error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
                  console.log(data)
            }
      })

});

//Endpoint for Geting one account
router.get('/find/:id', (req, res, next) => {
      bankaccountModel.findById(req.params.id, (error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
                  console.log(data)
            }
      })
});

//Endpoint for Making an account
router.post('/create', function (req, res) {

      try {
            // Take body data and create 
            const data = req.body;
            const newBankaccount = new bankaccountModel(data);
            newBankaccount.save();
            res.status(200).json(newBankaccount);
            console.log(newBankaccount);

      } catch (e) { next(e.message); }

});

//Endpoint for Deposit
router.put('/deposit/:id', (req, res, next) => {
      console.log("Update route called for id: " + req.params.id);
      bankaccountModel.findByIdAndUpdate(req.params.id, {
            // takes the body data and sets it with this command to be sent
            $set: req.body
      }, (error, data) => {
            if (error) {
                  return next(error);
            } else {
                  res.json(data)
                  console.log('Balance updated successfully !')
            }
      })
});

//Endpoint for WITHDRAW
router.put('/withdraw/:id', (req, res, next) => {
      console.log("Update route called for id: " + req.params.id);
      bankaccountModel.findByIdAndUpdate(req.params.id, {
            // takes the body data and sets it with this command to be sent
            $set: req.body
      }, (error, data) => {
            if (error) {
                  return next(error);
            } else {
                  res.json(data)
                  console.log('Balance updated successfully !')
            }
      })
});

// Delete an account // TODO: Fix deete endpoint which currently draws 404s
// router.delete('/delete/:id', (req, res, next) => {
//       console.log("Delete route called for id: " + req.params.id);

//       bankaccountModel.findByIdAndRemove(req.params.id, (error, data) => {
//             if (error) {
//                   return next(error)
//             } else {
//                   res.json(data)
//                   console.log(data)
//             }
//       })
//       });



      module.exports = router;

//Update test 1 FAIL
// router.put('/update/:id', (req, res) => {
//       bankaccountModel.findByIdAndUpdate(
//             (err, result) => {
//                   if (err) {
//                         res.send(err);
//                   } else {
//                         res.send(result);
//                         console.log(results);
//                   }
//             }
//       );
// });

// Update test 2 SUCCESS
// router.put('/update/:id', (req, res, next) => {
//   console.log("Update route called for id: " + req.params.id);
//   bankaccountModel.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data)
//       console.log('Balance updated successfully !')
//     }
//   })
// });

// router.get('/', function(req, res, next) {

//   res.send('');
//   console.log('');

// });